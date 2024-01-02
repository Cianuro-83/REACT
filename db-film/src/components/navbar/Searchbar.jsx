// import React, { useState } from "react";

function Searchbar() {


  return (
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
  );
}

export default Searchbar;
