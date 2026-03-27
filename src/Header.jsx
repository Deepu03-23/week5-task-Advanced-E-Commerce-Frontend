import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="p-4 bg-black text-white flex justify-between">
      <h1 className="text-xl font-bold">My Store</h1>

      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          Cart ({totalItems})
        </Link>
      </nav>
    </header>
  );
};

export default Header;