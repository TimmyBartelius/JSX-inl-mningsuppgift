import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";

//Genom att jag skriver alla imports för HashRouter såhär och sedan det nedan så ser jag till att alla mina routes som jag kommer nyttja kommer bli HashRoutes direkt istället för att "bygga" överkomplicerade vägar för varje route jag behöver ta. Så istället för att jag gör: Routes, Route - dit jag vill, så skriver jag bara sökvägen ./src/components/Header eller dylikt, så blir det en HashRouter iochmed det jag byggt upp här i förväg med root, ReactDOM och att jag "skapar" en HashRouter väg.

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
