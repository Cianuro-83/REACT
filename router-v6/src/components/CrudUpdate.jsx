import { useForm } from 'react-hook-form';
import { useUpdateTodoMutation } from '../api/messageApi';

const CrudUpdate = ( { todo } ) => {
  const [updateTodo] = useUpdateTodoMutation();
  const { register, handleSubmit, reset, formState: { errors } } = useForm( { defaultValues: todo } );

  const onSubmit = handleSubmit( data => {
    updateTodo( data );
    reset();
  } );

  return (
    <>
      <div>CrudUpdate: Modifica</div>
      <form onSubmit={ onSubmit }>
        {/* id */ }
        <input type="hidden" { ...register( "id" ) } />

        {/* title */ }
        <label htmlFor="title">TITOLO</label>
        <input
          type="text"
          className={ errors.title ? 'input-error' : '' }
          { ...register( 'title', {
            required: 'Il Titolo è richiesto',
            minLength: { value: 2, message: 'Il Titolo è troppo corto, min 2 caratteri' },
            maxLength: { value: 50, message: 'Il Titolo è troppo lungo, max 50 caratteri' }
          } ) }
        />
        { errors.title && <p className="form-error">{ errors.title.message }</p> }

        {/* completed */ }
        <label>
          <input type="checkbox" { ...register( 'completed' ) } />
          Task completato
        </label>

        <button type="submit">Aggiorna</button>
      </form>
    </>
  );
};

export default CrudUpdate;
