import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import App from './components/App';
import history from './utils/history';
import theme from './theme';
import store from './configs/redux';
import setupAxios from './configs/axios';
import './configs/filepond';
import './configs/history';
import { checkRegistrationStatus } from './actions';

setupAxios(store);
checkRegistrationStatus(store);

render((
  <Provider store={store}>
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <App/>
      </MuiThemeProvider>
    </Router>
  </Provider>
), document.getElementById('root'));
