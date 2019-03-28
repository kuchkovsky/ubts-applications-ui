import { change } from 'redux-form/immutable';

export const DATE_FORMAT = 'DD.MM.YYYY';

export const YEAR_FORMAT = 'YYYY';

export const handleNestedRadios = (schema, formName, dispatch, nestedRadioField) =>
  e => {
    if (e.target.tagName === 'INPUT') {
      const radioValue = e.target.value;
      const parentKey = Object.keys(schema).find(key => schema[key].name === radioValue);
      if (parentKey) {
        const nestedRadioValues = schema[parentKey].values;
        if (nestedRadioValues) {
          const firstNestedRadioValue = nestedRadioValues[Object.keys(nestedRadioValues)[0]];
          dispatch(change(formName, nestedRadioField, firstNestedRadioValue));
        } else {
          dispatch(change(formName, nestedRadioField, null));
        }
      }
    }
  };
