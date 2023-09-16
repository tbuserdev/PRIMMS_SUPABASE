<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import { Label } from "$lib/components/ui/label";
	import { Input } from "$lib/components/ui/input";
    import * as Tabs from "$lib/components/ui/tabs";

    export let form;
    export let data;
</script>

<main class="h-screen w-screen flex justify-center items-center">
    <div id="card" class="flex justify-center items-center w-80 sm:w-96 max-w-sm"> 
        <Tabs.Root value="emailonly" class="w-[400px]">
            <Tabs.List class="grid w-full grid-cols-2">
                <Tabs.Trigger value="emailonly">E-Mail Magic Link</Tabs.Trigger>
                <Tabs.Trigger value="azure">Microsoft Azure</Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="emailonly">
                <Card.Root class="sm:p-2">

                    {#if !form?.success && !data.session?.user}
                    <Card.Header>
                        <Card.Title>Login mit E-Mail Magic-Link</Card.Title>
                        <Card.Description>Bitte gib deine Email-Adresse ein, um deinen Login-Link zu erhalten.</Card.Description>
                    </Card.Header>
                    <form action="?/magiclink" method="POST">
                        <Card.Content class="space-y-2 grid gap-4">
                            <div class="relative">
                                <div class="absolute inset-0 flex items-center">
                                    <span class="w-full border-t" /></div>
                            </div>
                            <div class="grid gap-2">
                                <Label for="email">E-Mail Adresse</Label>
                                <Input id="email" name="email" type="email" placeholder="vorname.name@schule-muenchenstein.ch"/>
                            </div>
                        </Card.Content>
                        <Card.Footer>
                            <Button type="submit" class="w-full">Link senden</Button>
                        </Card.Footer>
                    </form>
                    {/if}

                    {#if form?.success && !data.session?.user}
                    <Card.Header>
                        <Card.Title>E-Mail wurde verschickt!</Card.Title>
                        <Card.Description>Schaue in deinem Posteingang, klicke auf den Login-Link und melde dich ohne Passwort an.</Card.Description>
                    </Card.Header>
                        <Card.Content class="space-y-2 grid gap-4">
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
                    {/if}

                    {#if data.session?.user}
                    <Card.Header>
                        <Card.Title>Hallo {data.locals.userProfile?.first_name}!</Card.Title>
                        <Card.Description>Du wurdest erfolgreich eingeloggt. Klicke auf den Button, um zum Dashboard zu gelangen.</Card.Description>
                    </Card.Header>
                        <Card.Content class="space-y-2 grid gap-4">
                            <div class="relative">
                                <div class="absolute inset-0 flex items-center">
                                    <span class="w-full border-t" />
                                </div>
                            </div>
                        </Card.Content>
                        <Card.Footer>
                            <Button href="/dashboard" class="w-full">Zum Dashboard</Button>
                        </Card.Footer>
                    {/if}

                </Card.Root>
            </Tabs.Content>

            <!-- MICROSOFT AZURE -->

            <Tabs.Content value="azure">
                <Card.Root>

                    {#if !form?.success && !data.session?.user}
                        <Card.Header>
                            <Card.Title>Login mit Azure</Card.Title>
                            <Card.Description>Logge dich mit deinem Microsoft/SBL Account ein.</Card.Description>
                        </Card.Header>
                        <form action="?/emailandpassword" method="POST">
                            <Card.Content class="space-y-2 grid gap-4">
                                <div class="relative">
                                    <div class="absolute inset-0 flex items-center">
                                        <span class="w-full border-t" /></div>
                                </div>
                                <div class="grid gap-2">
                                    <Label for="email">E-Mail Adresse</Label>
                                    <Input id="email" name="email" type="email" placeholder="vorname.name@schule-muenchenstein.ch"/>
                                    <Label for="password">Passwort</Label>
                                    <Input id="password" name="password" type="password" placeholder="********"/>
                                </div>
                            </Card.Content>
                            <Card.Footer>
                                <Button type="submit" class="w-full">Einloggen</Button>
                            </Card.Footer>
                        </form>
                    {/if}

                    {#if data.session?.user}
                        <Card.Header>
                            <Card.Title>Hallo {data.locals.userProfile?.first_name}!</Card.Title>
                            <Card.Description>Du wurdest erfolgreich eingeloggt. Klicke auf den Button, um zum Dashboard zu gelangen.</Card.Description>
                        </Card.Header>
                        <Card.Content class="space-y-2 grid gap-4">
                            <div class="relative">
                                <div class="absolute inset-0 flex items-center">
                                    <span class="w-full border-t" />
                                </div>
                            </div>
                        </Card.Content>
                        <Card.Footer>
                            <Button href="/dashboard" class="w-full">Zum Dashboard</Button>
                        </Card.Footer>
                    {/if}

                </Card.Root>
            </Tabs.Content>

        </Tabs.Root>
    </div>     
</main>