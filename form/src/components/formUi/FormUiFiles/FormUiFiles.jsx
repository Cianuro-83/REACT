import React, { useEffect, useState } from 'react';
import FormUiSelectFile from './FormUiSelectFile';
import FormUiListFiles from './FormUiListFilles';
import Upload from '../../../assets/upload-file.svg';
import { validateFile } from '../formUtility/validateForm';

const FormUiFiles = ( { id, label, onAddFiles, multiple, fileType, maxFileSize, setFileError, required, error } ) => {
  const [files, setFiles] = useState( [] );
  const [fileError, setLocalFileError] = useState( null );

  useEffect( () => {
    onAddFiles( files );
  }, [files] );

  const handleFiles = ( e ) => {
    const fileList = e.target.files;
    const newFiles = Array.from( fileList );

    // Validazione dei file;
    const errors = newFiles.reduce( ( acc, file ) => {
      const fileErrors = validateFile( file, fileType, maxFileSize );
      if ( Object.keys( fileErrors ).length > 0 ) {
        acc.push( `Errore nel caricamento del file ${file.name}: ${fileErrors.type || ''} ${fileErrors.size || ''}` );
      }
      return acc;
    }, [] );

    if ( errors.length > 0 ) {
      // Ci sono errori nei file, imposta lo stato di errore
      setLocalFileError( errors.join( '\n' ) );
      setFileError( errors.join( '\n' ) );
    } else {

      setLocalFileError( null );
      setFileError( null );
      setFiles( [...files, ...newFiles] );
    }
  };

  const handleRemoveFile = ( name ) => {
    const newFiles = files.filter( ( file ) => file.name !== name );
    setFiles( newFiles );
  };

  const visibleSelectFile = () => {
    return files && files.length > 0;
  };

  return (
    <>
      <p className='fw-bolder'>{ label }</p>
      <div className={ `scb-upload-box  ${error ? 'border border-danger border-4' : ''} ${fileError ? 'border border-danger border-4' : ''}` }>

        <img src={ Upload } alt="" />

        <div>
          { !multiple ? (
            <div>
              { !visibleSelectFile() && (
                <FormUiSelectFile id={ id } required={ required } handleFiles={ handleFiles } />
              ) }
              { visibleSelectFile() && (
                <FormUiListFiles files={ files } handleRemoveFile={ handleRemoveFile } />
              ) }
            </div>
          ) : (
            <div>
              { files.length > 0 && visibleSelectFile() ? (
                <>
                  <FormUiSelectFile id={ id } required={ required } handleFiles={ handleFiles } multiple={ multiple } />
                  <FormUiListFiles files={ files } handleRemoveFile={ handleRemoveFile } />
                </>
              ) : (
                <FormUiSelectFile id={ id } handleFiles={ handleFiles } multiple={ multiple } />
              ) }
            </div>
          ) }
        </div>
      </div>

      { fileError && (
        <p className=" fw-bold text-danger mt-2">{ fileError }</p>
      ) }
      <p className=" fw-bold text-danger mt-2">{ error }</p>
    </>
  );
};

export default FormUiFiles;
