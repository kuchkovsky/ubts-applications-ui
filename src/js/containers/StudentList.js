import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import StudentList from '../components/studentList/StudentList';
import {
  loadStudents,
  changeSearchQuery,
  checkSelectedYear,
  changeSelectedTab,
  loadYears,
  loadPrograms,
  showDeleteAlert,
  hideDeleteAlert,
  deleteStudent,
  toggleDeleteErrorMessage,
} from '../actions/studentList';
import * as selectors from '../selectors/studentList';

const mapStateToProps = state => ({
  students: selectors.getFilteredStudents(state),
  years: selectors.getYears(state),
  programs: selectors.getPrograms(state),
  emptyList: selectors.getEmptyList(state),
  searchQuery: selectors.getSearchQuery(state),
  selectedYears: selectors.getSelectedYears(state),
  selectedTab: selectors.getSelectedTab(state),
  deleteAlert: selectors.getDeleteAlert(state),
  deleteErrorMessage: selectors.getDeleteErrorMessage(state),
});

const mapDispatchToProps = dispatch => ({
  loadData: () => {
    dispatch(loadYears());
    dispatch(loadPrograms());
    dispatch(loadStudents());
  },
  changeSearchQuery: query => dispatch(changeSearchQuery(query)),
  checkSelectedYear: (year, checked) => dispatch(checkSelectedYear({ year, checked })),
  changeSelectedTab: tab => dispatch(changeSelectedTab(tab)),
  showDeleteAlert: studentId => dispatch(showDeleteAlert(studentId)),
  hideDeleteAlert: () => dispatch(hideDeleteAlert()),
  deleteStudent: id => dispatch(deleteStudent(id)),
  toggleDeleteErrorMessage: open => dispatch(toggleDeleteErrorMessage(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withImmutablePropsToJS(StudentList));
