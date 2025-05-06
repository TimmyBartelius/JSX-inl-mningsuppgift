import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/Cart";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cart" element={<Cart />} />
    </Routes>
  );
}
