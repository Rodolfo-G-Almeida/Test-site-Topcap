import { NextResponse } from "next/server";
import { SMTPClient } from "emailjs";

export async function GET() {
  const client = new SMTPClient({
    user: "workflow@topcau.com.br",
    password: "Top#2020!@#",
    host: "smtp.office365.com",
    ssl: true,
    port: 587,
  });

  try {
    client.send(
      {
        text: `Just for testing purpose`,
        from: "workflow@topcau.com.br",
        to: "dmorsoleto@gmail.com",
        subject: "testing emailjs",
      },
      (err, message) => {
        console.log(err || message);
      }
    );
  } catch (e) {
    NextResponse.json(
      {
        message: "Error",
      },
      {
        status: 400,
      }
    );

    return;
  }

  return NextResponse.json({ message: "Send Mail" });
}
