const ProductFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="mb-4">
      <label className="mr-2 font-semibold">Filter by Category:</label>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="all">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Accessories">Accessories</option>
      </select>
    </div>
  );
};

export default ProductFilter;