import { superValidate } from "sveltekit-superforms/server";
import { formSchema } from "./schema";
export const load = () => {
  return {
    form: superValidate(formSchema)
  };
};