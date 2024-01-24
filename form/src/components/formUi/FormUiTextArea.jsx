import React, { useState } from 'react';

const FormUiTextArea = ( { id, label, rows, placeholder, value, onChange, error, maxChars } ) => {
  const [remainingChars, setRemainingChars] = useState( maxChars );

  const calculateColor = () => {
    const percentage = ( remainingChars / 1000 ) * 100;

    if ( percentage > 20 ) {
      return 'default';
    } else if ( percentage <= 20 && percentage > 1 ) {
      return 'warning';
    } else {
      return 'danger';
    }
  };

  const calculateRemainingChars = ( inputValue ) => {
    const charsUsed = inputValue.length;
    const newRemainingChars = maxChars - charsUsed;
    setRemainingChars( newRemainingChars >= 0 ? newRemainingChars : 0 );
  };

  const handleInputChange = ( e ) => {
    const inputValue = e.target.value;

    if ( inputValue.length < value.length ) {
      calculateRemainingChars( inputValue );
      onChange( e );
    } else if ( remainingChars > 0 ) {
      calculateRemainingChars( inputValue );
      onChange( e );
    }
  };

  return (
    <div>
      <div className='d-flex flex-column'>
        <label className={ `fw-bolder ${error ? 'text-danger' : ''}` } htmlFor={ id }>
          { label }
          <span className={ `ms-2 text-${calculateColor()}` }>{ remainingChars }</span>
        </label>
        <textarea
          className={ `border-3 border-${calculateColor()} p-2 ${error ? 'border-danger border-4' : ''}` }
          id={ id }
          name={ id }
          type="text"
          placeholder={ placeholder }
          rows={ rows }
          value={ value }
          onChange={ handleInputChange }
        />
      </div>
      <div>
        { error && <p className='text-danger fw-bold'>{ error }</p> }
      </div>
    </div>
  );
};

export default FormUiTextArea;
