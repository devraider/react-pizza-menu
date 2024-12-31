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
  const isOpen = openHour <= hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          You are welcome to order between {openHour}:00 and {closeHour}:00!
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>We're currently open till {props.closeHour}:00.</p>
      <button className="btn">Order</button>
    </div>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzaData.length > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza key={pizza.name} {...pizza} />
          ))}
        </ul>
      ) : (
        <p>We're sorry! No pizza available right now!</p>
      )}
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
