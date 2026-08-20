import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { api } from "../api/client";
import ApplicationCard from "../components/ApplicationCard";
import MilestoneCard from "../components/MilestoneCard";
import StatusBadge from "../components/StatusBadge";
import { FaBriefcase, FaLock, FaCheckCircle } from "react-icons/fa";

function ClientDashboard() {
  const { address, user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [applicationsByJob, setApplicationsByJob] = useState({});
  const [milestonesByJob, setMilestonesByJob] = useState({});

  const loadData = async () => {
    const myJobs = (await api.get(`/jobs?clientAddress=${address}`)) || [];
    setJobs(myJobs);

    const appsMap = {};
    const msMap = {};
    for (const job of myJobs) {
      appsMap[job._id] = (await api.get(`/applications?jobId=${job._id}`)) || [];
      const ms = (await api.get(`/milestones?jobId=${job._id}`)) || [];
      msMap[job._id] = ms[0] || null;
    }
    setApplicationsByJob(appsMap);
    setMilestonesByJob(msMap);
  };

  useEffect(() => {
    if (address) loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  const handleAccept = async (job, application) => {
    await api.put(`/applications/${application._id}`, { status: "ACCEPTED" });
    await api.put(`/jobs/${job._id}`, {
      freelancerAddress: application.freelancerAddress,
      status: "IN_PROGRESS",
    });
    await api.post("/milestones", {
      jobId: job._id,
      title: "Final Deliverable",
      description: job.milestoneDescription,
      amount: job.budget,
      status: "PENDING",
    });
    await loadData();
  };

  const handleFundEscrow = (jobId) => {
    // TODO: teammate ke smart contract function se replace hoga
    // (freelance-dapp/web3/marketplace.js) - abhi ke liye placeholder
    alert(`Escrow funding for job #${jobId} - waiting on smart contract integration`);
  };

  const handleApproveMilestone = async (milestone) => {
    await api.put(`/milestones/${milestone._id}`, { status: "APPROVED" });
    await loadData();
    // Payment release bhi teammate ke contract call se hoga
  };

  return (
    <div className="min-h-screen bg-[#0b1220] text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold flex items-center gap-2 mb-2">
          <FaBriefcase className="text-emerald-400" />
          Client Dashboard
        </h1>
        <p className="text-gray-400 mb-8">Logged in as {user?.name || address}</p>

        <div className="space-y-8">
          {jobs.map((job) => {
            const jobApplications = applicationsByJob[job._id] || [];
            const milestone = milestonesByJob[job._id];

            return (
              <div key={job._id} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h2 className="text-xl font-semibold">{job.title}</h2>
                    <p className="text-sm text-gray-400 mt-1">
                      {jobApplications.length} application{jobApplications.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <StatusBadge status={job.status} />
                </div>

                <button
                  onClick={() => handleFundEscrow(job._id)}
                  className="mt-4 flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded-lg text-sm font-medium"
                >
                  <FaLock /> Fund Escrow
                </button>

                {jobApplications.length > 0 && (
                  <div className="mt-5 space-y-3">
                    <h3 className="text-sm font-semibold text-gray-300">Applications</h3>
                    {jobApplications.map((app) => (
                      <ApplicationCard
                        key={app._id}
                        application={app}
                        onAccept={() => handleAccept(job, app)}
                      />
                    ))}
                  </div>
                )}

                {milestone && (
                  <div className="mt-5">
                    <h3 className="text-sm font-semibold text-gray-300 mb-3">Milestone</h3>
                    <MilestoneCard
                      milestone={milestone}
                      role="client"
                      onApprove={() => handleApproveMilestone(milestone)}
                    />
                  </div>
                )}
              </div>
            );
          })}

          {jobs.length === 0 && <p className="text-gray-400">You haven't posted any jobs yet.</p>}
        </div>
      </div>
    </div>
  );
}

export default ClientDashboard;