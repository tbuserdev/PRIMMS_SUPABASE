<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import { Label } from "$lib/components/ui/label";
	import { Input } from "$lib/components/ui/input";

    export let form;
    export let data;

</script>

<main class="h-screen w-screen flex justify-center items-center">

    <div id="card" class="flex justify-center items-center w-80 sm:w-96 max-w-sm">
        <Card.Root class="sm:p-2">
            <Card.Header class="space-y-1">
                <Card.Title class="text-2xl">Herzlich Willkommen!</Card.Title>
                <Card.Description>
                    Hier lernst du die Grundlagen zum neuen IT-Portal.
                </Card.Description>
            </Card.Header>
            <Card.Content class="grid gap-4">
                <div class="relative">
                    <div class="absolute inset-0 flex items-center">
                        <span class="w-full border-t" />
                    </div>
                </div>
                <div class="">
                    YOUTUBE TUTORIAL HERE
                </div>
            </Card.Content>
            <Card.Footer>
                <Button href="/" class="w-full">Zurück zum Login</Button>
            </Card.Footer>
        </Card.Root>
    </div>

</main>
