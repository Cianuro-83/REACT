import { useEffect, useState } from 'react';
import Pagination from './Pagination';

const Table = () => {
  const [personaggi, setPersonaggi] = useState( [] );
  const [infoPage, setInfoPage] = useState( {} );
  const [currentPage, setCurrentPage] = useState( 0 );
  const perPage = 20;

  const getList = ( page, url ) => {
    let uri =
      page === null
        ? url
        : `https://rickandmortyapi.com/api/character/?page=${page}&_limit=${perPage}`;
    fetch( uri )
      .then( ( res ) => res.json() )
      .then( ( data ) => {
        setPersonaggi( data.results );
        setInfoPage( data.info );
        console.log( data );
      } );
  };


  useEffect( () => {
    getList( 1 );
  }, [] );

  const handlePageChange = ( selectedPage ) => {
    setCurrentPage( selectedPage );
    getList( selectedPage + 1 );
  };
  return (
    <><table className="table table table-striped">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">IMAGINE</th>
          <th scope="col">NOME</th>
          <th scope="col">SPECIE</th>
          <th scope="col">GENERE</th>
        </tr>
      </thead>
      <tbody>
        { personaggi?.map( ( personaggio ) => (
          <tr key={ personaggio.id } >
            <th scope="row">{ personaggio.id }</th>
            <td>
              <img src={ personaggio.image } alt={ personaggio.name } className='img-table' />
            </td>
            <td>{ personaggio.name }</td>
            <td>{ personaggio.species }</td>
            <td>{ personaggio.gender }</td>
          </tr>
        ) ) }

      </tbody>
    </table>
      <Pagination
        pageCount={ Math.ceil( infoPage.count / perPage ) }
        currentPage={ currentPage }
        onPageChange={ handlePageChange }
        containerClassName="pagination justify-content-center mb-3"
      />
    </>
  );
};

export default Table;