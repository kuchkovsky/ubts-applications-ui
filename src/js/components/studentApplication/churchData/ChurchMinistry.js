import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import ReduxDatePicker from '../../shared/ReduxDatePicker';
import ChurchMinistryType from './ChurchMinistryType';
import ReduxBooleanRadioGroup from '../../shared/ReduxBooleanRadioGroup';
import ReduxTextField from '../../shared/ReduxTextField';

const ChurchMinistry = props => {
  const { classes, ordained } = props;
  return (
    <div>
      <Typography variant="subtitle1" className={classes.sectionSubtitle}>
        Інформація про служіння
      </Typography>
      <Field
        name="churchMinistry.repentanceDate"
        label="Рік покаяння *"
        views={['year']}
        variant="outlined"
        margin="normal"
        fullWidth
        animateYearScrolling
        component={ReduxDatePicker}
      />
      <Field
        name="churchMinistry.baptismDate"
        label="Рік хрещення *"
        views={['year']}
        variant="outlined"
        margin="normal"
        fullWidth
        animateYearScrolling
        component={ReduxDatePicker}
      />
      <ChurchMinistryType {...props}/>
      <Typography variant="subtitle1" className={classes.question}>
        Чи ви рукопокладений служитель?
      </Typography>
      <ReduxBooleanRadioGroup name="churchMinistry.ordained"/>
      <Collapse in={ordained}>
        <Field
          name="churchMinistry.ordinationDate"
          label="Рік рукопокладання *"
          views={['year']}
          variant="outlined"
          margin="normal"
          fullWidth
          animateYearScrolling
          component={ReduxDatePicker}
        />
      </Collapse>
      <Field
        name="churchMinistry.churchParticipation"
        label="Опишіть свою участь у житті помісної церкви *"
        variant="outlined"
        margin="normal"
        fullWidth
        multiline
        component={ReduxTextField}
      />
    </div>
  );
};

ChurchMinistry.propTypes = {
  classes: PropTypes.object.isRequired,
  ordained: PropTypes.bool,
};

export default ChurchMinistry;
