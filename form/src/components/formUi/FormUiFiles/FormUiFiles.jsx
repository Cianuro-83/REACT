import React, { useEffect, useState } from 'react';
import FormUiSelectFile from './FormUiSelectFile';
import FormUiListFiles from './FormUiListFilles';
import Upload from '../../../assets/upload-file.svg';

const FormUiFiles = ( { id, label, onAddFiles } ) => {
  const [files, setFiles] = useState( [] );

  useEffect( () => {
    onAddFiles( files );
  }, [files] );

  const handleFiles = ( e ) => {
    const fileList = e.target.files;
    setFiles( [...files, ...Array.from( fileList )] );
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
      <p className='fw-bolder '>{ label }</p>
      <div className="scb-upload-box">
        <img src={ Upload } alt="" />
        <div>
          {/* // per file singoli ()vedi o bottone carica o la lista */ }
          { !visibleSelectFile() && (
            <FormUiSelectFile id={ id } handleFiles={ handleFiles } />
          ) }
          { visibleSelectFile() && (
            <FormUiListFiles files={ files } handleRemoveFile={ handleRemoveFile } />
          ) }
        </div>
        {/* PER FILE MULTIPLI (VEDI SIA CARICA CHE LISTA)
      <div>
        <FormUiSelectFile id={ id } handleFiles={ handleFiles } />
        <FormUiListFiles files={ files } handleRemoveFile={ handleRemoveFile } />
      </div> */}
      </div>

    </>
  );
};

export default FormUiFiles;