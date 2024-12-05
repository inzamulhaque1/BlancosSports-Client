import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo-bs.png"; // Import your logo

const Footer = () => {
  return (
    <footer className="bg-[#ff6500] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content Wrapper */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="text-center rounded-3xl bg-white md:text-left p-2 mb-4 md:mb-0">
            <img src={logo} alt="Logo" className="h-[70px]" />
          </div>
          <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-300"
          >
            <FaLinkedin />
          </a>
        </div>

          <div className="text-center md:text-right mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <p className="text-md mt-2">Email: contact@yourwebsite.com</p>
            <p className="text-md">Phone: +1 (234) 567-890</p>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center bg-white text-orange-500 p-1">
          <p className="text-base font-semibold">
            &copy; {new Date().getFullYear()} BlancosSports. All rights reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;
