import { createAction } from 'redux-actions';
import axios from 'axios';
import history from '../utils/history';
import { scrollToBottom } from '../utils/misc';
import { STUDENTS, PASTOR_FEEDBACK, FULL_NAME } from '../utils/apiEndpoints';
import { HOME } from '../utils/routes';
import {
  churchParticipation,
  spiritualInfluence,
  churchManagementRelationship,
} from '../schemas/pastorApplication';
import { pipe } from '../utils/functions';

export const PASTOR_APPLICATION_STUDENT_NAME_LOADED = 'PASTOR_APPLICATION_STUDENT_NAME_LOADED';
export const studentNameLoaded = createAction(PASTOR_APPLICATION_STUDENT_NAME_LOADED);

export const PASTOR_APPLICATION_UPLOADING = 'PASTOR_APPLICATION_UPLOADING';
export const applicationUploading = createAction(PASTOR_APPLICATION_UPLOADING);

export const PASTOR_APPLICATION_UPLOADED = 'PASTOR_APPLICATION_UPLOADED';
export const applicationUploaded = createAction(PASTOR_APPLICATION_UPLOADED);

export const PASTOR_APPLICATION_UPLOAD_ERROR = 'PASTOR_APPLICATION_UPLOAD_ERROR';
export const applicationUploadError = createAction(PASTOR_APPLICATION_UPLOAD_ERROR);

export const PASTOR_APPLICATION_SHOW_UPLOAD_SUCCESS_ALERT = 'PASTOR_APPLICATION_SHOW_UPLOAD_SUCCESS_ALERT';
export const showUploadSuccessAlert = createAction(
  PASTOR_APPLICATION_SHOW_UPLOAD_SUCCESS_ALERT,
);

export const PASTOR_APPLICATION_HIDE_UPLOAD_SUCCESS_ALERT = 'PASTOR_APPLICATION_HIDE_UPLOAD_SUCCESS_ALERT';
export const hideUploadSuccessAlert = createAction(
  PASTOR_APPLICATION_HIDE_UPLOAD_SUCCESS_ALERT,
);

const filterOtherChurchParticipation = pastorFeedback =>
  pastorFeedback.update('churchParticipationLevel', value => value === churchParticipation.other ? (
    pastorFeedback.get('otherChurchParticipation')
  ) : value)
    .delete('otherChurchParticipation');

const filterOtherSpiritualInfluence = pastorFeedback =>
  pastorFeedback.update('spiritualInfluence', value => value === spiritualInfluence.other ? (
    pastorFeedback.get('otherSpiritualInfluence')
  ) : value)
    .delete('otherSpiritualInfluence');

const filterOtherChurchManagementRelationship = pastorFeedback =>
  pastorFeedback.update('churchManagementRelationship', value => value === churchManagementRelationship.other ? (
    pastorFeedback.get('otherChurchManagementRelationship')
  ) : value)
    .delete('otherChurchManagementRelationship');

const filterUnusedValues = pastorFeedback => pipe(
  filterOtherChurchParticipation,
  filterOtherSpiritualInfluence,
  filterOtherChurchManagementRelationship,
)(pastorFeedback);

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

export const uploadApplication = (pastorFeedback, studentId) =>
  dispatch => {
    scrollToBottom();
    dispatch(applicationUploading(pastorFeedback));
    axios.post(`${STUDENTS}/${studentId}/${PASTOR_FEEDBACK}`, filterUnusedValues(pastorFeedback))
      .then(() => {
        dispatch(applicationUploaded());
        dispatch(showUploadSuccessAlert());
      })
      .catch(error => {
        const dispatchErrorMessage = message => dispatch(applicationUploadError(message));
        if (error.response.status === 409) {
          dispatchErrorMessage('Анкета пастора вже заповнена для даного абітурієнта');
        } else {
          dispatchErrorMessage(`Не вдалося надіслати дані: ${error.message}`);
        }
      });
  };
