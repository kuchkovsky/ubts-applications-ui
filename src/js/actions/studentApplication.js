import { createAction } from 'redux-actions';
import axios from 'axios';
import { STUDENTS } from '../utils/apiEndpoints';
import { maritalStatus, churchMinistryType, howFindOut } from '../schemas/studentApplication';
import { pipe } from '../utils/functions';
import { formatDate, formatYear } from '../utils/apiFormats';
import { scrollToBottom } from '../utils/misc';

export const STUDENT_APPLICATION_RESET = 'STUDENT_APPLICATION_RESET';
export const resetApplication = createAction(STUDENT_APPLICATION_RESET);

export const STUDENT_APPLICATION_UPLOADING = 'STUDENT_APPLICATION_UPLOADING';
export const applicationUploading = createAction(STUDENT_APPLICATION_UPLOADING);

export const STUDENT_APPLICATION_UPLOADED = 'STUDENT_APPLICATION_UPLOADED';
export const applicationUploaded = createAction(STUDENT_APPLICATION_UPLOADED);

export const STUDENT_APPLICATION_UPLOAD_ERROR = 'STUDENT_APPLICATION_UPLOAD_ERROR';
export const applicationUploadError = createAction(STUDENT_APPLICATION_UPLOAD_ERROR);

export const STUDENT_APPLICATION_SHOW_UPLOAD_SUCCESS_ALERT = 'STUDENT_APPLICATION_SHOW_UPLOAD_SUCCESS_ALERT';
export const showUploadSuccessAlert = createAction(
  STUDENT_APPLICATION_SHOW_UPLOAD_SUCCESS_ALERT,
);

export const STUDENT_APPLICATION_HIDE_UPLOAD_SUCCESS_ALERT = 'STUDENT_APPLICATION_HIDE_UPLOAD_SUCCESS_ALERT';
export const hideUploadSuccessAlert = createAction(
  STUDENT_APPLICATION_HIDE_UPLOAD_SUCCESS_ALERT,
);

const formatDates = student =>
  student.update('birthDate', formatDate)
    .updateIn(['maritalData', 'marriageDate'], formatDate)
    .updateIn(['churchMinistry', 'repentanceDate'], formatYear)
    .updateIn(['churchMinistry', 'baptismDate'], formatYear)
    .updateIn(['churchMinistry', 'ordinationDate'], formatYear);

const filterMaritalData = student => {
  const filterSpouseData = s =>
    s.getIn(['maritalData', 'status']) !== maritalStatus.married ? (
      s.update('maritalData',
        maritalData => maritalData.filter((_, key) => key === 'status'))
    ) : s;
  const filterSpouseChurchMinistry = s =>
    !s.getIn(['maritalData', 'isSpouseChurchMember']) ? (
      s.deleteIn(['maritalData', 'spouseChurchMinistry'])
    ) : s;
  return pipe(filterSpouseData, filterSpouseChurchMinistry)(student);
};

const filterChurchData = student => {
  const filterBlocks = s =>
    !s.get('churchMember') ? (
      s.delete('churchData')
        .delete('churchMinistry')
    ) : s;
  const filterOtherMinistryType = s =>
    s.getIn(['churchMinistry', 'type']) === churchMinistryType.other ? (
      s.setIn(['churchMinistry', 'type'], s.getIn(['churchMinistry', 'otherType']))
        .deleteIn(['churchMinistry', 'otherType'])
    ) : s;
  const filterOrdinationDate = s =>
    !s.getIn(['churchMinistry', 'ordained']) ? (
      s.deleteIn(['churchMinistry', 'ordinationDate'])
    ) : s;
  return pipe(filterBlocks, filterOtherMinistryType, filterOrdinationDate)(student);
};

const filterJob = student => !student.get('hasJob') ? student.delete('job') : student;

const filterOtherHowFindOut = student =>
  student.update('howFindOut', value => value === howFindOut.other ? (
    student.get('otherHowFindOut')
  ) : value)
    .delete('otherHowFindOut');

const filterUnusedValues = student => pipe(
  filterMaritalData,
  filterChurchData,
  filterJob,
  filterOtherHowFindOut,
)(student);

const formToDto = student => pipe(formatDates, filterUnusedValues)(student);

export const uploadApplication = student =>
  dispatch => {
    scrollToBottom();
    dispatch(applicationUploading(student));
    axios.post(STUDENTS, formToDto(student))
      .then(response => {
        dispatch(applicationUploaded());
        dispatch(showUploadSuccessAlert(response.data.uuid));
      })
      .catch(error => {
        const dispatchErrorMessage = message => dispatch(applicationUploadError(message));
        if (error.response.status === 409) {
          dispatchErrorMessage('Користувач з даним іменем вже зареєстрований в системі!');
        } else {
          dispatchErrorMessage(`Не вдалося надіслати дані: ${error.message}`);
        }
      });
  };
