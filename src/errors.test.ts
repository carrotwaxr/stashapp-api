import { describe, it, expect } from 'vitest'
import { StashApiError } from './errors.js'

describe('StashApiError', () => {
  it('carries the graphql error list and a joined message', () => {
    const err = new StashApiError([{ message: 'not found' }, { message: 'bad id' }], 200)
    expect(err).toBeInstanceOf(Error)
    expect(err.name).toBe('StashApiError')
    expect(err.message).toBe('not found, bad id')
    expect(err.errors).toHaveLength(2)
    expect(err.status).toBe(200)
  })

  it('falls back to a generic message when the error list is empty', () => {
    const err = new StashApiError([])
    expect(err.message).toBe('Stash API error')
    expect(err.status).toBeUndefined()
  })
})
