import React from "react";
import { Link } from "react-router-dom";

export default function Header({ handleAddClick }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-2 text-lg bg-light-gray">
      <div className="flex items-center">
        <img src="./logo.png" alt="logo" className="h-12" />
      </div>
      <div className="flex md:gap-10 mt-4 md:mt-0 hidden sm:inline">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/" className="link">
          About
        </Link>
        <Link to="/" className="link">
          Contact Us
        </Link>
      </div>
      <button
        className="bg-custom-blue py-2 px-5 mt-4 md:mt-0"
        onClick={handleAddClick}
      >
        ADD
      </button>
    </div>
  );
}
