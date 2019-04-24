import { fromJS } from 'immutable';
import dayjs from 'dayjs';
import * as actions from '../actions/studentList';

const today = dayjs();

const initialState = fromJS({
  students: [],
  years: [],
  programs: [],
  searchQuery: '',
  selectedYears: [today.year()],
  selectedTab: 0,
  deleteAlert: {
    show: false,
    studentId: undefined,
  },
  deleteErrorMessage: false,
  exportStatus: {
    pending: false,
    error: false,
  },
  exportDialogOpened: false,
});

const studentListReducer = (state = initialState, action) => {
  switch (action.type) {
  case actions.STUDENT_LIST_STUDENTS_LOADED:
    return state.set('students', fromJS(action.payload));

  case actions.STUDENT_LIST_YEARS_LOADED:
    return state.set('years', fromJS(action.payload));

  case actions.STUDENT_LIST_PROGRAMS_LOADED:
    return state.set('programs', fromJS(action.payload));

  case actions.STUDENT_LIST_CHANGE_SEARCH_QUERY:
    return state.set('searchQuery', action.payload);

  case actions.STUDENT_LIST_CHECK_SELECTED_YEAR:
    return state.update('selectedYears', years => action.payload.checked ? (
      years.push(action.payload.year)
    ) : (
      years.filter(year => year !== action.payload.year)
    ));

  case actions.STUDENT_LIST_CHANGE_SELECTED_TAB:
    return state.set('selectedTab', action.payload);

  case actions.STUDENT_LIST_SHOW_DELETE_ALERT:
    return state.set('deleteAlert', fromJS({ show: true, studentId: action.payload }));

  case actions.STUDENT_LIST_HIDE_DELETE_ALERT:
    return state.set('deleteAlert', initialState.get('deleteAlert'));

  case actions.STUDENT_LIST_REMOVE_STUDENT:
    return state.update('students', list => list.filter(student => student.get('id') !== action.payload));

  case actions.STUDENT_LIST_TOGGLE_DELETE_ERROR_MESSAGE:
    return state.set('deleteErrorMessage', action.payload);

  case actions.STUDENT_LIST_OPEN_EXPORT_DIALOG:
    return state.set('exportDialogOpened', true);

  case actions.STUDENT_LIST_CLOSE_EXPORT_DIALOG:
    return state.set('exportDialogOpened', false);

  case actions.STUDENT_LIST_EXPORT_PENDING:
    return state.mergeIn(['exportStatus'], fromJS({ pending: true, error: false }));

  case actions.STUDENT_LIST_EXPORT_SUCCESS:
    return state.mergeIn(['exportStatus'], fromJS({ pending: false, error: false }));

  case actions.STUDENT_LIST_EXPORT_ERROR:
    return state.mergeIn(['exportStatus'], fromJS({ pending: false, error: true }));

  default:
    return state;
  }
};

export default studentListReducer;
