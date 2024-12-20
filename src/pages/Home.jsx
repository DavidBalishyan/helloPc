import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";
import logo1 from "/Logo1.webp"

const Home = () => {
  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <div className="hero min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 text-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={logo1}
            alt="Hero Illustration"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Welcome to Our Platform</h1>
            <p className="py-6 text-lg">
              We deliver innovative solutions to help you achieve your goals.
              Explore our services and find out how we can work together.
            </p>
            <Link to="/signup" className="btn btn-primary btn-lg">Get Started</Link>
          </div>
        </div>
      </div>

      {/* Features Section */}

      <div className="py-16 bg-base-100">
        <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4">
          {/* Feature 1 */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="text-6xl text-primary">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="card-title text-2xl">Fast Performance</h3>
              <p>
                Experience blazing fast speeds and seamless user experiences
                across all devices.
              </p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="text-6xl text-secondary">
                <i className="fas fa-lock"></i>
              </div>
              <h3 className="card-title text-2xl">Secure</h3>
              <p>
                Your data and privacy are our top priorities with cutting-edge
                security.
              </p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="text-6xl text-accent">
                <i className="fas fa-cogs"></i>
              </div>
              <h3 className="card-title text-2xl">Customizable</h3>
              <p>
                Tailor our solutions to your unique needs for maximum
                flexibility and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="py-16 bg-gradient-to-r from-blue-400 to-purple-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="mb-8 text-lg">
          Join our platform today and take the first step toward success.
        </p>
        <Link to="/signup" className="btn btn-secondary btn-lg">Sign Up Now</Link>
      </div>
    </div>
  );
};

export default Home;
