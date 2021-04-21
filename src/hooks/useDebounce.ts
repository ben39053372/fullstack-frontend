import { useEffect, useState } from 'react';

export default (value: string, delay: number) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounced(value);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  return debounced;
};
