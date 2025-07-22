// src/utils/Spinner.js (or whatever path matches your import)
import React from "react";

const Spinner = ({
  // Renamed from TailwindSpinner to Spinner to match your import
  size = "md", // 'sm', 'md', 'lg', 'xl', '2xl', '3xl' or custom class like 'w-10 h-10'
  color = "blue", // Tailwind color name (e.g., 'blue', 'indigo', 'gray', 'purple')
  colorIntensity = "600", // Tailwind color shade (e.g., '400', '500', '600', '700')
  text = "", // Optional text to display below the spinner
  textColor = "gray-700", // Tailwind text color class (e.g., 'text-gray-700', 'text-blue-500')
  className = "", // Additional Tailwind classes for the outer container div
  // The 'type' prop (like type="border") is not explicitly handled here
  // because this spinner inherently provides a 'border' type visual.
  // It won't cause issues if passed, but it's not used internally.
}) => {
  // Determine spinner dimensions and border thickness based on 'size' prop
  let spinnerSizeClasses;
  let borderWidthClasses = "border-4"; // Default border thickness for classic look

  switch (size) {
    case "sm":
      spinnerSizeClasses = "w-5 h-5";
      borderWidthClasses = "border-2";
      break;
    case "md":
      spinnerSizeClasses = "w-8 h-8"; // This will be used for your SignInForm
      break;
    case "lg":
      spinnerSizeClasses = "w-12 h-12";
      break;
    case "xl":
      spinnerSizeClasses = "w-16 h-16";
      break;
    case "2xl":
      spinnerSizeClasses = "w-20 h-20";
      break;
    case "3xl":
      spinnerSizeClasses = "w-24 h-24";
      break;
    default:
      // Allows custom classes like 'w-10 h-10 border-2' to be passed directly for size
      spinnerSizeClasses = size; // Expecting size to be a full class string now
      break;
  }

  // Tailwind color classes for the spinner border
  // One part of the border will be transparent (`border-r-transparent`)
  // The visible part will use the specified color and intensity
  const spinnerBorderColor = `border-${color}-${colorIntensity}`;

  const spinnerClasses = `
    inline-block
    rounded-full
    animate-spin
    ${spinnerSizeClasses}
    ${borderWidthClasses}
    ${spinnerBorderColor}
    border-r-transparent
  `;

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={spinnerClasses} role="status">
        <span className="sr-only">Loading...</span>
      </div>
      {text && (
        <span className={`mt-3 text-base font-medium ${textColor}`}>
          {text}
        </span>
      )}
    </div>
  );
};

export default Spinner;
