import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import Spinner from "../utils/Spinner";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
const SignInForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
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
        localStorage.setItem("token", token);
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center h-48 bg-gray-50 rounded-lg shadow-md">
        <Spinner
          size="md"
          color="indigo"
          colorIntensity="600"
          type="circle"
          text="Logging in..."
          textColor="indigo-600"
        />
      </div>
    );
  }
  if (error) {
    return (
      <div className="p-6 text-center text-red-600 bg-red-50 rounded-lg shadow-md">
        <p className="font-semibold text-lg mb-2">Error: {error}</p>
        <p className="text-sm">Please refresh the page or try again later.</p>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setError(null)}
            className="inline-block px-6 py-2 bg-red-600 text-white font-semibold rounded-md shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 cursor-pointer"
          >
            Ok
          </button>
        </div>
      </div>
    );
  }
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
