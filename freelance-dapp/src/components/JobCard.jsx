function JobCard({ job }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg">
      <h2 className="text-xl font-semibold">{job.title}</h2>

      <p className="mt-2">💰 {job.budget}</p>
      <p>🛠 {job.skills.join(", ")}</p>
      <p>⏳ {job.deadline}</p>

      <button className="mt-3 bg-green-500 text-white px-3 py-1 rounded">
        Apply
      </button>
    </div>
  );
}

export default JobCard;