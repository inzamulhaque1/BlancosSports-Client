import { useLoaderData, Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"; // You can also use FontAwesome or React Icons

import ProductCard from "./ProductCard";

const Products = () => {
  const products = useLoaderData();

  // Slice to show only the first 8 products
  const limitedProducts = products.slice(0, 8);

  return (
    <div className="p-6 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-orange-500 mb-4">
          Discover Our Latest Products
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore a curated selection of top-quality products. Browse through the best deals and find exactly what you&apos;re looking for.
        </p>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {limitedProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {/* Show All Products Button */}
      <div className="flex justify-center mt-10">
        <Link
          to="/allProducts"
          className="bg-orange-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-orange-600 flex items-center gap-3 shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out"
        >
          Show All Products
          <FaArrowRight className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default Products;
