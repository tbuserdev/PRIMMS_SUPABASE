<script lang="ts">
	// NAV
    import { page } from '$app/stores';
	let path: string;
	$: path = $page.url.pathname;

	import { supabaseClient } from '$lib/supabase';
	import type { PageData } from './$types';

	export let data: PageData;

	const submitLogout: SubmitFunction = async ({ cancel }) => {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log(error);
		}
		cancel();
	};

   
	
</script>
<div class="border-b">
	<div class="flex h-16 items-center">
		<nav class="flex items-center space-x-4 lg:space-x-6 mx-8">
			<a href="/dashboard" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary {path === '/dashboard' ? 'text-primary' : 'text-muted-foreground'}">
				Dashboard
			</a>
			<a href="/sick" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary {path === '/sick' ? 'text-primary' : 'text-muted-foreground'}">
				Ausfälle
			</a>
			<a href="/profile" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary {path === '/profile' ? 'text-primary' : 'text-muted-foreground'}">
				Persönliche Daten
			</a>
			<a href="/" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary {path === '/settings' ? 'text-primary' : 'text-muted-foreground'}"
			on:click={submitLogout}>
				Logout
		</nav>
	</div>
</div>