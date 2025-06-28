import React from "react";

export default function About() {
  return (
    <div className="p-6">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
        <p className="text-gray-700 text-lg">
          We are a passionate team of developers and designers committed to
          creating impactful digital experiences.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to simplify technology for everyone. We aim to
            deliver efficient, modern, and user-friendly solutions that help our
            clients grow.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">What We Do</h2>
          <p className="text-gray-600">
            We specialize in web development using the MERN stack, offering
            full-stack solutions, API integrations, and scalable backend
            systems.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Core Values
        </h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Commitment to quality and innovation</li>
          <li>Transparent communication</li>
          <li>Customer-first approach</li>
          <li>Continuous learning and improvement</li>
        </ul>
      </section>
    </div>
  );
}
