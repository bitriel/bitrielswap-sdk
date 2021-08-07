import { POOL_INIT_CODE_HASH } from './index'

import { bytecode } from '@bitriel/bitrielswap-core/build/contracts/BitrielPool.json'
import { keccak256 } from '@ethersproject/solidity'

// this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// and load the JSON.
const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [bytecode]);

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    it('matches computed bytecode hash', () => {
      // console.log(COMPUTED_INIT_CODE_HASH)
      expect(COMPUTED_INIT_CODE_HASH).toEqual(POOL_INIT_CODE_HASH)
    })
  })
})