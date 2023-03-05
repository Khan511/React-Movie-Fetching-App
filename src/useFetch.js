import { useState, useEffect } from "react";

// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

const useFetch = (useParams) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchMovies = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        setData(data.Search || data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${useParams}`);
  }, [useParams]);
  return { loading, error, data, setLoading, setError };
};

export default useFetch;
