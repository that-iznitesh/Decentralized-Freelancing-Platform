// Mock jobs data
// Later this will come from the backend (MongoDB) + on-chain job id from the smart contract

export const jobs = [
  {
    id: 1,
    title: "Build a React Portfolio Website",
    description:
      "Looking for a frontend developer to build a clean, responsive portfolio website using React and Tailwind CSS. Should include a home page, projects section, and a contact form.",
    budget: 500,
    deadline: "2026-09-10",
    client: "0x1234...5678",
    clientAddress: "0x1234567890abcdef1234567890abcdef12345678",
    status: "OPEN",
    milestoneDescription: "Complete and deploy the finished website.",
    createdAt: "2026-08-01",
  },
  {
    id: 2,
    title: "Smart Contract Security Audit",
    description:
      "Need an experienced Solidity developer to audit an escrow smart contract before mainnet deployment. Deliverable is a written report covering vulnerabilities and gas optimizations.",
    budget: 800,
    deadline: "2026-09-15",
    client: "0xA1B2...C3D4",
    clientAddress: "0xA1B2C3D4A1B2C3D4A1B2C3D4A1B2C3D4A1B2C3D4",
    status: "IN_PROGRESS",
    milestoneDescription: "Deliver a full audit report with findings.",
    createdAt: "2026-07-20",
  },
  {
    id: 3,
    title: "Logo & Brand Identity Design",
    description:
      "Need a modern logo and a small brand kit (colors, typography) for a new DeFi project. Figma files required.",
    budget: 200,
    deadline: "2026-08-28",
    client: "0x9F8E...7D6C",
    clientAddress: "0x9F8E7D6C9F8E7D6C9F8E7D6C9F8E7D6C9F8E7D6C",
    status: "OPEN",
    milestoneDescription: "Deliver final logo files and brand guide.",
    createdAt: "2026-08-05",
  },
  {
    id: 4,
    title: "NFT Marketplace UI Redesign",
    description:
      "Redesign the marketplace listing and item detail pages for a better browsing experience. Mobile-first design expected.",
    budget: 650,
    deadline: "2026-09-05",
    client: "0x1234...5678",
    clientAddress: "0x1234567890abcdef1234567890abcdef12345678",
    status: "COMPLETED",
    milestoneDescription: "Deliver Figma designs and a working React build.",
    createdAt: "2026-07-10",
  },
];

export const getJobById = (id) => jobs.find((job) => job.id === Number(id));
