import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import { Collapse } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ReduxBooleanRadioGroup from '../shared/ReduxBooleanRadioGroup';
import ReduxTextField from '../shared/ReduxTextField';

const Job = ({ classes, hasJob }) => (
  <section className={classes.section}>
    <Typography variant="h5" className={classes.sectionTitle}>
      Трудова діяльність
    </Typography>
    <Typography variant="subtitle1" className={classes.question}>
      Ви працюєте?
    </Typography>
    <ReduxBooleanRadioGroup name="hasJob"/>
    <Collapse in={hasJob}>
      <Field
        name="job"
        label="Назва посади *"
        variant="outlined"
        margin="normal"
        fullWidth
        component={ReduxTextField}
      />
    </Collapse>
  </section>
);

Job.propTypes = {
  classes: PropTypes.object.isRequired,
  hasJob: PropTypes.bool,
};

export default Job;
