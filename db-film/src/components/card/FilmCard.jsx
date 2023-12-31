import React from 'react';

function FilmCard( { title, poster, uscita } ) {
  return (
    <div className='scb-film-card'>
      <div className="card mt-5" >
        <div className="card-header text-center text-uppercase fw-bolder">
          { title }
        </div>
        <img src="..." className="card-img-top" alt={ poster } />
        <div className="card-body">
          <h5 className="card-title mb-4">Anno: { uscita }</h5>


          <a href="#" className="btn btn-primary d-flex justify-content-center fw-bolder text-warning text-uppercase">Maggiori Informazioni</a>
        </div>
      </div>
    </div>
  );
}

export default FilmCard;