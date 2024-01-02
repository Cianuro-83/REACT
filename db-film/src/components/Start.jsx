import Navbar from './navbar/Navbar';
import { useFetch } from '../utility/useFetch';
import FilmCard from './card/FilmCard';
import Loader from './loader/loader';

function Start() {
  const api = 'https://www.omdbapi.com?apikey=4cb9def9';
  const apiParam = '&s=commando';
  const { data, loading, error } = useFetch( api + apiParam );
  return (
    <div className='scb-start'>
      <Navbar />
      <div className="contenuto container">

        <h1 className="text-center">Cianuro's Films</h1>
        <div>
          { error && <p className='scb-error'><span>Error:</span> { error.message }</p> }
          { loading && <Loader /> }
        </div>
        <div className='scb-card d-flex flex-wrap gap-5 justify-content-center'>
          { data && data.Search.map( ( film ) => (
            <FilmCard
              key={ film.imdbID }
              title={ film.Title }
              poster={ film.Poster }
              uscita={ film.Year }
              id={ film.imdbID }
              type={ film.Type }
            />
          ) ) }
        </div>
      </div>
    </div>
  );
}
export default Start;