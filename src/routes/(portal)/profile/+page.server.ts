import { supabaseClient } from "$lib/supabase";
import type { PageServerLoad } from './$types'
import type { PageData } from "./$types";

export const load: PageServerLoad = async ({ url, locals }) => {
    if (!locals.session) {
        return {
            status: 302,
            redirect: '/portal/login'
        }
    }

	let { data, error } = await supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', (locals.session.user.id) )

    // error handling
    if (error) {
        return { error: error }
    }

    // destructuring data
    if (data) {
        data = data[0]
    }

    return {data};
}