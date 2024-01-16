import React from 'react';

const FormUiHeader = ( { title, subtitle } ) => {
  return (
    <div className='border p-3'>
      <h3>{ title }</h3>
      <p>{ subtitle }</p>

    </div>
  );
};

export default FormUiHeader;