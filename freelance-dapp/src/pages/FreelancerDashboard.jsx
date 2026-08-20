import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { api } from "../api/client";
import StatusBadge from "../components/StatusBadge";
import MilestoneCard from "../components/MilestoneCard";
import { FaUserTie } from "react-icons/fa";

function FreelancerDashboard() {
  const { address, user } = useAuth();
  const [applications, setApplications] = useState([]);
  const [jobsById, setJobsById] = useState({});
  const [milestonesByJob, setMilestonesByJob] = useState({});

  const loadData = async () => {
    const apps = (await api.get(`/applications?freelancerAddress=${address}`)) || [];
    setApplications(apps);

    const jobMap = {};
    const msMap = {};
    for (const app of apps) {
      if (!jobMap[app.jobId]) {
        jobMap[app.jobId] = await api.get(`/jobs/${app.jobId}`);
      }
      if (app.status === "ACCEPTED") {
        const ms = (await api.get(`/milestones?jobId=${app.jobId}`)) || [];
        msMap[app.jobId] = ms[0] || null;
      }
    }
    setJobsById(jobMap);
    setMilestonesByJob(msMap);
  };

  useEffect(() => {
    if (address) loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  const handleSubmitMilestone = async (milestone) => {
    await api.put(`/milestones/${milestone._id}`, {
      status: "SUBMITTED",
      submissionText: "Work delivered, ready for review.",
      submissionLink: "https://github.com/example/deliverable",
    });
    await loadData();
  };

  const activeJobs = Object.values(jobsById).filter((j) => j?.status === "IN_PROGRESS");
  const completedJobs = Object.values(jobsById).filter((j) => j?.status === "COMPLETED");

  return (
    <div className="min-h-screen bg-[#0b1220] text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold flex items-center gap-2 mb-2">
          <FaUserTie className="text-blue-400" />
          Freelancer Dashboard
        </h1>
        <p className="text-gray-400 mb-8">Logged in as {user?.name || address}</p>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4">My Applications</h2>
          <div className="space-y-3">
            {applications.map((app) => (
              <div key={app._id} className="bg-white/5 border border-white/10 rounded-xl p-4 flex justify-between items-center">
                <div>
                  <p className="font-semibold">{jobsById[app.jobId]?.title}</p>
                  <p className="text-sm text-gray-400">
                    Proposed: {app.proposedBudget} in {app.estimatedDays} days
                  </p>
                </div>
                <StatusBadge status={app.status} />
              </div>
            ))}
            {applications.length === 0 && <p className="text-gray-400">No applications yet.</p>}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4">Active Jobs</h2>
          <div className="space-y-4">
            {activeJobs.map((job) => (
              <div key={job._id}>
                <p className="font-semibold mb-2">{job.title}</p>
                {milestonesByJob[job._id] && (
                  <MilestoneCard
                    milestone={milestonesByJob[job._id]}
                    role="freelancer"
                    onSubmit={() => handleSubmitMilestone(milestonesByJob[job._id])}
                  />
                )}
              </div>
            ))}
            {activeJobs.length === 0 && <p className="text-gray-400">No active jobs right now.</p>}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Completed Jobs</h2>
          <div className="space-y-3">
            {completedJobs.map((job) => (
              <div key={job._id} className="bg-white/5 border border-white/10 rounded-xl p-4 flex justify-between items-center">
                <p className="font-semibold">{job.title}</p>
                <StatusBadge status={job.status} />
              </div>
            ))}
            {completedJobs.length === 0 && <p className="text-gray-400">No completed jobs yet.</p>}
          </div>
        </section>
      </div>
    </div>
  );
}

export default FreelancerDashboard;