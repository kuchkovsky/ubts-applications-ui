import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const HeaderInfo = ({ classes, studentName }) => (
  <section className={classes.justify}>
    <Typography variant="h4" className={classes.sectionTitle} gutterBottom>
      Рекомендація пастора
    </Typography>
    <Typography variant="h6" className={classes.sectionTitleInfo} gutterBottom>
      Пасторська рекомендація для абітурієнта
    </Typography>
    { !studentName &&
      <div className={classes.spinnerContainer}>
        <CircularProgress className={classes.spinner} size={60} disableShrink={true}/>
      </div> }
    { studentName &&
      <Typography variant="body1" component="div" gutterBottom>
        Абітурієнт <span className={classes.accentText}>{studentName}</span> подає
        документи для навчання в Українській Баптистській Теологічній Семінарії
        і просить Вас надати рекомендацію.
        У зв&#39;язку з біблійною основою духовної освіти і підготовкою майбутніх служителів
        церкви УБТС надає велике значення характеристиці-рекомендації церкви в особі пастора
        або іншого керівника. Тому просимо Вас з усією відповідальністю підійти до заповнення
        даної рекомендації, щоб у всьому була виявлена слава Божа. Дякуємо за допомогу.
      </Typography> }
  </section>
);

HeaderInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  studentName: PropTypes.string,
};

export default HeaderInfo;
