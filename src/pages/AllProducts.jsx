import { useLoaderData } from "react-router-dom";
import AllProductsTable from "../components/AllProductsTable";
import { useState } from "react";

const AllProducts = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);
  const [isAscending, setIsAscending] = useState(true); // State to track sorting order

  // Sort products by price
  const handleSort = () => {
    const sortedProducts = [...products].sort((a, b) => {
      if (isAscending) {
        return a.price - b.price; // Sort ascending
      } else {
        return b.price - a.price; // Sort descending
      }
    });
    setProducts(sortedProducts);
    setIsAscending(!isAscending); // Toggle the sorting order
  };

  return (
    
    <div className="w-11/12 md:w-9/12 mx-auto mt-2 space-y-5">

      
      <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold mb-4">Product Table</h2>
        {/* Sort button on the top right */}
        <button
          onClick={handleSort}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sort by Price {isAscending ? "↑" : "↓"}
        </button>
      </div>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300  text-sm md:text-base">
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
