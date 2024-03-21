import Counter from '../components/Counter';
import Todos from '../components/todo/Todos';

const Home = () => {
   return (
      <>
         <h1>Home</h1>
         <br />
         <Counter />

         <hr />
         <Todos />
      </>
   );
};

export default Home;
