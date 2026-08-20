// import { useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// function ProtectedRoute({ role, children }) {
//   const { isConnected, user, loading } = useAuth();

//   useEffect(() => {
//     if (!isConnected) {
//       alert("Please connect your wallet first!");
//     } else if (!loading && !user) {
//       alert("Profile setup pending — role select karo.");
//     } else if (!loading && role && user?.role !== role) {
//       alert(`Ye page sirf ${role} ke liye hai.`);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isConnected, loading, user]);

//   if (!isConnected) return <Navigate to="/" replace />;
//   if (loading) return <p className="text-white text-center mt-20">Loading...</p>;
//   if (!user) return <Navigate to="/" replace />;
//   if (role && user.role !== role) return <Navigate to="/" replace />;

//   return children;
// }

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ role, children }) {
  const { isConnected, user, loading } = useAuth();

  // Pehle wallet connect check
  if (!isConnected) {
    return <Navigate to="/" replace />;
  }

  // Refresh/API fetch ke time redirect mat karo
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b1220] flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  // Profile nahi mila
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Wrong role
  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;