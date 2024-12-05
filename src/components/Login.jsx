import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import logo from '../assets/logo-bs.jpg';
import loginImg from "../assets/loginImg.webp";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from 'sweetalert2'; // Import SweetAlert2

const Login = () => {
  const [success, setSuccess] = useState(false);
  const { googleLogin } = useContext(AuthContext); // Access googleLogin function
  const navigate = useNavigate(); // Get navigate function

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    setSuccess(false);

    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
        setSuccess(true);
        navigate("/"); // Redirect to home page on success
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Incorrect username or password. Please try again.',
        });
      });
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin(); // Call the googleLogin function from context
      setSuccess(true);
      navigate("/"); // Redirect to home page on Google login success
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Google Login Failed',
        text: 'There was an error during Google login. Please try again.',
      });
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900 p-3">
      <div className="flex flex-col md:flex-row max-w-4xl w-full shadow-lg rounded-lg overflow-hidden">
        {/* Left Section with Image */}
        <div
          className="hidden md:block w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${loginImg})` }}
        ></div>

        {/* Right Section with Form */}
        <div className="w-full md:w-1/2 bg-white p-6 sm:p-10">
          <img src={logo} className="mx-auto mb-6 w-24 h-auto" alt="Logo" />
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">User Name</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700"
            >
              Login
            </button>

            <button
              onClick={handleGoogleLogin}
              type="button"
              className="w-full mt-4 bg-red-600 text-white py-2 rounded-md shadow-md hover:bg-red-700 flex items-center justify-center gap-2"
            >
              <FaGoogle />
              Login with Google
            </button>
          </form>

          {success && <p className="text-green-500 text-xs">Login successful!</p>}

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
