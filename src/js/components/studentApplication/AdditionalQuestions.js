import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Typography from '@material-ui/core/Typography';
import ReduxTextField from '../shared/ReduxTextField';

const AdditionalQuestions = ({ classes }) => (
  <section className={classes.section}>
    <Typography variant="h5" className={classes.sectionSubtitle}>
      Додаткові запитання
    </Typography>
    <Typography variant="body2" className={classes.sectionSubtext} gutterBottom>
      Своїми словами в довільній формі дайте розгорнуті відповіді на запитання
    </Typography>
    <Typography variant="subtitle1" className={classes.question}>
      Які причини спонукали вас до навчання у семінарії?
    </Typography>
    <Field
      name="reasonsToStudy"
      label="Ваша відповідь *"
      variant="outlined"
      margin="normal"
      fullWidth
      multiline
      component={ReduxTextField}
    />
    <Typography variant="subtitle1" className={classes.question}>
      Ваші очікування від навчання?
    </Typography>
    <Field
      name="studyExpectations"
      label="Ваша відповідь *"
      variant="outlined"
      margin="normal"
      fullWidth
      multiline
      component={ReduxTextField}
    />
    <Typography variant="subtitle1" className={classes.question}>
      Опишіть коротко як ви прийшли до Бога; етапи вашого духовного становлення
      та стосунки з Богом на даний момент:
    </Typography>
    <Field
      name="howCameToGod"
      label="Ваша відповідь *"
      variant="outlined"
      margin="normal"
      fullWidth
      multiline
      component={ReduxTextField}
    />
  </section>
);

AdditionalQuestions.propTypes = {
  classes: PropTypes.object.isRequired,
  programName: PropTypes.string,
};

export default AdditionalQuestions;
