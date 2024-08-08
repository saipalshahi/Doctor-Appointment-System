import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col  bg-gradient-to-r  from-blue-300 to-indigo-800">
      <Navbar />
      <div className="flex justify-center items-center mt-52">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4"
        >
          <h2 className="text-4xl font-semibold mb-6 text-center text-gray-800">
            Login
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 transition-all duration-200"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 transition-all duration-200"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 shadow-md"
          >
            Login
          </Button>

          <div className="mt-4 text-center">
            <a
              href="#"
              className="text-indigo-600 hover:underline transition-all duration-200"
            >
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
