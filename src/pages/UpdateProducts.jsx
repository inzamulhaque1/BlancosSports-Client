import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const UpdateProducts = () => {
  const product = useLoaderData();
  const { user } = useContext(AuthContext);

  const {
    _id,
    name,
    image,
    category,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
  } = product;

  const handleUpdateProduct = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;

    const updatedProduct = {
      name,
      image,
      category,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      userEmail: user?.email, // Assign user email dynamically
      userName: user?.displayName, // Assign user name dynamically
    };

    console.log(updatedProduct);

    // send data to server

    fetch(`http://localhost:5000/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 mt-2 bg-white shadow-md rounded-md">
        <h2 className="text-2xl dark:text-black font-bold mb-6 text-center">Update : {name}</h2>
        <form
          onSubmit={handleUpdateProduct}
          className="space-y-4"
          method="POST"
          action="/addProduct"
        >
          {/* Image Upload */}
          <div>
            <label htmlFor="image" className="block dark:text-black text-sm font-medium">
              Image
            </label>
            <input
              type="text"
              id="image"
              name="image"
              className="mt-1 block dark:text-black w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              defaultValue={image}
              placeholder="Enter an image link"
              required
            />
          </div>

          {/* Item Name */}
          <div>
            <label htmlFor="name" className="block dark:text-black text-sm font-medium">
              Item Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block dark:text-black w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              defaultValue={name}
              placeholder="Enter item name"
              required
            />
          </div>

          {/* Category Name */}
          <div>
            <label htmlFor="categoryName" className="block dark:text-black text-sm font-medium">
              Category Name
            </label>
            <input
              type="text"
              id="category"
              name="category"
              className="mt-1 block dark:text-black w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              defaultValue={category}
              placeholder="Enter category name"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block dark:text-black text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="mt-1 block dark:text-black w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              rows="4"
              defaultValue={description}
              placeholder="Enter product description"
              required
            ></textarea>
          </div>

          {/* Price */}
          <div>
            <label htmlFor="price" className="block dark:text-black text-sm font-medium">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="mt-1 block dark:text-black w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              defaultValue={price}
              placeholder="Enter product price"
              required
            />
          </div>

          {/* Rating */}
          <div>
            <label htmlFor="rating" className="block dark:text-black text-sm font-medium">
              Rating
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              className="mt-1 block dark:text-black w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              defaultValue={rating}
              placeholder="Enter product rating"
              min="0"
              max="5"
              step="0.1"
              required
            />
          </div>

          {/* Customization */}
          <div>
            <label
              htmlFor="customization"
              className="block dark:text-black text-sm font-medium"
            >
              Customization
            </label>
            <input
              type="text"
              id="customization"
              name="customization"
              className="mt-1 block dark:text-black w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              defaultValue={customization}
              placeholder="Enter customization options"
            />
          </div>

          {/* Processing Time */}
          <div>
            <label
              htmlFor="processingTime"
              className="block dark:text-black text-sm font-medium"
            >
              Processing Time
            </label>
            <input
              type="text"
              id="processingTime"
              name="processingTime"
              className="mt-1 block dark:text-black w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              defaultValue={processingTime}
              placeholder="Enter delivery time"
              required
            />
          </div>

          {/* Stock Status */}
          <div>
            <label htmlFor="stockStatus" className="block dark:text-black text-sm font-medium">
              Stock Status
            </label>
            <input
              type="number"
              id="stockStatus"
              name="stockStatus"
              className="mt-1 block dark:text-black w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              defaultValue={stockStatus}
              placeholder="Available product quantity"
              required
            />
          </div>

          {/* User Email (Read-Only) */}
          <div>
            <label htmlFor="userEmail" className="block dark:text-black text-sm font-medium">
              User Email
            </label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              value={user?.email || ""}
              className="mt-1 block dark:text-black w-full border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              readOnly
            />
          </div>

          {/* User Name (Read-Only) */}
          <div>
            <label htmlFor="userName" className="block dark:text-black text-sm font-medium">
              User Name
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={user?.displayName || ""}
              className="mt-1 block dark:text-black w-full border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              readOnly
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProducts;
