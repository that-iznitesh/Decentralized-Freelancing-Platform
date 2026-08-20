const STATUS_STYLES = {
  OPEN: "bg-green-500/20 text-green-400 border-green-500/40",
  IN_PROGRESS: "bg-blue-500/20 text-blue-400 border-blue-500/40",
  COMPLETED: "bg-purple-500/20 text-purple-400 border-purple-500/40",
  PENDING: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
  ACCEPTED: "bg-green-500/20 text-green-400 border-green-500/40",
  REJECTED: "bg-red-500/20 text-red-400 border-red-500/40",
  SUBMITTED: "bg-blue-500/20 text-blue-400 border-blue-500/40",
  APPROVED: "bg-purple-500/20 text-purple-400 border-purple-500/40",
};

function StatusBadge({ status }) {
  const style =
    STATUS_STYLES[status] || "bg-gray-500/20 text-gray-300 border-gray-500/40";

  return (
    <span
      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${style}`}
    >
      {status.replace("_", " ")}
    </span>
  );
}

export default StatusBadge;
