// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { FaUserTie, FaBriefcase } from "react-icons/fa";

// function RoleSelectModal() {
//   const { needsRole, saveRole } = useAuth();
//   const [name, setName] = useState("");

//   if (!needsRole) return null;

//   const pickRole = async (role) => {
//     await saveRole(role, { name });
//   };

//   return (
//     <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
//       <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-6 max-w-sm w-full text-white">
//         <h2 className="text-xl font-bold mb-1">Complete Your Profile</h2>
//         <p className="text-sm text-gray-400 mb-4">
//           Naya wallet detect hua. Batao aap client ho ya freelancer.
//         </p>

//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Your name"
//           className="w-full mb-4 p-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500"
//         />

//         <div className="grid grid-cols-2 gap-3">
//           <button
//             onClick={() => pickRole("client")}
//             className="flex flex-col items-center gap-2 bg-blue-500 hover:bg-blue-600 transition p-4 rounded-lg"
//           >
//             <FaBriefcase size={20} />
//             Client
//           </button>
//           <button
//             onClick={() => pickRole("freelancer")}
//             className="flex flex-col items-center gap-2 bg-emerald-500 hover:bg-emerald-600 transition p-4 rounded-lg"
//           >
//             <FaUserTie size={20} />
//             Freelancer
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RoleSelectModal;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaUserTie, FaBriefcase } from "react-icons/fa";

function RoleSelectModal() {
  const { needsRole, saveRole, loading } = useAuth();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  if (!needsRole) return null;

  const pickRole = async (selectedRole) => {
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    try {
      await saveRole(selectedRole, {
        name: name.trim(),
      });

      // Role ke according dashboard
      if (selectedRole === "client") {
        navigate("/client-dashboard");
      } else {
        navigate("/freelancer-dashboard");
      }
    } catch (err) {
      alert(err.message || "Failed to save profile");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
      <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-6 max-w-sm w-full text-white">
        <h2 className="text-xl font-bold mb-1">
          Complete Your Profile
        </h2>

        <p className="text-sm text-gray-400 mb-4">
          Naya wallet detect hua. Batao aap client ho ya freelancer.
        </p>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full mb-4 p-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500"
        />

        <div className="grid grid-cols-2 gap-3">
          <button
            disabled={loading}
            onClick={() => pickRole("client")}
            className="flex flex-col items-center gap-2 bg-blue-500 hover:bg-blue-600 transition p-4 rounded-lg disabled:opacity-50"
          >
            <FaBriefcase size={20} />
            Client
          </button>

          <button
            disabled={loading}
            onClick={() => pickRole("freelancer")}
            className="flex flex-col items-center gap-2 bg-emerald-500 hover:bg-emerald-600 transition p-4 rounded-lg disabled:opacity-50"
          >
            <FaUserTie size={20} />
            Freelancer
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoleSelectModal;