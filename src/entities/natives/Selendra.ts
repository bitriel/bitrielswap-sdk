import { WNATIVE } from '../tokens'
import { Token, Currency, NativeCurrency } from '@uniswap/sdk-core'
import invariant from 'tiny-invariant'

export class Selendra extends NativeCurrency {
  protected constructor(chainId: number) {
    super(chainId, 18, 'SEL', 'Selendra')
  }

  public get wrapped(): Token {
    const wnative = WNATIVE[this.chainId]
    invariant(!!wnative, 'WRAPPED')
    return wnative
  }

  private static _cache: { [chainId: number]: Selendra } = {}

  public static onChain(chainId: number): Selendra {
    return this._cache[chainId] ?? (this._cache[chainId] = new Selendra(chainId))
  }

  public equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}