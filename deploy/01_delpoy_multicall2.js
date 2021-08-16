module.exports = async function ({getNamedAccounts, deployments}) { // HardhatRuntimeEnvironment
  const {deployer} = await getNamedAccounts()
  const {deploy, log} = deployments

  const deployResult = await deploy('Multicall2', {
    from: deployer,
    log: true,
  });

  if (deployResult.newlyDeployed) {
      log(
        `Contract Multicall2 deployed at ${deployResult.address} using ${deployResult.receipt.gasUsed.toString()} gas`
      );
    }

  return true
};
module.exports.id = 'deploy_multicall2'; // id required to prevent reexecution
module.exports.tags = ['Multicall2'];