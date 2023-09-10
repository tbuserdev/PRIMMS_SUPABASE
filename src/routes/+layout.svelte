<script>
	import '../app.postcss';
	import DashboardMainNav from '$lib/components/DashboardMainNav.svelte';
</script>

<div class="flex-col md:flex">
	<DashboardMainNav />
	<div class="flex-1 space-y-4 p-8 pt-6">
		<slot />
	</div>
</div>

