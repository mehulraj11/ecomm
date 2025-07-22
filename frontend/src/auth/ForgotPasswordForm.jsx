import React, { useState } from "react";
import { Mail } from "lucide-react";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import { useNavigate } from "react-router-dom";
const ForgotPasswordForm = ({ onSwitchMode }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset for:", { email });
    // TODO: Add API call to backend: POST /api/auth/forgotpassword
    setMessage(
      "If an account with that email exists, a reset link has been sent."
    );
    setEmail("");
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Reset Password</h1>
        <p className="text-gray-400">
          Enter your email to receive a reset link.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          icon={<Mail size={20} />}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {message && (
          <p className="text-center text-green-400 text-sm">{message}</p>
        )}
        <SubmitButton text="Send Reset Link" />
        <p className="text-center text-gray-400">
          Remembered your password?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="font-semibold text-white hover:underline cursor-pointer"
          >
            Sign In
          </button>
        </p>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
