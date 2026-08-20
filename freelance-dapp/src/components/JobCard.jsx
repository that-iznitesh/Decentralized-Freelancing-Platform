import { useNavigate } from "react-router-dom";
import { FaMoneyBillWave, FaClock } from "react-icons/fa";
import StatusBadge from "./StatusBadge";

function JobCard({ job }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white/5 border border-white/10 p-5 rounded-xl shadow hover:shadow-lg hover:border-white/20 transition flex flex-col">
      <div className="flex justify-between items-start gap-2">
        <h2 className="text-lg font-semibold text-white">{job.title}</h2>
        <StatusBadge status={job.status} />
      </div>

      <p className="mt-2 text-sm text-gray-400 line-clamp-3">
        {job.description}
      </p>

      <div className="mt-4 space-y-1 text-sm text-gray-300">
        <p className="flex items-center gap-2">
          <FaMoneyBillWave className="text-green-400" />
          {job.budget} USDC
        </p>
        <p className="flex items-center gap-2">
          <FaClock className="text-yellow-400" />
          Deadline: {job.deadline}
        </p>
      </div>

      <button
        onClick={() => navigate(`/jobs/${job.id}`)}
        className="mt-4 bg-emerald-500 hover:bg-emerald-600 transition text-white px-3 py-2 rounded-lg text-sm font-medium"
      >
        View Job
      </button>
    </div>
  );
}

export default JobCard;
