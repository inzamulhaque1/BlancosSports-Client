import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// Password strength check function
const checkPasswordStrength = (password) => {
  let strength = 0;
  const regexWeak = /[a-zA-Z]/;
  const regexMedium = /[0-9]/;
  const regexStrong = /[!@#$%^&*(),.?":{}|<>]/;

  if (regexWeak.test(password)) strength += 1;
  if (regexMedium.test(password)) strength += 1;
  if (regexStrong.test(password)) strength += 1;

  return strength;
};

const SignUp = () => {
  const { createUser, setUser } = useContext(AuthContext); 
  const navigate = useNavigate(); 

  // State for password visibility, strength, validation, and error message
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [error, setError] = useState("");  // State for error message
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  // Handle password change and update strength
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(checkPasswordStrength(newPassword));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photo.value;
    const name = e.target.name.value;

    try {
      const result = await createUser(email, password, name, photoURL);
      await updateProfile(result, { 
        displayName: name, 
        photoURL 
      });

      console.log("User signed up successfully:", result);
      setUser(result); // Update user state in context
      setSuccessMessage("Registration successful! Welcome to the platform."); // Set success message
      navigate("/"); // Redirect to homepage after success

    } catch (error) {
      console.error("Error signing up:", error);
      setError(error.message);  // Set error message on failure
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center mb-4">Sign Up:</h2>
      <form onSubmit={handleSignUp} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          
          <div className="mt-2">
            {/* Password strength bar */}
            <div className="flex justify-between text-sm">
              <span>Weak</span>
              <span>Medium</span>
              <span>Strong</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full mt-1 h-2">
              <div
                className={`h-full rounded-full ${passwordStrength === 1
                    ? "bg-red-500"
                    : passwordStrength === 2
                    ? "bg-yellow-500"
                    : passwordStrength === 3
                    ? "bg-green-500"
                    : ""
                }`}
                style={{ width: `${(passwordStrength / 3) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="photo" className="block text-sm font-medium">Profile Photo URL</label>
          <input
            type="text"
            id="photo"
            name="photo"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter a photo URL"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#ff6500] text-white py-2 rounded-md hover:bg-teal-500"
        >
          Sign Up
        </button>
        <p>Already have an account? <button className="text-blue-500" onClick={() => navigate("/login")}> Login here</button></p>

        {/* Error message at the bottom */}
        {error && (
          <p className="text-red-500 mt-4 text-center">{error}</p>
        )}

        {/* Success message at the bottom */}
        {successMessage && (
          <p className="text-green-500 mt-4 text-center">{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default SignUp;
