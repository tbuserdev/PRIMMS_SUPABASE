<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
    import * as Tabs from "$lib/components/ui/tabs";
</script>

<!-- Title -->
<div class="flex items-center justify-between space-y-2">
    <h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>
</div>
<!-- TABS -->
<Tabs.Root value="favs" class="space-y-4">
    <Tabs.List>
        <Tabs.Trigger value="favs">Favoriten</Tabs.Trigger>
        <Tabs.Trigger value="allfunctions">Alle Funktionen</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="favs" class="space-y-4">
        <Card.Root>
            <Card.Header>
                <Card.Title>Neue Funktion!</Card.Title>
                <Card.Description>Dies ist eine Funktion, die eine bestimmte Aufgabe hat.</Card.Description>
            </Card.Header>
            <Card.Content>
                <Button>Open Function</Button>
            </Card.Content>
            </Card.Root>
    </Tabs.Content>
    <Tabs.Content value="allfunctions" class="space-y-4">
        <h1>Hello from the second Page!</h1>
    </Tabs.Content>
</Tabs.Root>
