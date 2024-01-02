import Menubar from './Menubar';
import Searchbar from './Searchbar';

function Navbar() {
  return (
    <div className='scb-navbar container-fluid'>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <Menubar />
          <Searchbar />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;