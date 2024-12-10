import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <div className="hero bg-gradient-to-r from-blue-400 to-purple-600 text-white py-16">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold">Get in Touch</h1>
            <p className="py-6 text-lg">
              Have questions or need assistance? We're here to help. Feel free
              to reach out, and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
          <form className="space-y-6">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>

            {/* Message */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea
                placeholder="Enter your message"
                className="textarea textarea-bordered w-full"
                rows="5"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">Send Message</button>
            </div>
          </form>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="bg-base-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Contact Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Address</h3>
              <p>123 Main Street, Cityville, Country</p>
            </div>

            {/* Phone */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Phone</h3>
              <p>+123 456 7890</p>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">Email</h3>
              <p>contact@yourwebsite.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="bg-gradient-to-r from-blue-400 to-purple-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            {/* Social Media Links */}
            <a
              href="https://www.facebook.com/"
              className="text-3xl hover:text-gray-300 transition-colors"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.facebook.com/"
              className="text-3xl hover:text-gray-300 transition-colors"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              className="text-3xl hover:text-gray-300 transition-colors"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/"
              className="text-3xl hover:text-gray-300 transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
