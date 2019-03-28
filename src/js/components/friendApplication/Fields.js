import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import ReduxRadioGroup from '../shared/ReduxRadioGroup';
import { renderRadiosFromSchema } from '../../utils/render';
import {
  howWellKnowStudent,
  churchManagementRelationship as churchManagementRelationshipSchema,
  personalRecommendation,
} from '../../schemas/pastorApplication';
import QuestionField from '../shared/QuestionField';
import Traits from '../shared/feedback/Traits';
import ReduxBooleanRadioGroup from '../shared/ReduxBooleanRadioGroup';

const Fields = ({
  classes,
  involvedInChurch,
  churchManagementRelationship,
}) => (
  <section className={classes.section}>
    <Typography variant="h5" className={classes.sectionTitle}>
      Список питань
    </Typography>

    <Typography variant="subtitle1" className={classes.question}>
      Як довго ви знайомі з абітурієнтом?
    </Typography>
    <QuestionField name="howLongKnowEachOther"/>

    <Typography variant="subtitle1" className={classes.question}>
      Як добре ви знаєте абітурієнта?
    </Typography>
    <Field name="howWellKnowStudent" component={ReduxRadioGroup}>
      { renderRadiosFromSchema(howWellKnowStudent) }
    </Field>

    <Typography variant="subtitle1" className={classes.question}>
      На вашу думку, чи є у абітурієнта особисте посвячення Ісусу Христу,
      і як він його проявляє в житті?
    </Typography>
    <QuestionField name="jesusDedication" multiline/>

    <Typography variant="subtitle1" className={classes.question}>
      Які сильні сторони абітурієнта Ви могли б назвати?
    </Typography>
    <QuestionField name="strongCharacterTraits" multiline/>

    <Typography variant="subtitle1" className={classes.question}>
      В яких сферах, на вашу думку, йому/їй необхідний розвиток?
    </Typography>
    <QuestionField name="areasThatNeedDevelopment" multiline/>

    <Typography variant="subtitle1" className={classes.question}>
      Чи залучений абітурієнт в життя церкви?
    </Typography>
    <ReduxBooleanRadioGroup name="involvedInChurch"/>
    <Collapse in={involvedInChurch}>
      <QuestionField name="churchMinistryArea" label="У яких сферах? *"/>
    </Collapse>

    <Typography variant="subtitle1" className={classes.question}>
      На вашу думку, чи проявляє абітурієнт які-небудь виняткові здібності або таланти?
    </Typography>
    <QuestionField name="extraordinaryTalents" multiline/>

    <Typography variant="subtitle1" className={classes.question}>
      Чи є у нього які-небудь якості (звички), які не відповідають біблійним принципам?
    </Typography>
    <QuestionField name="nonCanonicalHabits" multiline/>

    <Typography variant="subtitle1" className={classes.question}>
      Як до абітурієнта відносяться його друзі та церква?
    </Typography>
    <QuestionField name="friendsAndChurchAttitude" multiline/>

    { involvedInChurch &&
      <React.Fragment>
        <Typography variant="subtitle1" className={classes.question}>
          Які взаємостосунки з керівництвом церкви?
        </Typography>
        <Field name="churchManagementRelationship" component={ReduxRadioGroup}>
          { renderRadiosFromSchema(churchManagementRelationshipSchema) }
        </Field>
        <Collapse in={churchManagementRelationship === churchManagementRelationshipSchema.other}>
          <QuestionField name="otherChurchManagementRelationship" label="Які саме? *"/>
        </Collapse>
      </React.Fragment> }

    <Typography variant="subtitle1" className={classes.question}>
      Які особливі обставини можуть позитивно або негативно вплинути на навчання
      та служіння абітурієнта?
    </Typography>
    <QuestionField name="possibleNegativeSpecialCircumstances" multiline/>

    <Traits classes={classes} friend/>

    <Typography variant="subtitle1" className={classes.question}>
      Ваша рекомендація для приймальної комісії:
    </Typography>
    <Field name="personalRecommendation" component={ReduxRadioGroup}>
      { renderRadiosFromSchema(personalRecommendation) }
    </Field>

    <Typography variant="subtitle1" className={classes.question}>
      Чому ми повинні прийняти/не прийняти на навчання цього брата/сестру?
    </Typography>
    <QuestionField name="whyBanThisStudent" multiline/>

    <QuestionField name="name" label="Ваше П.І.Б. *"/>
    <QuestionField name="position" label="Посада/служіння *"/>
    <QuestionField name="address" label="Адреса *"/>
    <QuestionField name="phone" label="Телефон *"/>
    <QuestionField name="email" label="E-mail *"/>

    <Typography variant="subtitle1" className={classes.question}>
      Ви б хотіли отримати більше інформації про УБТС?
    </Typography>
    <ReduxBooleanRadioGroup name="readyForMoreInformation"/>
  </section>
);

Fields.propTypes = {
  classes: PropTypes.object.isRequired,
  involvedInChurch: PropTypes.bool,
  churchManagementRelationship: PropTypes.string,
};

export default Fields;
