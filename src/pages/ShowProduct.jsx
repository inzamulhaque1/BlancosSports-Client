import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const ShowProduct = () => {
  const product = useLoaderData();
  const navigate = useNavigate();
  const { name, image, category, description, price, rating, stockStatus } = product;

  // State for controlling the Buy Now modal
  const [showBuyNowModal, setShowBuyNowModal] = useState(false);

  // Handle Buy Now Button Click
  const handleBuyNow = () => {
    setShowBuyNowModal(true); // Show the congratulations modal
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 px-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg overflow-hidden relative">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-orange-500 text-white py-2 px-4 rounded-full flex items-center gap-2 shadow-lg hover:bg-orange-600"
        >
          <FaArrowLeft className="text-sm" />
          Back
        </button>

        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row border-4 rounded-3xl border-orange-500">
          {/* Left: Product Image */}
          <div className="md:w-1/2 border-r-4 border-dashed border-orange-500 p-4 flex items-center justify-center">
            <img
              src={image}
              alt={name}
              className="w-full h-auto max-h-80 object-contain"
            />
          </div>

          {/* Right: Product Details */}
          <div className="md:w-1/2 p-6 space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
            <p className="text-sm text-gray-500">{category}</p>
            <p className="text-gray-600">{description}</p>

            {/* Ratings */}
            <div className="flex items-center">
              <span className="text-yellow-400 text-lg font-bold">
                {"⭐".repeat(Math.round(rating))}
              </span>
              <span className="ml-2 text-gray-500">({rating} Stars)</span>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-gray-800">${price}</div>

            {/* Stock Status */}
            <p
              className={`text-lg font-semibold ${
                stockStatus === "In Stock" ? "text-green-600" : "text-red-600"
              }`}
            >
              Stock: {stockStatus}
            </p>

            {/* Actions */}
            <div className="flex space-x-4">
              <button
                onClick={handleBuyNow}
                className="bg-orange-500 text-white py-2 px-6 rounded-lg text-lg font-bold hover:bg-orange-600"
              >
                Buy Now
              </button>
              <button className="bg-gray-200 py-2 px-6 rounded-lg text-lg font-bold text-gray-800 hover:bg-gray-300">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Buy Now Modal */}
      {showBuyNowModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md text-center">
            <h2 className="text-2xl font-bold text-gray-800">🎉 Congratulations!</h2>
            <p className="text-gray-600 mt-2">
              Your purchase of <strong>{name}</strong> was successful!
            </p>
            <button
              onClick={() => {
                setShowBuyNowModal(false); // Close the congratulations modal
                navigate(-1); // Navigate back
              }}
              className="bg-orange-500 text-white mt-4 py-2 px-6 rounded-lg text-lg font-bold hover:bg-orange-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowProduct;
