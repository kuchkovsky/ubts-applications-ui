import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import formStyles from '../../../styles/form';
import SnackbarMessage from '../SnackbarMessage';
import SuccessAlert from './SuccessAlert';

const Application = props => {
  const {
    classes,
    studentName,
    fetchStudentName,
    upload,
    showUploadSuccessAlert,
    hideUploadSuccessAlert,
  } = props;
  const { form: Form, ...other } = props;
  const { id: studentId } = props.match.params;
  useEffect(() => {
    if (!studentName) {
      fetchStudentName(studentId);
    }
  }, []);
  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Form {...other}/>
      </Paper>
      <div className={classes.infoMessageWrapper}>
        { upload.pending &&
          <SnackbarMessage variant="info" message="Надсилання даних..."/> }
        { showUploadSuccessAlert &&
          <SuccessAlert
            showAlert={showUploadSuccessAlert}
            onClose={hideUploadSuccessAlert}
          /> }
        { upload.error &&
          <SnackbarMessage variant="error" message={upload.errorMessage}/> }
      </div>
    </main>
  );
};

Application.propTypes = {
  classes: PropTypes.object.isRequired,
  form: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  studentName: PropTypes.string,
  fetchStudentName: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  upload: PropTypes.shape({
    pending: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
  }).isRequired,
  showUploadSuccessAlert: PropTypes.bool.isRequired,
  hideUploadSuccessAlert: PropTypes.func.isRequired,
};

export default withStyles(formStyles(600))(Application);
