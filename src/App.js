import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/LoginSignup/login";
import Products from "./Components/Products/products";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
