import { useState } from "react";
import { useNavigate } from "react-router-dom";
import JobForm from "../components/JobForm";
import { useAuth } from "../context/AuthContext";
import { api } from "../api/client";
import { FaBriefcase } from "react-icons/fa";

function CreateJob() {
  const navigate = useNavigate();
  const { address } = useAuth();
  const [form, setForm] = useState({
    title: "", description: "", budget: "", deadline: "", milestoneDescription: "",
  });

  const handleSubmit = async () => {
    if (!form.title || !form.budget || !form.deadline) {
      alert("Please fill in title, budget and deadline.");
      return;
    }

    try {
      await api.post("/jobs", {
        title: form.title,
        description: form.description,
        budget: Number(form.budget),
        deadline: form.deadline,
        milestoneDescription: form.milestoneDescription,
        clientAddress: address,
      });

      // Escrow funding is done separately (see Client Dashboard) once
      // the smart contract side is ready.
      alert("Job posted!");
      navigate("/jobs");
    } catch (err) {
      alert(err.message);
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