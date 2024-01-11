import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch( url ) {
  const [data, setData] = useState( null );
  const [loading, setLoading] = useState( true );
  const [error, setError] = useState( null );

  useEffect( () => {
    // const source = axios.CancelToken.source();

    axios
      .get( url )
      .then( ( response ) => {
        setData( response.data );

      } )
      .catch( ( error ) => {
        setError( error );
      } )
      .finally( () => {
        setLoading( false );
      } );

    // return () => source.cancel();
  }, [url] );

  return { data, loading, error };
}

