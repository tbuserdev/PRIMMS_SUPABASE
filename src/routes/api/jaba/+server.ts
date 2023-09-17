import * as ExcelJS from "exceljs";
import * as PDFlib from 'pdf-lib';

const editXLSX = async (formInfo: any, locals: any) => {
    const { data, error } = await locals.sb.storage.from("forms").download("jaba/templates/jaba-excel.xlsx")
        if (error) {
            console.log(error)
            return new Response(JSON.stringify({ error: "Error downloading Excel file" }), { headers: { "Content-Type": "application/json" } });
        }
    
    const arrayBuffer = await data.arrayBuffer();

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(arrayBuffer);
    const worksheet = workbook.getWorksheet(1);

    worksheet.getCell("C3").value = formInfo.schulhaus;
    worksheet.getCell("A7").value = worksheet.getCell("A7").value + formInfo.name;
    worksheet.getCell("B7").value = worksheet.getCell("B7").value + formInfo.vorname;
    worksheet.getCell("D7").value = worksheet.getCell("D7").value + formInfo.geburtsdatum;

    worksheet.getCell("C19").value = formInfo.anstellungsgrad;
    worksheet.getCell("C20").value = 28;

    worksheet.getCell("A73").value = worksheet.getCell("A73").value + " " +formInfo.datum;

    let jahresarbeitszeit = worksheet.getCell("E32").value;

    const modifiedArrayBuffer = await workbook.xlsx.writeBuffer();

    // Upload Excel file
    const filename = `${formInfo.filedate}_${formInfo.vorname}-${formInfo.name}`
    const { data: uploadData, error: uploadError } = await locals.sb.storage.from('forms').upload(`jaba/${filename}.xlsx`, modifiedArrayBuffer, { contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" })
    if (uploadError) {
        console.log(uploadError)
        return uploadError
    }
    return {
        data: jahresarbeitszeit,
        error: null
    }
    }

const editPDF = async (ja: any, formInfo: any, locals: any) => {
    const { data, error } = await locals.sb.storage.from("forms").download("jaba/templates/jaba-pdf.pdf")
        if (error) {
            console.log(error)
            return new Response(JSON.stringify({ error: "Error downloading Excel file" }), { headers: { "Content-Type": "application/json" } });
        }
    
    const arrayBuffer = await data.arrayBuffer();

    const pdfDoc = await PDFlib.PDFDocument.load(arrayBuffer);
    const form = pdfDoc.getForm();
    const fields = form.getFields();
   
    const vorname = form.getTextField("Vorname");
    const name = form.getTextField("Name");
    const personalnummer = form.getTextField("Personalnummer");
    const klassen = form.getTextField("Klassen");
    const klassenteammitglieder = form.getTextField("Klassenteammitglieder");
    const funktion = form.getTextField("Funktion");
    const projekte = form.getTextField("Projekte Lager Projektwoche etc");
    const aemtli = form.getTextField("Ämtli unbezahlt");
    const aufgaben = form.getTextField("AufgabenFunktionen bezahlt");
    const arbeitsgruppen = form.getTextField("Arbeitsgruppen");

    const datum = form.getTextField("Datum");
    const anstellungsgrad = form.getTextField("Anstellungsgrad Lektionen");
    const jahresarbeitszeit = form.getTextField("Jahresarbeitszeit");

    vorname.setText(String(formInfo.vorname));
    name.setText(String(formInfo.name));
    personalnummer.setText(String(formInfo.personalnummer));
    klassen.setText(String(formInfo.klasse));
    klassenteammitglieder.setText(formInfo.team);
    // funktion.setText(formInfo.funktion);
    projekte.setText(String(formInfo.projekte));
    aemtli.setText(String(formInfo.aemtli));
    aufgaben.setText(String(formInfo.aufgaben));
    arbeitsgruppen.setText(String(formInfo.arbeitsgruppen));

    datum.setText(String(formInfo.datum));
    anstellungsgrad.setText(String(formInfo.anstellungsgrad));
    jahresarbeitszeit.setText(String(ja));

    const pdfBytes = await pdfDoc.save()

    const filename = `${formInfo.filedate}_${formInfo.vorname}-${formInfo.name}`
    const { data: uploadData, error: uploadError } = await locals.sb.storage.from('forms').upload(`jaba/${filename}.pdf`, pdfBytes,
     { contentType: "application/pdf" })
    if (uploadError) {
        console.log(uploadError)
        return uploadError
    }

    return {
        data: null,
        error: null
    }
}

export const POST = async ({ request, locals }) => {
    try {
         // STEP 1: get the form data from the request
        const { ...formInfo } = await request.json()
        if (!formInfo) {
            console.log("Missing form data")
            return new Response(JSON.stringify({ error: "Missing form data" }), { headers: { "Content-Type": "application/json" } });
        }
        
        const { data: ja, error: xlserror } = await editXLSX(formInfo, locals);
        if (xlserror) {
            console.log(xlserror)
            return new Response(JSON.stringify({ error: "Error editing Excel file" }), { headers: { "Content-Type": "application/json" } });
        }
        console.log(ja)

        const { data, error: pdferror } = await editPDF(ja, formInfo, locals);
        if (pdferror) {
            console.log(pdferror)
            return new Response(JSON.stringify({ error: "Error editing PDF file" }), { headers: { "Content-Type": "application/json" } });
        }
        return new Response(JSON.stringify({ message: "Das Formular wurde erfolgreich ausgefüllt.", success: true }), { headers: { "Content-Type": "application/json" } });
        
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ error: "Error processing form data" }), { headers: { "Content-Type": "application/json" } });
    }
}