import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="flex flex-col flex-grow bg-base-200">
      {/* Hero Section */}
      <div className="hero bg-gradient-to-r from-green-400 to-blue-500 text-white py-16">
        <div className="hero-content flex-col text-center">
          <h1 className="text-5xl font-bold">Get Started Today</h1>
          <p className="py-6 text-lg">
            Take the first step towards achieving your goals. Follow our simple process to get started quickly and easily.
          </p>
          <Link to="/home" className="btn btn-primary btn-lg">Join Now</Link>
        </div>
      </div>

      {/* Steps Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">How to Get Started</h2>
        <div className="steps steps-vertical lg:steps-horizontal w-full">
          <div className="step step-primary">
            <div className="flex flex-col items-center text-center">
              <div className="text-3xl font-semibold">Step 1</div>
              <p className="text-lg mt-2">Sign up for an account.</p>
            </div>
          </div>
          <div className="step step-primary">
            <div className="flex flex-col items-center text-center">
              <div className="text-3xl font-semibold">Step 2</div>
              <p className="text-lg mt-2">Complete your profile.</p>
            </div>
          </div>
          <div className="step">
            <div className="flex flex-col items-center text-center">
              <div className="text-3xl font-semibold">Step 3</div>
              <p className="text-lg mt-2">Explore our services.</p>
            </div>
          </div>
          <div className="step">
            <div className="flex flex-col items-center text-center">
              <div className="text-3xl font-semibold">Step 4</div>
              <p className="text-lg mt-2">Start your journey!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Trusted by Thousands</h2>
                <p>Join a community of thousands who trust us for their success.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">24/7 Support</h2>
                <p>We’re always here to help, no matter when you need us.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Easy to Use</h2>
                <p>Our platform is designed with simplicity and ease in mind.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">
          Don’t wait any longer. Take the first step towards success today.
        </p>
        <Link to="/" className="btn btn-accent btn-lg">Start Now</Link>
      </div>
    </div>
  );
};

export default GetStarted;