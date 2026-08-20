import { FaBriefcase } from "react-icons/fa";

function JobForm({ form, onChange, onSubmit }) {
  const handleChange = (e) => {
    onChange({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        className="w-full mb-3 p-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
        placeholder="Job Title"
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        rows={4}
        className="w-full mb-3 p-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
        placeholder="Description"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          name="budget"
          value={form.budget}
          onChange={handleChange}
          className="w-full mb-3 p-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
          placeholder="Budget (USDC)"
        />

        <input
          name="deadline"
          type="date"
          value={form.deadline}
          onChange={handleChange}
          className="w-full mb-3 p-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
        />
      </div>

      <textarea
        name="milestoneDescription"
        value={form.milestoneDescription}
        onChange={handleChange}
        rows={2}
        className="w-full mb-4 p-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
        placeholder="Milestone Description"
      />

      <button
        onClick={onSubmit}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-emerald-500 hover:scale-[1.01] transition text-white p-3 rounded-lg font-semibold"
      >
        <FaBriefcase />
        Create Job
      </button>
    </div>
  );
}

export default JobForm;
