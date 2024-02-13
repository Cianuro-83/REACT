import { Link, NavLink } from 'react-router-dom';

const Contacts = () => {
  return (
    <div className='container'>
      <h1>
        CONTATTI <hr />
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

    </div>
  );
};

export default Contacts;