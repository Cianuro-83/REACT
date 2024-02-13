import { Navigate, useNavigate, useParams } from 'react-router-dom';
import albums from '../data';

const DettaglioAlbum = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate( -1 );
  };

  const album = albums.find( album => album.id.toString() === ( id ) );
  if ( !album ) {
    return <Navigate to="/not-found" />;
  }
  return (
    <div className='container'>
      <h1>
        DettaglioAlbum { album.title }
      </h1>
      <button onClick={ handleClick }>TORNA INDIETRO</button>
    </div>
  );
};

export default DettaglioAlbum;