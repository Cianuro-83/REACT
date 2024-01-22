import React from 'react';
import FormUiRadio from './FormUiRadio';

const FormUiGroupRadio = ( { values, onChange, title, nameGroup, error } ) => {
  return (
    <div>
      <p className={ `fw-bolder ${error ? 'text-danger' : ''}` }>{ title }</p>
      <div className={ `scb-checkbox-grid p-2 ${error ? 'border border-danger border-4' : ''}` }>
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
      { error && <p className='text-danger fw-bold'>{ error }</p> }
    </div>
  );
};

export default FormUiGroupRadio;
