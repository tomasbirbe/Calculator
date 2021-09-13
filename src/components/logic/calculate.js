const calculate = (string) => {
  try {
    /*
      MDN recomienda utilizar el constructor Function y pasarle una
      funcion como string y ejecutarla en lugar de utilizar eval().
      De todas formas, ambas maneras son inseguras.
      (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!)

      Ej: Function(`return ${display}`)().toString()

      Se va a utilizar eval() respetando la consigna.
    */
    return eval(string).toString();
  } catch (error) {
    return '0';
  }
};

export { calculate };