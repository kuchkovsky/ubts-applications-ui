import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Typography from '@material-ui/core/Typography';
import ReduxTextField from '../shared/ReduxTextField';

const Residence = ({ classes }) => (
  <section className={classes.section}>
    <Typography variant="h5" className={classes.sectionTitle}>
      Адреса фактичного місця проживання
    </Typography>
    <Field
      name="residence.country"
      label="Країна *"
      variant="outlined"
      margin="normal"
      fullWidth
      component={ReduxTextField}
    />
    <Field
      name="residence.region"
      label="Область *"
      variant="outlined"
      margin="normal"
      fullWidth
      component={ReduxTextField}
    />
    <Field
      name="residence.cityVillage"
      label="Місто/село *"
      variant="outlined"
      margin="normal"
      fullWidth
      component={ReduxTextField}
    />
    <Field
      name="residence.index"
      label="Індекс *"
      variant="outlined"
      margin="normal"
      fullWidth
      component={ReduxTextField}
    />
    <Field
      name="residence.district"
      label="Район *"
      variant="outlined"
      margin="normal"
      fullWidth
      component={ReduxTextField}
    />
    <Field
      name="residence.street"
      label="Вулиця *"
      variant="outlined"
      margin="normal"
      fullWidth
      component={ReduxTextField}
    />
    <Field
      name="residence.house"
      label="Номер будинку *"
      variant="outlined"
      margin="normal"
      fullWidth
      component={ReduxTextField}
    />
    <Field
      name="residence.apartment"
      label="Номер квартири"
      variant="outlined"
      margin="normal"
      fullWidth
      component={ReduxTextField}
    />
  </section>
);

Residence.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Residence;
