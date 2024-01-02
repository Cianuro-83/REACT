import React, { useState } from "react";

function Searchbar( { addFilm } ) {
  const [searchTerm, setSearchTerm] = useState( "" );

  const handleClick = ( e ) => {
    e.preventDefault();
    addFilm( searchTerm );
  };

  const handleChange = ( e ) => {
    setSearchTerm( e.target.value );
  };

  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        name="search"
        placeholder="Cerca film"
        aria-label="Search"
        value={ searchTerm }
        onChange={ handleChange }
      />
      <button
        className="btn btn-outline-success fw-bolder text-uppercase"
        onClick={ handleClick }
      >
        Cerca
      </button>
    </form>
  );
}

export default Searchbar;
