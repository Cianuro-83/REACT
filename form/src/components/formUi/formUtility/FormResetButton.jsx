import React from 'react';
import { resetForm } from './formResetLogic';

const FormResetButton = ( { onReset, defaultValue, formUIGroupRadioValues, formUIGroupCheckboxValues, } ) => {
  const handleClick = () => {
    resetForm( defaultValue, formUIGroupRadioValues, formUIGroupCheckboxValues, onReset );
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
