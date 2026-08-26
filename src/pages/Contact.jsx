import React, { useEffect, useState } from "react";
import Spinner from "../components/LoadingSpinner";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // page load er animation er jonno
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />; // full page spinner
  }

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Contact <span className="text-orange-500">Us</span>
          </h1>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Have a question or want to work with us? Feel free to get in touch.
            We would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="font-semibold text-gray-800">📍 Address</h3>
                <p className="text-gray-500 mt-1">
                  123 Architecture Street, Dhaka, Bangladesh
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">📞 Phone</h3>
                <p className="text-gray-500 mt-1">
                  +880 1234-567890
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">✉️ Email</h3>
                <p className="text-gray-500 mt-1">
                  info@g3architects.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">🕒 Working Hours</h3>
                <p className="text-gray-500 mt-1">
                  Saturday - Thursday: 9:00 AM - 6:00 PM
                </p>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none resize-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;