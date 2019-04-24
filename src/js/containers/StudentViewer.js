import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import StudentViewer from '../components/studentViewer/StudentViewer';
import {
  loadStudent,
  loadStudentPhoto,
  openFileDownloadDialog,
  closeFileDownloadDialog,
} from '../actions/studentViewer';
import * as selectors from '../selectors/studentViewer';

const mapStateToProps = state => ({
  student: selectors.getStudent(state),
  studentPhoto: selectors.getStudentPhoto(state),
  fileDialogOpened: selectors.getFileDialogOpened(state),
});

const mapDispatchToProps = dispatch => ({
  loadStudent: id => dispatch(loadStudent(id)),
  loadStudentPhoto: id => dispatch(loadStudentPhoto(id)),
  openFileDownloadDialog: () => dispatch(openFileDownloadDialog()),
  closeFileDownloadDialog: () => dispatch(closeFileDownloadDialog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withImmutablePropsToJS(StudentViewer));
