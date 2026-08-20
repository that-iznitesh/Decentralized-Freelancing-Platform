import { useState } from "react";
import { jobs as allJobs } from "../data/jobs";
import { getApplicationsByJobId } from "../data/applications";
import { currentClient } from "../data/users";
import ApplicationCard from "../components/ApplicationCard";
import MilestoneCard from "../components/MilestoneCard";
import StatusBadge from "../components/StatusBadge";
import { FaBriefcase, FaLock, FaCheckCircle } from "react-icons/fa";

function ClientDashboard() {
  const myJobs = allJobs.filter(
    (job) => job.clientAddress === currentClient.walletAddress
  );
  const [fundedJobs, setFundedJobs] = useState([]);

  // Mock milestone state per job, keyed by job id - later this comes from
  // the "milestones" collection in MongoDB
  const [milestones, setMilestones] = useState(() =>
    Object.fromEntries(
      myJobs.map((job) => [
        job.id,
        {
          id: job.id,
          title: "Final Deliverable",
          description: job.milestoneDescription,
          status: job.status === "COMPLETED" ? "APPROVED" : "SUBMITTED",
          submissionText:
            job.status !== "OPEN" ? "Work delivered, ready for review." : "",
          submissionLink: job.status !== "OPEN" ? "https://github.com/example/deliverable" : "",
        },
      ])
    )
  );

  const handleApproveMilestone = (jobId) => {
    // Mock action - later this calls the smart contract to release
    // escrow funds to the freelancer once approved
    setMilestones((prev) => ({
      ...prev,
      [jobId]: { ...prev[jobId], status: "APPROVED" },
    }));
    alert(`Milestone approved for job #${jobId}. Payment release triggered.`);
  };

  const handleAccept = (jobId, applicationId) => {
    // Mock action - later this calls the backend to update application
    // status and the smart contract to assign the freelancer on-chain
    alert(`Freelancer accepted for job #${jobId} (application #${applicationId})`);
  };

  const handleFundEscrow = (jobId) => {
    // Mock action - later this triggers a wallet transaction to lock
    // funds into the escrow smart contract
    setFundedJobs((prev) => [...prev, jobId]);
    alert(`Escrow funded for job #${jobId}`);
  };

  return (
    <div className="min-h-screen bg-[#0b1220] text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold flex items-center gap-2 mb-2">
          <FaBriefcase className="text-emerald-400" />
          Client Dashboard
        </h1>
        <p className="text-gray-400 mb-8">Logged in as {currentClient.name}</p>

        <div className="space-y-8">
          {myJobs.map((job) => {
            const jobApplications = getApplicationsByJobId(job.id);
            const isFunded = fundedJobs.includes(job.id);

            return (
              <div
                key={job.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h2 className="text-xl font-semibold">{job.title}</h2>
                    <p className="text-sm text-gray-400 mt-1">
                      {jobApplications.length} application
                      {jobApplications.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <StatusBadge status={job.status} />
                </div>

                <button
                  onClick={() => handleFundEscrow(job.id)}
                  disabled={isFunded}
                  className="mt-4 flex items-center gap-2 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition text-white px-4 py-2 rounded-lg text-sm font-medium"
                >
                  {isFunded ? <FaCheckCircle /> : <FaLock />}
                  {isFunded ? "Escrow Funded" : "Fund Escrow"}
                </button>

                {jobApplications.length > 0 && (
                  <div className="mt-5 space-y-3">
                    <h3 className="text-sm font-semibold text-gray-300">
                      Applications
                    </h3>
                    {jobApplications.map((app) => (
                      <ApplicationCard
                        key={app.id}
                        application={app}
                        onAccept={() => handleAccept(job.id, app.id)}
                      />
                    ))}
                  </div>
                )}

                {job.status !== "OPEN" && milestones[job.id] && (
                  <div className="mt-5">
                    <h3 className="text-sm font-semibold text-gray-300 mb-3">
                      Milestone
                    </h3>
                    <MilestoneCard
                      milestone={milestones[job.id]}
                      role="client"
                      onApprove={() => handleApproveMilestone(job.id)}
                    />
                  </div>
                )}
              </div>
            );
          })}

          {myJobs.length === 0 && (
            <p className="text-gray-400">You haven't posted any jobs yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ClientDashboard;
