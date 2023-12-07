import { useEffect, useState } from 'react';
import './Clock.css';

const Clock = ( { country, timezone } ) => {
  const t = Date.now() + 3600 * timezone * 1000;
  const dateIni = new Date( t );
  const [date, setDate] = useState( dateIni );
  useEffect( () => {
    const interval = setInterval( () => {
      const time = date.getTime() + 1000;
      setDate( new Date( time ) );
    }, 1000 );
    return () => {
      clearInterval( interval );
    };
  }, [date] );

  return (
    <h2>Oggi in { country } è il { date.toLocaleString() }</h2>

  );
};


export default Clock;