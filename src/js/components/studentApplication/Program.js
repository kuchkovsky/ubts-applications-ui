import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import ReduxRadioGroup from '../shared/ReduxRadioGroup';
import ReduxRadioButton from '../shared/ReduxRadioButton';
import { programs } from '../../schemas/studentApplication';

const Program = ({ classes, programName, handleNestedRadios }) => (
  <section className={classes.section}>
    <Typography variant="h6" className={classes.sectionTitle}>
      За якою програмою бажаєте навчатися?
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
      </div>
    ))}
  </section>
);

Program.propTypes = {
  classes: PropTypes.object.isRequired,
  programName: PropTypes.string,
  handleNestedRadios: PropTypes.func.isRequired,
};

export default Program;
