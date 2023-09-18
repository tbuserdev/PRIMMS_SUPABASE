<script lang="ts">
    import * as Form from "$lib/components/ui/form";
    import { formSchema, type FormSchema } from "./schema";
    import type { SuperValidated } from "sveltekit-superforms";
    export let form: SuperValidated<FormSchema>;
    import { Label } from "$lib/components/ui/label";
    import * as RadioGroup from "$lib/components/ui/radio-group";
</script>

<main>
    <div class="flex items-center justify-between space-y-2">
        <h2 class="text-3xl font-bold tracking-tight mb-4">Jahresarbeitszeit & Berufsauftrag</h2>
    </div>
    <div>
        <Form.Root method="POST" {form} schema={formSchema} let:config>

            <p class="text-sm text-muted-foreground mb-6"
            >Beachte: Alle restlichen Daten auf dem Papierformular werden automatisch ausgefüllt.</p>

            <h2 class="scroll-m-20 text-xl font-semibold tracking-tight mb-4 mt-2">
                Besondere Aufgaben und/oder Arbeitsschwerpunkte
            </h2>

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

            <!--

            <h2 class="scroll-m-20 text-xl font-semibold tracking-tight mb-2 mt-6">
                Verantwortlichkeiten
            </h2>

            <p class="text-sm text-muted-foreground mb-6"
            >Im Rahmen der Funktionenbeschreibung und der Jahresarbeitszeit ist die Lehrperson selbst verantwortlich, Entscheidungen zu treffen 
            und Verbindlichkeiten einzugehen. Sie ist auf Anfrage gegenüber der Schulleitung rechenschaftspflichtig. Situationen, die ausserhalb 
            des Wirkungkreises oder der eigenen Kompetenzen liegen, werden mit dem zuständigen Mitglied der Schulleitung besprochen; der Dienstweg 
            ist einzuhalten.</p>

            <RadioGroup.Root value="option-one">
                <div class="flex items-center space-x-2 mb-2">
                  <RadioGroup.Item value="option-one" id="option-one" name="zeiterfassung" />
                  <Label for="option-one">Die Jahresarbeitszeit in den Bereichen C, D, und E wird anhand einer Zeiterfassung erfasst.</Label>
                </div>
                <div class="flex items-center space-x-2 mb-2">
                  <RadioGroup.Item value="option-two" id="option-two" name="eigenverantwortung" />
                  <Label for="option-two">Die Erbringung der Jahresarbeitszeit erfolgt in Eigenverantwortung.</Label>
                </div>
              </RadioGroup.Root>
        
            -->
            <Form.Button class="mt-6">Formular bestätigen und abschicken</Form.Button>
        </Form.Root>
    </div>
</main>