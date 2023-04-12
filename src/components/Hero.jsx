import React, { useState, useEffect } from "react";
import { FiArrowDown } from "react-icons/fi";
import { useRouter } from "next/router";

const images = [
  "/images/artsandcraft.jpg",
  "/images/child-legos.jpg",
  "/images/takingphoto.jpg",
  "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1676&q=80",
  "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  "https://images.unsplash.com/photo-1617817376017-3de702f0c35f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];


const Hero = ({ heading, message, buttonText }) => {
  const randomIndex = Math.floor(Math.random() * images.length);
  const [currentImageIndex, setCurrentImageIndex] = useState(randomIndex);
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      return;
    }
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [loaded]);

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentImageIndex((prevIndex) => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * images.length);
        } while (newIndex === prevIndex);
        return newIndex;
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <div className="relative flex items-center justify-center h-screen mb-12">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          className={`w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-in-out ${
            currentImageIndex === index && loaded ? "opacity-100" : ""
          }`}
        />
      ))}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-3xl md:text-5xl font-bold" style={{ lineHeight: "1.2" }}>
          {heading.split("").map((letter, index) => (
            letter === " " ? (
              <span key={index} className="inline-block" style={{ width: "0.5ch" }} />
            ) : (
              <span
                key={index}
                className={`inline-block text-animation transform transition-all duration-500 hover:scale-110 hover:text-gradient transition-delay-[${index *
                  50}ms] whitespace-nowrap`}
                style={{
                  backgroundImage: "linear-gradient(to right, #FFA726 0%, #FFA726 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {letter}
              </span>
            )
          ))}
        </h2>
        <p className="py-5 text-xl transform transition-all duration-500 hover:scale-105 hover:text-indigo-300">
          {message}
        </p>
        <button
          className="px-8 py-2 border border-white rounded-lg shadow-md hover:bg-white hover:text-black transition-colors duration-200"
          onClick={() => (window.location.href = "#content")}
        >
          {buttonText}
        </button>
      </div>
      <div className="absolute bottom-0 mb-4">
        <FiArrowDown
          className="w-12 h-12 text-white cursor-pointer z-[2] hover:text-gray-300 transition-colors duration-200 animate-bounce 
                   bg-gradient-to-tr from-orange-500 to-blue-500 rounded-full p-3 relative"
          onClick={() => (window.location.href = "#content")}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-blue-800 rounded-full p-3 animate-spin"></div>
      </div>
    </div>
  );
};

export default Hero;
