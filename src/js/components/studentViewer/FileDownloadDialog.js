import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AttachmentIcon from '@material-ui/icons/Attachment';
import Slide from '@material-ui/core/Slide';
import { STUDENT_FILES } from '../../utils/apiEndpoints';
import { downloadFile } from '../../utils/files';

const studentFilesUrl = `${process.env.API_URL}${STUDENT_FILES}`;

const Transition = props => (
  <Slide direction="up" {...props}/>
);

const FileDownloadDialog = ({ showDialog, studentId, files, onClose }) => (
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
        Файли
      </DialogTitle>
      <DialogContent>
        <List component="nav">
          { files.map(file => (
            <ListItem
              button
              onClick={() => {
                downloadFile(`${studentFilesUrl}/${studentId}/${file}`, studentId, true);
              }}
              key={file}
            >
              <ListItemIcon>
                <AttachmentIcon/>
              </ListItemIcon>
              <ListItemText primary={file}/>
            </ListItem>
          )) }
        </List>
        <Button
          onClick={() => {
            downloadFile(`${studentFilesUrl}/${studentId}`, studentId);
          }}
          variant="contained"
          color="primary"
          fullWidth
        >
          Завантажити архів
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Закрити
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

FileDownloadDialog.propTypes = {
  showDialog: PropTypes.bool.isRequired,
  studentId: PropTypes.string.isRequired,
  files: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FileDownloadDialog;
