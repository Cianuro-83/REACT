import { useForm } from "react-hook-form";
import { useAddNewTodoMutation } from "../api/messageApi";
const CrudPost = () => {
  const [createTodo] = useAddNewTodoMutation();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    createTodo(data);
    reset();
  });

  return (
    <>
      <div>CrudPost: POST</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* id */}
        <label htmlFor="title">ID</label>
        <input
          type="number"
          className={errors.id ? "input-error" : ""}
          {...register("id", {
            required: { value: true, message: "L'ID è richiesto" },
            validate: (value) => {
              if (value.trim().length > 100) {
                return "L'ID è troppo lungo, max 100 caratteri";
              } else if (value < 0) {
                return "L'ID non può essere negativo";
              }
              return true;
            },
          })}
        />
        {errors.id && <p className="form-error">{errors.id.message}</p>}

        {/* title */}
        <label htmlFor="title">TITOLO</label>
        <input
          type="text"
          className={errors.title ? "input-error" : ""}
          {...register("title", {
            required: {
              value: true,
              message: "Il Titolo è richiesto",
            },
            validate: (value) => {
              if (value.trim().length < 2) {
                return "Il Titolo è troppo corto, min 5 caratteri";
              } else if (value.trim().length > 20) {
                return "Il Titolo è troppo lungo, max 50 caratteri";
              }
              return true;
            },
          })}
        />
        {errors.title && <p className="form-error">{errors.title.message}</p>}
        {/* completed */}
        <label>
          <input type="checkbox" {...register("completed")} />
          Task completato
        </label>

        <button type="submit">Invia</button>
      </form>
    </>
  );
};

export default CrudPost;
