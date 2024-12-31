import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
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
      We're currently {openHour <= hour <= closeHour ? "open" : "closed"}.
    </footer>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza
        name="Spinachi"
        ingredients="Etc"
        photoSrc="pizzas/focaccia.jpg"
        price="1"
      />
    </main>
  );
}

function Pizza(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={props.photoSrc} alt={props.name} />
      <p>{props.ingredients}</p>
    </div>
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
