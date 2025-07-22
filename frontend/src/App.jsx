import { Routes, Route, Navigate } from "react-router-dom";
import SignInForm from "./auth/SignInForm";
import SignUpForm from "./auth/SignUpForm";
import ForgotPasswordForm from "./auth/ForgotPasswordForm";
import Homepage from "./pages/Homepage";
const App = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-4 relative">
      <div className="w-full max-w-md bg-black/50 p-8 md:p-12 rounded-2xl border border-gray-800">
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" element={<SignInForm />} />
          <Route path="/register" element={<SignUpForm />} />
          <Route path="/forgotpassword" element={<ForgotPasswordForm />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
const Root = () => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? (
    <Navigate to="/homepage" />
  ) : (
    <Navigate to="/login" />
  );
};
