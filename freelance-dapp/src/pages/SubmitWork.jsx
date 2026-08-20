import { useState } from "react";
import { submitWork } from "../hooks/useWeb3";

function SubmitWork() {
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    try {
      const tx = await submitWork({
        description,
      });

      alert("✅ Work Submitted!\nTX Hash: " + tx.hash);
    } catch (err) {
      console.log(err);
      alert("❌ Error submitting work");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Submit Work</h2>

      <textarea
        className="w-full mb-3 p-2 border"
        placeholder="Describe your deliverable"
        onChange={(e) => setDescription(e.target.value)}
      />

      <input type="file" className="mb-3" />

      <button
        onClick={handleSubmit}
        className="w-full bg-purple-500 text-white p-2 rounded"
      >
        Submit & Request Payment
      </button>
    </div>
  );
}

export default SubmitWork;