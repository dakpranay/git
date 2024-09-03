import React, { useState } from "react";

export default function Modal({ handleCloseModal, setSearchedData }) {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    let errors = { ...formErrors };

    switch (name) {
      case "name":
        errors.name =
          value.length < 3 ? "Name must be at least 3 characters long" : "";
        break;
      case "email":
        errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Invalid email address";
        break;
      case "gender":
        errors.gender =
          value !== "male" && value !== "female" && value !== "other"
            ? "Please select a gender"
            : "";
        break;
      case "dob":
        errors.dob = value !== "" ? "" : "Please enter your date of birth";
        break;
      case "phone":
        errors.phone = /^\d{10}$/.test(value)
          ? ""
          : "Phone number must be 10 digits";
        break;
      case "city":
        errors.city =
          value.length < 2
            ? "City name must be at least 2 characters long"
            : "";
        break;
      default:
        break;
    }

    setFormErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    Object.keys(formData).forEach((key) => {
      switch (key) {
        case "name":
          errors.name =
            formData.name.length < 3
              ? "Name must be at least 3 characters long"
              : "";
          break;
        case "email":
          errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
            ? ""
            : "Invalid email address";
          break;
        case "gender":
          errors.gender =
            formData.gender !== "male" &&
            formData.gender !== "female" &&
            formData.gender !== "other"
              ? "Please select a gender"
              : "";
          break;
        case "dob":
          errors.dob =
            formData.dob !== "" ? "" : "Please enter your date of birth";
          break;
        case "phone":
          errors.phone = /^\d{10}$/.test(formData.phone)
            ? ""
            : "Phone number must be 10 digits";
          break;
        case "city":
          errors.city =
            formData.city.length < 2
              ? "City name must be at least 2 characters long"
              : "";
          break;
        default:
          break;
      }
    });

    setFormErrors(errors);

    if (Object.keys(errors).every((key) => errors[key] === "")) {
      let studentData = JSON.parse([localStorage.getItem("studentDetails")]);
      formData.id = String(studentData.length + 1);
      studentData = [...studentData, formData];
      localStorage.setItem("studentDetails", JSON.stringify(studentData));
      setSearchedData(studentData);
      handleCloseModal();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 flex justify-center items-center p-10">
      <div className="bg-white rounded-lg p-8 max-w-md h-4/5 overflow-auto no-scrollbar">
        <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            User Information
          </h2>
          <form onSubmit={handleSubmit}>
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
                value={formData.name}
                onChange={handleChange}
                required
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  formErrors.name ? "border-red-500" : ""
                }`}
              />
              {formErrors.name && (
                <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
              )}
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
                value={formData.email}
                onChange={handleChange}
                required
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  formErrors.email ? "border-red-500" : ""
                }`}
              />
              {formErrors.email && (
                <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  formErrors.gender ? "border-red-500" : ""
                }`}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {formErrors.gender && (
                <p className="text-red-500 text-xs mt-1">{formErrors.gender}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  formErrors.dob ? "border-red-500" : ""
                }`}
              />
              {formErrors.dob && (
                <p className="text-red-500 text-xs mt-1">{formErrors.dob}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  formErrors.phone ? "border-red-500" : ""
                }`}
              />
              {formErrors.phone && (
                <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  formErrors.city ? "border-red-500" : ""
                }`}
              />
              {formErrors.city && (
                <p className="text-red-500 text-xs mt-1">{formErrors.city}</p>
              )}
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >
                Submit
              </button>
              <button
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 mt-5"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
