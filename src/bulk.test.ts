import { describe, it, expect, vi } from 'vitest'
import { bulkSceneUpdateChunked } from './bulk.js'

describe('bulkSceneUpdateChunked', () => {
  it('splits ids into chunks and aggregates returned scenes', async () => {
    const ids = Array.from({ length: 250 }, (_, i) => String(i + 1))
    const mutation = vi.fn(async ({ bulkSceneUpdate }: any) => {
      const chunk: string[] = bulkSceneUpdate.__args.input.ids
      return { bulkSceneUpdate: chunk.map((id) => ({ id })) }
    })
    const res = await bulkSceneUpdateChunked(
      { mutation } as any,
      { ids, tag_ids: { ids: ['45'], mode: 'ADD' } },
      { chunkSize: 100 },
    )
    expect(mutation).toHaveBeenCalledTimes(3) // 100 + 100 + 50
    expect(mutation.mock.calls[0][0].bulkSceneUpdate.__args.input.ids).toHaveLength(100)
    expect(mutation.mock.calls[2][0].bulkSceneUpdate.__args.input.ids).toHaveLength(50)
    expect(res).toHaveLength(250)
    expect(res[0]).toEqual({ id: '1' })
  })

  it('preserves the other input fields on every chunk', async () => {
    const ids = ['1', '2', '3']
    const mutation = vi.fn(async (_req: any) => ({ bulkSceneUpdate: [] }))
    await bulkSceneUpdateChunked({ mutation } as any, { ids, studio_id: '7' }, { chunkSize: 2 })
    expect(mutation).toHaveBeenCalledTimes(2)
    for (const call of mutation.mock.calls) {
      expect(call[0].bulkSceneUpdate.__args.input.studio_id).toBe('7')
    }
  })

  it('is a no-op for an empty id list', async () => {
    const mutation = vi.fn()
    const res = await bulkSceneUpdateChunked({ mutation } as any, { ids: [] })
    expect(mutation).not.toHaveBeenCalled()
    expect(res).toEqual([])
  })
})
