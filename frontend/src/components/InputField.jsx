import React from 'react';

const InputField = ({ icon, type, placeholder, value, onChange }) => {
  return (
    <div className="relative flex items-center">
      <div className="absolute left-4 text-gray-500">{icon}</div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-colors"
        required
      />
    </div>
  );
};

export default InputField;
