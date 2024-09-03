import React, { useState } from "react";
import InputTag from "../common/InputTag";

export default function Form({ student }) {
  const [formData, setFormData] = useState({});

  function onChange(e) {
    let { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  return (
    <>
      <div className="max-w-md mx-auto m-10 bg-white rounded-lg overflow-hidden shadow-lg mt-16">
        <div className="px-6 py-4 m-5">
          <div className="font-bold text-xl mb-2">User Profile</div>
          <div className="mb-4">
            <label className="lable">Name:</label>
            <input
              type="text"
              value={student?.name}
              disabled
              className="input"
            />
          </div>
          <div className="mb-4">
            <label className="lable">Email:</label>
            <input
              type="email"
              value={student?.email}
              disabled
              className="input"
            />
          </div>
          <div className="mb-4">
            <label className="lable">Phone Number:</label>
            <input
              type="tel"
              value={student?.phone}
              disabled
              className="input"
            />
          </div>
          <div className="mb-4">
            <label className="lable">Gender:</label>
            <input
              type="text"
              value={student?.gender}
              disabled
              className="input"
            />
          </div>
          <div className="mb-4">
            <label className="lable">Date of Birth:</label>
            <input
              type="date"
              value={student?.dob}
              disabled
              className="input"
            />
          </div>
        </div>
      </div>
    </>
  );
}
