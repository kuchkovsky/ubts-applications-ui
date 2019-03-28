import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import ReduxSelect from './ReduxSelect';

const styles = {
  label: {
    marginTop: 15,
  },
};

const ReduxQuestionDropdown = ({ classes, label, name, children }) => (
  <Grid container justify="space-between">
    <Grid item>
      <Typography variant="subtitle1" className={classes.label}>
        { label }
      </Typography>
    </Grid>
    <Grid item>
      <Field name={name} component={ReduxSelect} >
        { children }
      </Field>
    </Grid>
  </Grid>
);

ReduxQuestionDropdown.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default withStyles(styles)(ReduxQuestionDropdown);
