<script lang="ts">
	import { Button } from "$lib/components/ui/button";
    import * as Table from "$lib/components/ui/table";
  
    const jobs = [
      {
        datum: "2023-12-01",
        lektionen: "4",
        schulhaus: "Neue Welt",
        klasse: "8b",
        klassenlehrer: "Herr Müller",
        lektionenbuchhaltung: "+4"
      },
      {
        datum: "2024-1-06",
        lektionen: "6",
        schulhaus: "Lange Heid",
        klasse: "10x",
        klassenlehrer: "Frau Meier",
        lektionenbuchhaltung: "+6"
      },
      {
        datum: "2024-01-10",
        lektionen: "8",
        schulhaus: "Loog",
        klasse: "12d",
        klassenlehrer: "Herr Herrmann",
        lektionenbuchhaltung: "+8"
      },
      {
        datum: "2024-02-10",
        lektionen: "12",
        schulhaus: "Dillacker",
        klasse: "14n",
        klassenlehrer: "Frau Fraufrau",
        lektionenbuchhaltung: "+12"
      },
      
    ];
</script>


<main>
    <div class="space-y-0.5 mb-8">
        <h2 class="text-2xl font-bold tracking-tight">Stellvertretungen</h2>
        <p class="text-muted-foreground">
            Eine Übersicht der offen Stellvertretungensstellen. Hier kannst du dich für eine Stellvertretung bewerben.
        </p>
    </div>

    <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Head class="w-[100px]">Datum</Table.Head>
            <Table.Head class="w-[100px]">Anzahl Lektionen</Table.Head>
            <Table.Head class="w-[50px]">Lektionenbuchhaltung</Table.Head>
            <Table.Head class="w-[100px]">Schulhaus</Table.Head>
            <Table.Head class="w-[200px]">Klasse</Table.Head>
            <Table.Head class="w-[200px]">zu vertretene Lehrperson</Table.Head>
            <Table.Head class="w-[100px] text-center">Bewerbung</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {#each jobs as job}
            <Table.Row>
                <Table.Cell class="font-medium">{job.datum}</Table.Cell>
                <Table.Cell>{job.lektionen}</Table.Cell>
                <Table.Cell>{job.lektionenbuchhaltung}</Table.Cell>
                <Table.Cell>{job.schulhaus}</Table.Cell>
                <Table.Cell>{job.klasse}</Table.Cell>
                <Table.Cell>{job.klassenlehrer}</Table.Cell>
                <Table.Cell class="text-right flex items-start">
                    <Button variant="link" class="w-full">bewerben</Button>
                </Table.Cell>
            </Table.Row>
          {/each}
        </Table.Body>
      </Table.Root>
</main>