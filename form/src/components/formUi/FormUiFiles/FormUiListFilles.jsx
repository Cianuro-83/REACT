const FormUiListFiles = ( { files, handleRemoveFile } ) => {
  const isMultipleFiles = files && files.length > 1;

  return (
    <div className='scb-file-list'>
      <p className='fw-bolder'>
        { isMultipleFiles ? (
          <>
            Lista File caricati:
            <span className='text-warning fw-bolder fs-5'>{ files.length }</span>
          </>
        ) : (
          'Lista File caricati'
        ) }
      </p>

      { files && files.length > 0 && (
        <ul className={ isMultipleFiles ? 'scb-multiple-files' : '' }>
          { files.map( ( file, i ) => (
            <li key={ file.name } className='ss'>
              <button onClick={ () => handleRemoveFile( file.name ) }>
                🗑️
              </button>
              { file.name }
            </li>
          ) ) }
        </ul>
      ) }
    </div>
  );
};

export default FormUiListFiles;
