import { useState } from "react";
import { useNavigate } from "react-router-dom";
import JobForm from "../components/JobForm";
import { postJob } from "../hooks/useWeb3";
import { FaBriefcase } from "react-icons/fa";

function CreateJob() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    budget: "",
    deadline: "",
    milestoneDescription: "",
  });

  const handleSubmit = async () => {
    if (!form.title || !form.budget || !form.deadline) {
      alert("Please fill in title, budget and deadline.");
      return;
    }

    try {
      // Mock for now - later this will:
      // 1. Save job metadata to MongoDB via the backend
      // 2. Lock funds in escrow via the smart contract (blockchain side)
      const tx = await postJob({
        title: form.title,
        budget: form.budget,
        deadline: form.deadline,
      });

      alert("Job Posted!\nTX Hash: " + tx.hash);
      navigate("/jobs");
    } catch (err) {
      console.log(err);
      alert("Error posting job");
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1220] text-white px-6 py-10">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold flex items-center gap-2 mb-6">
          <FaBriefcase className="text-emerald-400" />
          Create Job
        </h1>

        <JobForm form={form} onChange={setForm} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default CreateJob;
