import { superValidate } from "sveltekit-superforms/server";
import { formSchema } from "./schema";

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
        // Format Birthday date
        const birthday = event.locals.userProfile?.geburtsdatum.split("-");
        const geburtsdatum = `${birthday[2]}.${birthday[1]}.${birthday[0]}`;
        // Format today's date
        const today = new Date();
        const datum = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`;  
        // Format file date
        const filedate = new Date();
        const filedateFormatted = `${filedate.getFullYear()}-${String(filedate.getMonth() + 1).padStart(2, '0')}-${String(filedate.getDate()).padStart(2, '0')}`;

        const formInfo = {
          vorname: event.locals.userProfile?.first_name,
          name: event.locals.userProfile?.last_name,
          geburtsdatum: event.locals.userProfile?.geburtsdatum,
          schulhaus: event.locals.userProfile?.schulhaus,
          personalnummer: event.locals.userProfile?.personalnummer,
          klasse: event.locals.userProfile?.klasse,
          anstellungsgrad: event.locals.userProfile?.pensum,
          klassenteammitglieder: formData.data.team,
          projekte: formData.data.projekt,
          aemtli: formData.data.aemtli,
          aufgaben: formData.data.aufgaben,
          arbeitsgruppen: formData.data.gruppen,
          datum: datum,
          filedate: filedateFormatted,
        };

        const response = await event.fetch("/api/jaba", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formInfo)
        });
        const data = await response.json();
        console.log(data);
        if (data.success) {
          return {
            status: 200,
            body: formData,
            error: null
          };
        } else {
          return {
            status: 400,
            body: formData,
            error: "Error updating Excel file"
          };
        }
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