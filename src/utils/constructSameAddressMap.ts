import { ChainId } from '../chainId'

const MAINNET_AND_TESTNETS = [ChainId.MAINNET, ChainId.ROPSTEN, ChainId.RINKEBY, ChainId.GÖRLI, ChainId.KOVAN]

export function constructSameAddressMap<T extends string>(
  address: T,
  additionalNetworks: ChainId[] = []
): { [chainId: number]: T } {
  return MAINNET_AND_TESTNETS.concat(additionalNetworks).reduce<{ [chainId: number]: T }>((memo, chainId) => {
    memo[chainId] = address
    return memo
  }, {})
}