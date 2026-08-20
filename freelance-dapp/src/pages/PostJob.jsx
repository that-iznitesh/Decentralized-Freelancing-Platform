import { useState } from "react";
import { postJob } from "../hooks/useWeb3";

function PostJob() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [skills, setSkills] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = async () => {
    try {
      const tx = await postJob({
        title,
        budget,
        deadline,
      });

      alert("✅ Job Posted!\nTX Hash: " + tx.hash);
    } catch (err) {
      console.log(err);
      alert("❌ Error posting job");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Post a Job</h2>

      <input
        className="w-full mb-3 p-2 border"
        placeholder="Job Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full mb-3 p-2 border"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        className="w-full mb-3 p-2 border"
        placeholder="Budget (ETH)"
        onChange={(e) => setBudget(e.target.value)}
      />

      <input
        className="w-full mb-3 p-2 border"
        placeholder="Skills (comma separated)"
        onChange={(e) => setSkills(e.target.value)}
      />

      <input
        className="w-full mb-3 p-2 border"
        placeholder="Deadline"
        onChange={(e) => setDeadline(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-green-500 text-white p-2 rounded"
      >
        Post Job & Lock Funds
      </button>
    </div>
  );
}

export default PostJob;