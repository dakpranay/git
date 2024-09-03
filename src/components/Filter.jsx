import React from "react";
import InputTag from "../common/InputTag";
import SelectTag from "../common/SelectTag";

export default function Filter({ onChange }) {
  return (
    <div className="flex items-center justify-center text-xl">
      <InputTag
        type="text"
        componentStyle="flex my-3  items-center flex-1 ml-5"
        inputStyle="px-2 py-1 border-2 border-black w-full mr-5"
        placeholder="search..."
        onChange={onChange}
        name="searchQuery"
      />
      <SelectTag onChange={onChange} name="sortQuery" />
    </div>
  );
}
