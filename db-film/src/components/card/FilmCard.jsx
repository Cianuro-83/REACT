import React from 'react';

function FilmCard( { title, poster, uscita } ) {
  return (
    <div className='film-card'>
      <div className="card mt-5" style={ { width: '18rem' } }>
        <img src="..." className="card-img-top" alt={ poster } />
        <div className="card-body">
          <h5 className="card-title">{ title }</h5>
          <p className="">{ title }</p>

          <a href="#" className="btn btn-primary d-flex justify-content-center fw-bolder text-warning text-uppercase">Maggiori Informazioni</a>
        </div>
      </div>
    </div>
  );
}

export default FilmCard;