import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import toast from "react-hot-toast";

import api from "../services/api";

import "../styles/auth.css";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    setLoading(true);

    const response = await api.post(
      "/auth/register",
      formData
    );

    // Save token
    localStorage.setItem(
      "token",
      response.data.token
    );

    // Save user
    localStorage.setItem(
      "user",
      JSON.stringify(response.data.user)
    );

    toast.success(
      "Registration successful"
    );

    navigate("/dashboard");

  } catch (error) {

    console.error(error);

    if (error.response) {

      toast.error(
        error.response.data.message
      );

    } else {

      toast.error(
        "Server is waking up... Please try again."
      );
    }

  } finally {

    setLoading(false);
  }
};

  return (
    <div className="auth-shell">

      {/* Decorative blobs */}
      <div className="auth-blob auth-blob--1" />
      <div className="auth-blob auth-blob--2" />

      <div className="auth-card">

        {/* Logo mark */}
        <div className="auth-logomark">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#08090d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12L6 7L9 10L13 4" />
            <path d="M13 4h5v5" />
          </svg>
        </div>

        <p className="auth-eyebrow">Finance Tracker</p>
        <h1 className="auth-title">Create <em>Account</em></h1>
        <p className="auth-sub">Start managing your finances smarter today.</p>

        <form onSubmit={handleSubmit} className="auth-form">

          {/* Full Name */}
          <div className="auth-field">
            <label htmlFor="reg-name">Full Name</label>
            <input
              id="reg-name"
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              className="auth-input"
              required
            />
          </div>

          {/* Email */}
          <div className="auth-field">
            <label htmlFor="reg-email">Email Address</label>
            <input
              id="reg-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="auth-input"
              required
            />
          </div>

          {/* Password */}
          <div className="auth-field">
            <label htmlFor="reg-password">Password</label>
            <div className="auth-input-wrap">
              <input
                id="reg-password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                className="auth-input auth-input--pw"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="auth-eye"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button type="submit" disabled={loading} className="auth-btn">
            {loading ? "Creating Account…" : "Create Account"}
          </button>

        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/" className="auth-link">Sign in</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;