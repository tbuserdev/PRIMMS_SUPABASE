import "$lib/supabase"
import { getSupabase } from "@supabase/auth-helpers-sveltekit"
import { redirect, type Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
	const { session, supabaseClient } = await getSupabase(event)

	event.locals.sb = supabaseClient
	event.locals.session = session

	if (event.url.pathname.startsWith("/dashboard") 
	|| event.url.pathname.startsWith("/sick") 
	|| event.url.pathname.startsWith("/profile")) {
		if (!session) {
			throw redirect(303, "/")
		}
	}

	

	return resolve(event)
}
