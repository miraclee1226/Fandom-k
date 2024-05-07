import dispatcher from "api/dispatcher";
import { useEffect, useState } from "react";

/**
 * 비동기 함수를 감싼 함수를 반환하는 Hook입니다.
 * pending과 error 상태를 관리합니다.
 *
 * @param {Function} asyncFunc - 비동기 함수
 * @returns {Object} - { wrappedFunc, pending, error }
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

      setData(response);
    } catch (err) {
      setError(err);
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

