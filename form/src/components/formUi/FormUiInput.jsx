const FormUiInput = ( { id, label, placeholder, value, onChange, error } ) => {
  return (
    <div>
      <div className='d-flex flex-column'>
        <label className='fw-bolder' htmlFor={ id }>{ label }</label>
        <input
          className={ `border-3 border-gray p-2 ${error ? 'border-danger border-4' : ''}` }
          id={ id }
          name={ id }
          type="text"
          placeholder={ placeholder }
          value={ value }
          onChange={ onChange }
        />
      </div>
      { error && <p className='text-danger fw-bold'>{ error }</p> }
    </div>
  );
};

export default FormUiInput;