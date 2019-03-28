import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Field from './Field';

const AdditionalQuestions = ({ classes, student }) => (
  <section className={classes.section}>
    <Typography variant="h5" className={classes.sectionTitle} gutterBottom>
      Додаткові запитання
    </Typography>
    <Field name="Статус" text={student.job ? 'Працює' : 'Не працює'}/>
    { (student.reasonsToStudy && !student.studyExpectations) &&
      <Field
        name="Причини, які спонукали до навчання у семінарії. Очікування від навчання"
        text={student.reasonsToStudy}/> }
    { (student.reasonsToStudy && student.studyExpectations) &&
      <React.Fragment>
        <Field
          name="Причини, які спонукали до навчання у семінарії"
          text={student.reasonsToStudy}/>
        <Field
          name="Очікування від навчання"
          text={student.studyExpectations}/>
      </React.Fragment> }
    <Field
      name="Як прийшов до Бога; етапи духовного становлення та стосунки з Богом на даний момент"
      text={student.howCameToGod}/>
  </section>
);

AdditionalQuestions.propTypes = {
  classes: PropTypes.object.isRequired,
  student: PropTypes.object,
};

export default AdditionalQuestions;
