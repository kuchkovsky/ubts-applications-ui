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
  </section>
);

HowFindOut.propTypes = {
  classes: PropTypes.object.isRequired,
  howFindOut: PropTypes.string,
};

export default HowFindOut;
