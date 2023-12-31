
function Navbar() {
  return (
    <div className='scb-navbar container-fluid'>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand fw-bolder text-warning"><i>Cianuro's Films</i></a>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Cerca film" aria-label="Search" />
            <button className="btn btn-outline-success fw-bolder text-uppercase" type="submit">cerca</button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;