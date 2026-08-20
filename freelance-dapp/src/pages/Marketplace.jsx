import { useState } from "react";
import JobCard from "../components/JobCard";
import { jobs } from "../data/jobs";
import { FaSearch } from "react-icons/fa";

function Marketplace() {
  const [statusFilter, setStatusFilter] = useState("ALL");

  const filteredJobs =
    statusFilter === "ALL"
      ? jobs
      : jobs.filter((job) => job.status === statusFilter);

  return (
    <div className="min-h-screen bg-[#0b1220] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <FaSearch className="text-emerald-400" />
            Job Marketplace
          </h1>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-black/30 border border-white/10 text-white rounded-lg px-3 py-2 text-sm"
          >
            <option value="ALL">All Jobs</option>
            <option value="OPEN">Open</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="COMPLETED">Completed</option>
          </select>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <p className="mt-10 text-center text-gray-400">
            No jobs match this filter yet.
          </p>
        )}
      </div>
    </div>
  );
}

export default Marketplace;
