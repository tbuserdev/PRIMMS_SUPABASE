import { superValidate } from "sveltekit-superforms/server";
import { formSchema } from "./schema";
import { supabaseClient } from "$lib/supabase";

export const load = async ({ url, locals }) => {
  return { 
    url: url.origin,
    locals: {
      session: locals.session,
      userProfile: locals.userProfile
    },
    form: superValidate(formSchema),
  }
};

export const actions = {
  default: async (event) => {
    const formData = await superValidate(event, formSchema);
    if (formData.valid) {


      if (event.locals.userProfile) {
        const birthday = event.locals.userProfile?.geburtsdatum.split("-");
        const geburtsdatum = `${birthday[2]}.${birthday[1]}.${birthday[0]}`;

        const today = new Date();
        const datum = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`;  
      
        const formInfo = {
          vorname: event.locals.userProfile?.first_name,
          name: event.locals.userProfile?.last_name,
          geburtsdatum: event.locals.userProfile?.geburtsdatum,
          schulhaus: event.locals.userProfile?.schulhaus,
          personalnummer: event.locals.userProfile?.personalnummer,
          klasse: event.locals.userProfile?.klasse,
          anstellungsgrad: event.locals.userProfile?.pensum,
          projekte: formData.data.projekt,
          aemtli: formData.data.aemtli,
          aufgaben: formData.data.aufgaben,
          arbeitsgruppen: formData.data.gruppen,
          datum: datum,
          filedate: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
        };

        const response = await event.fetch("/api/jaba", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formInfo)
        });
      } else {
        return {
          status: 400,
          body: formData,
          error: "No user profile found"
        };
      }
    } else {
      return {
        status: 400,
        body: formData,
        error: "Invalid form data"
      };
    }
  }
};