
function FilmCard( { title, poster, uscita, id, type } ) {
  return (
    <div className='scb-film-card'>
      <div className="card mt-5" >
        <div className="card-header text-center text-uppercase fw-bolder text-success">
          { title }
        </div>
        { poster !== 'N/A' ? (
          <img src={ poster } className="card-img-top" alt={ poster } />
        ) : (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019"
            className="card-img-top"
            alt="Immagine non disponibile"
          />
        ) }
        <div className="card-body">
          <h5 className="card-title mb-4">Anno: { uscita }</h5>
          <h5 className="card-title mb-4">Tipo: { type }</h5>
          <a href="#" className="btn btn-primary d-flex justify-content-center fw-bolder text-warning text-uppercase">Maggiori Informazioni</a>
        </div>
      </div>
    </div>
  );
}

export default FilmCard;