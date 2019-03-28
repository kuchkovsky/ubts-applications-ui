import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ubtsImg from '../../../img/ubts.png';
import prmlImg from '../../../img/prml.png';
import { programs } from '../../schemas/studentApplication';
import Program from './Program';
import HeaderInfo from './HeaderInfo';
import PersonalData from './PersonalData';
import Residence from './Residence';
import Education from './Education';
import MaritalData from './maritalData/MaritalData';
import ChurchData from './churchData/ChurchData';
import Job from './Job';
import FinanceInfo from './FinanceInfo';
import HealthData from './HealthData';
import AdditionalQuestions from './AdditionalQuestions';
import HowFindOut from './HowFindOut';
import Files from './Files';
import Agreement from './Agreement';

const Form = props => {
  const {
    classes,
    programName,
    handleSubmit,
    pristine,
    invalid,
  } = props;
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <img
        src={ programName === programs.youthLeadersDev.name ? prmlImg : ubtsImg }
        className={classes.headerImage}
      />
      <HeaderInfo {...props}/>
      <Program {...props}/>
      <PersonalData {...props}/>
      <Residence {...props}/>
      <Education {...props}/>
      <MaritalData {...props}/>
      <ChurchData {...props}/>
      <Job {...props}/>
      <FinanceInfo {...props}/>
      <HealthData {...props}/>
      <AdditionalQuestions {...props}/>
      <HowFindOut {...props}/>
      <Files {...props}/>
      <Agreement {...props}/>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={pristine || invalid}
        className={classes.submit}
      >
        Зареєструватися
      </Button>
      { (pristine || invalid) &&
        <Typography variant="subtitle2" className={classes.errorMessage}>
          Необхідно заповнити всі обов&#39;язкові (*) поля та прийняти умови Семінарії!
        </Typography> }
    </form>
  );
};

Form.propTypes = {
  classes: PropTypes.object.isRequired,
  programName: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
