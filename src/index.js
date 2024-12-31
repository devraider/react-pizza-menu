import React from "react";
import ReactDOM from "react-dom/client";

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
      <h1>Hi React!</h1>
      <Pizza />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
