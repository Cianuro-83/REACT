import Counter from '../components/Counter';
import TodForm from '../components/TodForm';
import Todos from '../components/Todos';

const Home = () => {
   return (
      <>
         <h1>Home</h1>
         <Counter />
         <hr />
         <TodForm />
         <hr />
         <Todos />
      </>
   );
};

export default Home;
