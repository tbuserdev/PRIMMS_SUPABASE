import "$lib/supabase"
import { getSupabase } from "@supabase/auth-helpers-sveltekit"
import { redirect } from "@sveltejs/kit"

export const handle = async ({ event, resolve }) => {
	const { session, supabaseClient } = await getSupabase(event)

	if (session?.user) {
		const { data: profile, error } = await supabaseClient
		  .from('profiles')
		  .select('*')
		  .eq('id', session.user.id)
		  .single();
		
		if (error) {
			console.error('Error fetching user profile:', error.message);
		}

		event.locals.sb = supabaseClient;
		event.locals.session = session;
		event.locals.userProfile = profile;
	
	} else {
		event.locals.sb = supabaseClient;
    	event.locals.session = session;
	}
	

	if (event.url.pathname.startsWith("/dashboard") 
	|| event.url.pathname.startsWith("/sick") 
	|| event.url.pathname.startsWith("/profile")) {
		if (!session) {
			throw redirect(303, "/")
		}
	}

	return resolve(event)
}
