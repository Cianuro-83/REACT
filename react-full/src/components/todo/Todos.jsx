import {
   useGetTodosQuery,
   useDeleteTodoMutation,
   useUpdateTodoMutation,
} from '../../store/api/todosApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Todos = () => {
   const { data: todos = [], isError, error, isLoading } = useGetTodosQuery();
   const [updateTodo] = useUpdateTodoMutation();
   const [deleteTodo] = useDeleteTodoMutation();

   const toggleCompleted = (id) => {
      const todoToUpdate = todos.find((todo) => todo.id === id);
      if (todoToUpdate) {
         updateTodo({ ...todoToUpdate, completed: !todoToUpdate.completed });
      }
   };

   return (
      <div className="rfc-todos container">
         <h2 className="text-center">
            LISTA DEI TODO DA FARE (
            {todos.filter((todo) => !todo.completed).length})
         </h2>
         <div className="add-button">
            <Link to="/create-todo">
               <button className="btn btn-success">ADD TODO</button>
            </Link>
         </div>
         {isLoading && <p>Loading...</p>}
         {isError && <p>{error.message}</p>}

         <ul className="">
            {todos &&
               todos.map(
                  (todo) =>
                     !todo.completed && (
                        <li key={todo.id}>
                           <input
                              className="me-3"
                              type="checkbox"
                              checked={todo.completed}
                              onChange={() => toggleCompleted(todo.id)}
                           />
                           <strong>
                              {todo.completed ? 'DONE ' : 'PENDING '}
                           </strong>
                           {todo.title}

                           <Link to={`/edit-todo/${todo.id}`}>
                              <button className="btn btn-warning m-2">
                                 <FontAwesomeIcon icon={faPenToSquare} />
                              </button>
                           </Link>
                           <button
                              className="btn btn-danger m-2"
                              onClick={() => deleteTodo(todo.id)}
                           >
                              <FontAwesomeIcon icon={faTrash} />
                           </button>
                        </li>
                     )
               )}
         </ul>

         <h2 className="text-center">
            LISTA DEI TODO COMPLETATI (
            {todos.filter((todo) => todo.completed).length})
         </h2>
         {isLoading && <p>Loading...</p>}
         {isError && <p>{error.message}</p>}
         <ul className="">
            {todos &&
               todos.map(
                  (todo) =>
                     todo.completed && (
                        <li key={todo.id}>
                           <input
                              className="me-3"
                              type="checkbox"
                              checked={todo.completed}
                              onChange={() => toggleCompleted(todo.id)}
                           />
                           <strong>
                              {todo.completed ? 'DONE ' : 'PENDING '}
                           </strong>
                           {todo.title}
                           <Link to={`/edit-todo/${todo.id}`}>
                              <button className="btn btn-warning m-2">
                                 <FontAwesomeIcon icon={faPenToSquare} />
                              </button>
                           </Link>
                           <button
                              className="btn btn-danger m-2"
                              onClick={() => deleteTodo(todo.id)}
                           >
                              <FontAwesomeIcon icon={faTrash} />
                           </button>
                        </li>
                     )
               )}
         </ul>
      </div>
   );
};

export default Todos;
