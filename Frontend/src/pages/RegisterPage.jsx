import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: "",
  });
//   console.log(formData);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: value,
      [name]: name === "profileImage" ? files[0] : value,
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2163/2163350.png"
            alt="homeimg"
            className="w-10 h-10"
          />
        </div>
        <h2 className="text-2xl font-semibold text-center mb-6">
          Register to RoomRentail
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              className="common-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              className="common-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              className="common-input"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confrim Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confrim Password"
              className="common-input"
              value={formData.confrimPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4 flex">
            <label
              htmlFor="image"
              className="flex items-center gap-2 text-sm font-medium text-gray-700"
            >
              {formData.profileImage ? (
                <img src={URL.createObjectURL(formData.profileImage)}
                  alt="profile img"
                  style={{ maxWidth: "80px"}}
                  />
              ) : (
                <img
                src="https://cdn-icons-png.flaticon.com/128/159/159626.png"
                className="w-8 h-8 cursor-pointer"
                alt="add profile img"
              />
              )}
              <p className="cursor-pointer">Upload Your Photo</p>
            </label>
            <input
              id="image"
              type="file"
              name="profileImage"
              accept="image/*"
              className="hidden"
              //   className="common-input hidden"
              onChange={handleChange}
              required
            />
          </div>

          <button className="common-btn">Register</button>
        </form>

        <div className="mt-6 text-center">
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 to-gray-50">0R</span>
            </div>
          </div>

          <div className="mt-4 text-center text-sm">
            <span>
              Already have an account?
              <Link
                to="/login"
                className="font-medium text-pinterest hover:underline"
              >
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;