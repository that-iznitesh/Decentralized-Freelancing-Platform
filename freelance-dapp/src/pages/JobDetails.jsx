import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api/client";
import { useAuth } from "../context/AuthContext";
import StatusBadge from "../components/StatusBadge";
import {
  FaMoneyBillWave,
  FaClock,
  FaUserTie,
  FaPaperPlane,
} from "react-icons/fa";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { address, user } = useAuth();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [applied, setApplied] = useState(false);
  const [proposal, setProposal] = useState({ proposal: "", proposedBudget: "", estimatedDays: "" });

  useEffect(() => {
    (async () => {
      const data = await api.get(`/jobs/${id}`);
      setJob(data);
      setLoading(false);
    })();
  }, [id]);

  const handleApply = async () => {
    if (!address) {
      alert("Pehle wallet connect karo");
      return;
    }
    try {
      await api.post("/applications", {
        jobId: id,
        freelancerAddress: address,
        proposal: proposal.proposal,
        proposedBudget: Number(proposal.proposedBudget),
        estimatedDays: Number(proposal.estimatedDays),
      });
      setApplied(true);
      setShowForm(false);
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-[#0b1220] text-white flex items-center justify-center">Loading...</div>;
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-[#0b1220] text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-gray-300">Job not found.</p>
          <button onClick={() => navigate("/jobs")} className="mt-4 bg-emerald-500 hover:bg-emerald-600 transition px-4 py-2 rounded-lg text-sm">
            Back to Marketplace
          </button>
        </div>
      </div>
    );
  }

  const isFreelancer = user?.role === "freelancer";

  return (
    <div className="min-h-screen bg-[#0b1220] text-white px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8">
        <div className="flex justify-between items-start gap-4">
          <h1 className="text-2xl font-bold">{job.title}</h1>
          <StatusBadge status={job.status} />
        </div>

        <p className="mt-4 text-gray-300 leading-relaxed">{job.description}</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="bg-black/30 rounded-lg p-4">
            <p className="flex items-center gap-2 text-gray-400"><FaMoneyBillWave className="text-green-400" />Budget</p>
            <p className="mt-1 font-semibold">{job.budget} {job.currency}</p>
          </div>
          <div className="bg-black/30 rounded-lg p-4">
            <p className="flex items-center gap-2 text-gray-400"><FaUserTie className="text-blue-400" />Client</p>
            <p className="mt-1 font-semibold">{job.clientAddress.slice(0, 6)}...{job.clientAddress.slice(-4)}</p>
          </div>
          <div className="bg-black/30 rounded-lg p-4">
            <p className="flex items-center gap-2 text-gray-400"><FaClock className="text-yellow-400" />Deadline</p>
            <p className="mt-1 font-semibold">{new Date(job.deadline).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="mt-6 bg-black/30 rounded-lg p-4 text-sm">
          <p className="text-gray-400">Milestone</p>
          <p className="mt-1">{job.milestoneDescription}</p>
        </div>

        {isFreelancer && job.status === "OPEN" && !applied && (
          <>
            {showForm ? (
              <div className="mt-6 space-y-3">
                <textarea
                  placeholder="Your proposal"
                  value={proposal.proposal}
                  onChange={(e) => setProposal({ ...proposal, proposal: e.target.value })}
                  className="w-full p-3 rounded-lg bg-black/30 border border-white/10 text-white"
                  rows={3}
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    placeholder="Proposed budget"
                    value={proposal.proposedBudget}
                    onChange={(e) => setProposal({ ...proposal, proposedBudget: e.target.value })}
                    className="p-3 rounded-lg bg-black/30 border border-white/10 text-white"
                  />
                  <input
                    placeholder="Estimated days"
                    value={proposal.estimatedDays}
                    onChange={(e) => setProposal({ ...proposal, estimatedDays: e.target.value })}
                    className="p-3 rounded-lg bg-black/30 border border-white/10 text-white"
                  />
                </div>
                <button onClick={handleApply} className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 transition text-white p-3 rounded-lg font-semibold">
                  <FaPaperPlane /> Send Application
                </button>
              </div>
            ) : (
              <button onClick={() => setShowForm(true)} className="mt-8 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-emerald-500 hover:scale-[1.01] transition text-white p-3 rounded-lg font-semibold">
                <FaPaperPlane /> Apply for this Job
              </button>
            )}
          </>
        )}

        {applied && <p className="mt-6 text-emerald-400 text-center">Application sent!</p>}
      </div>
    </div>
  );
}

export default JobDetails;