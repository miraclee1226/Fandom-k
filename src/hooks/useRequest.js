import { useState, useEffect } from "react";
import dispatcher from "api/dispatcher";

export default function useRequest({ options, skip = false, deps = [] }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const requestFunc = async (...args) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await dispatcher({ ...options, ...args });

      setData(() => response);
      return response;
    } catch (err) {
      setError(() => err);
      return err;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (skip) return;
    requestFunc();
  }, deps);

  return { data, isLoading, error, requestFunc };
}