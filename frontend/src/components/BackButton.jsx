import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
const BackButton = ({ route }) => (
  <Link
    to={route}
    className="flex items-center text-gray-400 hover:text-white transition-colors mb-8 group"
  >
    <ArrowLeft
      size={16}
      className="mr-2 transition-transform group-hover:-translate-x-1"
    />
    Back
  </Link>
);

export default BackButton;
