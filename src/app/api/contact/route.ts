import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  preferredContact?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const phone = body.phone?.trim() || "";
    const company = body.company?.trim() || "";
    const projectType = body.projectType?.trim() || "";
    const budget = body.budget?.trim() || "";
    const timeline = body.timeline?.trim() || "";
    const preferredContact = body.preferredContact?.trim() || "";
    const message = body.message?.trim() || "";

    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        {
          message:
            "Name, email, project type and project details are required.",
        },
        { status: 400 },
      );
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return NextResponse.json(
        {
          message: "Contact service is not configured.",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone || "Not provided"),
      company: escapeHtml(company || "Not provided"),
      projectType: escapeHtml(projectType),
      budget: escapeHtml(budget || "Not specified"),
      timeline: escapeHtml(timeline || "Not specified"),
      preferredContact: escapeHtml(
        preferredContact || "Email",
      ),
      message: escapeHtml(message).replaceAll("\n", "<br />"),
    };

    await transporter.sendMail({
      from: `"Portfolio Inquiry" <${process.env.GMAIL_USER}>`,

      to:
        process.env.CONTACT_EMAIL ||
        "shahbazkhan11092002@gmail.com",

      replyTo: email,

      subject: `New Portfolio Inquiry — ${projectType} — ${name}`,

      html: `
        <div
          style="
            font-family:Arial,Helvetica,sans-serif;
            max-width:720px;
            margin:auto;
            background:#0c0c12;
            color:#f4f4f7;
            border-radius:18px;
            overflow:hidden;
          "
        >
          <div
            style="
              padding:28px;
              background:linear-gradient(135deg,#7654ff,#4127b8);
            "
          >
            <div
              style="
                font-size:12px;
                letter-spacing:2px;
                opacity:.75;
                margin-bottom:8px;
              "
            >
              DEVELOPER PORTFOLIO
            </div>

            <h1
              style="
                margin:0;
                font-size:26px;
              "
            >
              New Project Inquiry
            </h1>
          </div>

          <div style="padding:28px;">
            <table
              cellpadding="0"
              cellspacing="0"
              style="
                width:100%;
                border-collapse:collapse;
              "
            >
              <tr>
                <td style="padding:10px;color:#888899;">
                  Client
                </td>

                <td style="padding:10px;">
                  ${safe.name}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;color:#888899;">
                  Email
                </td>

                <td style="padding:10px;">
                  ${safe.email}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;color:#888899;">
                  Phone
                </td>

                <td style="padding:10px;">
                  ${safe.phone}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;color:#888899;">
                  Company
                </td>

                <td style="padding:10px;">
                  ${safe.company}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;color:#888899;">
                  Project
                </td>

                <td style="padding:10px;">
                  ${safe.projectType}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;color:#888899;">
                  Budget
                </td>

                <td style="padding:10px;">
                  ${safe.budget}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;color:#888899;">
                  Timeline
                </td>

                <td style="padding:10px;">
                  ${safe.timeline}
                </td>
              </tr>

              <tr>
                <td style="padding:10px;color:#888899;">
                  Preferred Contact
                </td>

                <td style="padding:10px;">
                  ${safe.preferredContact}
                </td>
              </tr>
            </table>

            <div
              style="
                margin-top:24px;
                padding:20px;
                background:#15151e;
                border-radius:12px;
              "
            >
              <div
                style="
                  color:#8b73ff;
                  font-size:11px;
                  letter-spacing:1.5px;
                  margin-bottom:10px;
                "
              >
                PROJECT DETAILS
              </div>

              <div
                style="
                  line-height:1.7;
                  color:#d8d8de;
                "
              >
                ${safe.message}
              </div>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      message:
        "Your project inquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact email error:", error);

    return NextResponse.json(
      {
        message:
          "Unable to send your inquiry right now. Please try again.",
      },
      { status: 500 },
    );
  }
}