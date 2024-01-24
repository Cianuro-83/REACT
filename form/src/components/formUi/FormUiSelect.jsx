const FormUiSelect = ( { id, label, values, onChange, defaultValue, selectFakeValue, error } ) => {
  return (
    <div>
      <div className='d-flex flex-column'>
        <label className={ `fw-bolder ${error ? 'text-danger' : ''}` } htmlFor={ id }>{ label }</label>
        <select
          className={ `border-3 border-gray p-2 ${error ? 'border-danger border-4' : ''}` }
          name={ id }
          id={ id }
          defaultValue={ defaultValue }
          onChange={ onChange }
        >
          {/* Se non presente il DefaultValue lo setto a 0 */ }
          <option value="0">{ selectFakeValue }</option>

          { values.map( ( val, i ) => (
            <option key={ i } value={ val.value }>
              { val.label }
            </option>
          ) ) }
        </select>
      </div>
      { error && <p className='text-danger fw-bold'>{ error }</p> }
    </div>
  );
};

export default FormUiSelect;
