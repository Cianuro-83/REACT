import Menubar from './Menubar';
import Searchbar from './Searchbar';

function Navbar( { addSearch } ) {
  const addFilm = ( search ) => {
    addSearch( search );

  };
  return (
    <div className='scb-navbar container-fluid'>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <Menubar />
          <Searchbar addFilm={ addFilm } />


          {/* <div className="scb-searchbox">
            <form className="d-flex" >
              <input
                className="form-control me-2"
                type="search"
                name="search"
                placeholder="Cerca film"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success fw-bolder text-uppercase"
                type="submit"
              >
                cerca
              </button>
            </form>
          </div> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;