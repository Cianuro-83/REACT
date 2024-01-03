
import { useFetch } from '../../utility/useFetch';


function FilmDetail( { film } ) {
  const apiUrl = film ? `https://www.omdbapi.com/?apikey=4cb9def9&i=${film}` : null;
  const { data } = useFetch( apiUrl );

  return (
    <div className="modal fade scb-modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={ -1 } aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header scb-modal-title">
            <h5 className="modal-title text-uppercase" id="staticBackdropLabel">{ data?.Title }</h5>
            <button type="button" className="btn-close bg-danger" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body scb-modal-body">
            <p className='d-flex'><span>- &nbsp;</span><span className='fw-bolder'>Nazionalità:&nbsp; &nbsp;</span><p>{ data?.Country }</p> </p>
            <p className='d-flex'><span>- &nbsp;</span><span className='fw-bolder'>Genere:&nbsp; &nbsp;</span><p>{ data?.Genre }</p> </p>
            <p className='d-flex'><span>- &nbsp;</span><span className='fw-bolder'>Attori:&nbsp; &nbsp;</span><p>{ data?.Actors }</p> </p>
            <p className='d-flex'><span>- &nbsp;</span><span className='fw-bolder'>Rating:&nbsp; &nbsp;</span><p>{ data?.Ratings[0].Value } (fonte: { data?.Ratings[0].Source })</p> </p>
            <p className='d-flex'><span>- &nbsp;</span><span className='fw-bolder'>Trama:&nbsp; &nbsp;</span><p className='scb-trama'>{ data?.Plot }</p> </p>
          </div>
          <div className="modal-footer scb-modal-footer">
            <button type="button" className="btn  fw-bolder text-uppercase  bg-danger" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default FilmDetail;
