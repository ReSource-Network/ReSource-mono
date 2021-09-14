import { ethers, upgrades } from "hardhat"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signers"
import { expect } from "chai"
import chai from "chai"
import { solidity } from "ethereum-waffle"
import { RUSD } from "../types/RUSD"
import { NetworkRegistry } from "../types/NetworkRegistry"
import { ReSourceToken } from "../types/ReSourceToken"
import { UnderwriteManager } from "../types/UnderwriteManager"
chai.use(solidity)

const sleep = (milliseconds: number) => {
  const date = Date.now()
  let currentDate
  do {
    currentDate = Date.now()
  } while (currentDate - date < milliseconds)
}

describe("RUSD Tests", function() {
  let deployer: SignerWithAddress
  let relayer: SignerWithAddress
  let memberA: SignerWithAddress
  let memberB: SignerWithAddress
  let bulkMemberA: SignerWithAddress
  let bulkMemberB: SignerWithAddress
  let nonMemberA: SignerWithAddress
  let nonMemberB: SignerWithAddress
  let nonMemberC: SignerWithAddress
  let nonBulkMemberA: SignerWithAddress
  let operatorA: SignerWithAddress
  let rUSD: RUSD
  let reSourceToken: ReSourceToken
  let networkRegistry: NetworkRegistry

  before(async function() {
    const accounts = await ethers.getSigners()
    deployer = accounts[0]
    relayer = accounts[1]
    memberA = accounts[2]
    memberB = accounts[3]
    bulkMemberA = accounts[4]
    bulkMemberB = accounts[5]
    nonMemberA = accounts[6]
    nonMemberB = accounts[7]
    nonMemberC = accounts[8]
    nonBulkMemberA = accounts[9]
    operatorA = accounts[10]
  })

  it("Successfully deploys a RUSD contract", async function() {
    const networkRegistryFactory = await ethers.getContractFactory("NetworkRegistry")

    networkRegistry = (await upgrades.deployProxy(networkRegistryFactory, [
      [memberA.address, memberB.address, bulkMemberA.address, bulkMemberB.address],
      [operatorA.address],
    ])) as NetworkRegistry

    const reSourceTokenFactory = await ethers.getContractFactory("ReSourceToken")

    reSourceToken = (await upgrades.deployProxy(reSourceTokenFactory, [
      ethers.utils.parseEther("10000000"),
    ])) as ReSourceToken

    const underwriteManagerFactory = await ethers.getContractFactory("UnderwriteManager")

    const underwriteManager = (await upgrades.deployProxy(underwriteManagerFactory, [
      reSourceToken.address,
    ])) as UnderwriteManager

    const rUSDFactory = await ethers.getContractFactory("RUSD")

    rUSD = (await upgrades.deployProxy(
      rUSDFactory,
      [networkRegistry.address, 20, underwriteManager.address, relayer.address],
      {
        initializer: "initializeRUSD",
      },
    )) as RUSD

    underwriteManager.addNetwork(rUSD.address)

    const registryAddress = await rUSD.registry()
    const restrictionState = await rUSD.restrictionState()
    expect(restrictionState).to.equal(0)
    expect(rUSD.address).to.properAddress
    expect(registryAddress).to.properAddress
  })

  it("Transfer RUSD in REGISTERED restriction state", async function() {
    await expect(
      rUSD.setCreditLimit(memberB.address, ethers.utils.parseUnits("1000.0", "mwei")),
    ).to.emit(rUSD, "CreditLimitUpdate")

    await expect(
      rUSD.connect(memberB).transfer(memberA.address, ethers.utils.parseUnits("100.0", "mwei")),
    ).to.emit(rUSD, "Transfer")

    await expect(
      rUSD.connect(memberB).transfer(nonMemberA.address, ethers.utils.parseUnits("20.0", "mwei")),
    ).to.be.reverted
  })

  it("Bulk Transfer RUSD in REGISTERED restriction state", async function() {
    await expect(
      rUSD
        .connect(memberB)
        .bulkTransfer(
          [nonBulkMemberA.address, bulkMemberA.address, bulkMemberB.address],
          [
            ethers.utils.parseUnits("50.0", "mwei"),
            ethers.utils.parseUnits("30.0", "mwei"),
            ethers.utils.parseUnits("20.0", "mwei"),
          ],
        ),
    ).to.be.reverted

    await expect(
      rUSD
        .connect(memberB)
        .bulkTransfer(
          [memberA.address, bulkMemberA.address, bulkMemberB.address],
          [
            ethers.utils.parseUnits("50000.0", "mwei"),
            ethers.utils.parseUnits("30.0", "mwei"),
            ethers.utils.parseUnits("20.0", "mwei"),
          ],
        ),
    ).to.be.reverted

    await expect(
      rUSD
        .connect(memberB)
        .bulkTransfer(
          [memberA.address, bulkMemberA.address, bulkMemberB.address],
          [
            ethers.utils.parseUnits("50.0", "mwei"),
            ethers.utils.parseUnits("30.0", "mwei"),
            ethers.utils.parseUnits("20.0", "mwei"),
          ],
        ),
    ).to.emit(rUSD, "Transfer")

    const memberBCreditBalance = ethers.utils.formatUnits(
      await rUSD.creditBalanceOf(memberB.address),
      "mwei",
    )
    await expect(memberBCreditBalance).to.equal("200.0")

    const memberABalance = ethers.utils.formatUnits(await rUSD.balanceOf(memberA.address), "mwei")
    await expect(memberABalance).to.equal("150.0")

    const bulkMemberABalance = ethers.utils.formatUnits(
      await rUSD.balanceOf(bulkMemberA.address),
      "mwei",
    )
    await expect(bulkMemberABalance).to.equal("30.0")

    const bulkMemberBBalance = ethers.utils.formatUnits(
      await rUSD.balanceOf(bulkMemberB.address),
      "mwei",
    )
    await expect(bulkMemberBBalance).to.equal("20.0")
  })

  it("Updates RUSD to POSITIVE restriction state", async function() {
    await expect(rUSD.connect(memberA).restrictPositiveBalance()).to.be.reverted

    await expect(rUSD.restrictPositiveBalance()).to.emit(rUSD, "RestrictionUpdated")

    const state = await rUSD.restrictionState()
    expect(state).to.equal(1)
  })

  it("RUSD in POSITIVE restriction state", async function() {
    await expect(
      rUSD.connect(memberA).transfer(nonMemberA.address, ethers.utils.parseUnits("100.0", "mwei")),
    ).to.emit(rUSD, "Transfer")

    await expect(
      rUSD.setCreditLimit(nonMemberB.address, ethers.utils.parseUnits("1000.0", "mwei")),
    ).to.emit(rUSD, "CreditLimitUpdate")

    await expect(
      rUSD
        .connect(nonMemberB)
        .transfer(nonMemberC.address, ethers.utils.parseUnits("100.0", "mwei")),
    ).to.be.reverted

    await expect(
      rUSD
        .connect(nonMemberA)
        .transfer(nonMemberC.address, ethers.utils.parseUnits("100.0", "mwei")),
    ).to.emit(rUSD, "Transfer")

    await expect(
      rUSD.connect(memberA).transfer(nonMemberA.address, ethers.utils.parseUnits("51.0", "mwei")),
    ).to.be.reverted

    await expect(
      rUSD.connect(memberA).transfer(nonMemberA.address, ethers.utils.parseUnits("20.0", "mwei")),
    ).to.emit(rUSD, "Transfer")
  })

  it("Unsuccessfully update RUSD to NONE restriction state", async function() {
    await expect(rUSD.connect(memberA).removeRestrictions()).to.be.reverted
    await expect(rUSD.removeRestrictions()).to.be.reverted
    const state = await rUSD.restrictionState()
    expect(state).to.equal(1)
  })

  it("Update RUSD restriction expiration", async function() {
    await expect(rUSD.connect(memberA).updateRestrictionExpiration()).to.be.reverted
    await expect(rUSD.updateRestrictionExpiration()).to.emit(rUSD, "RestrictionExpirationUpdated")
    const state = await rUSD.restrictionState()
    expect(state).to.equal(1)
  })

  // it("Updates RUSD to NONE restriction state by nonOwner", async function() {
  //   this.timeout(21000)
  //   sleep(20000)
  //   await expect(rUSD.connect(memberA).removeRestrictions()).to.emit(rUSD, "RestrictionUpdated")
  //   const state = await rUSD.restrictionState()
  //   expect(state).to.equal(2)
  // })

  // it("RUSD in NONE restriction state", async function() {
  //   await expect(
  //     rUSD.setCreditLimit(nonMemberB.address, ethers.utils.parseUnits("1000.0", "mwei")),
  //   ).to.emit(rUSD, "CreditLimitUpdate")

  //   await expect(
  //     rUSD
  //       .connect(nonMemberB)
  //       .transfer(nonMemberC.address, ethers.utils.parseUnits("300.0", "mwei")),
  //   ).to.emit(rUSD, "Transfer")

  //   await expect(
  //     rUSD.connect(memberB).transfer(nonMemberC.address, ethers.utils.parseUnits("300.0", "mwei")),
  //   ).to.emit(rUSD, "Transfer")
  // })
})
