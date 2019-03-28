import React from 'react';
import FeedbackForm from '../shared/feedback/Form';
import HeaderInfo from './HeaderInfo';
import Fields from './Fields';

const Form = props => (
  <FeedbackForm headerInfo={HeaderInfo} fields={Fields} {...props}/>
);

export default Form;
