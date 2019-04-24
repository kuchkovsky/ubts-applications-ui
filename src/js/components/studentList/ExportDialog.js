import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';

const Transition = props => (
  <Slide direction="up" {...props}/>
);

const ExportDialog = ({ showDialog, exportStatus, onClose }) => (
  <div>
    <Dialog
      open={showDialog}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      keepMounted
      disableBackdropClick
      disableEscapeKeyDown
      TransitionComponent={Transition}
    >
      <DialogTitle>
        Експорт в Excel
      </DialogTitle>
      <DialogContent>
        <Grid container justify="center">
          { exportStatus.pending &&
            <CircularProgress size={60} disableShrink={true}/> }
          { exportStatus.error &&
            <Typography variant="h6" gutterBottom>
              Помилка експорту
            </Typography> }
          { !exportStatus.pending && !exportStatus.error &&
            <Typography variant="h6" gutterBottom>
              Успішно експортовано
            </Typography> }
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Закрити
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

ExportDialog.propTypes = {
  showDialog: PropTypes.bool.isRequired,
  exportStatus: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ExportDialog;
