// import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-base-content">
      {/* Hero Section */}
      <div className="text-center p-6 max-w-3xl">
        <h1 className="text-5xl font-bold mb-4 text-primary">
          Welcome to Our Website
        </h1>
        <p className="text-lg mb-6 text-white">
          Empowering your ideas with modern web and mobile solutions. Explore our
          services and let’s build something amazing together.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/getstarted" className="btn btn-primary btn-wide">Get Started</Link>
          <Link to="/lrnmore" className="btn btn-outline btn-wide">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
