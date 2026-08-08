import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, mobileNumber, jobBusiness, recipientEmail, domain } = body;

    // Validate request payload
    if (!fullName || !mobileNumber || !jobBusiness) {
      return NextResponse.json(
        { error: "Full Name, Mobile Number, and Job/Business are required fields." },
        { status: 400 }
      );
    }

    const emailToUse = recipientEmail || "darlumampao@gmail.com";
    const siteDomain = domain || "Dropshipping & Marketing Landing Page";

    // Setup Nodemailer SMTP transport.
    // We look for environment variables. On Vercel, the user can configure these.
    // If not configured, we log the lead to the console and return success (elegant fallback).
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

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
            </div>
            <div class="footer">
              This lead was automatically captured on ${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC.
            </div>
          </div>
        </body>
      </html>
    `;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(smtpPort) || 587,
        secure: Number(smtpPort) === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Lead Generator" <${smtpUser}>`,
        to: emailToUse,
        subject: `[New Lead] ${fullName} - ${siteDomain}`,
        html: emailHtmlContent,
      });

      console.log(`Lead sent successfully via SMTP for ${fullName}`);
    } else {
      // In development/fallback mode, log to server console
      console.log("------------------ NEW LEAD CAPTURED ------------------");
      console.log(`Domain: ${siteDomain}`);
      console.log(`Recipient: ${emailToUse}`);
      console.log(`Full Name: ${fullName}`);
      console.log(`Mobile Number: ${mobileNumber}`);
      console.log(`Job / Business: ${jobBusiness}`);
      console.log("------------------------------------------------------");
      console.log("Tip: Configure SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS on Vercel to activate live email delivery.");
    }

    return NextResponse.json({ success: true, message: "Lead submitted successfully." });
  } catch (error: any) {
    console.error("Submission API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error. Please try again later." },
      { status: 500 }
    );
  }
}
