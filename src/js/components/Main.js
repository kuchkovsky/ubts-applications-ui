import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';

const Main = ({ admin, registrationOpened, changeRegistrationStatus }) => (
  <div>
    <Typography variant="h3" color="inherit">
      UBTS Applications Home Page
    </Typography>
    { admin &&
      <Grid container justify="center" style={{ paddingTop: 50 }}>
        <FormControl component="fieldset">
          <Typography variant="h6" color="inherit" style={{ marginLeft: 25 }}>
            Налаштування
          </Typography>
          <Grid container>
            <Typography variant="subtitle1" color="inherit" style={{ marginTop: 10 }}>
              Реєстрацію відкрито
            </Typography>
            <Switch
              color="primary"
              checked={registrationOpened}
              value={true}
              onChange={() => changeRegistrationStatus(!registrationOpened)}
            />
          </Grid>
        </FormControl>
      </Grid>
    }
  </div>
);

Main.propTypes = {
  admin: PropTypes.bool,
  registrationOpened: PropTypes.bool.isRequired,
  changeRegistrationStatus: PropTypes.func.isRequired,
};

export default Main;
