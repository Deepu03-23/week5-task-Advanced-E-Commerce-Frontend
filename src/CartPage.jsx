import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} from "../features/cart/cartSlice";

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ✅ initialize navigate

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = 5.99;
  const tax = subtotal * 0.18; // 18% tax example
  const total = subtotal + shipping + tax;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">🛒 SHOPPING CART</h1>
      <hr className="mb-6" />

      <p className="mb-4">
        Cart Items ({cartItems.length} items):
      </p>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={item.id} className="border-b py-4">
              <h3 className="font-semibold">
                {index + 1}. {item.name}
              </h3>

              <p>Price: ${item.price}</p>

              <div className="flex items-center gap-3 my-2">
                <span>Quantity:</span>

                <button
                  className="border px-2"
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  className="border px-2"
                  onClick={() => dispatch(increaseQuantity(item.id))}
                >
                  +
                </button>
              </div>

              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>

              <button
                className="text-red-500 mt-1"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                [Remove]
              </button>
            </div>
          ))}

          <div className="mt-6 border-t pt-4">
            <h2 className="text-xl font-bold mb-2">📊 ORDER SUMMARY:</h2>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Shipping: ${shipping.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>

            <h3 className="text-lg font-bold mt-2">💵 TOTAL: ${total.toFixed(2)}</h3>

            <button
              onClick={() => navigate("/checkout")} // ✅ navigation works now
              className="mt-6 w-full bg-black text-white py-3 rounded-lg"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;