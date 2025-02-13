import './App.css';
import { useFetch } from "./hooks/useFetch";
import { useState, useEffect } from "react";

const url = "http://localhost:3000/products";



function App() {

  const { data: items, httpConfig, loading, error } = useFetch(url);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sexto desafio da formação 🚀</h1>

      <h1>Lista de produtos</h1>
      {/* 6 - state de loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}

      <table className="product-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>R$: {product.price}</td>
                <td>
                  <button onClick={() => handleRemove(product.id)}>Excluir</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <div className="add-product">
        <p>Adicionar produto:</p>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* 7 - state de loading no post */}
          {loading ? <p>Aguarde!</p> : <input type="submit" value="Criar" />}
        </form>
      </div>
      </header>
    </div>
  );
}

export default App;
