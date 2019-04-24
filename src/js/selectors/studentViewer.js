export const getStudent = state => state.getIn(['studentViewer', 'student']);

export const getStudentPhoto = state => state.getIn(['studentViewer', 'studentPhoto']);

export const getFileDialogOpened = state => state.getIn(['studentViewer', 'fileDialogOpened']);
