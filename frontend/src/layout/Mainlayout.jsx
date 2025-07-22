import { Outlet } from "react-router-dom";
const Mainlayout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Outlet />
    </div>
  );
};

export default Mainlayout;
