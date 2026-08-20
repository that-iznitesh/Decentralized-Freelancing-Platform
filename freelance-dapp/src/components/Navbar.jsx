import { Link } from "react-router-dom";
import { connectWallet } from "../hooks/useWeb3";
import { FaBriefcase, FaWallet } from "react-icons/fa";

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
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 text-xl font-bold">
        <FaBriefcase className="text-emerald-400" />
        Freelance DApp
      </Link>

      {/* Center Links */}
      <div className="hidden md:flex gap-6 text-sm">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/jobs" className="hover:text-gray-300">Marketplace</Link>
        <Link to="/create-job" className="hover:text-gray-300">Create Job</Link>
        <Link to="/client-dashboard" className="hover:text-gray-300">Client Dashboard</Link>
        <Link to="/freelancer-dashboard" className="hover:text-gray-300">Freelancer Dashboard</Link>
      </div>

      {/* Wallet Button */}
      <button
        onClick={handleConnect}
        className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition text-sm"
      >
        <FaWallet />
        Connect Wallet
      </button>
    </div>
  );
}

export default Navbar;
