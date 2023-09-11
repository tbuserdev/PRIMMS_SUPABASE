<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import { Label } from "$lib/components/ui/label";
	import { Input } from "$lib/components/ui/input";
</script>

<section class="h-screen w-screen flex justify-center items-center">

        <div id="card" class="flex justify-center items-center w-80 sm:w-96 max-w-sm">
            <Card.Root class="sm:p-2">
                <Card.Header class="space-y-1">
                    <Card.Title class="text-2xl">Login</Card.Title>
                    <Card.Description>
                        Bitte gib deine Email-Adresse ein, um deinen Login-Link zu erhalten.
                    </Card.Description>
                </Card.Header>
                <Card.Content class="grid gap-4">
                    <div class="relative">
                        <div class="absolute inset-0 flex items-center">
                            <span class="w-full border-t" />
                        </div>
                    </div>
                    <div class="grid gap-2">
                        <Label for="email">E-Mail Adresse</Label>
                        <Input id="email" type="email" placeholder="vorname.name@schule-muenchenstein.ch" />
                    </div>
                </Card.Content>
                <Card.Footer>
                    <Button class="w-full">Link senden</Button>
                </Card.Footer>
            </Card.Root>
        </div>

</section>
