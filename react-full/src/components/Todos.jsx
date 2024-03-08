import { useGetTodosQuery, useDeleteTodoMutation } from '../store/api/todosApi';
const Todos = () => {
   const { data: todos = [], isError, error, isLoading } = useGetTodosQuery();
   console.log(todos);

   const [deleteTodo] = useDeleteTodoMutation();

   return (
      <>
         {isLoading && <p>Loading...</p>}
         {isError && <p>{error.message}</p>}

         <ul className="ms-5">
            {todos &&
               todos.map((todo) => (
                  <li key={todo.id}>
                     <strong>{todo.completed ? 'DONE ' : 'PENDING '}</strong>
                     {todo.title}
                     <button
                        className="btn btn-danger m-2"
                        onClick={() => deleteTodo(todo.id)}
                     >
                        Cancella
                     </button>
                  </li>
               ))}
         </ul>
      </>
   );
};

export default Todos;
