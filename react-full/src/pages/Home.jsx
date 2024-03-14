import Counter from '../components/Counter';
import DarkMode from '../components/DarkMode';
import Todos from '../components/Todos';

const Home = () => {
   return (
      <>
         <h1>Home</h1>
         <DarkMode />
         <br />
         <Counter />

         <hr />
         <Todos />
      </>
   );
};

export default Home;
