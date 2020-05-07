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
    <Typography variant="body2" component="div" className={classes.sectionSubtext} gutterBottom>
      Навчання в семінарії фінансується за рахунок добровільних пожертвувань церков та окремих
      християн. Але ми просимо, щоб кожен студент і/або церква, яка рекомендує студента, вносила
      добровільні пожертування за навчання.
      <br/>
      <br/>
      У 2020/2021 навчальному році добровільна пожертва за <b>один рік навчання</b>,
      становитиме 6000 грн. Оплата відбувається 2 рази на рік по 3000 грн., але студент
      має можливість отримати знижку 10%,, якщо оплачувати одразу
      за весь рік. В такому випадку сума пожертви становитиме 5400 грн. при оплаті
      за весь рік на початку навчального року.
      <br/>
      * Для студентів <b>Пасторської програми</b>, у зв’язку з особливостями навчання, пожертвування
      складає 8000/7200 грн. відповідно двома чи однією частинами.
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
