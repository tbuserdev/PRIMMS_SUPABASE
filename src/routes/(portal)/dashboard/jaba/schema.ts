import { z } from "zod";

export const formSchema = z.object({
    team: z.string(),
    projekt: z.string(),
    aemtli: z.string(),
    aufgaben: z.string(),
    gruppen: z.string(),
});

export type FormSchema = typeof formSchema;