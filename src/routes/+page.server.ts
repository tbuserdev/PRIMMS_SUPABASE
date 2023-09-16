import type { PageServerLoad } from './$types'
import { AuthApiError } from "@supabase/supabase-js"
import { fail, redirect } from "@sveltejs/kit"
import type { Actions } from "@sveltejs/kit"
import { supabaseClient } from "$lib/supabase";

export const load: PageServerLoad = async ({ url, locals }) => {
	return { 
		url: url.origin,
		locals: {
		  session: locals.session,
		  userProfile: locals.userProfile
		}
	  }
}

const getURL = () => {
	let url: URL | string = '';

	/* Production Deployment 
	if (process?.env?.VERCEL_URL !== undefined) {
		url = process?.env?.VERCEL_URL
	} else if (process?.env?.URL == undefined) {
		url = 'localhost:5173'
	}

	if (process?.env?.VERCEL_BRANCH_URL !== undefined) {
		url = process?.env?.VERCEL_BRANCH_URL
	} else if (process?.env?.URL == undefined) {
		url = 'localhost:5173'
	}
	*/

	// Development Deployment
	url = 'http://localhost:5173/'

	url = url.includes('http') ? url : `https://${url}`
	return url
}

export const actions: Actions = {
	magiclink: async ({ request }) => {
		const body = Object.fromEntries(await request.formData())

		const { error: err } = await supabaseClient.auth.signInWithOtp({
            email: body.email as string,
            options: {
                emailRedirectTo: getURL(),
                shouldCreateUser: false,
            }
        })

		if (err) {
			if (err instanceof AuthApiError && err.status === 400) {
				return fail(400, {
					error: "Invalid credentials",
				})
			}
			return fail(500, {
				message: "Server error. Try again later.",
			})
		}
    	return { success: true };
	}
}