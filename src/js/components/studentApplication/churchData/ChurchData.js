import React from 'react';
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import ReduxBooleanRadioGroup from '../../shared/ReduxBooleanRadioGroup';
import ChurchDataDetails from './ChurchDataDetails';

const ChurchData = props => {
  const { classes, churchMember } = props;
  return (
    <section className={classes.section}>
      <Typography variant="h5" className={classes.sectionTitle}>
        Інформація про церкву та служіння
      </Typography>
      <Typography variant="subtitle1" className={classes.question}>
        Чи є ви членом церкви на даний час?
      </Typography>
      <ReduxBooleanRadioGroup name="churchMember"/>
      <Collapse in={churchMember}>
        <ChurchDataDetails {...props}/>
      </Collapse>
    </section>
  );
};

ChurchData.propTypes = {
  classes: PropTypes.object.isRequired,
  churchMember: PropTypes.bool,
};

export default ChurchData;
