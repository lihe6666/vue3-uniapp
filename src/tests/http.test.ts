import { describe, expect, vi, it } from 'vitest'
import { http } from '../common/http'
// The two tests marked with concurrent will be run in parallel

describe('test http request.', () => {
  it('start ...', function () {
    let h = new http()
    expect(h.getSwitchImgs()).equal(1)
  })
})