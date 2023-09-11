// src/routes/+page.server.ts
import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ url, locals }) => {

  if (locals.session) {
    throw redirect(303, '/dashboard')
  }
  
  return { url: url.origin }
}
