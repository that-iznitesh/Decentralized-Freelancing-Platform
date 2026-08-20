# Backend - Node/Express + MongoDB

Handles off-chain data for the platform: user profiles, job metadata,
freelancer proposals, milestone submissions, and a transaction history
index. The blockchain remains the source of truth for anything that
must be trustless (ownership, escrow, payments) - if MongoDB and the
blockchain ever disagree, the blockchain wins.

## Setup

```bash
cd backend
npm install
cp .env.example .env
# edit .env with your MongoDB connection string
npm run dev
```

Requires a running MongoDB instance (local or Atlas).

## Collections

- `users` - profile info, keyed by wallet address (no passwords/keys)
- `jobs` - off-chain job metadata, linked to on-chain job via `blockchainJobId`
- `applications` - freelancer proposals for a job
- `milestones` - milestone/submission details
- `transactions` - history/index of on-chain transactions

## API Routes

- `GET/POST /api/users`, `GET/PUT /api/users/:walletAddress`
- `GET/POST /api/jobs`, `GET/PUT/DELETE /api/jobs/:id`
- `GET/POST /api/applications`, `PUT /api/applications/:id`
- `GET/POST /api/milestones`, `PUT /api/milestones/:id`
- `GET/POST /api/transactions`

## Not handled here (blockchain teammate's scope)

- Solidity smart contract (`freelance-dapp/contracts/FreelanceMarketplace.sol`)
- Wallet auth, MetaMask, Ethers.js/Wagmi/Viem
- Escrow, milestone approval, payment release on-chain

See `freelance-dapp/web3/README.md` for details.
