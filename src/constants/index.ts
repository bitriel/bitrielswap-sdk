export * from './addresses'
export * from './natives'

export const POOL_INIT_CODE_HASH = '0xbd9dc550155c3a4d88237385c3d93e6d8bf4d3a9ae377cc080948afe61d9696f';
export const POOL_INIT_CODE_HASH_OPTIMISM = '0x1fc830513acbdb1608b8c18fd3cf4a4bee3329c69bb41d56400401c40fe02fd0'

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  LOW = 500,
  MEDIUM = 3000,
  HIGH = 10000
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOW]: 10,
  [FeeAmount.MEDIUM]: 60,
  [FeeAmount.HIGH]: 200
}
