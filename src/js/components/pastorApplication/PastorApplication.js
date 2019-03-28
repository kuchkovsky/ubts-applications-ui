import React from 'react';
import Application from '../shared/feedback/Application';
import Form from '../../containers/pastorApplication/Form';

const PastorApplication = props => (
  <Application form={Form} {...props}/>
);

export default PastorApplication;
