// src/routes/+page.server.ts
import type { PageServerLoad } from './$types'
import { AuthApiError } from "@supabase/supabase-js"
import { fail, redirect } from "@sveltejs/kit"
import type { Actions } from "@sveltejs/kit"
import { supabaseClient } from "$lib/supabase";


export const load: PageServerLoad = async ({ url, locals }) => {

  if (locals.session) {
    throw redirect(303, '/dashboard')
  }
  
  return { url: url.origin }
}

export const actions: Actions = {
	login: async ({ request, locals }) => {
    console.log(request)
		const body = Object.fromEntries(await request.formData())

		const { data, error: err } = await supabaseClient.auth.signInWithOtp({
            email: body.email as string,
            options: {
                emailRedirectTo: '/dashboard',
                shouldCreateUser: false,
            }
        })

		if (err) {
            console.log(err)
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
	},
}