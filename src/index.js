import React from "react";
import ReactDOM from "react-dom/client";

function Header() {
  return <h1>React Pizza Company</h1>;
}
function Footer() {
  return React.createElement("footer", null, "Under development currently");
}

function Menu() {
  return <h1>Menu</h1>;
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
      <Pizza />
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
