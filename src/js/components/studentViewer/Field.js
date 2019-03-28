import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  name: {
    fontWeight: 'bold',
    marginRight: 5,
  },
};

const Field = ({ classes, name, text }) => (
  <Grid container direction="row">
    <Typography variant="subtitle1" className={classes.name}>
      { `${name}:` }
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      { text }
    </Typography>
  </Grid>
);

Field.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default withStyles(styles)(Field);
