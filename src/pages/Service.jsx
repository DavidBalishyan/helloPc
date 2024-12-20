import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div className="bg-base-200 flex flex-col flex-grow">
      {/* Hero Section */}
      <div className="hero bg-gradient-to-r  from-blue-500 to-purple-600 text-white py-16">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold">Our Services</h1>
            <p className="py-6 text-lg">
              We offer a wide range of high-quality services designed to meet
              your needs. Explore what we have to offer and let us help you
              achieve your goals.
            </p>
          </div>
        </div>
      </div>
      {/* Services Grid */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://via.placeholder.com/400"
                alt="Service 1"
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Web Development</h2>
              <p>
                Build modern, responsive, and fast websites with cutting-edge
                technology.
              </p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://via.placeholder.com/400"
                alt="Service 2"
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Mobile App Development</h2>
              <p>
                Create stunning mobile applications for both Android and iOS
                platforms.
              </p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://via.placeholder.com/400"
                alt="Service 3"
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">UI/UX Design</h2>
              <p>
                Design user-friendly interfaces that improve user experience and
                engagement.
              </p>
            </div>
          </div>

          {/* Service Card 4 */}
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://via.placeholder.com/400"
                alt="Service 4"
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">SEO Optimization</h2>
              <p>
                Improve your website’s search engine ranking and reach a wider
                audience.
              </p>
            </div>
          </div>

          {/* Service Card 5 */}
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://via.placeholder.com/400"
                alt="Service 5"
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Cloud Services</h2>
              <p>
                Scale your business with secure and reliable cloud infrastructure
                solutions.
              </p>
            </div>
          </div>

          {/* Service Card 6 */}
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://via.placeholder.com/400"
                alt="Service 6"
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Digital Marketing</h2>
              <p>
                Expand your brand’s online presence with tailored digital
                marketing strategies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">
            Contact us today and let’s build something amazing together.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Service;