import React from 'react';

const FormUiTextArea = ( { id, label, rows, placeholder, value, onChange } ) => {
  return (
    <div>
      <div className='d-flex flex-column'>
        <label htmlFor={ id }>{ label }</label>
        <textarea
          className='border-3 border-gray p-2'
          id={ id }
          name={ id }
          type="text"
          placeholder={ placeholder }
          rows={ rows }
          value={ value }
          onChange={ onChange } />
      </div>
    </div>
  );
};


export default FormUiTextArea;