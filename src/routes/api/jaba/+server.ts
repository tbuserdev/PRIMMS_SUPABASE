import * as ExcelJS from "exceljs";

export const POST = async ({ request, locals }) => {
    try {
         // STEP 1: get the form data from the request
        const { ...formInfo } = await request.json()
        if (!formInfo) {
            return new Response(JSON.stringify({ error: "Missing form data" }), { headers: { "Content-Type": "application/json" } });
        }

        // STEP 2: download the Excel file from Supabase Storage
        const { data, error } = await locals.sb.storage.from("forms").download("jaba/templates/jaba-excel.xlsx")
        if (error) {
            console.log(error)
            return new Response(JSON.stringify({ error: "Error downloading Excel file" }), { headers: { "Content-Type": "application/json" } });
        }
        const arrayBuffer = await data.arrayBuffer();

        // STEP 3: modify the Excel file
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
        const filename = `${formInfo.filedate}-${formInfo.vorname}_${formInfo.name}`
        const { data: uploadData, error: uploadError } = await locals.sb.storage.from('forms').upload(`jaba/${filename}.xlsx`, modifiedArrayBuffer)
        if (uploadError) {
            console.log(uploadError)
            return new Response(JSON.stringify({ error: "Error uploading Excel file" }), { headers: { "Content-Type": "application/json" } });
        }
        return new Response(JSON.stringify({ success: "File uploaded" }), { headers: { "Content-Type": "application/json" } });
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ error: "Error processing form data" }), { headers: { "Content-Type": "application/json" } });
    }
}