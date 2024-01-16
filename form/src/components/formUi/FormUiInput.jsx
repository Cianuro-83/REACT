import React from 'react';

const FormUiInput = ( { id, label, placeholder, value, onChange } ) => {
  return (
    <div>
      <div className='d-flex flex-column'>
        <label htmlFor={ id }>{ label }</label>
        <input
          className='border-3 border-gray p-2'
          id={ id }
          name={ id }
          type="text"
          placeholder={ placeholder }
          value={ value }
          onChange={ onChange } />
      </div>
    </div>
  );
};

export default FormUiInput;