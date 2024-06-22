import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GeneralLayout from "./pages/GeneralLayout";
import CategoryPage from "./pages/Categories/CategoryPage";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GeneralLayout />}>
          <Route index element={<Home />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/products" element={<ProductPage />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
