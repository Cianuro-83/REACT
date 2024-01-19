
import { useEffect, useState } from 'react';
import FormUiCheckbox from './FormUiCheckbox';

const FormUiGroupCheckbox = ( { values, onChange, title, error } ) => {
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
      <p className={ `fw-bolder ${error ? 'text-danger' : ''}` }>{ title }</p>



      <div className={ `scb-checkbox-grid p-2 ${error ? 'border border-danger border-4' : ''}` }>
        { values.map( ( chechkbox, i ) => <FormUiCheckbox
          key={ i }
          id={ chechkbox.value }
          label={ chechkbox.label }
          description={ chechkbox.description }
          value={ chechkbox.value }
          onChange={ handleChange } />
        ) }
      </div>
      { error && <p className='text-danger fw-bold'>{ error }</p> }
    </div>

  );
};

export default FormUiGroupCheckbox;