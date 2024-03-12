import Counter from '../components/Counter';
import DarkMode from '../components/DarkMode';
import TodForm from '../components/TodForm';
import Todos from '../components/Todos';

const Home = () => {
   return (
      <>
         <h1>Home</h1>
         <DarkMode />
         <br />
         <Counter />
         <hr />
         <TodForm />
         <hr />
         <Todos />
      </>
   );
};

export default Home;
