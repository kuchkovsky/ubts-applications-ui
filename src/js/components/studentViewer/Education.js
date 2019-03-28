import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Field from './Field';

const Education = ({ classes, student }) => (
  <section className={classes.section}>
    <Typography variant="h5" className={classes.sectionTitle} gutterBottom>
      Дані про світську освіту
    </Typography>
    <Field name="Рівень освіти" text={student.education}/>
  </section>
);

Education.propTypes = {
  classes: PropTypes.object.isRequired,
  student: PropTypes.object,
};

export default Education;
