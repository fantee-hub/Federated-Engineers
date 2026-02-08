import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const HEADERS = {
      TIMESTAMP: "Timestamp",
      TYPE: "Type",
      FIRST_NAME: "First Name",
      LAST_NAME: "Last Name",
      EMAIL: "Email/Work Email",
      COMPANY: "Company Name",
      ROLE: "Engineering Role",
      EXPERIENCE: "Years of Experience",
      COUNTRY: "Country of Residence",
      LINKEDIN: "LinkedIn Profile",
      GITHUB: "GitHub Profile",
      DESCRIPTION: "Reason For Joining the Pool/Description of Need",
    };

    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(
      process.env.GOOGLE_SHEET_ID!,
      serviceAccountAuth
    );
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];

    await sheet.loadHeaderRow().catch(async () => {
      await sheet.setHeaderRow([
        "Timestamp",
        "Type",
        "First Name",
        "Last Name",
        "Email/Work Email",
        "Company Name",
        "Engineering Role",
        "Years of Experience",
        "Country of Residence",
        "LinkedIn Profile",
        "GitHub Profile",
        "Reason For Joining the Pool/Description of Need",
      ]);
    });

    await sheet.addRow({
      [HEADERS.TIMESTAMP]: new Date().toLocaleString(),
      [HEADERS.TYPE]: body.type || "N/A",
      [HEADERS.FIRST_NAME]: body.firstName,
      [HEADERS.LAST_NAME]: body.lastName,
      [HEADERS.EMAIL]: body.email,
      [HEADERS.COMPANY]: body.companyName || "N/A",
      [HEADERS.ROLE]: body.role,
      [HEADERS.EXPERIENCE]: body.experience,
      [HEADERS.COUNTRY]: body.country || "N/A",
      [HEADERS.LINKEDIN]: body.linkedinProfile || "N/A",
      [HEADERS.GITHUB]: body.githubProfile || "N/A",
      [HEADERS.DESCRIPTION]: body.description,
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error: any) {
    console.error("Spreadsheet Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
