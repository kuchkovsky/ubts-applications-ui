import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import ReduxRadioGroup from '../shared/ReduxRadioGroup';
import ReduxRadioButton from '../shared/ReduxRadioButton';
import { programs, onlinePrograms, womenPrograms } from '../../schemas/studentApplication';

const Program = ({ classes, programName, handleNestedRadios }) => (
  <section className={classes.section}>
    <Typography variant="h6" className={classes.sectionTitle}>
      За якою програмою бажаєте навчатися?
    </Typography>
    <br></br>
    <Typography variant="h6" className={classes.sectionTitle}>
      МОДУЛЬНЕ навчання. 5 стаціонарних сесій, 2 онлайн сесії на рік + особисте менторство.
    </Typography>
    { Object.keys(programs).map(key => (
      <div key={key}>
        <Field name="program.name" component={ReduxRadioGroup}>
            [<ReduxRadioButton value={programs[key].name} onClick={handleNestedRadios}/>]
        </Field>
        { programs[key].values &&
          <Collapse in={programName === programs[key].name}>
            <div>
              <Field name="program.info" component={ReduxRadioGroup}
                className={classes.nestedRadioGroup}>
                { Object.keys(programs[key].values).map(value => (
                  <ReduxRadioButton
                    value={programs[key].values[value]}
                    onClick={handleNestedRadios}
                    key={value}
                  />
                )) }
              </Field>
            </div>
          </Collapse> }
      </div>))}
      <br></br>
    <Typography variant="h6" className={classes.sectionTitle}>
      New! ОНЛАЙН навчання: 5 онлайн сесій на рік + менторство в групі.
    </Typography>
    { Object.keys(onlinePrograms).map(key => (
      <div key={key}>
        <Field name="program.name" component={ReduxRadioGroup}>
            [<ReduxRadioButton value={onlinePrograms[key].name} onClick={handleNestedRadios}/>]
        </Field>
        { onlinePrograms[key].values &&
          <Collapse in={programName === onlinePrograms[key].name}>
            <div>
              <Field name="program.info" component={ReduxRadioGroup}
                className={classes.nestedRadioGroup}>
                { Object.keys(onlinePrograms[key].values).map(value => (
                  <ReduxRadioButton
                    value={onlinePrograms[key].values[value]}
                    onClick={handleNestedRadios}
                    key={value}
                  />
                )) }
              </Field>
            </div>
          </Collapse> }
      </div>))}
      <br></br>
      <Typography variant="h6" className={classes.sectionTitle}>
      New! Школа Менторства і Коучингу для дівчат та жінок. 5 сесій: 2 стаціонарні і 3 онлайн 
    </Typography>
    { Object.keys(womenPrograms).map(key => (
      <div key={key}>
        <Field name="program.name" component={ReduxRadioGroup}>
            [<ReduxRadioButton value={womenPrograms[key].name} onClick={handleNestedRadios}/>]
        </Field>
        { womenPrograms[key].values &&
          <Collapse in={programName === womenPrograms[key].name}>
            <div>
              <Field name="program.info" component={ReduxRadioGroup}
                className={classes.nestedRadioGroup}>
                { Object.keys(womenPrograms[key].values).map(value => (
                  <ReduxRadioButton
                    value={womenPrograms[key].values[value]}
                    onClick={handleNestedRadios}
                    key={value}
                  />
                )) }
              </Field>
            </div>
          </Collapse> }
      </div>))}
  </section>
);

Program.propTypes = {
  classes: PropTypes.object.isRequired,
  programName: PropTypes.string,
  handleNestedRadios: PropTypes.func.isRequired,
};

export default Program;
