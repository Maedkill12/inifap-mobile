import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const getData = async () => {
      if (!url || !options) {
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
      } catch (error) {
        if (!abortController.signal.aborted) {
          setError(error);
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
    };
    getData();
    return () => abortController.abort("Data fetching cancelled");
  }, [url]);

  return { isLoading, error, data };
};

export default useFetch;
