/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllProductsTable = ({ product,products, setProducts }) => {
  const {
    _id,
    name,
    image,
    category,
    price,
    stockStatus,
    rating,
    description,
  } = product;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment10-server-khaki.vercel.app/product/${_id}`, {
            method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your Product has been deleted.",
                  icon: "success"
                })

                const remaining = products.filter(p => p._id !== _id)
                setProducts(remaining)
                

            }
          });
      }
    });
  };

  return (
    <tr>
      <td className="border border-gray-300 px-4 py-2">{name}</td>
      <td className="border border-gray-300 px-4 py-2">
        <img src={image} alt={name} className="w-12 h-12 object-cover" />
      </td>
      <td className="border border-gray-300 px-4 py-2">{category}</td>
      <td className="border border-gray-300 px-4 py-2">
        {description.length > 150
          ? description.slice(0, 150) + "..."
          : description}
      </td>
      <td className="border border-gray-300 px-4 py-2">{price}</td>
      <td className="border border-gray-300 px-4 py-2">{rating}</td>
      <td className="border border-gray-300 px-4 py-2">{stockStatus}</td>

      <td className="border border-gray-300 px-4 py-2 flex">
        <button className="p-1 ">
          <Link to={`/showProduct/${_id}`}><i className="fa-solid fa-eye text-green-500"></i></Link>
        </button>
        <button className="p-1 mx-1">
          <Link to={`/updateProduct/${_id}`}><i className="fa-solid fa-pen-to-square text-blue-500"></i></Link>
        </button>
        <button onClick={() => handleDelete(_id)} className="p-1 ">
          <i className="fa-solid fa-trash text-red-500"></i>
        </button>
      </td>
    </tr>
  );
};

export default AllProductsTable;
