import React from 'react';
import ReduxRadioButton from '../components/shared/ReduxRadioButton';

export const renderRadiosFromSchema = schema =>
  Object.keys(schema).map(key => (
    <ReduxRadioButton value={schema[key]} key={key}/>
  ));

export const renderRadiosFromKeyValueSchema = schema =>
  Object.keys(schema).map(key => (
    <ReduxRadioButton value={schema[key].value} label={schema[key].key} key={key}/>
  ));
