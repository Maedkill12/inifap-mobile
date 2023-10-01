import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

const useXMLHttpRequest = (url, method = "GET", body = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const cacheKey = url + JSON.stringify(body);
      const cachedData = await AsyncStorage.getItem(cacheKey);
      if (cachedData) {
        const cacheExpiration = 24 * 60 * 60 * 1000;
        const cacheExpired =
          cachedData &&
          Date.now() - JSON.parse(cachedData).timestamp > cacheExpiration;

        if (method === "GET" && !cacheExpired) {
          setData(JSON.parse(cachedData).data);
          setLoading(false);
          return;
        }
      }
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onload = async () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          const responseData = JSON.parse(xhr.responseText);
          setData(responseData);
          if (method === "GET") {
            await AsyncStorage.setItem(
              cacheKey,
              JSON.stringify({ data: responseData, timestamp: Date.now() })
            );
          }
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
    };
    getData();
  }, [url, method, body]);

  return { data, loading, error };
};

export default useXMLHttpRequest;
