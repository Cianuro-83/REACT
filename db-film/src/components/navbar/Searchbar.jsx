import { useState } from "react";

function Searchbar( { addFilm } ) {
  const [searchTerm, setSearchTerm] = useState( "" );
  const [typingTimeout, setTypingTimeout] = useState( null );

  const handleChange = ( e ) => {
    const newSearchTerm = e.target.value;
    setSearchTerm( newSearchTerm );

    if ( typingTimeout ) {
      clearTimeout( typingTimeout );
    }

    setTypingTimeout(
      setTimeout( () => {

        if ( newSearchTerm.length >= 2 ) {
          addFilm( newSearchTerm );
        }
      }, 500 )
    );
  };

  const handleClick = ( e ) => {
    e.preventDefault();
    if ( searchTerm.length >= 2 ) {
      addFilm( searchTerm );
      setSearchTerm( "" );
    }
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
        disabled={ searchTerm.length < 3 }
      >
        Cerca
      </button>
    </form>
  );
}

export default Searchbar;
