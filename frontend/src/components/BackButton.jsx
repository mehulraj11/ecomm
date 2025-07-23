import { ArrowLeft } from "lucide-react";

const BackButton = ({ onBack }) => (
  <button
    onClick={onBack}
    className="flex items-center text-gray-400 hover:text-white transition-colors mb-8 group"
  >
    <ArrowLeft
      size={16}
      className="mr-2 transition-transform group-hover:-translate-x-1"
    />
    Back
  </button>
);

export default BackButton;
