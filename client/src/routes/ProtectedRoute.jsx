import { Navigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

import "../styles/dashboard.css";

function ProtectedRoute({ children }) {

  const { user, authLoading } = useAuth();

  // Loading auth check
  if (authLoading) {
    return (
      <div className="auth-check-shell">

        <div className="auth-check-blob auth-check-blob--1" />
        <div className="auth-check-blob auth-check-blob--2" />

        <div className="auth-check-body">

          {/* Logomark */}
          <div className="auth-check-logo">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#08090d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12L6 7L9 10L13 4" />
              <path d="M13 4h5v5" />
            </svg>
          </div>

          {/* Spinner */}
          <div className="auth-check-spinner" />

          {/* Text */}
          <p className="auth-check-text">Checking authentication…</p>

        </div>

      </div>
    );
  }

  // Not authenticated
  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;