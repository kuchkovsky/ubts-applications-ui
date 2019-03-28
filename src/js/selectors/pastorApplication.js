export const getStudentName = state => state.getIn(['pastorApplication', 'studentName']);

export const getInitialValues = state => state.getIn(['pastorApplication', 'pastorFeedback']);

export const getUpload = state => state.getIn(['pastorApplication', 'upload']).toJS();

export const getShowUploadSuccessAlert = state => state.getIn(['pastorApplication', 'showUploadSuccessAlert']);
