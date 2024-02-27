import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ( { pageCount, currentPage, onPageChange, containerClassName } ) => {
  const handlePageClick = ( selectedPage ) => {
    onPageChange( selectedPage );
  };

  return (
    <div className=''>
      <ReactPaginate
        previousLabel="<< "
        nextLabel=" >>"
        breakLabel="..."
        pageCount={ pageCount }
        marginPagesDisplayed={ 2 }
        pageRangeDisplayed={ 6 }
        onPageChange={ ( selectedPage ) => handlePageClick( selectedPage.selected ) }
        forcePage={ currentPage }
        containerClassName={ containerClassName }
        pageClassName="page-item"
        pageLinkClassName='page-link'
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName='page-link'
        activeClassName="active"
      />
    </div>
  );
};

export default Pagination;
