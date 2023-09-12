import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ url, locals }) => {
  return { url: url.origin }
}
