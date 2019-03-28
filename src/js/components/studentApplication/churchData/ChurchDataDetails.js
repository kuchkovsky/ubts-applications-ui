import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Typography from '@material-ui/core/Typography';
import ReduxTextField from '../../shared/ReduxTextField';
import ChurchMembersNumber from './ChurchMembersNumber';
import ChurchResidence from './ChurchResidence';
import ChurchMinistry from './ChurchMinistry';

const ChurchDataDetails = props => {
  const { classes } = props;
  return (
    <div>
      <Typography variant="subtitle1" className={classes.sectionSubtitle}>
        Дані про церкву, членом якої ви є
      </Typography>
      <Field
        name="churchData.name"
        label="Повна назва церкви *"
        variant="outlined"
        margin="normal"
        fullWidth
        component={ReduxTextField}
      />
      <Field
        name="churchData.pastorName"
        label="П.І.Б пастора *"
        variant="outlined"
        margin="normal"
        fullWidth
        component={ReduxTextField}
      />
      <Field
        name="churchData.union"
        label="Союз чи об'єднання, в яке входить церква *"
        variant="outlined"
        margin="normal"
        fullWidth
        component={ReduxTextField}
      />
      <Field
        name="churchData.denomination"
        label="Деномінація *"
        variant="outlined"
        margin="normal"
        fullWidth
        component={ReduxTextField}
      />
      <ChurchMembersNumber classes={classes}/>
      <ChurchResidence classes={classes}/>
      <ChurchMinistry {...props}/>
    </div>
  );
};

ChurchDataDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ChurchDataDetails;
