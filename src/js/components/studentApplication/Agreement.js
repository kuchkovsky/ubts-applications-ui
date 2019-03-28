import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Typography from '@material-ui/core/Typography';
import ReduxCheckbox from '../shared/ReduxCheckbox';

const Agreement = ({ classes }) => (
  <section className={classes.section}>
    <Field
      name="agree"
      label={
        <Typography component="div" variant="body1" className={classes.agreement}>
          <ul>
            <li>На всі запитання в даній анкеті я відповідаю чесно та відкрито.</li>
            <li>
              Усвідомлюю, що надання недостовірної інформації веде до автоматичного
              незарахування або відрахування з семінарії.
            </li>
            <li>Приймаю умови, пов&#39;язані з фінансовими питаннями.</li>
            <li>
              Ознайомлений із&nbsp;
              <a href="http://ubts.org.ua/about-us/creed/" target="_blank" rel="noopener noreferrer">
                віровченням семінарії
              </a>
              &nbsp;та зобов’язуюсь поважати цю позицію.
            </li>
          </ul>
        </Typography>
      }
      component={ReduxCheckbox}
    />
  </section>
);

Agreement.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Agreement;
