import {
  Navigate,
} from "react-router-dom";

import { useAuth }
from "../hooks/useAuth";

function ProtectedRoute({
  children,
}) {

  const {
    user,
    authLoading,
  } = useAuth();

  // Loading auth check
  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center text-white">

        <h1 className="text-3xl font-bold">
          Checking Authentication...
        </h1>

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