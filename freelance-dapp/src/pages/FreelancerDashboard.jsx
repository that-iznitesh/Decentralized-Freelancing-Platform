import { useState } from "react";
import { getJobById } from "../data/jobs";
import { getApplicationsByFreelancer } from "../data/applications";
import { currentFreelancer } from "../data/users";
import StatusBadge from "../components/StatusBadge";
import MilestoneCard from "../components/MilestoneCard";
import { FaUserTie } from "react-icons/fa";

function FreelancerDashboard() {
  const myApplications = getApplicationsByFreelancer(
    currentFreelancer.walletAddress
  );

  const acceptedJobIds = myApplications
    .filter((app) => app.status === "ACCEPTED")
    .map((app) => app.jobId);

  const myJobs = acceptedJobIds.map((id) => getJobById(id)).filter(Boolean);
  const activeJobs = myJobs.filter((job) => job.status === "IN_PROGRESS");
  const completedJobs = myJobs.filter((job) => job.status === "COMPLETED");

  // Mock milestone state, keyed by job id - later this comes from
  // the "milestones" collection in MongoDB
  const [milestones, setMilestones] = useState(() =>
    Object.fromEntries(
      myJobs.map((job) => [
        job.id,
        {
          id: job.id,
          title: "Final Deliverable",
          description: job.milestoneDescription,
          status: job.status === "COMPLETED" ? "APPROVED" : "IN_PROGRESS",
          submissionText: "",
          submissionLink: "",
        },
      ])
    )
  );

  const handleSubmitMilestone = (jobId) => {
    // Mock action - later this calls the backend to save the submission
    // and the smart contract to mark the milestone as submitted
    setMilestones((prev) => ({
      ...prev,
      [jobId]: {
        ...prev[jobId],
        status: "SUBMITTED",
        submissionText: "Work delivered, ready for review.",
        submissionLink: "https://github.com/example/deliverable",
      },
    }));
    alert(`Milestone submitted for job #${jobId}`);
  };

  return (
    <div className="min-h-screen bg-[#0b1220] text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold flex items-center gap-2 mb-2">
          <FaUserTie className="text-blue-400" />
          Freelancer Dashboard
        </h1>
        <p className="text-gray-400 mb-8">
          Logged in as {currentFreelancer.name}
        </p>

        {/* My Applications */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4">My Applications</h2>
          <div className="space-y-3">
            {myApplications.map((app) => {
              const job = getJobById(app.jobId);
              return (
                <div
                  key={app.id}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold">{job?.title}</p>
                    <p className="text-sm text-gray-400">
                      Proposed: {app.proposedBudget} USDC in {app.estimatedDays} days
                    </p>
                  </div>
                  <StatusBadge status={app.status} />
                </div>
              );
            })}
            {myApplications.length === 0 && (
              <p className="text-gray-400">No applications yet.</p>
            )}
          </div>
        </section>

        {/* Active Jobs */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4">Active Jobs</h2>
          <div className="space-y-4">
            {activeJobs.map((job) => (
              <div key={job.id}>
                <p className="font-semibold mb-2">{job.title}</p>
                <MilestoneCard
                  milestone={milestones[job.id]}
                  role="freelancer"
                  onSubmit={() => handleSubmitMilestone(job.id)}
                />
              </div>
            ))}
            {activeJobs.length === 0 && (
              <p className="text-gray-400">No active jobs right now.</p>
            )}
          </div>
        </section>

        {/* Completed Jobs */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Completed Jobs</h2>
          <div className="space-y-3">
            {completedJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white/5 border border-white/10 rounded-xl p-4 flex justify-between items-center"
              >
                <p className="font-semibold">{job.title}</p>
                <StatusBadge status={job.status} />
              </div>
            ))}
            {completedJobs.length === 0 && (
              <p className="text-gray-400">No completed jobs yet.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default FreelancerDashboard;
