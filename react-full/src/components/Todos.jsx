import { useGetTodosQuery } from '../store/api/todosApi';
const Todos = () => {
   const { data: todos = [], isError, error, isLoading } = useGetTodosQuery();
   console.log(todos);

   return (
      <>
         <h1>TODOS RTK-QUERY</h1>
         {isLoading && <p>Loading...</p>}
         {isError && <p>{error.message}</p>}

         <ul className="ms-5">
            {todos &&
               todos.map((todo) => (
                  <li key={todo.id}>
                     <strong>{todo.completed ? 'DONE ' : 'PENDING '}</strong>
                     {todo.title}
                  </li>
               ))}
         </ul>
      </>
   );
};

export default Todos;
