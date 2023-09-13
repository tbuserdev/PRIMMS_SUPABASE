<script lang="ts">
    export let data;
    if (data) {
        console.log(data);
    }

</script>

<div class="flex-col items-center justify-between space-y-2">
    <h2 class="text-3xl font-bold tracking-tight">Persönliche Informationen</h2>
    {#if data}
        <p>Email: {data.data?.email}</p>
        <p>Vorname: {data.data?.first_name}</p>
        <p>Geburtsdatum: {data.data?.geburtsdatum}</p>
        <p>Klasse: {data.data?.klasse}</p>
        <p>Nachname: {data.data?.last_name}</p>
        <p>Lektionenbuchhaltung: {data.data?.lektionenbuchhaltung}</p>
        <p>Pensum: {data.data?.pensum}</p>
        <p>Personalnummer: {data.data?.personalnummer}</p>
        <p>Schulhaus: {data.data?.schulhaus}</p>
        <p>Telefonnummer: {data.data?.telefonnummer}</p>

    {:else}
        <p>Keine Daten</p>
    {/if}
</div>