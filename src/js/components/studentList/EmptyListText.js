import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  listMessageGrid: {
    paddingTop: 20,
    paddingBottom: 20,
  },
};

const EmptyListText = ({ classes, children }) => (
  <Grid container justify="center" className={classes.listMessageGrid}>
    <Typography variant="subtitle1" color="inherit">
      { children }
    </Typography>
  </Grid>
);

EmptyListText.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
};

export default withStyles(styles)(EmptyListText);
