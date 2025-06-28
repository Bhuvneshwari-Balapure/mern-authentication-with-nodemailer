import React from "react";

function Contact() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
        Contact Us
      </h1>
      <p className="text-gray-700 text-lg mb-10 text-center">
        We'd love to hear from you! Whether you have a question, feedback, or
        project idea—feel free to reach out.
      </p>

      <form className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Your email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Message
          </label>
          <textarea
            rows="5"
            placeholder="Your message"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
