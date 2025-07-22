import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-4 relative">
      <div className="w-full max-w-md bg-black/50 p-8 md:p-12 rounded-2xl border border-gray-800">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;