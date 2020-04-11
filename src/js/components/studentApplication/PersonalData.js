import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Typography from '@material-ui/core/Typography';
import ReduxTextField from '../shared/ReduxTextField';
import ReduxDatePicker from '../shared/ReduxDatePicker';
import { DATE_FORMAT } from '../../utils/form';

const PersonalData = (({ classes }) => (
  <section className={classes.section}>
    <Typography variant="h5" className={classes.sectionTitle}>
      Особисті дані
    </Typography>
    <Field
      name="lastName"
      label="Прізвище *"
      variant="outlined"
      margin="normal"
      fullWidth
      component={ReduxTextField}
    />
    <Field
      name="firstName"
      label="Ім'я *"
      variant="outlined"
      margin="normal"
      fullWidth
      component={ReduxTextField}
    />
    <Field
      name="middleName"
      label="По батькові *"
      variant="outlined"
      margin="normal"
      fullWidth
      component={ReduxTextField}
    />
    <Field
      name="internationalFirstName"
      label="Ім’я латинськими буквами, як зазначено в закордонному паспорті"
      variant="outlined"
      margin="normal"
      fullWidth
      component={ReduxTextField}
    />
    <Field
      name="internationalLastName"
      label="Прізвище латинськими буквами, як зазначено в закордонному паспорті"
      variant="outlined"
      margin="normal"
      fullWidth
      component={ReduxTextField}
    />
    <Field
      name="birthDate"
      label="Дата народження *"
      openTo="year"
      dateFormat={DATE_FORMAT}
      variant="outlined"
      margin="normal"
      fullWidth
      animateYearScrolling
      component={ReduxDatePicker}
    />
    <Field
      name="phone1"
      label="Телефон 1 *"
      variant="outlined"
      margin="normal"
      fullWidth
      component={ReduxTextField}
    />
    <Field
      name="phone2"
      label="Телефон 2"
      variant="outlined"
      margin="normal"
      fullWidth
      component={ReduxTextField}
    />
    <Field
      name="email"
      label="Електронна пошта *"
      variant="outlined"
      margin="normal"
      fullWidth
      component={ReduxTextField}
    />
  </section>
));

PersonalData.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default PersonalData;
