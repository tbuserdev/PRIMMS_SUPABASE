<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import { Label } from "$lib/components/ui/label";
	import { Input } from "$lib/components/ui/input";
    import { supabaseClient } from "$lib/supabase";
    
    let mail: boolean = false;
    let email: string;
    let error = null;

    const session = supabaseClient.auth.getSession();
    console.log(session);


    async function handleSubmit() {
        const { data, error } = await supabaseClient.auth.signInWithOtp({
        email: email,
        options: {
            emailRedirectTo: '/dashboard'
        }
        })
        mail = true;
    }
</script>

<section class="h-screen w-screen flex justify-center items-center">

    <div id="card" class="flex justify-center items-center w-80 sm:w-96 max-w-sm">
        {#if !mail}
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
                        <Input id="email" type="email" placeholder="vorname.name@schule-muenchenstein.ch" bind:value={email}/>
                    </div>
                </Card.Content>
                <Card.Footer>
                    <Button on:click={handleSubmit} class="w-full">Link senden</Button>
                </Card.Footer>
            </Card.Root>
        {:else}
            <Card.Root class="sm:p-2">
                <Card.Header class="space-y-1">
                    <Card.Title class="text-2xl">E-Mail wurde verschickt!</Card.Title>
                    <Card.Description>
                        Bitte überprüfe dein Postfach und klicke auf den Link, um dich einzuloggen.
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
                        <Input disabled id="email" type="email" placeholder="vorname.name@schule-muenchenstein.ch"/>
                    </div>
                </Card.Content>
                <Card.Footer>
                    <Button variant="outline" disabled class="w-full">Link senden</Button>
                </Card.Footer>
            </Card.Root>
        {/if}
    </div>

</section>
