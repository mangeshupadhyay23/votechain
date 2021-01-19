export const VOTE_CHAIN_ADDRESS = '0x43515189C7c5Baa0e51efFA7925D46dBc6B70654'

export const VOTE_CHAIN_ABI = [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "votecount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "votes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "voter_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "party",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_party",
          "type": "string"
        }
      ],
      "name": "castVote",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]