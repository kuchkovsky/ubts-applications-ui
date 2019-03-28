import { createAction } from 'redux-actions';
import axios from 'axios';
import { STUDENTS, YEARS, PROGRAMS } from '../utils/apiEndpoints';
import { loadMainContent } from './index';

export const STUDENT_LIST_STUDENTS_LOADED = 'STUDENT_LIST_STUDENTS_LOADED';
export const studentsLoaded = createAction(STUDENT_LIST_STUDENTS_LOADED);

export const STUDENT_LIST_YEARS_LOADED = 'STUDENT_LIST_YEARS_LOADED';
export const yearsLoaded = createAction(STUDENT_LIST_YEARS_LOADED);

export const STUDENT_LIST_PROGRAMS_LOADED = 'STUDENT_LIST_PROGRAMS_LOADED';
export const programsLoaded = createAction(STUDENT_LIST_PROGRAMS_LOADED);

export const STUDENT_LIST_CHANGE_SEARCH_QUERY = 'STUDENT_LIST_CHANGE_SEARCH_QUERY';
export const changeSearchQuery = createAction(STUDENT_LIST_CHANGE_SEARCH_QUERY);

export const STUDENT_LIST_CHECK_SELECTED_YEAR = 'STUDENT_LIST_CHECK_SELECTED_YEAR';
export const checkSelectedYear = createAction(STUDENT_LIST_CHECK_SELECTED_YEAR);

export const STUDENT_LIST_CHANGE_SELECTED_TAB = 'STUDENT_LIST_CHANGE_SELECTED_TAB';
export const changeSelectedTab = createAction(STUDENT_LIST_CHANGE_SELECTED_TAB);

export const STUDENT_LIST_SHOW_DELETE_ALERT = 'STUDENT_LIST_SHOW_DELETE_ALERT';
export const showDeleteAlert = createAction(STUDENT_LIST_SHOW_DELETE_ALERT);

export const STUDENT_LIST_HIDE_DELETE_ALERT = 'STUDENT_LIST_HIDE_DELETE_ALERT';
export const hideDeleteAlert = createAction(STUDENT_LIST_HIDE_DELETE_ALERT);

export const STUDENT_LIST_REMOVE_STUDENT = 'STUDENT_LIST_REMOVE_STUDENT';
export const removeStudentFromList = createAction(STUDENT_LIST_REMOVE_STUDENT);

export const STUDENT_LIST_TOGGLE_DELETE_ERROR_MESSAGE = 'STUDENT_LIST_TOGGLE_DELETE_ERROR_MESSAGE';
export const toggleDeleteErrorMessage = createAction(STUDENT_LIST_TOGGLE_DELETE_ERROR_MESSAGE);

export const loadStudents = () =>
  dispatch =>
    dispatch(loadMainContent(STUDENTS, studentsLoaded));

export const loadYears = () =>
  dispatch =>
    dispatch(loadMainContent(YEARS, yearsLoaded, true));

export const loadPrograms = () =>
  dispatch =>
    dispatch(loadMainContent(PROGRAMS, programsLoaded, true));

export const deleteStudent = id =>
  dispatch =>
    axios.delete(`${STUDENTS}/${id}`)
      .then(() => dispatch(removeStudentFromList(id)))
      .catch(() => dispatch(toggleDeleteErrorMessage(true)));
