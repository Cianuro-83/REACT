const FormUiInput = ( { id, label, placeholder, type, value, onChange, error } ) => {
  return (
    <div>
      <div className='d-flex flex-column'>
        <label className={ `fw-bolder ${error ? 'text-danger' : ''}` } htmlFor={ id }>{ label }</label>
        <input
          className={ `border-3 border-gray p-2 ${error ? 'border-danger border-4' : ''}` }
          id={ id }
          name={ id }
          type={ type }
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