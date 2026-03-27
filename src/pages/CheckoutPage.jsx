import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Checkout = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
  });

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = () => {
    if (!formData.name || !formData.address) {
      alert("Please fill all required fields");
      return;
    }

    dispatch(clearCart());
    navigate("/order-success");
  };

  if (items.length === 0) {
    return <h2 className="p-8 text-center">Your cart is empty</h2>;
  }

  return (
    <div className="p-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

      {/* Shipping Form */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Shipping Details</h2>

        <input
          name="name"
          placeholder="Full Name"
          className="border p-3 rounded w-full mb-4"
          onChange={handleChange}
        />

        <input
          name="address"
          placeholder="Address"
          className="border p-3 rounded w-full mb-4"
          onChange={handleChange}
        />

        <input
          name="city"
          placeholder="City"
          className="border p-3 rounded w-full mb-4"
          onChange={handleChange}
        />

        <input
          name="pincode"
          placeholder="Pincode"
          className="border p-3 rounded w-full"
          onChange={handleChange}
        />
      </div>

      {/* Order Summary */}
      <div className="bg-gray-100 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

        {items.map((item) => (
          <div key={item.id} className="flex justify-between mb-3">
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>₹ {item.price * item.quantity}</span>
          </div>
        ))}

        <hr className="my-4" />

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹ {subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Tax (18%)</span>
          <span>₹ {tax.toFixed(2)}</span>
        </div>

        <div className="flex justify-between font-bold text-lg mt-4">
          <span>Total</span>
          <span>₹ {total.toFixed(2)}</span>
        </div>

        <button
          onClick={handleOrder}
          className="w-full bg-black text-white py-3 rounded-lg mt-6 hover:bg-gray-800"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
