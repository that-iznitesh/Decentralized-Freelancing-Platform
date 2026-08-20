import JobCard from "../components/JobCard";

const jobs = [
  {
    id: 1,
    title: "Portfolio Website",
    budget: "0.05 ETH",
    skills: ["React", "Tailwind"],
    deadline: "3 days",
  },
  {
    id: 2,
    title: "Smart Contract Audit",
    budget: "0.2 ETH",
    skills: ["Solidity"],
    deadline: "5 days",
  },
  {
    id: 3,
    title: "Logo Design",
    budget: "0.02 ETH",
    skills: ["Figma"],
    deadline: "2 days",
  },
];

function Jobs() {
  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default Jobs;