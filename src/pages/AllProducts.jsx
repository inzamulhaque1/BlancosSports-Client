import { useLoaderData } from "react-router-dom";
import AllProductsTable from "../components/AllProductsTable";
import { useState } from "react";

const AllProducts = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);

  return (
    <div className="w-11/12 md:w-9/12 mx-auto mt-2 space-y-5">
      <p>Product Count: {products.length}</p>
      <h2 className="text-2xl font-bold mb-4">Product Table</h2>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Image</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Rating</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Stock Status</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
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
