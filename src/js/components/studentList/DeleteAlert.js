import React from 'react';
import PropTypes from 'prop-types';
import ConfirmationAlert from '../shared/ConfirmationAlert';

const DeleteAlert = props => {
  const { deleteAlert, hideDeleteAlert, deleteStudent } = props;
  const onConfirm = () => {
    deleteStudent(deleteAlert.studentId);
    hideDeleteAlert();
  };
  return (
    <ConfirmationAlert
      title="Ви справді бажаєте видалити даного абітурієнта?"
      showAlert={deleteAlert.show}
      onConfirm={onConfirm}
      onReject={hideDeleteAlert}
    />
  );
};

DeleteAlert.propTypes = {
  deleteAlert: PropTypes.shape({
    show: PropTypes.bool.isRequired,
    studentId: PropTypes.number,
  }).isRequired,
  deleteStudent: PropTypes.func.isRequired,
  hideDeleteAlert: PropTypes.func.isRequired,
};

export default DeleteAlert;
