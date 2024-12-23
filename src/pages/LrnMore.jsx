import { Link } from "react-router-dom"


const LrnMore = () => {
    return (
        <section className="bg-base-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-primary">Discover More About Us</h2>
          <p className="text-lg mb-6 text-base-content">
            We are passionate about delivering the best solutions for our customers. Our journey
            started with a vision to make a difference, and we continue to innovate and excel in
            everything we do.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card shadow-lg p-6 bg-base-200">
              <h3 className="text-2xl font-semibold text-primary mb-2">Our Mission</h3>
              <p className="text-base-content">
                To provide high-quality, innovative, and customer-focused solutions that empower
                individuals and businesses.
              </p>
            </div>
            <div className="card shadow-lg p-6 bg-base-200">
              <h3 className="text-2xl font-semibold text-primary mb-2">Our Vision</h3>
              <p className="text-base-content">
                To become a global leader in our industry by setting the highest standards of
                excellence and innovation.
              </p>
            </div>
            <div className="card shadow-lg p-6 bg-base-200">
              <h3 className="text-2xl font-semibold text-primary mb-2">Our Values</h3>
              <p className="text-base-content">
                Integrity, innovation, and customer satisfaction are at the core of everything we
                do.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default LrnMore;