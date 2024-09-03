import React from "react";

export default function SelectTag({ onChange, name }) {
  return (
    <select
      className=" px-2 py-1 border-2 border-custom-black  mr-5"
      name={name}
      onChange={onChange}
    >
      <option default>Select an option</option>
      <option>Sort by id </option>
      <option>Sort by phone number</option>
    </select>
  );
}
