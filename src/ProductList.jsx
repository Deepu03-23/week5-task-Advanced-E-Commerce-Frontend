import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products";
import ProductGrid from "../components/product/ProductGrid";
import ProductFilter from "../components/product/ProductFilter";
import ProductSort from "../components/product/ProductSort";

const ProductList = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  // SEARCH
  const searchedProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // FILTER
  const filteredProducts = searchedProducts.filter((product) =>
    selectedCategory === "all"
      ? true
      : product.category === selectedCategory
  );

  // SORT
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "priceLow") return a.price - b.price;
    if (sortBy === "priceHigh") return b.price - a.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        🛍 Product Catalog
      </h1>

      {/* Search with Autocomplete */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="border rounded-lg p-3 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <div className="absolute w-full bg-white shadow-md rounded-lg mt-1 max-h-60 overflow-y-auto z-10">
            {products
              .filter((product) =>
                product.name
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .slice(0, 5)
              .map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    navigate(`/product/${product.id}`);
                    setSearch("");
                  }}
                  className="p-3 hover:bg-gray-100 cursor-pointer"
                >
                  {product.name}
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Filter + Sort */}
      <div className="flex gap-4 flex-wrap mb-6">
        <ProductFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ProductSort
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>

      {/* Grid */}
      <ProductGrid products={sortedProducts} />
    </div>
  );
};

export default ProductList;