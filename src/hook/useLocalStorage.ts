import { useState, useEffect } from 'react';

const useLocalStorage = (initialValue: any, nameKey: string): [any, React.Dispatch<any>] => {
  const getValue = () => {
    const value = localStorage.getItem(nameKey);

    if (value) {
      return JSON.parse(value);
    }

    return initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(nameKey, JSON.stringify(value));
  }, [value, nameKey]);

  return [value, setValue];
};

export { useLocalStorage };
