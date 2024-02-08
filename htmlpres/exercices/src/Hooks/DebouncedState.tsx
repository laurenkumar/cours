import { useState, useEffect } from 'react';
import { useLocalStorage } from './LocalStorage';

export const useDebouncedLocalStorage = (key, initialValue, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(initialValue);
  const [storedValue, setStoredValue] = useLocalStorage(key, initialValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setStoredValue(debouncedValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedValue, delay, setStoredValue]);

  return [debouncedValue, setDebouncedValue];
};

export default useDebouncedLocalStorage;