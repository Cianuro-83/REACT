import { useForm } from 'react-hook-form';
import {
   useAddNewTodoMutation,
   useGetTodosQuery,
   useUpdateTodoMutation,
} from '../../store/api/todosApi';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';

const TodForm = () => {
   const navigate = useNavigate();
   const params = useParams();
   const { data: todos, isLoading } = useGetTodosQuery();
   const [old, setOld] = useState(null);

   useEffect(() => {
      if (params.id && todos && !isLoading) {
         const exist = todos.find((todo) => todo.id === params.id);
         setOld(exist);
         if (!exist) {
            navigate('/*');
         }
      }
   }, [params, todos, isLoading]);

   const [createTodo] = useAddNewTodoMutation();
   const [editTodo] = useUpdateTodoMutation();
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm();

   const onSubmit = handleSubmit((data) => {
      console.log(data);
      if (params.id && todos && !isLoading) {
         editTodo(data);
      } else {
         createTodo(data);
      }
      reset();

      navigate('/');
   });

   if (params.id) {
      if (isLoading || !old) {
         return <div>Loading...</div>;
      }
   }
   return (
      <div className="rfc-TodForm container">
         <h1>GESTIONE TODO</h1>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div>
               {/* userId */}
               <label htmlFor="userId">UserId</label>
               <input
                  type="number"
                  defaultValue={old?.userId || ''}
                  className={errors.userId && 'input-error'}
                  {...register('userId', {
                     required: {
                        value: true,
                        message: 'messaggio di errore',
                     },
                  })}
               />
               {errors.userId && (
                  <p className="form-error">{errors.userId.message}</p>
               )}
            </div>

            <div>
               {/* id */}
               <label htmlFor="id">id</label>
               <input
                  type="number"
                  defaultValue={old?.id || ''}
                  className={errors.id && 'input-error'}
                  {...register('id', {
                     required: {
                        value: true,
                        message: 'messaggio di errore',
                     },
                  })}
               />
               {errors.id && <p className="form-error">{errors.id.message}</p>}
            </div>
            <div>
               {/* title */}
               <label htmlFor="title">Testo del Todo</label>
               <input
                  type="text"
                  defaultValue={old?.title || ''}
                  className={errors.title && 'input-error'}
                  {...register('title', {
                     required: {
                        value: true,
                        message: 'messaggio di errore',
                     },
                     pattern: {
                        value: {
                           /* REGEX DI VALIDAZIONE */
                        },
                        message: 'messaggio di errore',
                     },
                     validate: (value) => {
                        if (value.trim().length < 3) {
                           return 'messaggio di errore';
                        } else if (value.trim().length > 50) {
                           return 'messaggio di errore';
                        }
                        return true;
                     },
                  })}
               />
               {errors.title && (
                  <p className="form-error">{errors.title.message}</p>
               )}
            </div>
            <div>
               {/* completed */}
               <label>
                  <input
                     type="checkbox"
                     defaultChecked={old?.completed || false}
                     className={errors.completed && 'input-error'}
                     {...register('completed', {
                        required: {
                           value: false,
                           message: 'messaggio di errore',
                        },
                     })}
                  />
                  Task completato
               </label>
               {errors.completed && (
                  <p className="form-error">{errors.completed.message}</p>
               )}
            </div>
            <div>
               {/* button */}
               <button type="submit">INVIA</button>
            </div>
         </form>
      </div>
   );
};

export default TodForm;
