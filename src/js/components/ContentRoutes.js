import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import RequireAuth from '../containers/RequireAuth';
import SignIn from '../containers/signIn/SignIn';
import {
  HOME,
  STUDENT_APPLICATION,
  PASTOR_APPLICATION,
  FRIEND_APPLICATION,
  STUDENTS,
  SIGN_IN,
} from '../utils/routes';
import Main from './Main';
import StudentApplication from '../containers/studentApplication/StudentApplication';
import PastorApplication from '../containers/pastorApplication/PastorApplication';
import FriendApplication from '../containers/friendApplication/FriendApplication';
import StudentList from '../containers/StudentList';
import StudentViewer from '../containers/StudentViewer';

const SecuredStudentList = RequireAuth(StudentList);
const SecuredStudentViewer = RequireAuth(StudentViewer);

const ContentRoutes = ({ authenticated }) => (
  <Switch>
    <Route exact path={HOME} component={Main}/>
    <Route exact path={STUDENT_APPLICATION} component={StudentApplication}/>
    <Route exact path={`${PASTOR_APPLICATION}/:id`} component={PastorApplication}/>
    <Route exact path={`${FRIEND_APPLICATION}/:id`} component={FriendApplication}/>
    <Route exact path={STUDENTS} component={SecuredStudentList}/>
    <Route exact path={`${STUDENTS}/:id`} component={SecuredStudentViewer}/>
    <Route exact path={SIGN_IN} render={() => (
      authenticated ? (
        <Redirect to={HOME}/>
      ) : (
        <SignIn/>
      )
    )}/>
    <Redirect to={HOME} />
  </Switch>
);

ContentRoutes.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

export default ContentRoutes;
