import dispatcher from "api/dispatcher";
import { useEffect, useState } from "react";

/**
 * Data Fetching Hook
 *
 * @param {options} options - axios instance에 전달할 options
 * @param {skip} skip - true: 마운트될 때 data fetching 금지
 * @param {deps} deps - useEffect 의존성 배열
 * @returns {Object} Object - { data, isLoading, error, requestFunc  }
 */
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
