// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// import { FaEye, FaEyeSlash } from "react-icons/fa";

// import toast from "react-hot-toast";

// import api from "../services/api";

// import "../styles/auth.css";

// function Login() {
//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = useState(false);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const response = await api.post("/auth/login", formData);
//       localStorage.setItem("token", response.data.token);
//       localStorage.setItem("user", JSON.stringify(response.data.user));
//       toast.success("Login successful");
//       navigate("/dashboard");
//     } catch (error) {
//       console.error(error);
//       toast.error(error.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-shell">

//       {/* Decorative blobs */}
//       <div className="auth-blob auth-blob--1" />
//       <div className="auth-blob auth-blob--2" />

//       <div className="auth-card">

//         {/* Logo mark */}
//         <div className="auth-logomark">
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#08090d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M2 12L6 7L9 10L13 4" />
//             <path d="M13 4h5v5" />
//           </svg>
//         </div>

//         <p className="auth-eyebrow">Finance Tracker</p>
//         <h1 className="auth-title">Welcome <em>Back</em></h1>
//         <p className="auth-sub">Sign in to continue managing your finances.</p>

//         <form onSubmit={handleSubmit} className="auth-form">

//           {/* Email */}
//           <div className="auth-field">
//             <label htmlFor="login-email">Email Address</label>
//             <input
//               id="login-email"
//               type="email"
//               name="email"
//               placeholder="you@example.com"
//               value={formData.email}
//               onChange={handleChange}
//               className="auth-input"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div className="auth-field">
//             <label htmlFor="login-password">Password</label>
//             <div className="auth-input-wrap">
//               <input
//                 id="login-password"
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Enter your password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="auth-input auth-input--pw"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="auth-eye"
//                 aria-label="Toggle password visibility"
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </button>
//             </div>
//           </div>

//           <button type="submit" disabled={loading} className="auth-btn">
//             {loading ? "Signing in…" : "Sign In"}
//           </button>

//         </form>

//         <p className="auth-footer">
//           Don&apos;t have an account?{" "}
//           <Link to="/register" className="auth-link">Create one</Link>
//         </p>

//       </div>
//     </div>
//   );
// }

// export default Login;

import {
  useState,
  useContext
} from "react";

import {
  useNavigate,
  Link
} from "react-router-dom";

import {
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

import toast from "react-hot-toast";

import api from "../services/api";

// SAFE IMPORT
import {
  AuthContext
} from "../context/AuthContext";

import "../styles/auth.css";

function Login() {

  const navigate = useNavigate();

  // SAFE FIX
  const { setUser } =
    useContext(AuthContext);

  const [showPassword,
    setShowPassword] =
    useState(false);

  const [formData,
    setFormData] =
    useState({
      email: "",
      password: "",
    });

  const [loading,
    setLoading] =
    useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response =
        await api.post(
          "/auth/login",
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
        JSON.stringify(
          response.data.user
        )
      );

      // IMPORTANT FIX
      setUser(
        response.data.user
      );

      toast.success(
        "Login successful"
      );

      navigate("/dashboard");

    } catch (error) {

      console.error(error);

      toast.error(
        error.response?.data?.message ||
        "Login failed"
      );

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

          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#08090d"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 12L6 7L9 10L13 4" />

            <path d="M13 4h5v5" />
          </svg>

        </div>

        <p className="auth-eyebrow">
          Finance Tracker
        </p>

        <h1 className="auth-title">
          Welcome <em>Back</em>
        </h1>

        <p className="auth-sub">
          Sign in to continue
          managing your finances.
        </p>

        <form
          onSubmit={handleSubmit}
          className="auth-form"
        >

          {/* Email */}
          <div className="auth-field">

            <label htmlFor="login-email">
              Email Address
            </label>

            <input
              id="login-email"
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

            <label htmlFor="login-password">
              Password
            </label>

            <div className="auth-input-wrap">

              <input
                id="login-password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="auth-input auth-input--pw"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="auth-eye"
                aria-label="Toggle password visibility"
              >
                {
                  showPassword
                    ? <FaEyeSlash />
                    : <FaEye />
                }
              </button>

            </div>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="auth-btn"
          >
            {
              loading
                ? "Signing in…"
                : "Sign In"
            }
          </button>

        </form>

        <p className="auth-footer">

          Don&apos;t have an
          account?{" "}

          <Link
            to="/register"
            className="auth-link"
          >
            Create one
          </Link>

        </p>

      </div>
    </div>
  );
}

export default Login;

