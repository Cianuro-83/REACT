import { useState, useEffect } from 'react';
import './Clock.css';



const Orologio = ( { country, timezone } ) => {
  const t = Date.now() + 3600 * timezone * 1000;
  const dateIni = new Date();
  const [date, setDate] = useState( dateIni );
  // const time = new Date();
  const ore = dateIni.getHours().toString().padStart( 2, '0' );
  const min = dateIni.getMinutes().toString().padStart( 2, '0' );
  const sec = dateIni.getSeconds().toString().padStart( 2, '0' );

  //secs
  const [firstSecond, setFirstSecond] = useState( sec[0] );
  const [secondSecond, setSecondSecond] = useState( sec[1] );
  const [secondMove, setSecondMove] = useState( '' );

  //min
  const [firstMinute, setFirstMinute] = useState( min[0] );
  const [firstMinMove, setFirstMinMove] = useState( '' );
  const [secondMinute, setSecondMinute] = useState( min[1] );
  const [secondMinMove, setSecondMinMove] = useState( '' );

  //hours
  const [firstHour, setFirstHour] = useState( ore[0] );
  const [firstOraMove, seFirstOraMove] = useState( '' );
  const [secondHour, setSecondHour] = useState( ore[1] );
  const [secondOraMove, setSecondOraMove] = useState( '' );



  useEffect( () => {
    const interval = setInterval( () => {
      const time = new Date() + 1000;
      setDate( new Date( time ) );
      // secs
      if ( firstSecond !== sec[0] ) {
        setSecondMove( 'move' );
        setTimeout( () => {
          setFirstSecond( sec[0] );
        }, 950 );
      } else {
        setSecondMove( '' );
      }
      setSecondSecond( sec[1] );
      //min
      if ( firstMinute !== min[0] ) {
        setFirstMinMove( 'move' );
        setTimeout( () => {
          setFirstMinute( min[0] );
        }, 950 );
        setFirstMinute( min[0] );
      } else {
        setFirstMinMove( '' );
      }
      if ( secondMinute !== min[1] ) {
        setSecondMinMove( 'move' );
        setTimeout( () => {
          setSecondMinute( min[1] );
        }, 950 );
      } else {
        setSecondMinMove( '' );
      }
      // hour
      if ( firstHour !== ore[0] ) {
        seFirstOraMove( 'move' );
        setTimeout( () => {
          setFirstHour( ore[0] );
        }, 950 );
      } else {
        seFirstOraMove( '' );
      }
      if ( secondHour !== ore[1] ) {
        setSecondOraMove( 'move' );
        setTimeout( () => {
          setSecondHour( ore[1] );
        }, 950 );
      } else {
        setSecondOraMove( '' );
      }
    }, 1000 );
    return () => {
      clearInterval( interval );
    };
  }, [date] );

  return (

    < div className="clock" >
      <div className="hours">
        <div className="first">
          <div className={ 'number ' + firstOraMove }>{ firstHour }</div>
        </div>
        <div className="second">
          <div className={ 'number ' + secondOraMove }>{ secondHour }</div>
        </div>
      </div>
      <div className="tick">:</div>
      <div className="minutes">
        <div className="first">
          <div className={ 'number ' + firstMinMove }>{ firstMinute }</div>
        </div>
        <div className="second">
          <div className={ 'number ' + secondMinMove }>{ secondMinute }</div>
        </div>
      </div>
      <div className="tick">:</div>
      <div className="seconds">
        <div className="first">
          <div className={ 'number ' + secondMove }>{ firstSecond }</div>
        </div>
        <div className="second infinite">
          <div className="number">{ secondSecond }</div>
        </div>
      </div>
    </div >

  );
};
export default Orologio; 