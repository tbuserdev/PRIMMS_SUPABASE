<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
    import LogoutButton from "$lib/components/LogoutButton.svelte";

    export let data;
</script>

<!-- Title -->
<div class="flex items-end justify-between space-y-2 mb-8">
    <h2 class="text-3xl font-bold tracking-tight">Willkommen {data.locals.userProfile?.first_name} {data.locals.userProfile?.last_name}!</h2>
</div>
<!-- TABS -->
<Card.Root>
    <Card.Header>
        <Card.Title>Jahresarbeitszeit & Berufsauftrag</Card.Title>
        <Card.Description>Digitale Version des Papierformulars der Jahresarbeitszeit, sowie dem Excelsheet zur Berechnung des Berufsauftrag.</Card.Description>
    </Card.Header>
    <Card.Content>
        <Button href="/dashboard/jaba">Formular ausfüllen</Button>
    </Card.Content>
</Card.Root>

