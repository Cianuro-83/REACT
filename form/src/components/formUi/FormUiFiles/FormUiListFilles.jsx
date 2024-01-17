const FormUiListFiles = ( { files, handleRemoveFile } ) => {

  return (
    <div className='scb-file-list'>
      <p className='fw-bolder '>Lista File caricati</p>
      { files && files.length > 0 && (
        <ul >
          { files.map( ( file, i ) => (
            <li
              key={ file.name }
              className='ss'
            >
              <button

                onClick={ () => handleRemoveFile( file.name ) }
              >
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
