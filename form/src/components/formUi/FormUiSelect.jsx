

const FormUiSelect = ( { id, label, values, onChange, defaultValue } ) => {
  return (
    <div>
      <div className='d-flex flex-column'>
        <label className='fw-bolder' htmlFor={ id }>{ label }</label>
        <select
          name={ id }
          id={ id }
          defaultValue={ defaultValue }
          onChange={ onChange }
        >
          { values.map( ( val, i ) => <option key={ i } value={ val.value }>{ val.label }</option> ) }

        </select>
      </div>
    </div>
  );
};

export default FormUiSelect;