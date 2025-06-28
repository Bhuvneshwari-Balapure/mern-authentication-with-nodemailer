import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-bold mb-3">YourApp</h2>
          <p className="text-sm text-gray-400">
            Empowering businesses with modern web solutions. Clean code.
            Scalable design.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Press
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-3">
            Get the latest updates right in your inbox.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l bg-gray-800 text-sm placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 rounded-r text-sm hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} YourApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
