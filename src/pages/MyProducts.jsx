import { Link } from "react-router-dom";
import { useCart } from "../providers/CartProvider";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2"; // Import SweetAlert2

const MyProducts = () => {
  const { cart, removeFromCart } = useCart();

  // Function to handle the delete button click
  const handleDeleteClick = (product) => {
    // Show SweetAlert2 confirmation modal
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // If confirmed, remove the product from the cart
        removeFromCart(product._id);

        // Show success message
        Swal.fire("Deleted!", "The product has been removed from your cart.", "success");
      }
    });
  };

  return (
    <div className="p-4 w-11/12 md:w-9/12 mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        My Products
      </h2>
      {cart.length === 0 ? (
        <p className="text-gray-600 text-center">No products in the cart.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((product) => (
            <div
              key={product._id}
              className="p-4 bg-white border rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-1">{product.category}</p>
              <p className="text-gray-800 font-bold text-lg">
                ${product.price}
              </p>

              <div className="flex justify-between mt-4">
                <Link to={`/updateProduct/${product._id}`}>
                  <button className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-200">
                    <FaEdit />
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => handleDeleteClick(product)} // Trigger SweetAlert2 modal
                  className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition duration-200"
                >
                  <FaTrashAlt />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProducts;
