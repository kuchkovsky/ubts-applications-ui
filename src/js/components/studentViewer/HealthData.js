import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Field from './Field';
import { deriveShortAnswer } from '../../schemas';

const HealthData = ({ classes, student }) => (
  <section className={classes.section}>
    <Typography variant="h5" className={classes.sectionTitle} gutterBottom>
      Стан здоров&#39;я
    </Typography>
    { Object.prototype.hasOwnProperty.call(student.healthData, 'isDrugAddicted') &&
      <Field
        name="Була залежність від наркотиків, алкоголю, тютюну, азартних чи комп'ютерних ігор, окультна залежність"
        text={deriveShortAnswer(student.healthData.isDrugAddicted)}/> }
    { Object.prototype.hasOwnProperty.call(student.healthData, 'hadDrugOrAlcoholAddiction') &&
      <Field
        name="Була залежність від алкоголю, наркотиків"
        text={deriveShortAnswer(student.healthData.hadDrugOrAlcoholAddiction)}/> }
    { Object.prototype.hasOwnProperty.call(student.healthData, 'hadGamblingOrComputerAddiction') &&
      <Field
        name="Була залежність від азартних ігор, комп’ютера"
        text={deriveShortAnswer(student.healthData.hadGamblingOrComputerAddiction)}/> }
    { Object.prototype.hasOwnProperty.call(student.healthData, 'hadOccultAddiction') &&
      <Field
        name="Була окультна залежність"
        text={deriveShortAnswer(student.healthData.hadOccultAddiction)}/> }
    <Field
      name="Як оцінює свій загальний стан здоров'я"
      text={student.healthData.healthStatus}/>
    <Field
      name="Приймає постійно ліки в зв'яку з хронічними захворюваннями"
      text={deriveShortAnswer(student.healthData.isTakingMedicine)}/>
    <Field
      name="Чи може стан здоров'я обмежувати чи заважати навчальному процесу"
      text={deriveShortAnswer(student.healthData.hasStudyProblems)}/>
  </section>
);

HealthData.propTypes = {
  classes: PropTypes.object.isRequired,
  student: PropTypes.object,
};

export default HealthData;
