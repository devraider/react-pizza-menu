import React from "react";
import ReactDOM from "react-dom/client";

function Pizza() {
  return <h2>Pizza component</h2>;
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
