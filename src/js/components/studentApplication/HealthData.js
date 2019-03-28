import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Typography from '@material-ui/core/Typography';
import ReduxBooleanRadioGroup from '../shared/ReduxBooleanRadioGroup';
import ReduxRadioGroup from '../shared/ReduxRadioGroup';
import { renderRadiosFromSchema } from '../../utils/render';
import { healthStatus } from '../../schemas/studentApplication';

const HealthData = ({ classes }) => (
  <section className={classes.section}>
    <Typography variant="h5" className={classes.sectionTitle}>
      Стан здоров&#39;я
    </Typography>
    <Typography variant="subtitle1" className={classes.question}>
      Чи була у вас залежність від алкоголю, наркотиків?
    </Typography>
    <ReduxBooleanRadioGroup name="healthData.hadDrugOrAlcoholAddiction"/>
    <Typography variant="subtitle1" className={classes.question}>
      Чи була у вас залежність від азартних ігор, комп’ютера?
    </Typography>
    <ReduxBooleanRadioGroup name="healthData.hadGamblingOrComputerAddiction"/>
    <Typography variant="subtitle1" className={classes.question}>
      Чи була у вас окультна залежність?
    </Typography>
    <ReduxBooleanRadioGroup name="healthData.hadOccultAddiction"/>
    <Typography variant="subtitle1" className={classes.question}>
      Як ви оцінюєте свій загальний стан здоров&#39;я?
    </Typography>
    <Field name="healthData.healthStatus" component={ReduxRadioGroup}>
      { renderRadiosFromSchema(healthStatus) }
    </Field>
    <Typography variant="subtitle1" className={classes.question}>
      Чи приймаєте ви постійно ліки в зв&#39;язку з хронічними захворюваннями?
    </Typography>
    <ReduxBooleanRadioGroup name="healthData.isTakingMedicine"/>
    <Typography variant="subtitle1" className={classes.question}>
      Чи може ваш стан здоров&#39;я обмежувати чи заважати навчальному процесу?
    </Typography>
    <ReduxBooleanRadioGroup name="healthData.hasStudyProblems"/>
  </section>
);

HealthData.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default HealthData;
