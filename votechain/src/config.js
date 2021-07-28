export const VOTE_CHAIN_ADDRESS = "0x66E652562e49155729E7e8E1C2AE3f8F82b92E68";

export const VOTE_CHAIN_ABI = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "party",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "voter_id",
        type: "uint256",
      },
    ],
    name: "VoteCasted",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "votecount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "voterList",
    outputs: [
      {
        internalType: "uint256",
        name: "voter_id",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "votes",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "party",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "string",
        name: "_party",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "voter_id",
        type: "uint256",
      },
    ],
    name: "castVote",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
