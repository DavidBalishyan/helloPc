import React from "react";
import {Link} from "react-router-dom"
const Trash = () => {
  return (
    <div className="min-h-screen bg-base-200 text-base-content p-6 flex items-center justify-center">
      <div className="max-w-4xl bg-base-100 shadow-2xl rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-primary text-primary-content text-center p-6">
          <h1 className="text-3xl font-bold mb-2">Why You Should Avoid Light Mode</h1>
          <p className="text-sm opacity-80">Save your eyes. Save your life.</p>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-6">
          <div className="flex items-center">
            <Link to="/" className="text-4xl mr-4">🌙</Link>
            <div>
              <h2 className="text-xl font-semibold">Better for Your Eyes</h2>
              <p>
                Dark mode reduces eye strain, especially in low-light environments.
                The high contrast in light mode can cause discomfort and fatigue.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <span className="text-4xl mr-4">🔋</span>
            <div>
              <h2 className="text-xl font-semibold">Saves Battery</h2>
              <p>
                Dark mode consumes less energy on OLED and AMOLED screens, increasing
                battery life significantly.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <span className="text-4xl mr-4">🖤</span>
            <div>
              <h2 className="text-xl font-semibold">Looks Sleek and Modern</h2>
              <p>
                Let’s face it, dark mode just looks cooler. It provides a stylish and
                modern user experience.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <span className="text-4xl mr-4">🌐</span>
            <div>
              <h2 className="text-xl font-semibold">Reduces Blue Light Exposure</h2>
              <p>
                Reducing blue light can improve sleep quality and protect your eyes
                from long-term damage.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-base-300 text-center p-4">
          <p className="text-sm font-medium">
            Ready to embrace the darkness? 🌑 Switch to dark mode now!
          </p>
        </div>
      </div>
	
    </div>
  );
};

export default Trash;
