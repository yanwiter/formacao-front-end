import './App.css';
import UserDetails from './components/UserDetails';

const users = [
  { id: 1, name: 'Diego', job: 'Developer', age: 17 },
  { id: 2, name: 'Cleiton', job: 'Designer', age: 29 },
  { id: 3, name: 'Danilo', job: 'Manager', age: 55 },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Desafio 4 da formação 🚀</h1>
        {users.map(user => (
          <UserDetails 
            key={user.id} 
            name={user.name} 
            job={user.job} 
            age={user.age} 
          />
        )
        )}
      </header>
    </div>
  );
}

export default App;
