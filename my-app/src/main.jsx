import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

//instruerar vi React att hantera uppdateringar och renderingar av DOM-element - fick jag från Aizo, påstått att detta då inte är DOM-manipulation eftersom detta är den plats där hela din React-applikation fästs.
