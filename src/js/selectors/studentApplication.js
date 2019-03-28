export const getInitialValues = state => state.getIn(['studentApplication', 'student']);

export const getUpload = state => state.getIn(['studentApplication', 'upload']).toJS();

export const getShowUploadSuccessAlert = state => state.getIn(['studentApplication', 'showUploadSuccessAlert']);

export const getStudentId = state => state.getIn(['studentApplication', 'uuid']);
