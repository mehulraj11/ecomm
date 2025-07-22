import React from "react";

const SubmitButton = ({ text }) => {
  return (
    <button
      type="submit"
      className="w-full bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
