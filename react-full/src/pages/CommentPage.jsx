import { useGetCommentsQuery } from '../store/api/commentsApi';

const CommentPage = () => {
   const { data: comments, isError, error, isLoading } = useGetCommentsQuery();
   return (
      <div className="rfc-CommentPage container">
         <h1>CommentPage & Tanstack Table</h1>

         {/* prova lista */}
         <p>{isError && <p>{error.message}</p>}</p>
         <p>{isLoading && <p>Loading...</p>}</p>
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
