import React from "react";

function Home() {
  return (
    <div className="p-6">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to YourApp
        </h1>
        <p className="text-gray-700 text-lg">
          Your one-stop solution for modern web development and tech solutions.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Why Choose Us?</h2>
          <p className="text-gray-600">
            We deliver high-quality, scalable, and secure web applications using
            the latest technologies.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Our Services</h2>
          <p className="text-gray-600">
            From backend APIs to full-stack MERN apps, we offer a wide range of
            development services tailored to your needs.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
          <p className="text-gray-600">
            Have an idea or project in mind? Contact us today and let’s build
            something great together.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
