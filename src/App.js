import './App.css';
import { useState } from 'react';

function App() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [resultado, setResultado] = useState(0)

  const calcular = (operacao) => {
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    if (!isNaN(numero1) && !isNaN(numero2)) {
      switch (operacao) {
        case '+':
          setResultado(numero1 + numero2)
          break;
        case '-':
          setResultado(numero1 - numero2)
          break;
        case '*':
          setResultado(numero1 * numero2)
          break;
        case '/':
          setResultado(numero1 / numero2)
          break;
        default:
          break;
      }
    } else {
      setResultado('Por favor, insira números válidos')
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className='calculator-input'>
          <h1>Calculadora React</h1>
          <label>Primeiro N°</label>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />

          <label>Segundo N°</label>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>
        <div className='calculator-buttons'>
          <button onClick={() => calcular('+')}>Somar</button>
          <button onClick={() => calcular('-')}>Subtrair</button>
          <button onClick={() => calcular('*')}>Multiplicar</button>
          <button onClick={() => calcular('/')}>Dividir</button>
        </div>


      </div>
      <h2>Resultado: {resultado}</h2>
    </div>
  );
}

export default App;
