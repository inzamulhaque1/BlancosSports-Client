import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Lottie from "lottie-react";
import lottieAnimation from "../assets/lottie/light.json"; // Replace with your Lottie animation file path
import surpriseImage from '../assets/surprice.webp'

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-12-25T00:00:00"); // Christmas date
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null; // Time's up
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <section className="bg-red-100 text-center py-8">
        <h2 className="text-3xl font-bold text-gray-800">🎄 Sale is Over! 🎄</h2>
        <p className="text-gray-600 mt-2">Stay tuned for the next big event!</p>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-r from-red-200 via-red-100 to-pink-100 py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        {/* Left Side: Surprise Image */}
        <div className="flex-1 flex justify-center mb-6 lg:mb-0">
          <img
            src={surpriseImage}
            alt="Surprise Gift"
            className="w-3/4 sm:w-1/2 md:w-2/5 lg:w-full max-w-sm rounded-lg shadow-lg"
          />
        </div>

        {/* Middle Section: Title and CTA */}
        <div className="flex-1 text-center lg:text-left px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Huge Sale for <span className="text-red-600">Christmas!</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mt-4">
            Don’t miss out on our exclusive offers! Amazing discounts just for you. Grab your favorites now!
          </p>
          <button className="mt-6 bg-red-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-red-700">
            Shop Now
          </button>
        </div>

        {/* Right Side: Lottie Animation */}
        <div className="flex-1 flex justify-center mt-5">
          <Lottie animationData={lottieAnimation} loop={true} className="w-3/4 sm:w-2/3 lg:w-full max-w-sm" />
        </div>
      </div>

      <Fade cascade>
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Grab your favorite items before the time runs out!
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 lg:gap-10 text-center text-gray-800">
            {/* Countdown Boxes */}
            <div className="bg-white rounded-lg shadow-md p-3 md:p-4 w-full">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold">{timeLeft.days}</p>
              <p className="text-xs sm:text-sm md:text-base font-medium">Days</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-3 md:p-4 w-full">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold">{timeLeft.hours}</p>
              <p className="text-xs sm:text-sm md:text-base font-medium">Hours</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-3 md:p-4 w-full">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold">{timeLeft.minutes}</p>
              <p className="text-xs sm:text-sm md:text-base font-medium">Minutes</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-3 md:p-4 w-full">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold">{timeLeft.seconds}</p>
              <p className="text-xs sm:text-sm md:text-base font-medium">Seconds</p>
            </div>
          </div>
          <div className="text-center mt-8 md:mt-10">
            <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg shadow-lg text-base sm:text-lg transition">
              Shop Now
            </button>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default CountdownTimer;
