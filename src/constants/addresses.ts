import { ChainId } from '../chainId';
import { constructSameAddressMap } from '../utils/constructSameAddressMap';

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

type AddressMap = { [chainId: number]: string }

export const FACTORY_ADDRESS: AddressMap = {
  ...constructSameAddressMap('0x1F98431c8aD98523631AE4a59f267346ea31F984', [
    ChainId.OPTIMISM,
    ChainId.OPTIMISTIC_KOVAN,
    ChainId.ARBITRUM_ONE,
    ChainId.ARBITRUM_RINKEBY,
  ]),
  [ChainId.RINKEBY]: '0xd60ccFdf97985c2920d8E734c6352Aec85A9a4f3',
  [ChainId.BSC] : '',
  [ChainId.BSC_TESTNET] : '0xA3460C72E4Eb6C1851007fAc59bD37dB04056dA4',
  [ChainId.SEL_TESTNET] : '0x3A770d51a73105AaBA81CD903f59FA991f6dAeea',
}

export const SWAP_ROUTER_ADDRESS: AddressMap = {
  ...constructSameAddressMap('0xE592427A0AEce92De3Edee1F18E0157C05861564', [
    ChainId.OPTIMISM,
    ChainId.OPTIMISTIC_KOVAN,
    ChainId.ARBITRUM_ONE,
    ChainId.ARBITRUM_RINKEBY,
  ]),
  [ChainId.RINKEBY]: '0xe03E40b3b9D16db74cb95D0fFEA7404e91687811',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET] : '0x56f92bFA8716C4906C07B5f6741A3f711839BCF3',
  [ChainId.SEL_TESTNET] : '0xaD2a08bc94549f9240e5a21028a54E416FAD9F78',
}

export const MULTICALL_ADDRESS: AddressMap = {
  ...constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984', [ChainId.OPTIMISTIC_KOVAN]),
  [ChainId.RINKEBY]: '0x6A237ddA56FF40505041B1C64f85c586c6F59187',
  [ChainId.OPTIMISM]: '0x90f872b3d8f33f305e0250db6A2761B354f7710A',
  [ChainId.ARBITRUM_ONE]: '0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB',
  [ChainId.ARBITRUM_RINKEBY]: '0xa501c031958F579dB7676fF1CE78AD305794d579',
  [ChainId.BSC]: '0xa9193376D09C7f31283C54e56D013fCF370Cd9D9',
  [ChainId.BSC_TESTNET] : '0x1E53F9B9d6f1086a1444871a0d6171042a5909CE',
  [ChainId.SEL_TESTNET] : '0x2832Fb85AfcF710AB88490E70F82e118423F7cD8'
}

export const QUOTER_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6', [
    ChainId.OPTIMISM,
    ChainId.OPTIMISTIC_KOVAN,
    ChainId.ARBITRUM_ONE,
    ChainId.ARBITRUM_RINKEBY,
  ]),
  [ChainId.RINKEBY]: '0x13145BCb93db915E2dBEEDA6F66189778A8B8140',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET] : '0x84BEd3752Ec5Dc8724c81Cef4Cbd7081631729FE',
  [ChainId.SEL_TESTNET] : '0x301f51E05aD94508051B7d0564710cbaE4b016ee'
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0xC36442b4a4522E871399CD717aBDD847Ab11FE88', [
    ChainId.OPTIMISM,
    ChainId.OPTIMISTIC_KOVAN,
    ChainId.ARBITRUM_ONE,
    ChainId.ARBITRUM_RINKEBY,
  ]),
  [ChainId.RINKEBY]: '0xcEBE22cFD06Aea801B95dd82E832AA164474Aaf3',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET] : '0x21Ee54c0Ac71A99708d56a99c3E829aDA399C65a',
  [ChainId.SEL_TESTNET] : '0x03782fc2C20c8F8b887060FfbF0Fe56da93e5FA3'
}

export const MIGRATOR_ADDRESS: AddressMap = {
  ...constructSameAddressMap('0xA5644E29708357803b5A882D272c41cC0dF92B34', [
    ChainId.ARBITRUM_ONE,
    ChainId.ARBITRUM_RINKEBY,
  ]),
  [ChainId.RINKEBY]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET] : '0x6B1D53867630cB79954643f3E9Ae02d8024Fa13C',
  [ChainId.SEL_TESTNET] : ''
}

export const BTR_ADDRESS: AddressMap = {
  [ChainId.BSC_TESTNET]: '0xceEc8137bc26E587Bf376eF1d09D5DDABcF3ec73'
}

export const BITRIEL_GOVERNANCE_ADDRESS: AddressMap = {
  [ChainId.BSC_TESTNET]: '0xc23C320DaC8508083974dF39280990d9aE322926'
}

export const TIMELOCK_ADDRESS: AddressMap = {
  [ChainId.BSC_TESTNET]: '0xE59cfFf761A0C4A946d160b7A0119b976926dd0c'
}