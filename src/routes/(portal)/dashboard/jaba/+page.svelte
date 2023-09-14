<script lang="ts">
    import * as Form from "$lib/components/ui/form";
    import { formSchema, type FormSchema } from "./schema";
    import type { SuperValidated } from "sveltekit-superforms";
    export let form: SuperValidated<FormSchema>;
    import { Label } from "$lib/components/ui/label";
    import * as RadioGroup from "$lib/components/ui/radio-group";
    
    export let data;
</script>

<main>
    <div class="flex items-center justify-between space-y-2">
        <h2 class="text-3xl font-bold tracking-tight mb-4">Jahresarbeitszeit & Berufsauftrag</h2>
    </div>
    <div>
        <Form.Root method="POST" {form} schema={formSchema} let:config>
            <Form.Field {config} name="team">
                <Form.Item>
                    <Form.Label>Klassenteammitglieder</Form.Label>
                    <Form.Input/>
                    <Form.Validation/>
                </Form.Item>
            </Form.Field>
        
            <Form.Field {config} name="projekt">
                <Form.Item>
                    <Form.Label>Projekte (Lager, Projektwoche, etc.)</Form.Label>
                    <Form.Input/>
                    <Form.Validation/>
                </Form.Item>
            </Form.Field>
        
            <Form.Field {config} name="aemtli">
                <Form.Item>
                    <Form.Label>Ämtli (unbezahlt)</Form.Label>
                    <Form.Input/>
                    <Form.Validation/>
                </Form.Item>
            </Form.Field>
        
            <Form.Field {config} name="aufgaben">
                <Form.Item>
                    <Form.Label>Aufgaben/Funktionen (bezahlt)</Form.Label>
                    <Form.Input/>
                    <Form.Validation/>
                </Form.Item>
            </Form.Field>
        
            <Form.Field {config} name="gruppen">
                <Form.Item>
                    <Form.Label>Arbeitsgruppen</Form.Label>
                    <Form.Input/>
                    <Form.Validation/>
                </Form.Item>
            </Form.Field>

            <RadioGroup.Root value="option-one">
                <div class="flex items-center space-x-2">
                  <RadioGroup.Item value="option-one" id="option-one" />
                  <Label for="option-one">Option One</Label>
                </div>
                <div class="flex items-center space-x-2">
                  <RadioGroup.Item value="option-two" id="option-two" />
                  <Label for="option-two">Option Two</Label>
                </div>
              </RadioGroup.Root>
        
            <Form.Button class="mt-6">Formular überprüfen</Form.Button>
        </Form.Root>
    </div>
</main>