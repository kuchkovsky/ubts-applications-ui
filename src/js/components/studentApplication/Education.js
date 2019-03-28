import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Typography from '@material-ui/core/Typography';
import { education } from '../../schemas/studentApplication';
import ReduxRadioGroup from '../shared/ReduxRadioGroup';
import ReduxRadioButton from '../shared/ReduxRadioButton';

const Education = ({ classes }) => (
  <section className={classes.section}>
    <Typography variant="h5" className={classes.sectionTitle}>
      Дані про світську освіту
    </Typography>
    <Field name="education" component={ReduxRadioGroup}>
      { Object.keys(education).map(key => <ReduxRadioButton value={education[key]} key={key}/>) }
    </Field>
  </section>
);

Education.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Education;
