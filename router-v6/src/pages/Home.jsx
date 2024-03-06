import { Link, NavLink } from 'react-router-dom';
import albums from '../data';
import ProvaApi from '../components/ProvaApi';
import CrudPost from '../components/CrudPost';
import CrudUpdate from '../components/CrudUpdate';

const Home = () => {
  return (
    <div className='container'>
      <h1>
        Home <hr />
      </h1>
      <p>LINK</p>
      <div className='d-flex justify-content-center gap-4'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
      </div>
      <br /><br /><br /><br />
      <hr />
      <p>NAVLINK</p>
      <div className='d-flex justify-content-center gap-4'>
        <NavLink className={ ( { isActive } ) => isActive ? 'active-link' : 'null' } to="/">Home</NavLink>
        <NavLink className={ ( { isActive } ) => isActive ? 'active-link' : 'null' } to="/about">About</NavLink>
        <NavLink className={ ( { isActive } ) => isActive ? 'active-link' : 'null' } to="/contacts">Contacts</NavLink>

      </div>
      <hr />
      <div>
        <h2>PROVA API</h2>
        <ProvaApi />


      </div>
      <hr />
      <div>
        <h2>ALBUM</h2>
        <ul>
          { albums.map( ( album ) => (
            <li key={ album.id }>
              <Link to={ `/dettaglio-album/${album.id}` }>{ album.title }</Link>
            </li>
          ) ) }
        </ul>
      </div>


    </div>
  );
};

export default Home;