import React from "react";
import ReactDOM from "react-dom/client";

function Header() {
  return <h1>React Pizza Company</h1>;
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  return (
    <footer>
      We're currently {openHour <= hour <= closeHour ? "open" : "closed"}
    </footer>
  );
}

function Menu() {
  return (
    <div>
      <h2>Our menu</h2>;
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <h2>Focaccia</h2>
      <img src="pizzas/focaccia.jpg" alt="Foccacia" />
      <p>Bread with italian olive oil and rosemary</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
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
