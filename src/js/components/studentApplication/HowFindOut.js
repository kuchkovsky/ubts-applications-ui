import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { howFindOut as howFindOutSchema } from '../../schemas/studentApplication';
import ReduxRadioGroup from '../shared/ReduxRadioGroup';
import ReduxRadioButton from '../shared/ReduxRadioButton';
import ReduxTextField from '../shared/ReduxTextField';

const HowFindOut = ({ classes, howFindOut }) => (
  <section className={classes.section}>
    <Typography variant="h5" className={classes.sectionTitle}>
      Як ви дізнались про нашу семінарію?
    </Typography>
    <Field name="howFindOut" component={ReduxRadioGroup}>
      { Object.keys(howFindOutSchema).map(key => (
        <ReduxRadioButton value={howFindOutSchema[key]} key={key}/>
      )) }
    </Field>
    <Collapse in={howFindOut === howFindOutSchema.other}>
      <Field
        name="otherHowFindOut"
        label="Де саме? *"
        variant="outlined"
        margin="normal"
        fullWidth
        component={ReduxTextField}
      />
    </Collapse>
    <Typography variant="h5" className={classes.sectionTitle}>
      Тест на знання Біблії
    </Typography>
    <Typography variant="body2" className={classes.sectionSubtext} gutterBottom>
    Будь ласка, перейдіть за цим 
    <a href="https://forms.gle/oAu8mzrr8rpskowh8" target="_blank">посиланням</a> та пройдіть тест.
    У тесті є 50 запитань, в кожному лише 1 правильна відповідь. Кожна правильна 
    відповідь має 2 бали, тобто максимальна кількість балів, яку ви можете отримати – 100.
    У вас є одна спроба, щоб скласти цей тест. Після проходження тесту та відправки відповідей,
    перегляньте свій результат, та напишіть в анкету вашу кількість балів.
    </Typography>
    <Field
      name="testScore"
      label="Кількість балів за тест *"
      variant="outlined"
      margin="normal"
      fullWidth
      component={ReduxTextField}
    />
    <Field
      name="testTime"
      label="Скільки часу ви витратили на складання тесту? *"
      variant="outlined"
      margin="normal"
      fullWidth
      component={ReduxTextField}
    />
  </section>
);

HowFindOut.propTypes = {
  classes: PropTypes.object.isRequired,
  howFindOut: PropTypes.string,
};

export default HowFindOut;
