import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { FilePond } from 'react-filepond';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { isAuthenticated, generateAuthHeader } from '../../utils/auth';

const styles = {
  root: {
    marginTop: 15,
    padding: 10,
    border: '2px solid silver',
    borderRadius: 5,
  },
  label: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  comment: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  error: {
    marginTop: -5,
    textAlign: 'center',
    color: 'red',
  },
};

const ReduxFilePicker = props => {
  const {
    classes,
    input,
    meta,
    label,
    comment,
    serverUrl,
    ...other
  } = props;

  const authHeaders = isAuthenticated() ? {
    Authorization: generateAuthHeader(),
  } : {};
  const serverConfig = {
    url: serverUrl,
    process: {
      headers: authHeaders,
    },
    revert: {
      headers: authHeaders,
    },
  };

  const onFinishUpload = (error, file) => {
    if (!error) {
      input.onChange(JSON.parse(file.serverId).fileName);
    }
  };
  const onRemoveUploadedfile = () => input.onChange('');

  const pondRef = useRef(null);
  const pond = pondRef.current;
  if (meta.pristine && !meta.initial && pond && pond.getFile()) {
    pond.removeFile();
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.label} component="h1" variant="h6">
        { label }
      </Typography>
      { comment &&
        <Typography className={classes.comment} variant="subtitle2">
          { comment }
        </Typography> }
      <FilePond
        ref={pondRef}
        server={serverConfig}
        onprocessfile={onFinishUpload}
        onremovefile={onRemoveUploadedfile}
        {...other}
      />
      { meta.error &&
        <Typography className={classes.error} variant="subtitle2">
          { meta.error } *
        </Typography> }
    </div>
  );
};

ReduxFilePicker.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  comment: PropTypes.string,
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    pristine: PropTypes.bool,
    initial: PropTypes.bool,
  }).isRequired,
  serverUrl: PropTypes.string.isRequired,
};

export default withStyles(styles)(ReduxFilePicker);
