import { Link } from 'react-router-dom';
import DarkMode from '../DarkMode';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
   return (
      <div className="rfc-Header container">
         <ul>
            <li>
               <Link to="/">
                  <FontAwesomeIcon icon={faHouse} />
               </Link>
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
