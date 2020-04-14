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

    <Typography variant="h5" className={classes.sectionTitle}>
      Тест на знання Біблії
    </Typography>
    <Field name="Кількість балів за тест" text={student.testScore}/>
    <Field name="Скільки часу ви витратили на складання тесту?" text={student.testTime}/>
  </section>
);

HowFindOut.propTypes = {
  classes: PropTypes.object.isRequired,
  student: PropTypes.object,
};

export default HowFindOut;
