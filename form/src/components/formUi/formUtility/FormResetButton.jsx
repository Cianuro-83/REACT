
import React, { useState, useRef } from 'react';
import { resetForm } from './formResetLogic';

const FormResetButton = ( { onReset, defaultValue, formUIGroupRadioValues, formUIGroupCheckboxValues } ) => {
  const [droppedFiles, setDroppedFiles] = useState( [] );
  const inputRef = useRef( null );

  const [files, setFiles] = useState( null );

  const handleClick = () => {

    resetForm( defaultValue, formUIGroupRadioValues, formUIGroupCheckboxValues, onReset, setFiles );
  };

  return (
    <button
      type='reset'
      className="btn btn-danger text-uppercase fw-bold"
      onClick={ handleClick }
    >
      svuota form
    </button>
  );
};

export default FormResetButton;
