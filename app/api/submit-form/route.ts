import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

// Initialize Notion client
const notion = new Client({ auth: process.env.NOTION_SECRET });

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

    const formatUrl = (url?: string) =>
      url && url.startsWith("http") ? url : null;

    await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID! },
      properties: {
        Timestamp: {
          rich_text: [{ text: { content: new Date().toLocaleString() } }],
        },
        Type: {
          rich_text: [{ text: { content: body.type || "N/A" } }],
        },
        "First Name": {
          title: [{ text: { content: body.firstName } }],
        },
        "Last Name": {
          rich_text: [{ text: { content: body.lastName } }],
        },
        "Email/Work Email": {
          email: body.email || null,
        },
        "Company Name": {
          rich_text: [{ text: { content: body.companyName || "N/A" } }],
        },
        "Engineering Role": {
          rich_text: [{ text: { content: body.role } }],
        },
        "Years of Experience": {
          rich_text: [{ text: { content: body.experience } }],
        },
        "Country of Residence": {
          rich_text: [{ text: { content: body.country || "N/A" } }],
        },
        "LinkedIn Profile": {
          url: formatUrl(body.linkedinProfile),
        },
        "GitHub Profile": {
          url: formatUrl(body.githubProfile),
        },
        "Reason For Joining the Pool/Description of Need": {
          rich_text: [{ text: { content: body.description || "N/A" } }],
        },
      },
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error: any) {
    console.error("Spreadsheet Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
