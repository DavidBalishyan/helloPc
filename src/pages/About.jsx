import React from "react";
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100">
      {/* Hero Section */}
      <div className="hero bg-gradient-to-r from-blue-400 to-purple-600 text-white py-16">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="py-6 text-lg">
              We are passionate about delivering top-notch solutions that make a
              difference in people's lives. Our mission is to innovate, inspire,
              and create meaningful experiences.
            </p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Who We Are</h2>
        <p className="text-center max-w-4xl mx-auto text-gray-700 text-lg">
          Our team consists of talented and driven individuals committed to
          pushing the boundaries of creativity and technology. We believe in
          fostering a culture of innovation and excellence. By working together,
          we strive to achieve greatness and deliver exceptional results.
        </p>
      </div>

      {/* Team Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="text-xl font-semibold">Alice Johnson</h3>
              <p className="text-gray-600">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-400 to-purple-600 text-white py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="py-4 text-lg">
            Want to know more about us? Feel free to reach out!
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
