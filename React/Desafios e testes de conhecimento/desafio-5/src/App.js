import './App.css';
import Car from './Components/Car';

function App() {

  const myCarrs = [
    { id: 1, name: 'Gol', brand: 'Volkswagen' },
    { id: 2, name: 'Corsa', brand: 'Chevrolet' },
    { id: 3, name: 'Civic', brand: 'Honda' },
    { id: 4, name: 'Cruze', brand: 'Chevrolet' },
    { id: 5, name: 'Fiesta', brand: 'Ford' },
    { id: 6, name: 'Fusion', brand: 'Ford' },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>Desafio 5 da formação 🚀</h1>
        
        <h3>Showroom</h3>
        <div className="car-container">
        <p> {myCarrs.map((car) => <Car key={car.id} car={car} />)} </p>
        </div>
      </header>
    </div>
  );
}

export default App;
