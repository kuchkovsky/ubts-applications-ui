import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Typography from '@material-ui/core/Typography';
import ReduxTextField from '../shared/ReduxTextField';

const FinanceInfo = ({ classes }) => (
  <section className={classes.section}>
    <Typography variant="h5" className={classes.sectionTitle}>
      Фінанси
    </Typography>
    <Typography variant="body2" className={classes.sectionSubtext} gutterBottom>
      Навчання в семінарії фінансується за рахунок добровільних пожертвувань церков та окремих
      християн. Але ми просимо, щоб кожен студент і/або церква, яка рекомендує студента, вносила
      добровільні пожертування за навчання. Добровільна пожертва за одну тижневу сесію буде
      визначатися в індивідуальному порядку для кожного студента, але становитиме не менше,
      ніж 800 гривень.
    </Typography>
    <Field
      name="financeComments"
      label="Коментарі, у разі наявності :)"
      variant="outlined"
      margin="normal"
      fullWidth
      component={ReduxTextField}
    />
  </section>
);

FinanceInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default FinanceInfo;
