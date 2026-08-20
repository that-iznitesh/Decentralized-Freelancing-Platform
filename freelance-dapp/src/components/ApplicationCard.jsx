import { FaUserTie, FaMoneyBillWave, FaCalendarAlt, FaCheck } from "react-icons/fa";
import StatusBadge from "./StatusBadge";

function ApplicationCard({ application, onAccept }) {
  return (
    <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
      <div className="flex justify-between items-start gap-2">
        <p className="flex items-center gap-2 font-semibold text-white">
          <FaUserTie className="text-blue-400" />
          {application.freelancerName}
        </p>
        <StatusBadge status={application.status} />
      </div>

      <p className="mt-2 text-sm text-gray-400">{application.proposal}</p>

      <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-300">
        <span className="flex items-center gap-1">
          <FaMoneyBillWave className="text-green-400" />
          {application.proposedBudget} USDC
        </span>
        <span className="flex items-center gap-1">
          <FaCalendarAlt className="text-yellow-400" />
          {application.estimatedDays} days
        </span>
      </div>

      {application.status === "PENDING" && onAccept && (
        <button
          onClick={() => onAccept(application.id)}
          className="mt-3 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 transition text-white px-3 py-1.5 rounded-lg text-sm font-medium"
        >
          <FaCheck />
          Accept Freelancer
        </button>
      )}
    </div>
  );
}

export default ApplicationCard;
