const FormUiSelectFile = ( { id, handleFiles } ) => {

  return (
    <div className='scb-film-select'>
      <label for={ id }>Seleziona il file da caricare:</label>

      <input
        type="file"
        className="form-control "
        id={ id }
        name={ id }
        onChange={ handleFiles }
      />


    </div>
  );
};

export default FormUiSelectFile;