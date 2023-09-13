<script lang="ts">
    import * as Form from "$lib/components/ui/form";
    import { formSchema, type FormSchema } from "./schema";
    import type { SuperValidated } from "sveltekit-superforms";
    export let form: SuperValidated<FormSchema>;
    
    export let data;
</script>

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

    <Form.Field {config} name="password">
        <Form.Item>
            <Form.Label>Arbeitsgruppen</Form.Label>
            <Form.Input/>
            <Form.Validation/>
        </Form.Item>
    </Form.Field>



    <Form.Button>Submit</Form.Button>
</Form.Root>