import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';

const Transition = props => (
  <Slide direction="up" {...props}/>
);

const SuccessAlert = ({ showAlert, onClose }) => (
  <div>
    <Dialog
      open={showAlert}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      keepMounted
      disableBackdropClick
      disableEscapeKeyDown
      TransitionComponent={Transition}
    >
      <DialogTitle>
        Анкету успішно надіслано
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom>
          Дякуємо Вам за затрачений час і за заповнену характеристику.
          Хай Господь Вас благословить у Вашій праці!
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Закрити
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

SuccessAlert.propTypes = {
  showAlert: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SuccessAlert;
