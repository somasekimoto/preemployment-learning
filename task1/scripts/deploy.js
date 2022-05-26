// const MyToken = artifacts.require("AliceToken")

// module.exports = async function (deployer, network, accounts) {
//   // Deploy MyToken
//   await deployer.deploy(MyToken)
//   const AliceToken = await MyToken.deployed()
// }

async function main() {
  const [deployer] = await ethers.getSigners()

  console.log("Deploying contracts with the account:", deployer.address)

  console.log("Account balance:", (await deployer.getBalance()).toString())

  const AliceToken = await ethers.getContractFactory("AliceToken")
  const AliceFactory = await AliceToken.deploy()

  console.log("AliceToken address:", AliceFactory.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
