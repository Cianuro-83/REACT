import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import NotFound from '../pages/NotFound';
import DettaglioAlbum from '../pages/DettaglioAlbum';

const PrincipalRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contacts" element={ <Contacts /> } />
        <Route path="/dettaglio-album/:id" element={ <DettaglioAlbum /> } />


        {/* rotta errore 404 deve sempre essere l'ultima */ }
        <Route path="*" element={ <NotFound /> } />

      </Routes>

    </div>
  );
};

export default PrincipalRouter;