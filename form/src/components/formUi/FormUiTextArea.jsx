import React, { useState } from 'react';

const FormUiTextArea = ( { id, label, rows, placeholder, value, onChange, error } ) => {
  const [remainingChars, setRemainingChars] = useState( 1000 );

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

  const handleInputChange = ( e ) => {
    const inputValue = e.target.value;
    const charsUsed = inputValue.length;
    const newRemainingChars = 1000 - charsUsed;

    setRemainingChars( newRemainingChars );
    onChange( e ); // Chiamata alla funzione di onChange per aggiornare il valore del textarea nel componente padre
  };

  return (
    <div>
      <div className='d-flex flex-column'>
        <label className={ `fw-bolder ${error ? 'text-danger' : ''}` } htmlFor={ id }>
          { label }
          <span className={ `ms-2 text-${calculateColor()}` }>{ remainingChars }</span>
        </label>
        <textarea
          className={ `border-3 border-${calculateColor} p-2 ${error ? 'border-danger border-4' : ''}` }
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
