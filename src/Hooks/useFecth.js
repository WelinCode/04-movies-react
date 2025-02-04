import { useEffect, useState } from 'react';

const API_ENDPOINT = 'http://www.omdbapi.com/?apikey=a3142094&';

export const useFecth = (params) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const fethMovie = async (url) => {
    try {
      setIsLoading(false);
      const res = await fetch(url);
      const dataJSON = await res.json();
      if (dataJSON.Response === 'True') {
        setData(dataJSON.Search);
        setError(false);
        console.log(data);
      } else {
        setError(true);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fethMovie(`${API_ENDPOINT}${params}`);
  }, [params]);

  return {
    isLoading,
    error,
    data,
  };
};
