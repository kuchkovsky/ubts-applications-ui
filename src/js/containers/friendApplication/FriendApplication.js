import { connect } from 'react-redux';
import FriendApplication from '../../components/friendApplication/FriendApplication';
import {
  fetchStudentName,
  uploadApplication,
  hideUploadSuccessAlert,
} from '../../actions/friendApplication';
import * as selectors from '../../selectors/friendApplication';

const mapStateToProps = state => ({
  studentName: selectors.getStudentName(state),
  initialValues: selectors.getInitialValues(state),
  upload: selectors.getUpload(state),
  showUploadSuccessAlert: selectors.getShowUploadSuccessAlert(state),
});

const mapDispatchToProps = dispatch => ({
  fetchStudentName: studentId => dispatch(fetchStudentName(studentId)),
  onSubmit: (friendFeedback, _, props) =>
    dispatch(uploadApplication(friendFeedback, props.match.params.id)),
  hideUploadSuccessAlert: () => dispatch(hideUploadSuccessAlert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendApplication);
