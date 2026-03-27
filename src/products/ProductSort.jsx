const ProductSort = ({ sortBy, setSortBy }) => {
  return (
    <div className="mb-4">
      <label className="mr-2 font-semibold">Sort By:</label>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="default">Default</option>
        <option value="priceLow">Price: Low to High</option>
        <option value="priceHigh">Price: High to Low</option>
        <option value="name">Name</option>
      </select>
    </div>
  );
};

export default ProductSort;
