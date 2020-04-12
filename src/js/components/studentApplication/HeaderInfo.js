import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const HeaderInfo = ({ classes, registrationOpened }) => (
  <section className={classes.justify}>
    { !registrationOpened &&
      <Typography variant="h6" style={{ padding: '10px 0 20px 0', color: 'red' }}>
        Шановний абітурієнте! Подачу документів на вступ до УБТС завершено.
        Ви матимете можливість вступити до нашої семінарії наступного року.
        Божих Вам благословінь!
      </Typography>
    }
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
      **У разі виникнення будь-яких труднощів ви можете написати нам на
      електронну пошту <a href="mailto:new.student.ubts@gmail.com">new.student.ubts@gmail.com</a>.
      Ви отримаєте відповідь протягом трьох робочих днів
      <br/>
      ***У разі виникнення технічних питань, телефонуйте за номером&nbsp;
      <a href="tel:+380985963180">+380985963180</a>.
    </Typography>
  </section>
);

HeaderInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  registrationOpened: PropTypes.bool.isRequired,
};

export default HeaderInfo;
