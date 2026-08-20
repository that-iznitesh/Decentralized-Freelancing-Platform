# Web3 Layer - Blockchain Teammate's Scope

This folder is a placeholder. The frontend does not implement any of this -
it is reserved for the blockchain developer on the team.

Files expected here, based on the original project brief:

- `contract.js` - contract ABI + contract instance setup
- `wallet.js` - wallet connection logic (MetaMask, etc.)
- `marketplace.js` - functions to call marketplace contract methods
  (post job, apply, accept freelancer, fund escrow, submit milestone,
  approve milestone, release payment)

Related Solidity file: `../contracts/FreelanceMarketplace.sol`

Things the blockchain side is responsible for (per the brief):

- Solidity smart contract (`FreelanceMarketplace.sol`)
- MetaMask integration
- Ethers.js / Wagmi / Viem setup
- Wallet authentication
- On-chain actions that must be trustless/verified:
  - Job ownership
  - Freelancer hired
  - Escrow funds
  - Milestone approval
  - Payment release

The frontend currently uses mock functions in `src/hooks/useWeb3.js`
(`connectWallet`, `postJob`, `submitWork`, `releasePayment`) as stand-ins.
Once the real web3 layer is ready, those mock functions can be swapped
for the real implementations here without changing the page components.
