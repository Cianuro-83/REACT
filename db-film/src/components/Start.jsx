import Navbar from './navbar/Navbar';
import './start.scss';
import { useFetch } from '../utility/useFetch';
import FilmCard from './card/FilmCard';

function Start() {
  const { data, loading, error } = useFetch( "indirizzo url dell'end point" );
  return (
    <div className='scb-start'>
      <Navbar />
      <div className="contenuto container">

        <h1 className="text-center">Cianuro's Films</h1>
        <FilmCard
          title="ciao"
          poster="ciao"
          uscita="ciao"
        />
      </div>


    </div>
  );
}

export default Start;