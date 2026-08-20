// Mock users data
// No passwords or private keys - wallet address is the identity (matches backend design)

export const users = [
  {
    walletAddress: "0x1234567890abcdef1234567890abcdef12345678",
    role: "client",
    name: "Rahul Verma",
    bio: "Startup founder hiring for web and design work.",
    skills: [],
    profileImage: "https://i.pravatar.cc/100?img=12",
  },
  {
    walletAddress: "0xAAA1...BBB2",
    role: "freelancer",
    name: "Nitesh Kumar",
    bio: "Frontend developer skilled in React & Tailwind.",
    skills: ["React", "Tailwind", "JavaScript"],
    profileImage: "https://i.pravatar.cc/100?img=5",
  },
  {
    walletAddress: "0xCCC3...DDD4",
    role: "freelancer",
    name: "Priya Sharma",
    bio: "UI/UX designer and frontend developer.",
    skills: ["Figma", "React", "CSS"],
    profileImage: "https://i.pravatar.cc/100?img=9",
  },
];

// Demo "logged-in" users so the dashboards have something to show
// without real wallet auth (that part is handled by the blockchain side)
export const currentClient = users[0];
export const currentFreelancer = users[1];
