import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import formStyles from '../../styles/form';
import Form from '../../containers/studentApplication/Form';
import SnackbarMessage from '../shared/SnackbarMessage';
import SuccessAlert from './SuccessAlert';

const StudentApplication = props => {
  const {
    classes,
    upload,
    showUploadSuccessAlert,
    hideUploadSuccessAlert,
    studentId,
  } = props;
  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Form {...props}/>
      </Paper>
      <div className={classes.infoMessageWrapper}>
        { upload.pending &&
          <SnackbarMessage variant="info" message="Надсилання даних..."/> }
        { showUploadSuccessAlert &&
          <SuccessAlert
            showAlert={showUploadSuccessAlert}
            onClose={hideUploadSuccessAlert}
            studentId={studentId}
          /> }
        { upload.error &&
          <SnackbarMessage variant="error" message={upload.errorMessage}/> }
      </div>
    </main>
  );
};

StudentApplication.propTypes = {
  classes: PropTypes.object.isRequired,
  initialValues: PropTypes.object.isRequired,
  upload: PropTypes.shape({
    pending: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
  }).isRequired,
  showUploadSuccessAlert: PropTypes.bool.isRequired,
  hideUploadSuccessAlert: PropTypes.func.isRequired,
  studentId: PropTypes.string,
};

export default withStyles(formStyles(600))(StudentApplication);
