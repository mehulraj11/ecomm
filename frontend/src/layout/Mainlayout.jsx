import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const Mainlayout = ({ getCartItemCount }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header getCartItemCount={getCartItemCount} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Mainlayout;
