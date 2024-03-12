import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../store/slices/darkMode';
const DarkMode = () => {
   const isDarkMode = useSelector((state) => state.darkMode.darkMode);
   const dispatch = useDispatch();

   const handleDarkMode = () => {
      dispatch(toggleDarkMode());
      console.log(isDarkMode);
   };
   return (
      <>
         <button onClick={handleDarkMode}>
            {isDarkMode ? 'Disattiva Dark Mode' : 'Attiva Dark Mode'}
         </button>
      </>
   );
};

export default DarkMode;
