// import { Link } from "react-router-dom";
// import { connectWallet } from "../hooks/useWeb3";

// function Navbar() {
//   const handleConnect = async () => {
//     try {
//       const { address } = await connectWallet();
//       alert("Connected: " + address);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="flex justify-between items-center p-4 bg-black text-white">
//       <h1 className="text-xl font-bold">Freelance DApp</h1>

//       <div className="flex gap-4">
//         <Link to="/">Home</Link>
//         <Link to="/jobs">Jobs</Link>
//         <Link to="/post-job">Post Job</Link>
//       </div>

//       <button
//         onClick={handleConnect}
//         className="bg-blue-500 px-4 py-2 rounded"
//       >
//         Connect Wallet
//       </button>
//     </div>
//   );
// }

// export default Navbar;
import { Link } from "react-router-dom";
import { connectWallet } from "../hooks/useWeb3";
import { FaSignInAlt, FaUserPlus, FaWallet } from "react-icons/fa";

function Navbar() {
  const handleConnect = async () => {
    try {
      const { address } = await connectWallet();
      alert("Connected: " + address);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-black text-white">

      {/* 🔥 Logo */}
      <h1 className="text-xl font-bold">Freelance DApp</h1>

      {/* 🔗 Center Links */}
      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/jobs" className="hover:text-gray-300">Jobs</Link>
        <Link to="/post-job" className="hover:text-gray-300">Post Job</Link>
      </div>

      {/* 🔥 Right Section */}
      <div className="flex items-center gap-4">

        {/* Login */}
        <Link
          to="/login"
          className="flex items-center gap-1 hover:text-gray-300"
        >
          <FaSignInAlt />
          Login
        </Link>

        {/* Signup */}
        <Link
          to="/signup"
          className="flex items-center gap-1 hover:text-gray-300"
        >
          <FaUserPlus />
          Sign Up
        </Link>

        {/* Wallet Button */}
        <button
          onClick={handleConnect}
          className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          <FaWallet />
          Connect
        </button>

      </div>
    </div>
  );
}

export default Navbar;