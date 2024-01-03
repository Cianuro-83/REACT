import Navbar from './navbar/Navbar';
import { useFetch } from '../utility/useFetch';
import FilmCard from './card/FilmCard';
import Loader from './loader/loader';
import { useState } from 'react';

function Start() {
  const api = 'https://www.omdbapi.com?apikey=4cb9def9';
  const apiParam = '&s=';
  const [apiSearch, setApiSearch] = useState( 'coliandro' );
  const { data, loading, error } = useFetch( `${api}${apiParam}${apiSearch}` );
  console.log( useFetch );

  const addSearch = ( search ) => {
    setApiSearch( search );
  };


  return (
    <div className='scb-start'>
      <Navbar addSearch={ addSearch } />
      <div className="contenuto container">

        <h1 className="text-center">Cianuro's Film</h1>

        { data && data.Response === 'True' ? (
          <p className="scb-info text-uppercase fs-3">
            { `Risultati trovati:  ${data.Search && Array.isArray( data.Search ) ? data.Search.length : '0'}` }
          </p>
        ) : (
          <div className='d-flex flex-column scb-noFilm'>
            <img className='rounded-circle mb-4'
              src="https://thumbs.dreamstime.com/b/movie-theme-element-15753676.jpg"
              alt=""
            />
            <p className="scb-error text-center fs-1 fw fw-bolder text-uppercase">Nessun film trovato</p>
          </div>
        ) }

        { error && <p className='scb-error'><span>Error:</span> { error.message }</p> }
        { loading && <Loader /> }
      </div>

      <div className='scb-card d-flex flex-wrap gap-5 justify-content-center'>
        { data && data.Search && Array.isArray( data.Search ) && data.Search.map( ( film ) => (
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
  );
}

export default Start;
