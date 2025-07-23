import { Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "./layout/Authlayout";
import Mainlayout from "./layout/Mainlayout";
import SignInForm from "./auth/SignInForm";
import SignUpForm from "./auth/SignUpForm";
import ForgotPasswordForm from "./auth/ForgotPasswordForm";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/Productspage";
const App = () => {
  const getCartItemCount = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route element={<Mainlayout getCartItemCount={getCartItemCount} />}>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="products" element={<ProductsPage />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<SignInForm />} />
        <Route path="/register" element={<SignUpForm />} />
        <Route path="/forgotpassword" element={<ForgotPasswordForm />} />
      </Route>
    </Routes>
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
