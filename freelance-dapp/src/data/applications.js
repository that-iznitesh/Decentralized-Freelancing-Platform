// Mock applications data
// Later this will come from the backend (MongoDB), linked to jobs by jobId

export const applications = [
  {
    id: 1,
    jobId: 1,
    freelancerAddress: "0xAAA1...BBB2",
    freelancerName: "Nitesh Kumar",
    proposal:
      "I have built 10+ portfolio sites with React and Tailwind. I can deliver this within 5 days.",
    proposedBudget: 450,
    estimatedDays: 5,
    status: "PENDING",
    createdAt: "2026-08-02",
  },
  {
    id: 2,
    jobId: 1,
    freelancerAddress: "0xCCC3...DDD4",
    freelancerName: "Priya Sharma",
    proposal:
      "Frontend developer with 3 years experience. I can add animations and make it fully responsive.",
    proposedBudget: 480,
    estimatedDays: 7,
    status: "PENDING",
    createdAt: "2026-08-03",
  },
  {
    id: 3,
    jobId: 2,
    freelancerAddress: "0xAAA1...BBB2",
    freelancerName: "Nitesh Kumar",
    proposal:
      "Solidity auditor with experience in escrow and marketplace contracts. Report delivered in 4 days.",
    proposedBudget: 750,
    estimatedDays: 4,
    status: "ACCEPTED",
    createdAt: "2026-07-21",
  },
  {
    id: 4,
    jobId: 4,
    freelancerAddress: "0xAAA1...BBB2",
    freelancerName: "Nitesh Kumar",
    proposal:
      "I can redesign both pages with a mobile-first approach and hand off clean React components.",
    proposedBudget: 600,
    estimatedDays: 8,
    status: "ACCEPTED",
    createdAt: "2026-07-11",
  },
];

export const getApplicationsByJobId = (jobId) =>
  applications.filter((app) => app.jobId === Number(jobId));

export const getApplicationsByFreelancer = (freelancerAddress) =>
  applications.filter((app) => app.freelancerAddress === freelancerAddress);
