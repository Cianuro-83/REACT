import React from 'react';

const FormModal = ( { formData, showModal, handleModalClose } ) => {
  return (
    showModal && Object.keys( formData ).length !== 0 && (
      <div className="modal fade" id="exampleModal" tabIndex={ -1 } aria-labelledby="inviaForm" aria-hidden="true">
        <div className="modal-dialog modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="inviaForm">Stai per inviare i seguenti dati:</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <p><span className='grassetto'>Nome:</span> { formData.nome }</p>
              <p><span className='grassetto'>Email:</span> { formData.email }</p>
              <p><span className='grassetto'>Password:</span> { formData.password }</p>
              <p><span className='grassetto'>Data di Nascita:</span> { formData.dataDiNasita }</p>
              <p><span className='grassetto'>Nazione:</span> { formData.nazione }</p>
              { formData.nazione === "es" && <p><span className='grassetto'>Regione:</span> { formData.regione }</p> }
              <div>
                <span className='grassetto'>Servizi:</span>
                <ul>
                  { formData.servizi && formData.servizi.map( ( service ) => (
                    <li key={ service }>{ service }</li>
                  ) ) }
                </ul>
              </div>
              <p><span className='grassetto'>Messaggio:</span> { formData.messaggio }</p>
              <div>
                <span className='grassetto'>Allegati:</span>
                <ul>
                  { Array.from( formData.fotoprofilo ).map( ( file, index ) => (
                    <li key={ index }>{ file.name }</li>
                  ) ) }
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={ handleModalClose } data-bs-dismiss="modal">
                Torna Indietro
              </button>
              <button type="button" className="btn btn-primary">Invia</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default FormModal;
