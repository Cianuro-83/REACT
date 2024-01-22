const FormUiSelectFile = ( { id, handleFiles, multiple, accept, maxSize, required, } ) => {
  return (
    <div className='scb-film-select'>
      <label htmlFor={ id }>{ multiple ? 'Seleziona i files da caricare' : 'Seleziona il file da caricare' }:</label>
      <input
        type="file"
        className="form-control"
        id={ id }
        name={ id }
        onChange={ ( e ) => handleFiles( e, maxSize ) }
        multiple={ multiple }
        accept={ accept }
        required={ required }
      />
    </div>
  );
};

export default FormUiSelectFile;
