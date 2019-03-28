import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Title from './Title';
import Field from './Field';
import PersonalData from './PersonalData';
import Residence from './Residence';
import Education from './Education';
import MaritalData from './MaritalData';
import ChurchData from './ChurchData';
import Job from './Job';
import Finance from './Finance';
import HealthData from './HealthData';
import AdditionalQuestions from './AdditionalQuestions';
import HowFindOut from './HowFindOut';

const Student = props => {
  const { classes, student, studentPhoto } = props;
  return (
    <Paper className={classes.paper}>
      <Title>
        { `${student.lastName} ${student.firstName} ${student.middleName}`}
      </Title>
      <Grid container alignContent="stretch">
        <Grid item className={classes.portraitPhotoWrapper}>
          { !studentPhoto &&
            <div className={classes.spinnerContainer}>
              <CircularProgress className={classes.spinner} size={60} disableShrink={true}/>
            </div> }
          { studentPhoto &&
            <img src={studentPhoto} className={classes.portraitPhoto}/> }
        </Grid>
        <Grid item>
          <Field name="Програма" text={student.program.name}/>
          <PersonalData {...props}/>
          <Residence {...props}/>
          <Education {...props}/>
          <MaritalData {...props}/>
          <ChurchData {...props}/>
          <Job {...props}/>
          <Finance {...props}/>
          <HealthData {...props}/>
          <AdditionalQuestions {...props}/>
          <HowFindOut {...props}/>
        </Grid>
      </Grid>
    </Paper>
  );
};

Student.propTypes = {
  classes: PropTypes.object.isRequired,
  student: PropTypes.object,
  studentPhoto: PropTypes.string,
};

export default Student;
