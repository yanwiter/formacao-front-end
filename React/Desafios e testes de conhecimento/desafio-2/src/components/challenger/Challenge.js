import { useRef } from "react";
import "./styles.css";

const Challenge = () => {
  const primeiroNumero = useRef(null);
  const segundoNumero = useRef(null);
  const resultado = useRef(null);

  const somar = () => {

    const num1 = parseFloat(primeiroNumero.current.value) || 0;
    const num2 = parseFloat(segundoNumero.current.value) || 0;
    const soma = num1 + num2;

    resultado.current.value = soma;
  };

  return (
      <div className="challenge-componet">
        <input
          id="number1"
          type="text"
          ref={primeiroNumero}
          placeholder="Digite o primeiro numero"
        />
        <span> + </span>
        <input
          id="number2"
          type="text"
          ref={segundoNumero}
          placeholder="Digite o segundo numero"
        />
        <button id="btnSomar" onClick={somar}>
          {"Somar"}
        </button>
        <input
          id="result"
          type="text"
          ref={resultado}
          placeholder="Resultado da Soma"
        />
      </div>
  );
};

export default Challenge;