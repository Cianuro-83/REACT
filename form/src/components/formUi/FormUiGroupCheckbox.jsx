
import { useEffect, useState } from 'react';
import FormUiCheckbox from './FormUiCheckbox';

const FormUiGroupCheckbox = ( { values, onChange, title } ) => {
  const [selected, setSelected] = useState( [] );
  useEffect( () => {
    onChange( selected );
  }, [selected] );
  const handleChange = ( e ) => {
    const target = e.target;
    const val = target.value;
    const checked = target.checked;
    const parseVal = parseInt( val, 0 );

    if ( !checked ) {
      setSelected( selected.filter( ( item ) => item !== parseVal ) );
      return;
    }

    setSelected( [...selected, parseVal] );
  };
  return (
    <div>
      <p>{ title }</p>
      <div className='scb-checkbox-grid'>
        { values.map( ( chechkbox, i ) => <FormUiCheckbox
          key={ i }
          id={ chechkbox.value }
          label={ chechkbox.label }
          description={ chechkbox.description }
          value={ chechkbox.value }
          onChange={ handleChange } />
        ) }
      </div>
    </div>
  );
};

export default FormUiGroupCheckbox;;