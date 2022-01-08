import  { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';


function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setErr] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then(res => res.json())
      .then(json => {
        setData(json)
      })
      .catch(err => {
        setErr(err)
      })
      .finally(() => {
        setLoading(false);
      })
  }, url);
  
  const refetch = () => {
    setLoading(true);

    fetch(url)
      .then(res => res.json())
      .then(json => {
        setData(json)
      })
      .catch(err => {
        setErr(err)
      })
      .finally(() => {
        setLoading(false);
      })
  };
  return {data, loading, error, refetch}
};


export default useFetch











