import { useState, useEffect } from 'react';

const useLocalStorage = (initialState = 0, keyName) => {
  const [value, setValue] = useState(initialState);

  /*
    El siguiente hook es para que value tenga una valor al momento de cargar el componente.
    Solo se le asigna un valor si ya existe algun registro en el LocalStorage con la key
    que recibe en los parametros
  */
  useEffect(() => {
    if (localStorage.getItem(`${keyName}`)) {
      setValue(localStorage.getItem(`${keyName}`));
    }
  }, []);

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
