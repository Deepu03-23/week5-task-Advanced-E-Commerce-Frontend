import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import Login from "./pages/LoginPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<CheckoutPage />} />
<Route path="/order-success" element={<OrderSuccess />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
