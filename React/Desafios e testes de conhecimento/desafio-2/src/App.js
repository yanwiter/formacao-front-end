import './App.css';
import Challenge from './components/challenger/Challenge';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Segundo desafio da formação 🚀</h1>
        <p>
          Crie um componente de soma que receba dois números e retorne a soma deles.
        </p>
        <Challenge />
      </header>
    </div>
  );
}

export default App;
