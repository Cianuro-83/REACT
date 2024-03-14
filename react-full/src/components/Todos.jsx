import { useGetTodosQuery, useDeleteTodoMutation } from '../store/api/todosApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Todos = () => {
   const { data: todos = [], isError, error, isLoading } = useGetTodosQuery();
   console.log(todos);

   const [deleteTodo] = useDeleteTodoMutation();

   return (
      <div className="rfc-todos container">
         <h1>LISTA DEI TODO ({todos.length})</h1>
         <div className="add-button">
            <Link to="/create-todo">
               <button className="btn btn-success">ADD TODO</button>
            </Link>
         </div>
         {isLoading && <p>Loading...</p>}
         {isError && <p>{error.message}</p>}

         <ul className="">
            {todos &&
               todos.map((todo) => (
                  <li key={todo.id}>
                     <strong>{todo.completed ? 'DONE ' : 'PENDING '}</strong>
                     {todo.title}
                     <button
                        className="btn btn-danger m-2"
                        onClick={() => deleteTodo(todo.id)}
                     >
                        <FontAwesomeIcon icon={faTrash} />
                     </button>
                     <Link to={`/edit-todo/${todo.id}`}>
                        <button className="btn btn-warning m-2">
                           <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                     </Link>
                  </li>
               ))}
         </ul>
      </div>
   );
};

export default Todos;
