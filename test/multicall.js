const Multicall = artifacts.require("Multicall");
const WRBTC = artifacts.require("WRBTC");

contract("Multicall", async accounts => {
  it("aggregate 1 existing contract without balance", async () => {
    const multicall = await Multicall.deployed();
    const wrbtc = await WRBTC.new();
    const call = wrbtc.contract.methods.balanceOf(accounts[0]).encodeABI();
    
    let result = await multicall.contract.methods.aggregate([[wrbtc.address,call]]).call();
    assert.equal(parseInt(result.returnData[0]), 0);
  });

  it("aggregate 1 existing contract with balance", async () => {
    const multicall = await Multicall.deployed();
    const wrbtc = await WRBTC.new();
    const amount = 1000
    await web3.eth.sendTransaction({to:wrbtc.address, from:accounts[0], value:amount})
    const call = wrbtc.contract.methods.balanceOf(accounts[0]).encodeABI();

    let result = await multicall.contract.methods.aggregate([[wrbtc.address,call]]).call();

    assert.equal(parseInt(result.returnData[0]), amount);
  });

  it("aggregate 1 exiting and 1 non existing contract", async () => {
    const multicall = await Multicall.deployed();
    const wrbtc = await WRBTC.new();
    const amount = 1000
    await web3.eth.sendTransaction({to:wrbtc.address, from:accounts[0], value:amount})
    const call = wrbtc.contract.methods.balanceOf(accounts[0]).encodeABI();

    let result = await multicall.contract.methods.aggregate([
        [wrbtc.address,call], 
        [accounts[1],call]
    ]).call();
    
    assert.equal(parseInt(result.returnData[0]), amount);
    assert.equal(result.returnData[1], '0x');
  });

});