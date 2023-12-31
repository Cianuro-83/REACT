import Navbar from './navbar/Navbar';

import { useFetch } from '../utility/useFetch';
import FilmCard from './card/FilmCard';

function Start() {
  const api = 'https://www.omdbapi.com?apikey=4cb9def9';
  const apiParam = '&s=commando';
  console.log( api + apiParam );
  const { data, loading, error } = useFetch( api + apiParam );
  return (
    <div className='scb-start'>
      <Navbar />
      <div className="contenuto container">

        <h1 className="text-center">Cianuro's Films</h1>
        { data && data.Search.map( ( film ) => (
          <FilmCard
            key={ film.imdbID }
            title={ film.Title }
            poster={ film.Poster }
            uscita={ film.Year }
          />
        ) ) }
      </div>

      <div>
        <ul>
          { loading && <li>Error: { error }</li> }
          { loading && <li>loading...</li> }
          { data && data.Search.map( ( film ) => (
            <li key={ film.imdbID }>{ film.Title }</li>
          ) ) }
        </ul>
      </div>



    </div>
  );
}

export default Start;