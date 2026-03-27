import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find(
    (item) => item.id === parseInt(id)
  );

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-10">
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full object-contain"
        />

        <div>
          <h1 className="text-3xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-gray-500 mb-2">
            Category: {product.category}
          </p>

          <p className="text-yellow-500 mb-2">
            Rating: ⭐ {product.rating}
          </p>

          <p className="text-xl font-semibold mb-6">
            ₹ {product.price}
          </p>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-black text-white px-6 py-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
