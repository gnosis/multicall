const Multicall = artifacts.require("./Multicall2");
const WRBTC = artifacts.require("./test/WRBTC");
const truffleAssert = require('truffle-assertions');

contract("Multicall2", async accounts => {
  it("aggregate 1 existing contract without balance", async () => {
    const multicall = await Multicall.new();
    const wrbtc = await WRBTC.new();
    const call = wrbtc.contract.methods.balanceOf(accounts[0]).encodeABI();

    let result = await multicall.contract.methods.aggregate([[wrbtc.address,call]]).call();
    assert.equal(parseInt(result.returnData[0]), 0);
  });

  it("aggregate 1 existing contract with balance", async () => {
    const multicall = await Multicall.new();
    const wrbtc = await WRBTC.new();
    const amount = 1000
    await web3.eth.sendTransaction({to:wrbtc.address, from:accounts[0], value:amount})
    const call = wrbtc.contract.methods.balanceOf(accounts[0]).encodeABI();

    let result = await multicall.contract.methods.aggregate([[wrbtc.address,call]]).call();

    assert.equal(parseInt(result.returnData[0]), amount);
  });

  it("aggregate 1 exiting and 1 non existing contract", async () => {
    const multicall = await Multicall.new();
    const wrbtc = await WRBTC.new();
    const amount = 1000
    await web3.eth.sendTransaction({to:wrbtc.address, from:accounts[0], value:amount})
    const call = wrbtc.contract.methods.balanceOf(accounts[0]).encodeABI();

    await truffleAssert.fails(
        multicall.contract.methods.aggregate([
            [accounts[0],call],
            [wrbtc.address,call]
        ]).call(),
        truffleAssert.ErrorType.revert,
        'Multicall2: inexisting target'
    );
  });

  it("tryAggregate with requireSuccess=true 1 exiting and 1 non existing contract", async () => {
    const multicall = await Multicall.new();
    const wrbtc = await WRBTC.new();
    const amount = 1000
    await web3.eth.sendTransaction({to:wrbtc.address, from:accounts[0], value:amount})
    const call = wrbtc.contract.methods.balanceOf(accounts[0]).encodeABI();

    await truffleAssert.fails(
        multicall.contract.methods.tryAggregate(true, [
            [accounts[0],call],
            [wrbtc.address,call]
        ]).call(),
        truffleAssert.ErrorType.revert,
        'Multicall2: call failed'
    );
  });

  it("tryAggregate with requireSuccess=false 1 exiting and 1 non existing contract", async () => {
    const multicall = await Multicall.new();
    const wrbtc = await WRBTC.new();
    const amount = 1000
    await web3.eth.sendTransaction({to:wrbtc.address, from:accounts[0], value:amount})
    const call = wrbtc.contract.methods.balanceOf(accounts[0]).encodeABI();

    const result = await multicall.contract.methods.tryAggregate(false, [
        [accounts[0],call],
        [wrbtc.address,call]
    ]).call();

    assert.equal(result[0].returnData, '0x');
    assert.equal(result[0].success, false);
    assert.equal(parseInt(result[1].returnData), amount);
    assert.equal(result[1].success, true);
  });

});