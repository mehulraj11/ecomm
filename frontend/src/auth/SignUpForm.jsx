import React, { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import { useNavigate } from "react-router-dom";
const SignUpForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up with:", { name, email, password });
    // TODO: Add API call to backend: POST /api/auth/signup
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Create Account</h1>
        <p className="text-gray-400">Join the F1.STREET community</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          icon={<User size={20} />}
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          placeholder="Password (min. 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitButton text="Create Account" />
        <p className="text-center text-gray-400">
          Already have an account?{" "}
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

export default SignUpForm;
