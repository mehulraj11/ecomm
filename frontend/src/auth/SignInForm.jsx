import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignInForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { token } = response.data;
      // console.log(token);
      if (token) {
        localStorage.setItem("token", "token");
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
        <p className="text-gray-400">Sign in to continue to F1.STREET</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          icon={<Mail size={20} />}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          icon={<Lock size={20} />}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="text-right">
          <button
            type="button"
            onClick={() => navigate("/forgotpassword")}
            className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            Forgot Password?
          </button>
        </div>
        <SubmitButton text="Sign In" />
        <p className="text-center text-gray-400">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="font-semibold text-white hover:underline cursor-pointer"
          >
            Sign Up
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
