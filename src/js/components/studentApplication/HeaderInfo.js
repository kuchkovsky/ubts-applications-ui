import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const HeaderInfo = ({ classes }) => (
  <section className={classes.justify}>
    <Typography variant="body1" gutterBottom>
      Для того, щоб заповнити цю анкету, будь ласка, спочатку підготуйте скан-копії або фото
      в добрій якості таких документів: паспорт (перша, друга сторінки та сторінка з пропискою),
      ідентифікаційний номер, ваше портретне фото, диплом (в разі відсутності - атестат про повну
      загальну середню освіту) та додаток до нього, а також медичну довідку форми 086-у.
    </Typography>
    <Typography variant="body2" gutterBottom>
      *Для переходу на анкету ПРМЛ, оберіть нижче у списку
      &quot;Програма розвитку молодих лідерів&quot;.
      Це партнерська програма між УБТС та регіональними біблійними коледжами.
      Студенти ПРМЛ є одночасно студентами і семінарії, і коледжів.
    </Typography>
    <Typography variant="body2" gutterBottom>
      **У разі виникнення будь-яких труднощів ви можете звернутись за телефоном 0989228321.
    </Typography>
  </section>
);

HeaderInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default HeaderInfo;
