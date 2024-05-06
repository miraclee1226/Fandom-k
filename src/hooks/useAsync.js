import { useCallback, useState } from "react";

/**
 * 비동기 함수를 감싼 함수를 반환하는 Hook입니다.
 * pending과 error 상태를 관리합니다.
 *
 * @param {Function} asyncFunc - 비동기 함수
 * @returns {Object} - { wrappedFunc, pending, error }
 */
export default function useAsync(asyncFunc) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const wrappedFunc = useCallback(
    async (...args) => {
      setPending(true);
      setError(null);

      try {
        return await asyncFunc(...args);
      } catch (err) {
        setError(err);
      } finally {
        setPending(false);
      }

      return null;
    },
    [asyncFunc],
  );

  return { wrappedFunc, pending, error };
}
