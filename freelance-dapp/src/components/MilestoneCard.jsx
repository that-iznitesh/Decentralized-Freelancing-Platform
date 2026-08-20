import { FaFileAlt, FaLink, FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import StatusBadge from "./StatusBadge";

function MilestoneCard({ milestone, role, onSubmit, onApprove }) {
  return (
    <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
      <div className="flex justify-between items-start gap-2">
        <p className="flex items-center gap-2 font-semibold text-white">
          <FaFileAlt className="text-pink-400" />
          {milestone.title}
        </p>
        <StatusBadge status={milestone.status} />
      </div>

      <p className="mt-2 text-sm text-gray-400">{milestone.description}</p>

      {milestone.submissionText && (
        <p className="mt-2 text-sm text-gray-300">
          Submission: {milestone.submissionText}
        </p>
      )}

      {milestone.submissionLink && (
        <a
          href={milestone.submissionLink}
          className="mt-1 flex items-center gap-1 text-sm text-blue-400 hover:underline"
        >
          <FaLink />
          {milestone.submissionLink}
        </a>
      )}

      {role === "freelancer" && milestone.status !== "SUBMITTED" && milestone.status !== "APPROVED" && onSubmit && (
        <button
          onClick={() => onSubmit(milestone.id)}
          className="mt-3 flex items-center gap-2 bg-purple-500 hover:bg-purple-600 transition text-white px-3 py-1.5 rounded-lg text-sm font-medium"
        >
          <FaPaperPlane />
          Submit Milestone
        </button>
      )}

      {role === "client" && milestone.status === "SUBMITTED" && onApprove && (
        <button
          onClick={() => onApprove(milestone.id)}
          className="mt-3 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 transition text-white px-3 py-1.5 rounded-lg text-sm font-medium"
        >
          <FaCheckCircle />
          Approve Milestone
        </button>
      )}
    </div>
  );
}

export default MilestoneCard;
