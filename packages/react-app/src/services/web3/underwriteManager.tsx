import { useWeb3Context } from "web3-react"
import { ethers } from "ethers"
import { CONTRACTS } from "../../constants"
import { useToast } from "@chakra-ui/react"
import { UnderwriteManager__factory } from "../../contracts/factories/UnderwriteManager__factory"
import { UnderwriteManager } from "../../contracts"

export interface UnderwriteProps {
  networkTokenAddress: string
  collateralAmount: string
  underwritee: string
}

export const useUnderwrite = () => {
  const context = useWeb3Context()

  return async ({ collateralAmount, underwritee, networkTokenAddress }: UnderwriteProps) => {
    const provider = new ethers.providers.Web3Provider(context.library.provider)
    const signer = provider.getSigner()

    const underwriteManager = new ethers.Contract(
      CONTRACTS.UnderwriteManager,
      UnderwriteManager__factory.createInterface(),
      provider,
    ) as UnderwriteManager

    await underwriteManager
      .connect(signer)
      .underwrite(networkTokenAddress, collateralAmount, underwritee)
  }
}

export interface ClaimRewardsProps {
  underwritees: string[]
}

export const useClaimReward = () => {
  const context = useWeb3Context()

  return async ({ underwritees }: ClaimRewardsProps) => {
    const provider = new ethers.providers.Web3Provider(context.library.provider)
    const signer = provider.getSigner()

    const underwriteManager = new ethers.Contract(
      CONTRACTS.UnderwriteManager,
      UnderwriteManager__factory.createInterface(),
      provider,
    ) as UnderwriteManager

    await underwriteManager.connect(signer).claimRewards(underwritees)
  }
}