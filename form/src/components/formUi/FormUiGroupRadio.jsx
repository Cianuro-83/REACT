import React from 'react';
import FormUiRadio from './FormUiRadio';

const FormUiGroupRadio = ( { values, onChange, title, nameGroup } ) => {
  return (
    <div>
      <p>{ title }</p>
      <div className='scb-checkbox-grid'>
        { values.map( ( radio, i ) => (
          <div key={ i }>
            <FormUiRadio
              id={ radio.id }
              name={ nameGroup }
              label={ radio.label }
              description={ radio.description }
              value={ radio.value }
              onChange={ onChange }
            />
          </div>
        ) ) }
      </div>
    </div>
  );
};

export default FormUiGroupRadio;
