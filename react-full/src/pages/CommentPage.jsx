import { useGetCommentsQuery } from '../store/api/commentsApi';

const CommentPage = () => {
   const { data: comments, isError, error, isLoading } = useGetCommentsQuery();
   return (
      <div className="rfc-CommentPage container">
         <h1>CommentPage & Tanstack Table</h1>

         {/* prova lista */}
         <hr />
         <h3>PROVA IN VISUALIZZAZIONE LISTA</h3>
         <p>{isError && <span>{error.message}</span>}</p>
         <p>{isLoading && <span>Loading...</span>}</p>
         <ul>
            {comments &&
               comments.map((comment) => (
                  <li key={comment.id}>{comment.name}</li>
               ))}
         </ul>
      </div>
   );
};

export default CommentPage;
