import { useEffect, useState } from "react";

export default function useRequest({ requestFunc, deps = [] }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await requestFunc();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, deps);

  return { data, isLoading, error };
}
