import React from 'react';

const FormUiHeader = ( { classBox, classTitle, title, subtitle } ) => {
  return (
    <div className={ classBox }>
      <h3 className={ classTitle }>{ title }</h3>
      <p>{ subtitle }</p>

    </div>
  );
};

export default FormUiHeader;