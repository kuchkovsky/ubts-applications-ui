import { fromJS } from 'immutable';
import * as actions from '../actions/studentViewer';

const initialState = fromJS({
  student: undefined,
  studentPhoto: undefined,
  fileDialogOpened: false,
});

const studentViewerReducer = (state = initialState, action) => {
  switch (action.type) {
  case actions.STUDENT_VIEWER_STUDENT_LOADED:
    return state.set('student', fromJS(action.payload));

  case actions.STUDENT_VIEWER_RESET_STUDENT_PHOTO:
    return state.set('studentPhoto', '');

  case actions.STUDENT_VIEWER_STUDENT_PHOTO_LOADED:
    return state.set('studentPhoto', action.payload);

  case actions.STUDENT_VIEWER_OPEN_FILE_DOWNLOAD_DIALOG:
    return state.set('fileDialogOpened', true);

  case actions.STUDENT_VIEWER_CLOSE_FILE_DOWNLOAD_DIALOG:
    return state.set('fileDialogOpened', false);

  default:
    return state;
  }
};

export default studentViewerReducer;
