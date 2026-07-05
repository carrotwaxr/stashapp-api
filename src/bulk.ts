import type { BulkSceneUpdateInput } from './generated/index.js'
import type { StashClient } from './client.js'

/**
 * Apply a `bulkSceneUpdate` across many scenes without tripping over huge id
 * arrays: split `input.ids` into chunks and issue one mutation per chunk,
 * aggregating the returned scenes. The other input fields (tag_ids, studio_id,
 * title, ...) are carried onto every chunk unchanged. Default chunk size 100.
 */
export async function bulkSceneUpdateChunked(
  client: Pick<StashClient, 'mutation'>,
  input: BulkSceneUpdateInput,
  opts: { chunkSize?: number } = {},
): Promise<{ id: string }[]> {
  const chunkSize = opts.chunkSize ?? 100
  const ids = input.ids ?? []
  const out: { id: string }[] = []
  for (let i = 0; i < ids.length; i += chunkSize) {
    const chunk = ids.slice(i, i + chunkSize)
    const res = await client.mutation({
      bulkSceneUpdate: { __args: { input: { ...input, ids: chunk } }, id: true },
    })
    for (const scene of res.bulkSceneUpdate ?? []) out.push({ id: scene.id })
  }
  return out
}
