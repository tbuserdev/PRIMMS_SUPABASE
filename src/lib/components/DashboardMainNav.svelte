<script lang="ts">
    import { page } from '$app/stores';
	import LogoutButton from './LogoutButton.svelte';
	let path: string;
	$: path = $page.url.pathname;

</script>

<div class="border-b">
	<div class="flex h-16 items-center justify-between">
		<nav class="flex items-center space-x-4 lg:space-x-6 mx-8">
			<a href="/dashboard" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary {path === '/dashboard' ? 'text-primary' : 'text-muted-foreground'}">
				Dashboard
			</a>
			<a href="/stellvertretungen" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary {path === '/sick' ? 'text-primary' : 'text-muted-foreground'}">
				Stellvertretungen
			</a>
			<a href="/profile" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary {path === '/profile' ? 'text-primary' : 'text-muted-foreground'}">
				Persönliche Daten
			</a>
		</nav>
		<LogoutButton />
	</div>
</div>