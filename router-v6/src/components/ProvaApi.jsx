import { useState } from 'react';
import { useDeleteTodoMutation, useGetMessagesQuery, useUpdateTodoMutation } from '../api/messageApi';
import CrudUpdate from './CrudUpdate';
import CrudPost from './CrudPost';

const ProvaApi = () => {
  const { data: messages, error, isError, isLoading } = useGetMessagesQuery();
  const [deleteTodo] = useDeleteTodoMutation();
  const [updatedTodo] = useUpdateTodoMutation(); // Utilizza la mutazione useUpdateTodoMutation

  const [selectedTodo, setSelectedTodo] = useState( null );

  const handleEditClick = ( todo ) => {
    setSelectedTodo( todo );
  };

  return (
    <>
      <h3>ProvaApi GET</h3>
      { isLoading && <div>Loading...</div> }
      { isError && <div>Error: { error.message }</div> }
      <ul>
        { messages && messages.map( todo =>
          <li key={ todo.id }>
            <h4>{ todo.id }</h4>
            <p>{ todo.title }</p>
            <input
              type="checkbox"
              id={ todo.id }
              checked={ todo.completed || false }
              onChange={ ( e ) => {
                updatedTodo( {
                  ...todo,
                  completed: e.target.checked
                } );
                console.log( e.target.checked );
              } }
            />
            <label htmlFor="{todo.id}">completed</label>
            <button className='btn btn-danger m-2' onClick={ () => deleteTodo( todo.id ) }>Cancella</button>
            <button className='btn btn-warning' onClick={ () => handleEditClick( todo ) }>Modifica</button>
          </li>
        ) }
      </ul>

      <hr />
      <h3>ProvaApi POST</h3>

      <CrudPost />
      <br />
      <hr />

      { selectedTodo &&
        <>
          <h3>ProvaApi UPDATE</h3>
          <CrudUpdate todo={ selectedTodo } updatedTodo={ updatedTodo } />
        </>
      }
    </>
  );
};

export default ProvaApi;
