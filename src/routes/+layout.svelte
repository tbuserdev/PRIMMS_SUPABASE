<script>
	import '../app.postcss';
	import DashboardMainNav from '$lib/components/DashboardMainNav.svelte';
</script>

<div class="flex-col md:flex">
	<DashboardMainNav />
	<slot />
</div>

