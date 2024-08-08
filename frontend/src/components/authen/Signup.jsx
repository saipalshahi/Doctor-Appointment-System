import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    insurance: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r  from-blue-300 to-indigo-800">
      <Navbar />
      <div className="flex justify-center items-center m-40 ">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-3xl mx-4 "
        >
          <h2 className="text-4xl font-semibold mb-6 text-center text-gray-800 ">
            Create Your Account
          </h2>

          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="firstname">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 transition-all duration-200"
                required
              />
            </div>

            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="lastname">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 transition-all duration-200"
                required
              />
            </div>

            <div className="w-full md:w-1/2 px-2 mb-4">
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

            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 transition-all duration-200"
                required
              />
            </div>

            <div className="w-full md:w-1/2 px-2 mb-4">
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

            <div className="w-full md:w-1/2 px-2 mb-4">
              <label
                className="block text-gray-700 mb-1"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 transition-all duration-200"
                required
              />
            </div>

            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="dateOfBirth">
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 transition-all duration-200"
                required
              />
            </div>

            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 mb-1">Gender</label>
              <div className="flex mt-2">
                <label className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                    className="form-radio text-indigo-600"
                  />
                  <span className="ml-2 text-gray-700">Male</span>
                </label>
                <label className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                    className="form-radio text-indigo-600"
                  />
                  <span className="ml-2 text-gray-700">Female</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={formData.gender === "other"}
                    onChange={handleChange}
                    className="form-radio text-indigo-600"
                  />
                  <span className="ml-2 text-gray-700">Other</span>
                </label>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 shadow-md mt-6"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
