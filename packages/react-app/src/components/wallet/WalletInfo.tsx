import { Box, BoxProps } from "@chakra-ui/layout"
import { Center, HStack, Text, Tooltip, useDisclosure } from "@chakra-ui/react"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ethers } from "ethers"
import React, { useEffect, useState } from "react"
import { useEffectOnce } from "react-use"
import { useRecoilState } from "recoil"
import { useGetTotalCollateralQuery } from "../../generated/subgraph/graphql"
import { useMututalityTokenContract } from "../../services/web3/contracts"
import { useGetMyWalletAddress } from "../../services/web3/utils/useGetMyWalletAddress"
import colors from "../../theme/foundations/colors"
import { getAbbreviatedAddress } from "../../utils/stringFormat"
import { refetchContractsAtom } from "../../utils/useRefetchData"
import { GlyphLabel } from "../glyph/SourceGlyphLabel"
import WalletInfoModal from "./WalletInfoModal"

const WalletInfo = ({ ...rest }: BoxProps) => {
  const { balance, totalCollateral } = useGetWalletValues()
  const walletAddress = useGetMyWalletAddress()
  const walletInfoModal = useDisclosure()

  return (
    <Box {...rest}>
      <HStack spacing={-14}>
        <Tooltip label="Staked SOURCE" shouldWrapChildren>
          <Center {...pillContainerStyles} pr="60px" left={0} borderColor={colors.blue.main}>
            <GlyphLabel color={colors.blue.main} mx={1} value={totalCollateral} />
          </Center>
        </Tooltip>
        <Tooltip label="SOURCE balance" shouldWrapChildren>
          <Center {...pillContainerStyles} right={0} borderColor="black">
            <GlyphLabel mx={1} value={balance} />
          </Center>
        </Tooltip>
        {walletAddress && (
          <>
            <HStack {...walletPillContainerStyles} onClick={walletInfoModal.onOpen} px={3}>
              <FontAwesomeIcon size="xs" icon={faCircle} color={colors.green.main} />
              <Text as="span" lineHeight="2">
                {getAbbreviatedAddress(walletAddress)}
              </Text>
            </HStack>
            <WalletInfoModal
              isOpen={walletInfoModal.isOpen}
              onClose={walletInfoModal.onClose}
              address={walletAddress}
            />
          </>
        )}
      </HStack>
    </Box>
  )
}

export const useGetWalletValues = () => {
  const address = useGetMyWalletAddress()
  const [balance, setBalance] = useState<any>(0)
  const { balanceOf } = useMututalityTokenContract()
  const [refetchCalls, setRefetchCalls] = useRecoilState(refetchContractsAtom)
  const { data } = useGetTotalCollateralQuery({ variables: { id: address ?? "" }, skip: !address })
  const totalCollateral = ethers.utils.formatEther(data?.underwriter?.totalCollateral ?? "0")

  const fetchBalance = () => balanceOf().then((res) => setBalance(ethers.utils.formatEther(res)))

  useEffectOnce(fetchBalance as () => void)

  useEffect(() => {
    if (refetchCalls.includes("balanceOf")) {
      fetchBalance().then(() => setRefetchCalls((vals) => vals.filter((v) => v !== "balanceOf")))
    }
  }, [refetchCalls])

  return { balance, totalCollateral }
}

const pillContainerStyles: BoxProps = {
  bgColor: "white",
  borderRadius: "2xl",
  border: "1px solid",
  py: 1,
  px: 2,
}

const walletPillContainerStyles: BoxProps = {
  cursor: "pointer",
  bgColor: "gray.cultured",
  _hover: { shadow: "xs" },
  borderRadius: "2xl",
  border: `1px solid ${colors.gray.cultured}`,
  py: 1,
  px: 2,
  marginLeft: "1em !important",
}

export default WalletInfo
