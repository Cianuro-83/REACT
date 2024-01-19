import React from 'react';
import { resetForm } from './formUtility/formResetLogic';

const FormResetButton = ( { onReset, defaultValue, fileInputRef, formUIGroupRadioValues, formUIGroupCheckboxValues } ) => {
  const handleClick = () => {
    resetForm( defaultValue, fileInputRef, formUIGroupRadioValues, formUIGroupCheckboxValues, onReset );
  };

  return (
    <button
      type='reset'
      className="btn btn-danger"
      onClick={ handleClick }
      className="btn btn-danger text-uppercase fw-bold"
    >
      svuota form
    </button>
  );
};

export default FormResetButton;
