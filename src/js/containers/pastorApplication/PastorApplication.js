import { connect } from 'react-redux';
import PastorApplication from '../../components/pastorApplication/PastorApplication';
import {
  fetchStudentName,
  uploadApplication,
  hideUploadSuccessAlert,
} from '../../actions/pastorApplication';
import * as selectors from '../../selectors/pastorApplication';

const mapStateToProps = state => ({
  studentName: selectors.getStudentName(state),
  initialValues: selectors.getInitialValues(state),
  upload: selectors.getUpload(state),
  showUploadSuccessAlert: selectors.getShowUploadSuccessAlert(state),
});

const mapDispatchToProps = dispatch => ({
  fetchStudentName: studentId => dispatch(fetchStudentName(studentId)),
  onSubmit: (pastorFeedback, _, props) =>
    dispatch(uploadApplication(pastorFeedback, props.match.params.id)),
  hideUploadSuccessAlert: () => dispatch(hideUploadSuccessAlert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PastorApplication);
