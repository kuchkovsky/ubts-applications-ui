import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Field from './Field';

const HowFindOut = ({ classes, student }) => (
  <section className={classes.section}>
    <Typography variant="h5" className={classes.sectionTitle} gutterBottom>
      Як дізнались про нашу семінарію
    </Typography>
    <Field name="Джерело" text={student.howFindOut}/>
  </section>
);

HowFindOut.propTypes = {
  classes: PropTypes.object.isRequired,
  student: PropTypes.object,
};

export default HowFindOut;
