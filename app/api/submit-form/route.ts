import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

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
        "FirstName",
        "LastName",
        "Email",
        "Role",
        "Experience",
        "Company",
        "Description",
        "Profile",
      ]);
    });

    await sheet.addRow({
      Timestamp: new Date().toLocaleString(),
      Type: body.type,
      FirstName: body.firstName,
      LastName: body.lastName,
      Email: body.email,
      Role: body.role,
      Experience: body.experience,
      Company: body.companyName || "N/A",
      Description: body.description,
      Profile: body.profileLink || "N/A",
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error: any) {
    console.error("Spreadsheet Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
