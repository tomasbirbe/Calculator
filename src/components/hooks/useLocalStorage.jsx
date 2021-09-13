import { useState } from 'react';

const useLocalStorage = (initialState = 0, keyName) => {
  const [value, setValue] = useState(initialState);

  const setLocalStorage = (newValue) => {
    // El if evalua que el dato que se quiere guardar no sea undefined o null
    if (newValue) {
      setValue(newValue);
      localStorage.setItem(`${keyName}`, newValue);
    } else {
      setValue(initialState);
      localStorage.setItem(`${keyName}`, initialState);
    }
  };

  return [value, setLocalStorage];
};

export { useLocalStorage };
