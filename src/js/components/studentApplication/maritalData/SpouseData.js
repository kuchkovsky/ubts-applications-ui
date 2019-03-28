import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Collapse from '@material-ui/core/Collapse';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { maritalStatus as maritalStatusSchema } from '../../../schemas/studentApplication';
import ReduxTextField from '../../shared/ReduxTextField';
import ReduxBooleanRadioGroup from '../../shared/ReduxBooleanRadioGroup';
import ReduxQuestionDropdown from '../../shared/ReduxQuestionDropdown';
import ReduxDatePicker from '../../shared/ReduxDatePicker';
import SpouseChurchMinistry from './SpouseChurchMinistry';
import { DATE_FORMAT } from '../../../utils/form';

const SpouseData = props => {
  const { classes, maritalStatus } = props;
  return (
    <Collapse in={maritalStatus === maritalStatusSchema.married}>
      <Field
        name="maritalData.spouseName"
        label="П.І.Б. дружини/чоловіка *"
        variant="outlined"
        margin="normal"
        fullWidth
        component={ReduxTextField}
      />
      <Field
        name="maritalData.marriageDate"
        label="Дата реєстрації шлюбу *"
        openTo="year"
        dateFormat={DATE_FORMAT}
        variant="outlined"
        margin="normal"
        fullWidth
        animateYearScrolling
        component={ReduxDatePicker}
      />
      <SpouseChurchMinistry {...props}/>
      <ReduxQuestionDropdown
        label="Cкільки у вас дітей?"
        name="maritalData.childrenNumber"
      >
        { [...Array(11).keys()].map(key => (
          <MenuItem value={key} key={key}>{ String(key) }</MenuItem>
        )) }
      </ReduxQuestionDropdown>
      <Typography variant="subtitle1" className={classes.question}>
        Чи підтримує дружина/чоловік ваше бажання навчатися в семінарії?
      </Typography>
      <ReduxBooleanRadioGroup name="maritalData.isSpouseApproveSeminary"/>
    </Collapse>
  );
};

SpouseData.propTypes = {
  classes: PropTypes.object.isRequired,
  maritalStatus: PropTypes.string,
};

export default SpouseData;
