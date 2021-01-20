/*eslint-disable*/
const { assert } = require("chai")

const Votechain = artifacts.require('./Votechain.sol')

contract('Votechain', (accounts) =>{
    before(async ()=>{
        this.votechain = await Votechain.deployed()
    })

    it('deploys successfully', async()=>{
        const address = await this.votechain.address

        assert.notEqual(address, 0x0)
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
    })

    it('list votes', async ()=>{
        const voteCount = await this.votechain.votecount()
        const vote = await this.votechain.votes(voteCount.toNumber())
        assert.equal(vote.voter_id.toNumber(), voteCount.toNumber())
    })

    it('create task', async()=>{
        const result = await this.votechain.castVote('Shivsena')
        const voteCount = await this.votechain.votecount()
        assert.equal(voteCount.toNumber(),3)
        const event = result.logs[0].args
        assert.equal(event.voter_id.toNumber(),3)
        assert.equal(event.party,'Shivsena')
    })
})