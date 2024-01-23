import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import upload from '../../assets/upload-file.svg';

const FormUiDropFile = ( { onAddFiles, label, id, multiple, accept, maxSize, maxFiles, error, minFiles, info } ) => {
  const [droppedFiles, setDroppedFiles] = useState( [] );

  const onDrop = useCallback( ( acceptedFiles ) => {
    setDroppedFiles(
      acceptedFiles.map( ( file ) =>
        Object.assign( file, {
          preview: URL.createObjectURL( file ),
        } )
      )
    );
    // Passa i file al genitore tramite la callback
    onAddFiles( acceptedFiles );
  }, [onAddFiles] );

  const { getRootProps, getInputProps, isDragActive } = useDropzone( {
    onDrop,
    minFiles: minFiles,
    maxFiles: maxFiles,
    multiple: multiple,
    accept: accept,
    maxSize: maxSize,
    id: id,
  } );

  useEffect( () => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => droppedFiles.forEach( ( file ) => URL.revokeObjectURL( file.preview ) );
  }, [droppedFiles] );

  return (
    <>
      <div className="accordion accordion-flush scb-info-upload" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              <p className='fw-bolder'>{ label }</p>
              <p className='scb-info-icon'>I</p>

            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
          </div>
        </div>
      </div>



      <div { ...getRootProps() }>

        <div className='scb-drop'>
          <img src={ upload } className='scb-upload' alt='upload' />
          <input { ...getInputProps() } />
          { isDragActive ? (
            <p>Sposta i file qui ...</p>
          ) : (
            <>
              <p className='scb-drag-info'>
                Fai il <span className='fw-bold text-primary'>Drag'n'drop</span> dei tuoi file qui, oppure{ ' ' }
                <span className='btn bt-small btn-secondary fw-bold '>Clicca qui</span> per selezionarli
              </p>
              <p className='info'>
                <i>{ info }</i>
              </p>
            </>
          ) }

          { droppedFiles.length > 0 && (
            <div>
              <p className='fw-bold text-secondary'>Files caricati:</p>
              <aside style={ { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' } }>
                { droppedFiles.map( ( file ) => (
                  <div key={ file.name } style={ { display: 'inline-flex', marginBottom: '8px', marginRight: '8px' } }>
                    <div style={ { display: 'flex', minWidth: 0, overflow: 'hidden', width: '100px', height: '100px' } }>
                      <img
                        src={ file.preview }
                        style={ { display: 'block', width: 'auto', height: '100%' } }
                        onLoad={ () => {
                          URL.revokeObjectURL( file.preview );
                        } }
                      />
                    </div>
                  </div>
                ) ) }
              </aside>
            </div>
          ) }
        </div>
      </div>
    </>
  );
};

export default FormUiDropFile;
