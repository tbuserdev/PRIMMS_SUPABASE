<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
import * as Table from "$lib/components/ui/table";

    export let data;
</script>

<main>
    <div class="space-y-0.5 mb-8">
        <h2 class="text-2xl font-bold tracking-tight">Persönliche Informationen</h2>
        <p class="text-muted-foreground">
            Verwalte deinen Account und siehe deine gespeicherten Daten.
        </p>
    </div>
    
    <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Head class="w-[100px]">Key</Table.Head>
            <Table.Head>Value</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
            <Table.Row>
                <Table.Cell class="font-medium">Vorname</Table.Cell>
                <Table.Cell>{data.locals.userProfile?.first_name}</Table.Cell>
            </Table.Row>

            <Table.Row>
                <Table.Cell class="font-medium">Nachname</Table.Cell>
                <Table.Cell>{data.locals.userProfile?.last_name}</Table.Cell>
            </Table.Row>

            <Table.Row>
                <Table.Cell class="font-medium">Geburtsdatum</Table.Cell>
                <Table.Cell>{data.locals.userProfile?.geburtsdatum}</Table.Cell>
            </Table.Row>
            
            <Table.Row>
                <Table.Cell class="font-medium">Email</Table.Cell>
                <Table.Cell>{data.locals.userProfile?.email}</Table.Cell>
            </Table.Row>
            
            <Table.Row>
                <Table.Cell class="font-medium">Telefonnummer</Table.Cell>
                <Table.Cell>0{data.locals.userProfile?.telefonnummer}</Table.Cell>    
            </Table.Row>

            <Table.Row>
                <Table.Cell class="font-medium">Personalnummer</Table.Cell>
                <Table.Cell>{data.locals.userProfile?.personalnummer}</Table.Cell>    
            </Table.Row>
            
            <Table.Row>
                <Table.Cell class="font-medium">Schulhaus</Table.Cell>
                <Table.Cell>{data.locals.userProfile?.schulhaus}</Table.Cell>
            </Table.Row>

            <Table.Row>
                <Table.Cell class="font-medium">Klasse</Table.Cell>
                <Table.Cell>{data.locals.userProfile?.klasse}</Table.Cell>
            </Table.Row>

            <Table.Row>
                <Table.Cell class="font-medium">Pensum</Table.Cell>
                <Table.Cell>{data.locals.userProfile?.pensum}</Table.Cell>
            </Table.Row>
            
            <Table.Row>
                <Table.Cell class="font-medium">Lektionenbuchhaltung</Table.Cell>
                <Table.Cell>{data.locals.userProfile?.lektionenbuchhaltung}</Table.Cell>
            </Table.Row>
            
        </Table.Body>
      </Table.Root>
    
    <Button href="" class="w-full mt-4">Datenänderung beantragen</Button>
</main>
