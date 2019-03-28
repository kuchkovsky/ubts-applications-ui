import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Typography from '@material-ui/core/Typography';
import { renderRadiosFromSchema } from '../../../utils/render';
import { churchMembersNumber } from '../../../schemas/studentApplication';
import ReduxRadioGroup from '../../shared/ReduxRadioGroup';

const ChurchMembersNumber = ({ classes }) => (
  <React.Fragment>
    <Typography variant="subtitle1" className={classes.question}>
      Кількість членів:
    </Typography>
    <Field name="churchData.membersNumber" component={ReduxRadioGroup}>
      { renderRadiosFromSchema(churchMembersNumber) }
    </Field>
  </React.Fragment>
);

ChurchMembersNumber.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ChurchMembersNumber;
