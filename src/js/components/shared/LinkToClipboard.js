import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  linkContainer: {
    padding: 2,
    border: '1px solid rgba(121, 85, 72, 0.5)',
    borderRadius: 5,
    marginRight: 2,
  },
  link: {
    color: '#795548',
  },
};

const LinkToClipboard = ({ classes, link }) => {
  const [copied, setCopied] = useState(false);
  return (
    <Grid container>
      <Grid item className={classes.linkContainer}>
        <a href={link} target="_blank" rel="noopener noreferrer" className={classes.link}
        >
          { link }
        </a>
      </Grid>
      <Grid item>
        <CopyToClipboard text={link} onCopy={() => setCopied(true)}>
          <Button variant="outlined" color="primary">
            Копіювати
          </Button>
        </CopyToClipboard>
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={copied}
        autoHideDuration={3000}
        onClose={() => setCopied(false)}
        message={<span>Скопіювано!</span>}
      />
    </Grid>
  );
};

LinkToClipboard.propTypes = {
  classes: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
};

export default withStyles(styles)(LinkToClipboard);
