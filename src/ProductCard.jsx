import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden flex flex-col cursor-pointer"
    >

      {/* Image Container */}
      <div className="h-56 bg-gray-100 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold line-clamp-1">
          {product.name}
        </h2>

        <p className="text-gray-500 mt-2 text-sm">
          ₹ {product.price}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent navigation
            dispatch(addToCart(product));
          }}
          className="mt-auto bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;