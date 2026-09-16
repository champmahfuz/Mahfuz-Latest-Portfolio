import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_SUBJECT_LENGTH = 160;
const MAX_MESSAGE_LENGTH = 5_000;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };

    return entities[character];
  });

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const subject =
    typeof payload.subject === "string" ? payload.subject.trim().replace(/[\r\n]+/g, " ") : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (
    !name ||
    !email ||
    !subject ||
    !message ||
    name.length > MAX_NAME_LENGTH ||
    email.length > MAX_EMAIL_LENGTH ||
    subject.length > MAX_SUBJECT_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH ||
    !isEmail(email)
  ) {
    return Response.json({ error: "Please provide valid contact details." }, { status: 400 });
  }

  const mailUser = process.env.MAIL_USER;
  const mailAppPassword = process.env.MAIL_APP_PASSWORD;
  const recipient = process.env.CONTACT_EMAIL ?? "mahfuzrahman517@gmail.com";

  if (!mailUser || !mailAppPassword) {
    console.error("Contact mailer is not configured.");
    return Response.json(
      { error: "The contact form is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: mailUser,
      pass: mailAppPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: `Portfolio Contact Form <${mailUser}>`,
      to: recipient,
      replyTo: email,
      subject: `Portfolio contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h2>New portfolio contact message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Unable to send contact email:", error);
    return Response.json(
      { error: "Unable to send your message right now. Please try again later." },
      { status: 502 },
    );
  }
}
