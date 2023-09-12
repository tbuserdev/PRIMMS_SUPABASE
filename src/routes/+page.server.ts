// src/routes/+page.server.ts
import type { PageServerLoad } from './$types'
import { AuthApiError } from "@supabase/supabase-js"
import { fail, redirect } from "@sveltejs/kit"
import type { Actions } from "@sveltejs/kit"
import { supabaseClient } from "$lib/supabase";
import type { U } from 'vitest/dist/types-198fd1d9';

export const load: PageServerLoad = async ({ url, locals }) => {
	return { url: url.origin }
}

const getURL = () => {
	let url: URL | string = '';

	if (process?.env?.VERCEL_URL !== undefined) {
		url = process?.env?.VERCEL_URL
	} else if (process?.env?.URL == undefined) {
		url = 'localhost:5173'
	}
	
	// Make sure to include `https://` when not localhost.
	url = url.includes('http') ? url : `https://${url}`
	return url
}

export const actions: Actions = {
	login: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData())

		const { data, error: err } = await supabaseClient.auth.signInWithOtp({
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
	},
}