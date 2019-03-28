import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Typography from '@material-ui/core/Typography';
import { renderRadiosFromSchema } from '../../../utils/render';
import ReduxRadioGroup from '../ReduxRadioGroup';
import { percents } from '../../../schemas';

const Traits = ({ classes, friend }) => (
  <section className={classes.section}>
    <Typography variant="h6" className={classes.sectionTitle}>
      Будь ласка, оцініть абітурієнта в наступних сферах
    </Typography>

    <Typography variant="subtitle1" className={classes.question}>
      Повага до старших, до керівництва
    </Typography>
    <Field name="studentTraits.respectForElderly" component={ReduxRadioGroup}>
      { renderRadiosFromSchema(percents) }
    </Field>

    <Typography variant="subtitle1" className={classes.question}>
      Чесність і відкритість
    </Typography>
    <Field name="studentTraits.honestyAndOpenness" component={ReduxRadioGroup}>
      { renderRadiosFromSchema(percents) }
    </Field>

    <Typography variant="subtitle1" className={classes.question}>
      Доброзичливість
    </Typography>
    <Field name="studentTraits.goodwill" component={ReduxRadioGroup}>
      { renderRadiosFromSchema(percents) }
    </Field>

    <Typography variant="subtitle1" className={classes.question}>
      Вразливість
    </Typography>
    <Field name="studentTraits.vulnerability" component={ReduxRadioGroup}>
      { renderRadiosFromSchema(percents) }
    </Field>

    <Typography variant="subtitle1" className={classes.question}>
      Відповідальність у служінні
    </Typography>
    <Field name="studentTraits.ministryResponsibility" component={ReduxRadioGroup}>
      { renderRadiosFromSchema(percents) }
    </Field>

    <Typography variant="subtitle1" className={classes.question}>
      Бажання чинити все по-своєму
    </Typography>
    <Field name="studentTraits.doOwnWayDesire" component={ReduxRadioGroup}>
      { renderRadiosFromSchema(percents) }
    </Field>

    <Typography variant="subtitle1" className={classes.question}>
      Доводить розпочату справу до кінця
    </Typography>
    <Field name="studentTraits.completesTheBusiness" component={ReduxRadioGroup}>
      { renderRadiosFromSchema(percents) }
    </Field>

    <Typography variant="subtitle1" className={classes.question}>
      Поважає думки інших
    </Typography>
    <Field name="studentTraits.respectOthersOpinions" component={ReduxRadioGroup}>
      { renderRadiosFromSchema(percents) }
    </Field>

    <Typography variant="subtitle1" className={classes.question}>
      Негативно реагує на зауваження
    </Typography>
    <Field name="studentTraits.negativeFeedbackReaction" component={ReduxRadioGroup}>
      { renderRadiosFromSchema(percents) }
    </Field>

    <Typography variant="subtitle1" className={classes.question}>
      Здібність навчати інших
    </Typography>
    <Field name="studentTraits.teachOthers" component={ReduxRadioGroup}>
      { renderRadiosFromSchema(percents) }
    </Field>

    <Typography variant="subtitle1" className={classes.question}>
      Здібність вести за собою інших
    </Typography>
    <Field name="studentTraits.leadOthers" component={ReduxRadioGroup}>
      { renderRadiosFromSchema(percents) }
    </Field>

    <Typography variant="subtitle1" className={classes.question}>
      Охайність
    </Typography>
    <Field name="studentTraits.neatness" component={ReduxRadioGroup}>
      { renderRadiosFromSchema(percents) }
    </Field>

    <Typography variant="subtitle1" className={classes.question}>
      Рівень загальних знань
    </Typography>
    <Field name="studentTraits.generalKnowledge" component={ReduxRadioGroup}>
      { renderRadiosFromSchema(percents) }
    </Field>

    <Typography variant="subtitle1" className={classes.question}>
      Зрілість в розпорядженні фінансами
    </Typography>
    <Field name="studentTraits.financeSkill" component={ReduxRadioGroup}>
      { renderRadiosFromSchema(percents) }
    </Field>

    <Typography variant="subtitle1" className={classes.question}>
      Мудрість в управлінні сім&#39;єю
    </Typography>
    <Field name="studentTraits.familyManagementSkill" component={ReduxRadioGroup}>
      { renderRadiosFromSchema(percents) }
    </Field>

    <Typography variant="subtitle1" className={classes.question}>
      Здатність набувати друзів
    </Typography>
    <Field name="studentTraits.getNewFriendsSkill" component={ReduxRadioGroup}>
      { renderRadiosFromSchema(percents) }
    </Field>

    { friend &&
      <React.Fragment>
        <Typography variant="subtitle1" className={classes.question}>
          Емоційна стабільність
        </Typography>
        <Field name="studentTraits.emotionalStability" component={ReduxRadioGroup}>
          { renderRadiosFromSchema(percents) }
        </Field>
      </React.Fragment> }
  </section>
);

Traits.propTypes = {
  classes: PropTypes.object.isRequired,
  friend: PropTypes.bool,
};

export default Traits;
