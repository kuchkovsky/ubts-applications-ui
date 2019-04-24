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
      У 2019/2020 навчальному році добровільна пожертва за <b>один рік навчання</b>, який включає
      в себе <b>шість</b> стаціонарних сесій тривалістю п’ять днів, <b>одну</b> онлайн сесію та
      &nbsp;<b>один</b> курс з менторства становитиме 6600 грн. Оплата відбувається 6 разів на рік
      по 1100 грн., але студент має можливість отримати знижки, якщо оплачувати одразу за весь
      семестр чи за весь рік.
      <br/>
      В такому випадку сума пожертви становитиме:
      <ul>
        <li>5500 грн. при оплаті за весь рік на початку навчального року;</li>
        <li>6000 грн. при оплаті двома частинами по 3000 грн. на початку кожного семестру.</li>
      </ul>
      * Для студентів <b>Пасторської програми</b>, у зв’язку з особливостями навчання, пожертвування
      складає 8400/7500/8000 грн. відповідно шістьма, однією та двома частинами.
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
