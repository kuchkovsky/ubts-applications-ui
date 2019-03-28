import { createAction } from 'redux-actions';
import axios from 'axios';
import history from '../utils/history';
import { scrollToBottom } from '../utils/misc';
import { STUDENTS, FRIEND_FEEDBACK, FULL_NAME } from '../utils/apiEndpoints';
import { HOME } from '../utils/routes';
import { churchManagementRelationship } from '../schemas/friendApplication';
import { pipe } from '../utils/functions';

export const FRIEND_APPLICATION_STUDENT_NAME_LOADED = 'FRIEND_APPLICATION_STUDENT_NAME_LOADED';
export const studentNameLoaded = createAction(FRIEND_APPLICATION_STUDENT_NAME_LOADED);

export const FRIEND_APPLICATION_UPLOADING = 'FRIEND_APPLICATION_UPLOADING';
export const applicationUploading = createAction(FRIEND_APPLICATION_UPLOADING);

export const FRIEND_APPLICATION_UPLOADED = 'FRIEND_APPLICATION_UPLOADED';
export const applicationUploaded = createAction(FRIEND_APPLICATION_UPLOADED);

export const FRIEND_APPLICATION_UPLOAD_ERROR = 'FRIEND_APPLICATION_UPLOAD_ERROR';
export const applicationUploadError = createAction(FRIEND_APPLICATION_UPLOAD_ERROR);

export const FRIEND_APPLICATION_SHOW_UPLOAD_SUCCESS_ALERT = 'FRIEND_APPLICATION_SHOW_UPLOAD_SUCCESS_ALERT';
export const showUploadSuccessAlert = createAction(
  FRIEND_APPLICATION_SHOW_UPLOAD_SUCCESS_ALERT,
);

export const FRIEND_APPLICATION_HIDE_UPLOAD_SUCCESS_ALERT = 'FRIEND_APPLICATION_HIDE_UPLOAD_SUCCESS_ALERT';
export const hideUploadSuccessAlert = createAction(
  FRIEND_APPLICATION_HIDE_UPLOAD_SUCCESS_ALERT,
);

const filterChurchManagementRelationship = friendFeedback =>
  !friendFeedback.get('involvedInChurch') ? (
    friendFeedback.delete('churchManagementRelationship')
  ) : friendFeedback;

const filterOtherChurchManagementRelationship = friendFeedback =>
  friendFeedback.update('churchManagementRelationship', value => value === churchManagementRelationship.other ? (
    friendFeedback.get('otherChurchManagementRelationship')
  ) : value)
    .delete('otherChurchManagementRelationship');

const filterUnusedValues = friendFeedback => pipe(
  filterChurchManagementRelationship,
  filterOtherChurchManagementRelationship,
)(friendFeedback);

export const fetchStudentName = studentId =>
  dispatch =>
    axios.get(`${STUDENTS}/${studentId}/${FULL_NAME}`)
      .then(response => dispatch(studentNameLoaded(response.data.fullName)))
      .catch(error => {
        const status = error.response && error.response.status;
        if (status === 404) {
          history.push(HOME);
          return;
        }
        setTimeout(fetchStudentName(studentId), 1000);
      });

export const uploadApplication = (friendFeedback, studentId) =>
  dispatch => {
    scrollToBottom();
    dispatch(applicationUploading(friendFeedback));
    axios.post(`${STUDENTS}/${studentId}/${FRIEND_FEEDBACK}`, filterUnusedValues(friendFeedback))
      .then(() => {
        dispatch(applicationUploaded());
        dispatch(showUploadSuccessAlert());
      })
      .catch(error => {
        const dispatchErrorMessage = message => dispatch(applicationUploadError(message));
        if (error.response.status === 409) {
          dispatchErrorMessage('Анкета друга вже заповнена для даного абітурієнта');
        } else {
          dispatchErrorMessage(`Не вдалося надіслати дані: ${error.message}`);
        }
      });
  };
