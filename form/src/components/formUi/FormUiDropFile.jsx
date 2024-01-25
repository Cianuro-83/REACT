import React, { useCallback, useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { useDropzone } from 'react-dropzone';
import upload from '../../assets/upload-file.svg';
import infoIicon from '../../assets/info.svg';

const FormUiDropFile = forwardRef( ( { onAddFiles, label, id, multiple, accept, maxSize, maxFiles, minFiles, campoRichiesto, infoNumFiles, infoTypeFiles, infoSizeFiles, infoExtFiles, onReset }, ref ) => {
  const [droppedFiles, setDroppedFiles] = useState( [] );
  const inputRef = useRef( null );

  const onDrop = useCallback( ( acceptedFiles ) => {
    setDroppedFiles(
      acceptedFiles.map( ( file ) =>
        Object.assign( file, {
          preview: URL.createObjectURL( file ),
        } )
      )
    );
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
    return () => droppedFiles.forEach( ( file ) => URL.revokeObjectURL( file.preview ) );
  }, [droppedFiles] );

  const resetDropFile = () => {
    setDroppedFiles( [] );
    if ( inputRef.current ) {
      inputRef.current.value = '';
    }
  };

  // Passa la funzione resetDropFile attraverso la ref
  useImperativeHandle( ref, () => ( {
    resetDropFile,
  } ) );

  return (
    <>
      <div className="accordion accordion-flush scb-info-upload" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              <p className='fw-bolder'>{ label }</p>
              <p className='scb-info-icon'><img src={ infoIicon } alt="" /></p>

            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="scb-accordion-body accordion-body bg-secondary">
              <h4 className='fw-bolder text-warning text-uppercase text-center'>come usare la DropZone e caricare in maniera corretta i file</h4>
              <ul>
                <li className='text-light'><span className='fw-bold'>- </span><span>I files posso essere caricati sia tramite Drag'n'drop sia tramite tendina di caricamento </span></li>
                <li className='text-light'><span className='fw-bold'>- </span><span>Per il caricamento dei files attenersi scrupolosamente ai requisiti presenti nella tabella sottostante </span></li>
                <li className='text-light'><span className='fw-bold'>- </span><span>Se in corrispondenza di Max File c'è un numero maggiore di 1, significa che è attivo il caricamento multiplo </span></li>
                <li className='text-light'><span className='fw-bold'>- </span><span>Ogni volta che si effettua un'azione di Drag'n'drop o scelta dei file i file precedentemente caricati verranno cancellati </span></li>
                <li className='text-light'><span className='fw-bold'>- </span><span>Se cercate di caricare un file ma non riuscite a selezionarlo, vuol dire che quel file non rispetta i requisiti minimi per essere caricato </span></li>
                <li className='text-light'><span className='fw-bold'>- </span><span>Se cercate di caricare un file ma al momento del rilascio nell'area del Drag'ndrop o dopo aver premuto il pulsante Apri dalla tendina di selezione, questi non sono visibili nella zona preview del box sottostante,  vuol dire che quel file o uno di quei file non rispetta i requisiti minimi per essere caricato </span></li>
                <li className='text-light'><span className='fw-bold'>- </span><span>I file caricati e correttamente validati per l'invio appariranno nell'area di preview del box sottostante. <span className='fw-bolder text-danger text-uppercase'>fare molta attenzione...</span>  solo i file presenti nell'area saranno inviati </span></li>
                <li className='text-light'><span className='fw-bold'>- </span><span>Ogni volta che si effettua un'azione di Drag'n'drop o scelta dei file i file precedentemente caricati verranno cancellati </span></li>

              </ul>

              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div { ...getRootProps() }>

        <div className='scb-drop'>
          <img src={ upload } className='scb-upload' alt='upload' />
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className='text-center'>Required</th>
                  <th scope="col" className='text-center'>Max File</th>
                  <th scope="col" className='text-center'>Type of File</th>
                  <th scope="col" className='text-center'>Max Size for File</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-center '>{ campoRichiesto }</td>
                  <td className='text-center '>{ infoNumFiles }</td>
                  <td className='text-center '><b>{ infoTypeFiles }</b> <br /><i>{ infoExtFiles }</i></td>
                  <td className='text-center '>{ infoSizeFiles }</td>
                </tr>
              </tbody>
            </table>
          </div>
          <input { ...getInputProps() } />
          { isDragActive ? (
            <h3 className='text-danger'>Sposta i file qui ...</h3>
          ) : (
            <>
              <p className='scb-drag-info'>
                Fai il <span className='fw-bold text-primary'>Drag'n'drop</span> dei tuoi file qui, oppure{ ' ' }
                <span className='btn bnt-small btn-secondary fw-bold '>Clicca qui</span> per selezionarli
              </p>
              <p className='info'>
                <i>Prima di caricare i file, clicca sull'icona delle <span className='fw-bold text-primary'>Info </span>in alto a destra del box per vedere l'esatta procedura corretta di caricamento</i>
              </p>
            </>
          ) }
          { droppedFiles.length > 0 && (
            <div>
              <p className='fw-bold text-dark'>Files caricati: <span className='fw-bolder text-danger'>{ droppedFiles.length }</span></p>
              <aside style={ { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' } }>
                { droppedFiles.map( ( file ) => (
                  <div key={ file.name } style={ { display: 'inline-flex', marginBottom: '8px', marginRight: '8px' } }>
                    <div style={ { display: 'flex', minWidth: 0, overflow: 'hidden', width: '100px', height: '100px' } }>
                      { file.type.startsWith( 'image/' ) ? (
                        // Se il tipo di file è un'immagine, mostra l'anteprima
                        <img
                          src={ file.preview }
                          style={ { display: 'block', width: 'auto', height: '100%' } }
                          onLoad={ () => {
                            URL.revokeObjectURL( file.preview );
                          } }
                        />
                      ) : (
                        // Altrimenti, mostra solo il nome del file
                        <p className="text-dark">{ file.name }</p>
                      ) }
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
} );

export { FormUiDropFile };  