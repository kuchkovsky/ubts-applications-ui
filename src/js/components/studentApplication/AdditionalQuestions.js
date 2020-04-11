import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Typography from '@material-ui/core/Typography';
import ReduxTextField from '../shared/ReduxTextField';

const AdditionalQuestions = ({ classes }) => (
  <section className={classes.section}>
    <Typography variant="h5" className={classes.sectionSubtitle}>
      Додаткові запитання
    </Typography>
    <Typography variant="body2" className={classes.sectionSubtext} gutterBottom>
      Своїми словами в довільній формі дайте розгорнуті відповіді на запитання
    </Typography>
    <Typography variant="subtitle1" className={classes.question}>
      Які причини спонукали вас до навчання у семінарії?
    </Typography>
    <Field
      name="reasonsToStudy"
      label="Ваша відповідь *"
      variant="outlined"
      margin="normal"
      fullWidth
      multiline
      component={ReduxTextField}
    />
    <Typography variant="subtitle1" className={classes.question}>
      Ваші очікування від навчання?
    </Typography>
    <Field
      name="studyExpectations"
      label="Ваша відповідь *"
      variant="outlined"
      margin="normal"
      fullWidth
      multiline
      component={ReduxTextField}
    />
    <Typography variant="subtitle1" className={classes.question}>
      Опишіть коротко як ви прийшли до Бога; етапи вашого духовного становлення
      та стосунки з Богом на даний момент:
    </Typography>
    <Field
      name="howCameToGod"
      label="Ваша відповідь *"
      variant="outlined"
      margin="normal"
      fullWidth
      multiline
      component={ReduxTextField}
    />
    <Typography variant="subtitle1" className={classes.question}>
      Яка богословська тема (теми) є найбільш складною (складними) для вашого розуміння?
    </Typography>
    <Field
      name="mostDifficultBibleTheme"
      label="Ваша відповідь *"
      variant="outlined"
      margin="normal"
      fullWidth
      multiline
      component={ReduxTextField}
    />
    <Typography variant="subtitle1" className={classes.question}>
    На які біблійно-богословські запитання або теми ви хотіли отримати відповіді під час навчання?
    </Typography>
    <Field
      name="answers"
      label="Ваша відповідь *"
      variant="outlined"
      margin="normal"
      fullWidth
      multiline
      component={ReduxTextField}
    />
    <Typography variant="subtitle1" className={classes.question}>
    Який останній текст Біблії торкнувся вас особисто і чому?
    </Typography>
    <Field
      name="lastVerseFromBible"
      label="Ваша відповідь *"
      variant="outlined"
      margin="normal"
      fullWidth
      multiline
      component={ReduxTextField}
    />
    <Typography variant="subtitle1" className={classes.question}>
    Яка остання проповідь на вас вплинула і чому?
    </Typography>
    <Field
      name="lastInterestingPreaching"
      label="Ваша відповідь *"
      variant="outlined"
      margin="normal"
      fullWidth
      multiline
      component={ReduxTextField}
    />
    <Typography variant="subtitle1" className={classes.question}>
    Чи прочитали ви Біблію повністю?
    </Typography>
    <Field
      name="didYouReadBible"
      label="Ваша відповідь *"
      variant="outlined"
      margin="normal"
      fullWidth
      multiline
      component={ReduxTextField}
    />
    <Typography variant="subtitle1" className={classes.question}>
    Чи є серед вашого оточення неспасенна людина, за яку ви постійно молитесь?
    </Typography>
    <Field
      name="prayForSomeone"
      label="Ваша відповідь *"
      variant="outlined"
      margin="normal"
      fullWidth
      multiline
      component={ReduxTextField}
    />
    <Typography variant="subtitle1" className={classes.question}>
    В яких місіонерських, євангелізаційних проектах-служіннях ви приймали участь
    протягом останніх двох років? Коротко опишіть вашу працю
    </Typography>
    <Field
      name="missions"
      label="Ваша відповідь *"
      variant="outlined"
      margin="normal"
      fullWidth
      multiline
      component={ReduxTextField}
    />
    <Typography variant="subtitle1" className={classes.question}>
    Коли останній раз ви розповідали комусь про Христа, і де це було?
    </Typography>
    <Field
      name="whenYouToldAboutChrist"
      label="Ваша відповідь *"
      variant="outlined"
      margin="normal"
      fullWidth
      multiline
      component={ReduxTextField}
    />
    <Typography variant="subtitle1" className={classes.question}>
    Чи знаєте ви свої духовні дари?
    </Typography>
    <Field
      name="spiritGifts"
      label="Ваша відповідь *"
      variant="outlined"
      margin="normal"
      fullWidth
      multiline
      component={ReduxTextField}
    />
    <Typography variant="subtitle1" className={classes.question}>
    Що у вас найкраще виходить в церковному служінні?
    </Typography>
    <Field
      name="bestInChurch"
      label="Ваша відповідь *"
      variant="outlined"
      margin="normal"
      fullWidth
      multiline
      component={ReduxTextField}
    />
    <Typography variant="subtitle1" className={classes.question}>
    Чи є у вас наставник, з яким ви можете щиро поспілкуватись? Хто це?
    </Typography>
    <Field
      name="mentor"
      label="Ваша відповідь *"
      variant="outlined"
      margin="normal"
      fullWidth
      multiline
      component={ReduxTextField}
    />
    <Typography variant="subtitle1" className={classes.question}>
    Хто найбільше вплинув на ваше духовне формування? Яким чином?
    </Typography>
    <Field
      name="mainInfluencer"
      label="Ваша відповідь *"
      variant="outlined"
      margin="normal"
      fullWidth
      multiline
      component={ReduxTextField}
    />
  </section>
);

AdditionalQuestions.propTypes = {
  classes: PropTypes.object.isRequired,
  programName: PropTypes.string,
};

export default AdditionalQuestions;
