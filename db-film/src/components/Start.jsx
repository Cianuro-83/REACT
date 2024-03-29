import Navbar from './navbar/Navbar';
import { useFetch } from '../utility/useFetch';
import FilmCard from './card/FilmCard';
import Loader from './loader/loader';
import { useState } from 'react';
import FilmDetail from './card/FilmDetail';



function Start() {
  const api = 'https://www.omdbapi.com';
  const apiKey = process.env.API_KEY;
  console.log( "API KEY:", apiKey, "API URL:", api );
  const apiParam = '&s=';
  const [apiSearch, setApiSearch] = useState( 'coliandro' );
  const apiUrl = `${api}${apiKey}${apiParam}${apiSearch}`;
  const { data, loading, error } = useFetch( apiUrl );
  const [filmSelezionato, setFilmSelezionato] = useState( 'tt1556087' );
  const addSearch = ( search, filmId ) => {
    setApiSearch( search );
    setFilmSelezionato( filmId );
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
            onSelectFilm={ ( filmId ) => addSearch( apiSearch, filmId ) }
          />
        ) ) }
      </div>
      <FilmDetail film={ filmSelezionato } />
    </div>
  );
}

export default Start;
