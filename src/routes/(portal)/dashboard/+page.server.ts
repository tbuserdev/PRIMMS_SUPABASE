export const load = async ({ url, locals }) => {
  return { 
    url: url.origin,
    locals: {
      session: locals.session,
      userProfile: locals.userProfile
    }
  }
}
