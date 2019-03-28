export const getStudentName = state => state.getIn(['friendApplication', 'studentName']);

export const getInitialValues = state => state.getIn(['friendApplication', 'friendFeedback']);

export const getUpload = state => state.getIn(['friendApplication', 'upload']).toJS();

export const getShowUploadSuccessAlert = state => state.getIn(['friendApplication', 'showUploadSuccessAlert']);
