import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const HeaderInfo = ({ classes, studentName }) => (
  <section className={classes.justify}>
    <Typography variant="h4" className={classes.sectionTitle} gutterBottom>
      Рекомендація друга
    </Typography>
    <Typography variant="h6" className={classes.sectionTitleInfo} gutterBottom>
      Цей документ має заповнити член церкви, який добре знає абітурієнта,
      але не має з ним родинних зв’язків
    </Typography>
    { !studentName &&
      <div className={classes.spinnerContainer}>
        <CircularProgress className={classes.spinner} size={60} disableShrink={true}/>
      </div> }
    { studentName &&
      <Typography variant="body1" component="div" gutterBottom>
        Абітурієнт <span className={classes.accentText}>{studentName}</span> вибрав Вас як людину,
        яка може дати об’єктивну оцінку його характеру, поведінки, духовного зростання,
        а також рекомендувати його на навчання в Українську Баптистську Теологічну Семінарію.
        Ми потребуємо Вашої допомоги, щоб точніше оцінити наших абітурієнтів. Будь ласка, чесно
        і щиро дайте відповіді на запитання, дані у цій анкеті, а також напишіть свою думку там, де
        це необхідно. Оскільки брат/сестра є претендентом на навчання в УБТС і звершення служіння
        на ниві Божій, для нас важливо знати позитивні та негативні сторони абітурієнта.
        Ми вдячні Вам за чесну оцінку претендента і розглянемо Вашу відповідь як конфіденційну.
        Усі форми документа не будуть доступні для абітурієнта.
      </Typography> }
  </section>
);

HeaderInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  studentName: PropTypes.string,
};

export default HeaderInfo;
