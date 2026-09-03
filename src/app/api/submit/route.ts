import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, mobileNumber, jobBusiness, interestedIn, recipientEmail, domain } = body;

    if (!fullName || !mobileNumber || !jobBusiness || !interestedIn) {
      return NextResponse.json(
        { error: "Full Name, Mobile Number, Job/Business, and Interest are required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("RESEND_API_KEY is not configured.");
      return NextResponse.json({ success: true, message: "Submission simulated (no API key configured)." });
    }

    const resend = new Resend(apiKey);
    const emailToUse = recipientEmail || "darlumampao@gmail.com";
    const siteDomain = domain || "Dropshipping & Marketing Landing Page";

    const emailHtmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #f4f5f6; margin: 0; padding: 20px; color: #333; }
            .card { background: #ffffff; border-radius: 12px; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden; border: 1px solid #e1e4e8; }
            .header { background: linear-gradient(135deg, #1e3a8a, #0f172a); padding: 30px; text-align: center; color: #ffffff; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px; }
            .header p { margin: 5px 0 0; font-size: 14px; opacity: 0.8; }
            .content { padding: 30px; }
            .field-row { margin-bottom: 20px; border-bottom: 1px solid #f0f2f5; padding-bottom: 15px; }
            .field-row:last-child { border-bottom: none; padding-bottom: 0; margin-bottom: 0; }
            .label { font-size: 11px; text-transform: uppercase; color: #6b7280; font-weight: 600; letter-spacing: 1px; margin-bottom: 4px; }
            .value { font-size: 16px; color: #111827; font-weight: 500; }
            .footer { background-color: #fafbfc; border-top: 1px solid #f0f2f5; padding: 20px; text-align: center; font-size: 12px; color: #9ca3af; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>New Lead Captured!</h1>
              <p>Submitted via ${siteDomain}</p>
            </div>
            <div class="content">
              <div class="field-row">
                <div class="label">Full Name</div>
                <div class="value">${fullName}</div>
              </div>
              <div class="field-row">
                <div class="label">Mobile Number</div>
                <div class="value">${mobileNumber}</div>
              </div>
              <div class="field-row">
                <div class="label">Job / Business</div>
                <div class="value">${jobBusiness}</div>
              </div>
              <div class="field-row">
                <div class="label">Interested In</div>
                <div class="value">${interestedIn}</div>
              </div>
            </div>
            <div class="footer">
              This lead was automatically captured on ${new Date().toLocaleString("en-US", { timeZone: "UTC" })} UTC.
            </div>
          </div>
        </body>
      </html>
    `;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: emailToUse,
      subject: `[New Lead] ${fullName} - ${siteDomain}`,
      html: emailHtmlContent,
    });

    return NextResponse.json({ success: true, message: "Lead submitted successfully." });
  } catch (error: any) {
    console.error("Submission API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error. Please try again later." },
      { status: 500 }
    );
  }
}
