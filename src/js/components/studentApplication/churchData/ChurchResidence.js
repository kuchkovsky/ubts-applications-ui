import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Typography from '@material-ui/core/Typography';
import ReduxTextField from '../../shared/ReduxTextField';

const ChurchResidence = ({ classes }) => (
  <div>
    <Typography variant="subtitle1" className={classes.sectionSubtitle}>
      Адреса церкви
    </Typography>
    <Field
      name="churchData.region"
      label="Область *"
      variant="outlined"
      margin="normal"
      fullWidth
      component={ReduxTextField}
    />
    <Field
      name="churchData.cityVillage"
      label="Місто/село *"
      variant="outlined"
      margin="normal"
      fullWidth
      component={ReduxTextField}
    />
    <Field
      name="churchData.index"
      label="Індекс *"
      variant="outlined"
      margin="normal"
      fullWidth
      component={ReduxTextField}
    />
    <Field
      name="churchData.district"
      label="Район"
      variant="outlined"
      margin="normal"
      fullWidth
      component={ReduxTextField}
    />
    <Field
      name="churchData.streetAndHouseNumber"
      label="Вулиця, номер будинку *"
      variant="outlined"
      margin="normal"
      fullWidth
      component={ReduxTextField}
    />
    <Field
      name="churchData.phone"
      label="Телефон"
      variant="outlined"
      margin="normal"
      fullWidth
      component={ReduxTextField}
    />
  </div>
);

ChurchResidence.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ChurchResidence;
