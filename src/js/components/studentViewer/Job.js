import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Field from './Field';

const Job = ({ classes, student }) => (
  <section className={classes.section}>
    <Typography variant="h5" className={classes.sectionTitle} gutterBottom>
      Трудова діяльність
    </Typography>
    <Field name="Статус" text={student.job ? 'Працює' : 'Не працює'}/>
    { student.job &&
      <Field name="Назва посади" text={student.job}/> }
  </section>
);

Job.propTypes = {
  classes: PropTypes.object.isRequired,
  student: PropTypes.object,
};

export default Job;
