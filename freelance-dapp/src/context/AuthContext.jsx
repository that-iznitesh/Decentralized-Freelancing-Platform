// import { createContext, useContext, useEffect, useState } from "react";
// import { useConnection } from "wagmi";
// import { api } from "../api/client";

// const AuthContext = createContext(null);

// export function AuthProvider({ children }) {
//   const { address, isConnected } = useConnection();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [needsRole, setNeedsRole] = useState(false);
//   const [role, setRole] = useState(null);

//   const wallet = address ? address.toLowerCase() : null;

//   useEffect(() => {
//     if (!isConnected || !wallet) {
//       setUser(null);
//       setNeedsRole(false);
//       return;
//     }

//     (async () => {
//       setLoading(true);
//       try {
//         const data = await api.get(`/users/${wallet}`);
//         if (!data) {
//           setUser(null);
//           setNeedsRole(true);
//         } else {
//           setUser(data);
//           setNeedsRole(false);
//           setRole(data.role);
//         }
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, [wallet, isConnected]);

//   const saveRole = async (role, extra = {}) => {
//     const data = await api.post("/users", { walletAddress: wallet, role, ...extra });
//     setUser(data);
//     setNeedsRole(false);
//   };

//   return (
//     <AuthContext.Provider
//       value={{ address: wallet, isConnected, user, loading, needsRole, saveRole, role }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);

import { createContext, useContext, useEffect, useState } from "react";
import { useConnection } from "wagmi";
import { api } from "../api/client";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const { address, isConnected } = useConnection();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [needsRole, setNeedsRole] = useState(false);
  const [role, setRole] = useState(null);

  const wallet = address ? address.toLowerCase() : null;

  useEffect(() => {
    // Wallet disconnect
    if (!isConnected || !wallet) {
      setUser(null);
      setRole(null);
      setNeedsRole(false);
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      setLoading(true);
      setUser(null);
      setRole(null);

      try {
        const data = await api.get(`/users/${wallet}`);

        if (!data) {
          setUser(null);
          setRole(null);
          setNeedsRole(true);
        } else {
          setUser(data);
          setRole(data.role);
          setNeedsRole(false);
        }
      } catch (err) {
        console.error("Failed to fetch user:", err);
        setUser(null);
        setRole(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [wallet, isConnected]);

  const saveRole = async (selectedRole, extra = {}) => {
    try {
      setLoading(true);

      const data = await api.post("/users", {
        walletAddress: wallet,
        role: selectedRole,
        ...extra,
      });

      setUser(data);
      setRole(data.role || selectedRole);
      setNeedsRole(false);

      return data;
    } catch (err) {
      console.error("Failed to save role:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        address: wallet,
        isConnected,
        user,
        role,
        loading,
        needsRole,
        saveRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);