import React from 'react';
import Form from '../../containers/friendApplication/Form';
import Application from '../shared/feedback/Application';

const FriendApplication = props => (
  <Application form={Form} {...props}/>
);

export default FriendApplication;
