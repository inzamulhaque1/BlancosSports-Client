import { Link } from "react-router-dom";
import { useCart } from "../providers/CartProvider";

/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  const { _id, name, image, category, price } = product;
  const { addToCart } = useCart();
  return (
    <div>
      <div className="flex items-center justify-center  ">
        <article className=" w-full bg-white  rounded-lg shadow-lg overflow-hidden ">
          <div>
            <img
              className="p-1 rounded-2xl object-cover h-64 w-full"
              src={image}
              alt="Converse sneakers"
            />
          </div>

          <div className="flex flex-col gap-1 mt-4 px-4 ">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-black ">
              {name}
            </h2>
            <span className="font-normal text-gray-600 dark:text-black">
              {category}
            </span>
            <span className="font-semibold text-gray-800 dark:text-black">
              ${price}
            </span>
          </div>

          <div className="flex gap-4 mt-4 px-4">
            <span className="sr-only">Colors available</span>

            <button
              aria-label="Yellow"
              className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-yellow-500 dark:bg-yellow-400"
            ></button>

            <button
              aria-label="Red"
              className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-red-500 dark:bg-red-400"
            ></button>

            <button
              aria-label="Blue"
              className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-blue-500 dark:bg-blue-400"
            ></button>

            <button
              aria-label="Black"
              className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-gray-800 dark:bg-gray-600"
            ></button>
          </div>

          <div className="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
            <button onClick={() => addToCart(product)} className="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
              <span className="text-base dark:text-black">Add to Cart</span>
              <Link to={`/showProduct/${_id}`}>
                <i className="fa-solid fa-eye text-green-500"></i>
              </Link>
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProductCard;
