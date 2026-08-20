import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getJobById } from "../data/jobs";
import StatusBadge from "../components/StatusBadge";
import {
  FaMoneyBillWave,
  FaClock,
  FaUserTie,
  FaPaperPlane,
} from "react-icons/fa";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = getJobById(id);
  const [applied, setApplied] = useState(false);

  if (!job) {
    return (
      <div className="min-h-screen bg-[#0b1220] text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-gray-300">Job not found.</p>
          <button
            onClick={() => navigate("/jobs")}
            className="mt-4 bg-emerald-500 hover:bg-emerald-600 transition px-4 py-2 rounded-lg text-sm"
          >
            Back to Marketplace
          </button>
        </div>
      </div>
    );
  }

  const handleApply = () => {
    // Mock apply action - later this will POST to the backend
    // and create an on-chain application record via the smart contract
    setApplied(true);
  };

  return (
    <div className="min-h-screen bg-[#0b1220] text-white px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8">
        <div className="flex justify-between items-start gap-4">
          <h1 className="text-2xl font-bold">{job.title}</h1>
          <StatusBadge status={job.status} />
        </div>

        <p className="mt-4 text-gray-300 leading-relaxed">{job.description}</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="bg-black/30 rounded-lg p-4">
            <p className="flex items-center gap-2 text-gray-400">
              <FaMoneyBillWave className="text-green-400" />
              Budget
            </p>
            <p className="mt-1 font-semibold">{job.budget} USDC</p>
          </div>

          <div className="bg-black/30 rounded-lg p-4">
            <p className="flex items-center gap-2 text-gray-400">
              <FaUserTie className="text-blue-400" />
              Client
            </p>
            <p className="mt-1 font-semibold">{job.client}</p>
          </div>

          <div className="bg-black/30 rounded-lg p-4">
            <p className="flex items-center gap-2 text-gray-400">
              <FaClock className="text-yellow-400" />
              Deadline
            </p>
            <p className="mt-1 font-semibold">{job.deadline}</p>
          </div>
        </div>

        <div className="mt-6 bg-black/30 rounded-lg p-4 text-sm">
          <p className="text-gray-400">Milestone</p>
          <p className="mt-1">{job.milestoneDescription}</p>
        </div>

        <button
          onClick={handleApply}
          disabled={applied || job.status !== "OPEN"}
          className="mt-8 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] transition text-white p-3 rounded-lg font-semibold"
        >
          <FaPaperPlane />
          {applied
            ? "Application Sent"
            : job.status === "OPEN"
            ? "Apply for this Job"
            : "Job Not Open"}
        </button>
      </div>
    </div>
  );
}

export default JobDetails;
