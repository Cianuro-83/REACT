import { Link } from 'react-router-dom';
import DarkMode from './DarkMode';

const Header = () => {
   return (
      <div className="rfc-Header container">
         <ul>
            <li>
               <Link to="/">HOME</Link>
            </li>
            <li>
               <Link to="/comments">COMMENTI</Link>
            </li>
            <li className="dark-selector">
               <DarkMode />
            </li>
         </ul>
      </div>
   );
};

export default Header;
