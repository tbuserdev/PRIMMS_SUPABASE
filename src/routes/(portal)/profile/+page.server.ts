import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ url, locals }) => {

  // BEISPIEL RLS Security Policy
  if (locals.session) {
    let { data: profiles, error } = await locals.sb
    .from('profiles')
    .select('*')
    console.log(profiles)
  }
  return { 
    url: url.origin,
    locals: {
      session: locals.session,
      userProfile: locals.userProfile
    }
  }
}