import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

//instruerar vi React att hantera uppdateringar och renderingar av DOM-element - fick jag från Aizo, påstått att detta då inte är DOM-manipulation eftersom detta är den plats där hela din React-applikation fästs.

//Vi gjorde en lite jobbigare variation för att verkligen utforska - detta må inte vara den enklaste men det är en av dem. Kan komma att ändras i framtiden.

//TODO: KOLLA UPP ALLA SÄTT ATT ROUTE:A OM TILL HASH ROUTER UTAN DOM-MANIPULATION
