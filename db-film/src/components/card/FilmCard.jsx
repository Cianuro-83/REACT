
function FilmCard( { title, poster, uscita, id, type } ) {
  return (
    <div className='scb-film-card'>
      <div className="card mt-5" >
        <div className="card-header text-center text-uppercase fw-bolder text-success">
          { title }
        </div>
        <img src={ poster } className="card-img-top" alt={ poster } />
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