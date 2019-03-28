import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import {
  churchMinistryType as churchMinistryTypeSchema,
} from '../../../schemas/studentApplication';
import ReduxRadioGroup from '../../shared/ReduxRadioGroup';
import { renderRadiosFromSchema } from '../../../utils/render';
import ReduxTextField from '../../shared/ReduxTextField';

const ChurchMinistryType = props => {
  const { classes, churchMinistryType } = props;
  return (
    <section className={classes.section}>
      <Typography variant="subtitle1" className={classes.question}>
        Яке служіння ви звершуєте?
      </Typography>
      <Field name="churchMinistry.type" component={ReduxRadioGroup}>
        { renderRadiosFromSchema(churchMinistryTypeSchema) }
      </Field>
      <Collapse in={churchMinistryType === churchMinistryTypeSchema.other}>
        <Field
          name="churchMinistry.otherType"
          label="Назва служіння *"
          variant="outlined"
          margin="normal"
          fullWidth
          component={ReduxTextField}
        />
      </Collapse>
    </section>
  );
};

ChurchMinistryType.propTypes = {
  classes: PropTypes.object.isRequired,
  churchMinistryType: PropTypes.string,
};

export default ChurchMinistryType;
