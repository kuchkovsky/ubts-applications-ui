import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarMessage from '../shared/SnackbarMessage';

const DeleteErrorPopup = props => {
  const { deleteErrorMessage, toggleDeleteErrorMessage } = props;

  const hideErrorMessage = () => toggleDeleteErrorMessage(false);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={deleteErrorMessage}
      autoHideDuration={3000}
      onClose={hideErrorMessage}
    >
      <SnackbarMessage
        message="Не вдалося видалити абітурієнта"
        variant="error"
        onClose={hideErrorMessage}
      />
    </Snackbar>
  );
};

DeleteErrorPopup.propTypes = {
  deleteErrorMessage: PropTypes.bool.isRequired,
  toggleDeleteErrorMessage: PropTypes.func.isRequired,
};

export default DeleteErrorPopup;
