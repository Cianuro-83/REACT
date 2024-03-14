import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import TodForm from '../components/TodForm';

const PrincipalRouter = () => {
   return (
      <div>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-todo" element={<TodForm />} />
            <Route path="/edit-todo/:id" element={<TodForm />} />
            {/* INSERISCI ALTRE */}

            {/* rotta errore 404 DEVE SEMPRE essere l'ultima */}
            <Route path="*" element={<NotFound />} />
         </Routes>
      </div>
   );
};

export default PrincipalRouter;
