<script lang="ts">
	import { enhance } from '$app/forms';
	import { supabaseClient } from '$lib/supabase';
    import { Button } from "$lib/components/ui/button";

	const submitLogout = async () => {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log(error);
		}
	};

</script>

<form action="/api/logout" method="POST" use:enhance={submitLogout}>
    <Button type="submit" variant="outline">Logout</Button>
</form>

