import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Typography from '@material-ui/core/Typography';
import { maritalStatus as maritalStatusSchema } from '../../../schemas/studentApplication';
import ReduxRadioGroup from '../../shared/ReduxRadioGroup';
import { renderRadiosFromSchema } from '../../../utils/render';
import SpouseData from './SpouseData';

const MaritalData = props => {
  const { classes } = props;
  return (
    <section className={classes.section}>
      <Typography variant="h5" className={classes.sectionTitle}>
        Сімейний стан
      </Typography>
      <Field name="maritalData.status" component={ReduxRadioGroup}>
        { renderRadiosFromSchema(maritalStatusSchema) }
      </Field>
      <SpouseData {...props}/>
    </section>
  );
};

MaritalData.propTypes = {
  classes: PropTypes.object.isRequired,
  maritalStatus: PropTypes.string,
  spouseChurchMember: PropTypes.bool,
};

export default MaritalData;
