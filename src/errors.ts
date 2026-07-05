export interface GraphQLErrorLike {
  message: string
  path?: (string | number)[]
}

/**
 * Error thrown when a Stash GraphQL request returns an `errors` array. Carries
 * the structured error list (and HTTP status where known) so callers can branch
 * on the failure instead of parsing a flattened message string.
 */
export class StashApiError extends Error {
  readonly errors: GraphQLErrorLike[]
  readonly status?: number

  constructor(errors: GraphQLErrorLike[], status?: number) {
    super(errors.map((e) => e.message).join(', ') || 'Stash API error')
    this.name = 'StashApiError'
    this.errors = errors
    this.status = status
  }
}
