import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { pizzaData } from "./data.js";

function Header() {
  return (
    <header className="header">
      <h1>React Pizza Company</h1>
    </header>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  return (
    <footer className="footer">
      <div className="order">
        <p>
          We're currently {openHour <= hour <= closeHour ? "open" : "closed"}.
        </p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza key={pizza.name} {...pizza} />
        ))}
      </ul>
    </main>
  );
}

function Pizza(props) {
  return (
    <li>
      <div className="pizza">
        <img src={props.photoName} alt={props.name} />
        <div>
          <h3>{props.name}</h3>
          <p>{props.ingredients}</p>
          <span>{props.price}</span>
        </div>
      </div>
    </li>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
