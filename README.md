# Decentralized Freelancing Platform

## Structure

```
Decentralized-Freelancing-Platform-main/
├── freelance-dapp/       Frontend (React + Vite + Tailwind) - your work
│   ├── src/
│   │   ├── pages/         Home, Marketplace, JobDetails, CreateJob,
│   │   │                  ClientDashboard, FreelancerDashboard
│   │   ├── components/    Navbar, Footer, JobCard, JobForm,
│   │   │                  ApplicationCard, MilestoneCard, StatusBadge
│   │   ├── data/           jobs.js, applications.js, users.js (mock data)
│   │   ├── hooks/useWeb3.js   mock web3 functions, to be replaced
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── web3/               placeholder - blockchain teammate's work
│   ├── contracts/          placeholder - blockchain teammate's work
│   └── public/             bg.mp4, world.jpg, icons
│
├── backend/                Node/Express + MongoDB - new
│   ├── models/              User, Job, Application, Milestone, Transaction
│   ├── routes/               matching REST routes
│   ├── config/db.js
│   └── server.js
│
└── README.md
```

## Frontend

```bash
cd freelance-dapp
npm install
npm run dev
```

Currently runs entirely on mock data from `src/data/`. The wallet-connect
button and job/milestone actions call mock functions in `src/hooks/useWeb3.js`.

## Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

See `backend/README.md` for the API routes.

## Blockchain (teammate's work)

Not implemented here. See `freelance-dapp/web3/README.md` and
`freelance-dapp/contracts/README.md` for what's expected there:
Solidity contract, wallet auth, escrow, milestone approval, payment release.

## Flow (once everything is connected)

```
                 React Frontend
                  /           \
                 v             v
          Backend/API      Smart Contract
              v                  v
          MongoDB            Blockchain
```
