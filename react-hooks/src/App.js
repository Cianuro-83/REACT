import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const photoUrl = 'https://jsonplaceholder.typicode.com/photos';
  const albumUrl = 'https://jsonplaceholder.typicode.com/albums';
  const userUrl = 'https://jsonplaceholder.typicode.com/users';
  const [photos, setPhotos] = useState( [] );
  const [albums, setAlbums] = useState( [] );
  const [users, setUsers] = useState( [] );
  const [userSelected, setUserSelected] = useState( 1 );
  const [albumSelected, setAlbumSelected] = useState( 1 );
  //Per avere una similitudine con i componenti tipo classe, viene scatenato con i componenti componentDidMount e componentDidUpdate.
  // il return equivale al componentWillUnmount
  useEffect( () => {
    const getPhoto = async () => {
      const url = albumSelected ? photoUrl + '?albumId=' + albumSelected : photoUrl;
      const photos = await fetch( url ).then( res => res.json() );
      setPhotos( photos );
    };
    if ( albumSelected ) {
      getPhoto();
    };

  }, [albumSelected] );

  useEffect( () => {
    const getAlbums = async () => {
      const url = userSelected ? albumUrl + '?userId=' + userSelected : albumUrl;
      const albums = await fetch( url ).then( res => res.json() );
      setAlbums( albums );
    };
    getAlbums();

  }, [userSelected] );

  useEffect( () => {
    const getUsers = async () => {
      const users = await fetch( userUrl ).then( res => res.json() );
      setUsers( users );
    };
    getUsers();

  }, [] );
  const manageChangeUser = ( { target } ) => {
    setUserSelected( +target.value );
  };
  const manageChangeAlbum = ( { target } ) => {
    setAlbumSelected( +target.value );
  };
  const Opt = ( { id, name, userId, title } ) => {
    const selectedOpt = id === ( userId ? albumSelected : userSelected ) ? 'selected' : 'null';
    const optName = userId ? title : name;
    return (
      <option selected={ selectedOpt } value={ id } key={ id } >
        { optName }
      </option >
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ALBUMS</h1>
        <form className='gallery'>
          <div>
            <label htmlFor="users"> USER
              <select name="users" id="users" onChange={ manageChangeUser } value={ userSelected }>
                <option value="">SELECT</option>
                {
                  users.map( a => <Opt { ...a } /> )
                }
              </select>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="albums"> ALBUM
              <select name="albums" id="albums" onChange={ manageChangeAlbum } value={ albumSelected }>
                <option value="">SELECT</option>
                {
                  albums.map( a => <Opt { ...a } /> )
                }
              </select>
            </label>
          </div>
        </form>
        <ul className='photos'>
          {
            photos.map( photo =>
              <li key={ photo.id }>
                <img src={ photo.thumbnailUrl } title={ photo.title } alt={ photo.title } />
              </li>
            )
          }
        </ul>
      </header>

    </div>
  );
}

export default App;
