import { anyOf } from '../utils/functions';

export const getStudents = state => state.getIn(['studentList', 'students']);

export const getYears = state => state.getIn(['studentList', 'years']);

export const getPrograms = state => state.getIn(['studentList', 'programs']);

export const getEmptyList = state => state.getIn(['root', 'contentLoad', 'empty']);

export const getSearchQuery = state => state.getIn(['studentList', 'searchQuery']);

export const getSelectedYears = state => state.getIn(['studentList', 'selectedYears']);

export const getSelectedTab = state => state.getIn(['studentList', 'selectedTab']);

const includesLowerCased = (string, query) => (string && string.toLowerCase().includes(query));

const includesName = (student, query) => includesLowerCased(student.get('name'), query);

const includesProgramName = (student, query) => includesLowerCased(student.getIn(['program', 'name']), query);

const includesProgramInfo = (student, query) => includesLowerCased(student.getIn(['program', 'info']), query);

const getEntryYear = student => student.get('entryYear');

export const getFilteredStudents = state => {
  const students = getStudents(state);
  const query = getSearchQuery(state).toLowerCase();
  const selectedYears = getSelectedYears(state);
  return students
    .filter(student => selectedYears.includes(getEntryYear(student)))
    .filter(student => anyOf(
      includesName,
      includesProgramName,
      includesProgramInfo,
    )(student, query));
};

export const getDeleteAlert = state => state.getIn(['studentList', 'deleteAlert']);

export const getDeleteErrorMessage = state => state.getIn(['studentList', 'deleteErrorMessage']);
