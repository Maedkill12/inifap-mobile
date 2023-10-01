// XMLHttpRequest hook

import { useState, useEffect } from "react";

const useXMLHttpRequest = (url, method = "GET", body = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        setData(JSON.parse(xhr.responseText));
        setLoading(false);
      } else {
        setError(xhr.statusText);
        setLoading(false);
      }
    };
    xhr.onerror = () => {
      setError(xhr.statusText);
      setLoading(false);
    };
    xhr.send(body ? JSON.stringify(body) : null);
    setLoading(true);
  }, [url, method, body]);

  return { data, error, loading };
};

export default useXMLHttpRequest;
