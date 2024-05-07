import { useEffect, useState } from "react";

export default function useRequest(requestFunc, deps = []) {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await requestFunc();

        setResponse(res);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, deps);

  return { response, isLoading, error };
}
