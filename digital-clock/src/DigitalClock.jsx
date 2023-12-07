import { useState, useEffect } from 'react';
import './Clock.css';
// function getTime( d ) {
//   const ret = {};
//   // secs
//   const secs = d.getSeconds().toString().padStart( 2, '0' );
//   ret.firstSecond = secs.charAt( 0 );
//   ret.secondSecond = secs.charAt( 1 );

//   // min
//   const mins = d.getMinutes().toString().padStart( 2, '0' );
//   ret.firstMinute = mins.charAt( 0 );
//   ret.secondMinute = mins.charAt( 1 );

//   // hour
//   const hours = d.getHours().toString().padStart( 2, '0' );

//   ret.firstHour = hours.charAt( 0 );
//   ret.secondHour = hours.charAt( 1 );
//   return ret;
// }
const time = new Date();
const ore = time.getHours().toString().padStart( 2, '0' );
const min = time.getMinutes().toString().padStart( 2, '0' );
const sec = time.getSeconds().toString().padStart( 2, '0' );




const Clock = ( { country, timezone } ) => {
  const t = Date.now() + 3600 * timezone * 1000;
  const dateIni = new Date( t );

  const defaultTime = `${ore}:${min}:${sec}`;

  const [date, setDate] = useState( dateIni );

  //secs
  const [firstSecond, setFirstSecond] = useState( defaultTime.firstSecond );
  const [secondSecond, setSecondSecond] = useState( defaultTime.secondSecond );

  //min

  const [firstMinute, setFirstMinute] = useState( defaultTime.firstMinute );
  const [secondMinute, setSecondMinute] = useState( defaultTime.secondMinute );

  //
  //hours
  const [firstHour, setFirstHour] = useState( defaultTime.firstHour );
  const [secondHour, setSecondHour] = useState( defaultTime.secondHour );

  const [firstMove, setFirstMove] = useState( '' );
  useEffect( () => {
    const interval = setInterval( () => {
      const time = new Date();
      const ore = time.getHours().toString().padStart( 2, '0' );
      const min = time.getMinutes().toString().padStart( 2, '0' );
      const sec = time.getSeconds().toString().padStart( 2, '0' );
      const d = `${ore}:${min}:${sec}`;


      console.log( min );

      const defaultTime = `${ore}:${min}:${sec}`;
      // secs
      if ( firstSecond !== defaultTime.firstSecond ) {
        setFirstMove( 'move' );
        setTimeout( () => {
          setFirstSecond( sec[0] );
        }, 950 );
      } else {
        setFirstMove( '' );
      }

      setSecondSecond( sec[1] );

      if ( firstMinute !== defaultTime.firstMinute ) {
        setFirstMinute( min );
      }
      if ( secondMinute !== defaultTime.secondMinute ) {
        setSecondMinute( defaultTime.secondMinute );
      }

      // hour

      if ( firstHour !== defaultTime.firstHour ) {
        setFirstHour( defaultTime.firstHour );
      }
      if ( secondHour !== defaultTime.secondHour ) {
        setSecondHour( ore[1] );
      }
    }

      setDate( d );
  }, 1000 );
  return () => {
    clearInterval( interval );
  };
}, [date], 1000),

return (
  
);
};

export default Clock; 