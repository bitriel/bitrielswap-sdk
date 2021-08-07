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
  [ChainId.BSC_TESTNET] : '0xFf14323A2f255B4C7258b301a5b2d8869d39C487',
}

export const MULTICALL_ADDRESS: AddressMap = {
  ...constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984', [ChainId.OPTIMISTIC_KOVAN]),
  [ChainId.RINKEBY]: '0x6A237ddA56FF40505041B1C64f85c586c6F59187',
  [ChainId.OPTIMISM]: '0x90f872b3d8f33f305e0250db6A2761B354f7710A',
  [ChainId.ARBITRUM_ONE]: '0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB',
  [ChainId.ARBITRUM_RINKEBY]: '0xa501c031958F579dB7676fF1CE78AD305794d579',
  [ChainId.BSC]: '0xa9193376D09C7f31283C54e56D013fCF370Cd9D9',
  [ChainId.BSC_TESTNET] : '0x73d96a88d7D0d2ddBE51992b14246EA0FcF8ff3F',
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
  [ChainId.BSC_TESTNET] : '0xcb4CC9B432FeA5568495B96921d316F9F75d68E7',
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
  [ChainId.BSC_TESTNET] : '0x093E4cdd0d4344FA90D28FC0ff0F142b3Aa4b855',
}

export const MIGRATOR_ADDRESS: AddressMap = {
  ...constructSameAddressMap('0xA5644E29708357803b5A882D272c41cC0dF92B34', [
    ChainId.ARBITRUM_ONE,
    ChainId.ARBITRUM_RINKEBY,
  ]),
  [ChainId.RINKEBY]: '0xAeC22d753905d7b3aCE420EeD4259145fF86Aae4',
  [ChainId.OPTIMISM]: '',
  [ChainId.OPTIMISTIC_KOVAN]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET] : '0xCe63FD7d521310c80fceAa47fDe2F91de55e18Ef',
}