import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { findEntries, FindEntriesParams } from '../api/entry/findEntry'

export const useFindEntries = (
  {
    account_id,
    ...rest
  }: Omit<Partial<FindEntriesParams>, 'account_id'> & {
    account_id?: string | null
  },
  options?: Pick<UseQueryOptions, 'enabled'>
) => {
  return useQuery(
    ['entries', { account_id, ...rest }],
    () => (account_id ? findEntries({ account_id, ...rest }) : undefined),
    options
  )
}
