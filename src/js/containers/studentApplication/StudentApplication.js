import { connect } from 'react-redux';
import StudentApplication from '../../components/studentApplication/StudentApplication';
import {
  uploadApplication,
  hideUploadSuccessAlert,
  resetApplication,
} from '../../actions/studentApplication';
import { programs } from '../../schemas/studentApplication';
import { formName } from './Form';
import { handleNestedRadios } from '../../utils/form';
import { scrollToTop } from '../../utils/misc';
import * as selectors from '../../selectors/studentApplication';

const mapStateToProps = state => ({
  initialValues: selectors.getInitialValues(state),
  upload: selectors.getUpload(state),
  showUploadSuccessAlert: selectors.getShowUploadSuccessAlert(state),
  studentId: selectors.getStudentId(state),
});

const mapDispatchToProps = dispatch => {
  const handleNestedProgramRadios = handleNestedRadios(
    programs, formName, dispatch, 'program.info',
  );
  return {
    onSubmit: student => dispatch(uploadApplication(student)),
    handleNestedRadios: event => handleNestedProgramRadios(event),
    hideUploadSuccessAlert: () => {
      dispatch(hideUploadSuccessAlert());
      dispatch(resetApplication());
      scrollToTop();
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentApplication);
