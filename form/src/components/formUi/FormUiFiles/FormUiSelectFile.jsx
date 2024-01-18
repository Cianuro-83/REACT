const FormUiSelectFile = ( { id, handleFiles, multiple } ) => {
  return (
    <div className='scb-film-select'>
      <label htmlFor={ id }>{ multiple ? "Seleziona i files da caricare" : "Seleziona il file da caricare" }:</label>

      <input
        type="file"
        className="form-control"
        id={ id }
        name={ id }
        onChange={ handleFiles }
        multiple={ multiple }
      />
    </div>
  );
};

export default FormUiSelectFile;
