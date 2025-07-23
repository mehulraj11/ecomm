import React from "react";

const Spinner = ({
  size = "md",
  color = "blue",
  colorIntensity = "600",
  text = "",
  textColor = "gray-700",
  className = "",
}) => {
  let spinnerSizeClasses;
  let borderWidthClasses = "border-4";

  switch (size) {
    case "sm":
      spinnerSizeClasses = "w-5 h-5";
      borderWidthClasses = "border-2";
      break;
    case "md":
      spinnerSizeClasses = "w-8 h-8";
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
      spinnerSizeClasses = size;
      break;
  }
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
