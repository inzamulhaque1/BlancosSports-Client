import { useLoaderData } from "react-router-dom";
import AllProductsTable from "../components/AllProductsTable";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const AllProducts = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);
  const [isAscending, setIsAscending] = useState(true); // State to track sorting order for price
  const [searchQuery, setSearchQuery] = useState(""); // State for the search input

  // Function to handle the search
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };

  // Effect to filter products based on the search query (no sorting by name here)
  useEffect(() => {
    const filteredProducts = loadedProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery)
    );
    setProducts(filteredProducts);
  }, [searchQuery, loadedProducts]); // Re-run whenever searchQuery changes

  // Sort products by price
  const handleSort = () => {
    const sortedProducts = [...products].sort((a, b) => {
      if (isAscending) {
        return a.price - b.price; // Sort ascending by price
      } else {
        return b.price - a.price; // Sort descending by price
      }
    });
    setProducts(sortedProducts);
    setIsAscending(!isAscending); // Toggle the sorting order
  };

  return (
    <div className="w-full md:w-11/12 lg:w-9/12 mx-auto mt-2 space-y-5">
      <div className="flex flex-col sm:flex-row justify-between items-center sm:space-x-4 space-y-4 sm:space-y-0">
        <h2 className="text-2xl font-bold mb-4 sm:mb-0">Product Table</h2>

        {/* Search Bar */}
        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full sm:w-auto p-3 pl-10 pr-4 rounded-full text-sm sm:text-base border border-orange-300 shadow-lg focus:ring-2 focus:ring-orange-500 outline-none transition duration-300"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Sort button on the top right */}
        <button
          onClick={handleSort}
          className="bg-blue-500 text-white px-4 py-2 rounded-md transition duration-200 hover:bg-blue-600"
        >
          Sort by Price {isAscending ? "↑" : "↓"}
        </button>
      </div>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 dark:text-black px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 dark:text-black px-4 py-2 text-left">Image</th>
              <th className="border border-gray-300 dark:text-black px-4 py-2 text-left">Category</th>
              <th className="border border-gray-300 dark:text-black px-4 py-2 text-left">Description</th>
              <th className="border border-gray-300 dark:text-black px-4 py-2 text-left">Price</th>
              <th className="border border-gray-300 dark:text-black px-4 py-2 text-left">Rating</th>
              <th className="border border-gray-300 dark:text-black px-4 py-2 text-left">Stock Status</th>
              <th className="border border-gray-300 dark:text-black px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <AllProductsTable
                key={index}
                product={product}
                setProducts={setProducts}
                products={products}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
