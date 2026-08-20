import { useNavigate } from "react-router-dom";
import { FaRocket, FaBriefcase, FaFileAlt, FaUserTie, FaMoneyBillWave } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover -z-20"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute w-full h-full bg-black/70 -z-10"></div>

      {/* Main Content */}
      <div className="text-center px-4">

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Decentralized
          </span>
          <br />
          Freelancing Platform
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto">
          Hire talent, complete work, and get paid securely using blockchain technology.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">

          <button
            onClick={() => navigate("/jobs")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 hover:scale-105 transition duration-300 shadow-lg"
          >
            <FaRocket />
            Find Work
          </button>

          <button
            onClick={() => navigate("/create-job")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105 transition duration-300 shadow-lg"
          >
            <FaBriefcase />
            Hire Talent
          </button>

        </div>

        {/* Glass Card */}
        <div className="mt-12 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 max-w-md mx-auto shadow-xl">
          <h3 className="text-xl font-semibold flex items-center gap-2 justify-center">
            <FaRocket className="text-yellow-400" />
            How it works
          </h3>

          <ul className="mt-4 text-gray-200 text-left space-y-3">

            <li className="flex items-center gap-2">
              <FaFileAlt className="text-pink-400" />
              Post a job
            </li>

            <li className="flex items-center gap-2">
              <FaUserTie className="text-blue-400" />
              Freelancer applies
            </li>

            <li className="flex items-center gap-2">
              <FaMoneyBillWave className="text-green-400" />
              Get paid securely
            </li>

          </ul>
        </div>

      </div>

    </div>
  );
}

export default Home;
