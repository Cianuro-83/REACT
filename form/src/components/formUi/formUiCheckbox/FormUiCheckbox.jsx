import React from 'react';

const FormUiCheckbox = ( { id, label, value, onChange, description, } ) => {
  return (
    <div>
      <div className='scb-checkbox-allineament'>
        <input
          className='me-2 border-3 border-gray p-2'
          id={ id }
          name={ id }
          type="checkbox"
          value={ value }
          onChange={ onChange } />
        <div>
          <label htmlFor={ id }>{ label }</label>
          <p className='scb-description-checkbox'>{ description }</p>
        </div>
      </div>
    </div>
  );
};

export default FormUiCheckbox;