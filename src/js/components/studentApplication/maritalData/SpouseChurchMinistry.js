import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import ReduxBooleanRadioGroup from '../../shared/ReduxBooleanRadioGroup';
import ReduxTextField from '../../shared/ReduxTextField';

const SpouseChurchMinistry = ({ classes, spouseChurchMember }) => (
  <div>
    <Typography variant="subtitle1" className={classes.question}>
      Чи є ваша дружина/чоловік членом церкви?
    </Typography>
    <ReduxBooleanRadioGroup name="maritalData.isSpouseChurchMember"/>
    <Collapse in={spouseChurchMember}>
      <Field
        name="maritalData.spouseChurchMinistry"
        label="Яке служіння звершує церкві? *"
        variant="outlined"
        margin="normal"
        fullWidth
        multiline
        component={ReduxTextField}
      />
    </Collapse>
  </div>
);

SpouseChurchMinistry.propTypes = {
  classes: PropTypes.object.isRequired,
  spouseChurchMember: PropTypes.bool,
};

export default SpouseChurchMinistry;
