// Dummy Web3 functions (for frontend demo)

export const connectWallet = async () => {
  return {
    address: "0xABC123...FAKE",
  };
};

export const postJob = async ({ title, budget, deadline }) => {
  console.log("Posting Job:", { title, budget, deadline });

  return {
    hash: "0xPOSTJOB_FAKE_TX_HASH_123",
  };
};

export const submitWork = async ({ description }) => {
  console.log("Submitting Work:", description);

  return {
    hash: "0xSUBMITWORK_FAKE_TX_HASH_456",
  };
};

export const releasePayment = async ({ jobId, freelancerAddress }) => {
  console.log("Releasing Payment:", jobId, freelancerAddress);

  return {
    hash: "0xPAYMENT_FAKE_TX_HASH_789",
  };
};