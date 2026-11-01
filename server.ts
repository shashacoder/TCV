import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import validator from "validator";
import escapeHtml from "escape-html";
import crypto from "crypto";

declare module "validator";

dotenv.config();


async function startServer() {
  const app = express();
  const isProduction = process.env.NODE_ENV === "production";

if (isProduction) {
    const requiredSmtpVariables = [
        "SMTP_HOST",
        "SMTP_USER",
        "SMTP_PASS"
    ];

    const missingVariables = requiredSmtpVariables.filter(
        key => !process.env[key]?.trim()
    );

    if (missingVariables.length > 0) {
        console.error(
            "[CONFIG ALERT] Production SMTP configuration is incomplete.",
            { missingVariables }
        );
    }
}
  if (process.env.NODE_ENV === "production") {
    app.use(helmet());
}
  const PORT = Number(process.env.PORT) || 8000;

  // Body parser
 
  app.use(express.json({
    limit: "10kb"
}));
app.get("/health", (_req, res) => {
    res.status(200).json({
        status: "ok"
    });
});
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: {
        error: "Too many contact requests. Please try again later."
    }
});
  // API Route for Scope Form Submission
  app.post("/api/contact", contactLimiter, async (req, res) => {
    try {
     const {
    name,
    email,
    phone,
    company,
    domain,
    message
} = req.body;

const cleanName = name?.trim();
const cleanEmail = email?.trim();
const cleanPhone = phone?.trim();
const cleanCompany = company?.trim();
const cleanDomain = domain?.trim();
const cleanMessage = message?.trim();

if (!cleanName || !cleanEmail || !cleanPhone || !cleanMessage) {
    return res.status(400).json({
        error: "Missing required fields"
    });
}

if (!validator.isEmail(cleanEmail)) {
    return res.status(400).json({
        error: "Invalid email address"
    });
}

if (!validator.isMobilePhone(cleanPhone, "en-IN")) {
    return res.status(400).json({
        error: "Invalid phone number"
    });
}

if (cleanName.length > 100) {
    return res.status(400).json({
        error: "Name is too long"
    });
}

if (cleanMessage.length > 2000) {
    return res.status(400).json({
        error: "Message is too long"
    });
}
const safeName = escapeHtml(cleanName);
const safeEmail = escapeHtml(cleanEmail);
const safePhone = escapeHtml(cleanPhone);
const safeCompany = escapeHtml(cleanCompany || "");
const safeDomain = escapeHtml(cleanDomain || "");
const safeMessage = escapeHtml(cleanMessage);

     const today = new Date();
  const date =
    today.getFullYear().toString() +
    String(today.getMonth() + 1).padStart(2, "0") +
    String(today.getDate()).padStart(2, "0");

  const random = crypto.randomBytes(3).toString("hex").toUpperCase();

      const docketId = `TCV-${date}-${random}`;
      const partnerEmail = "tathagatcorps@gmail.com";

      // 1. Prepare Email Content
      const emailContentHtml = `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; color: #1e293b;">
          <div style="text-align: center; border-bottom: 2px solid #f59e0b; padding-bottom: 20px; margin-bottom: 20px;">
            <h1 style="color: #0f172a; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.025em;">THE CORPORATE VASHISHTHA</h1>
            <p style="color: #64748b; margin: 4px 0 0 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">Advisors & Engineers</p>
          </div>
          
          <div style="margin-bottom: 24px;">
            <h2 style="color: #0f172a; font-size: 18px; font-weight: 700; margin-top: 0;">Strategic Scope Setup Brief</h2>
            <p style="font-size: 14px; line-height: 1.6; color: #475569;">
              Thank you for initiating the scoping protocol with The Corporate Vashishtha. A managing partner has been assigned to your brief and will coordinate directly with you.
            </p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600; width: 150px;">Docket ID</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 700; font-family: monospace;">${docketId}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Requestor</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 700;">${safeName}</td>
            </tr>
            ${cleanCompany ? `
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Enterprise</td>
              <td style="padding: 10px 0; color: #0f172a;">${safeCompany}</td>
            </tr>
            ` : ''}
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Email Address</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${safeEmail}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Phone Number</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${safePhone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Practice Area</td>
              <td style="padding: 10px 0; color: #d97706; font-weight: 700;">${safeDomain}</td>
            </tr>
          </table>

          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
            <h4 style="color: #475569; font-size: 12px; font-weight: 700; text-transform: uppercase; margin: 0 0 8px 0; letter-spacing: 0.05em;">Operational Requirements / Message Brief</h4>
            <p style="margin: 0; font-size: 13px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${safeMessage}</p>
          </div>

          <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; text-align: center; font-size: 11px; color: #94a3b8; line-height: 1.5;">
            <p style="margin: 0;">This is an automated confirmation sent to the requested email address.</p>
            <p style="margin: 4px 0 0 0;"><strong>The Corporate Vashishtha</strong> | Delhi & Bahadurgarh</p>
          </div>
        </div>
      `;

      // 2. Setup Nodemailer Transport
      let transporter: nodemailer.Transporter | undefined;
      let sendError: any = null;

      // Normalize and sanitize SMTP variables, stripping wrapping quotes if any
      let smtpHost = (process.env.SMTP_HOST || "").trim().replace(/^["']|["']$/g, "").trim();
      let smtpPort = (process.env.SMTP_PORT || "").trim().replace(/^["']|["']$/g, "").trim();
      let smtpUser = (process.env.SMTP_USER || "").trim().replace(/^["']|["']$/g, "").trim();
      let smtpPass = (process.env.SMTP_PASS || "").trim().replace(/^["']|["']$/g, "").trim();

      // Convert smtpUser to lowercase for Gmail to avoid 535 authentication errors due to case sensitivity
      if (smtpUser.toLowerCase().endsWith("@gmail.com")) {
        const lowerUser = smtpUser.toLowerCase();
        console.log(`[SMTP SANITIZATION] Automatically converted Gmail SMTP_USER to lowercase: ${lowerUser}`);
        smtpUser = lowerUser;
      }

      const isGmail = smtpHost.toLowerCase().includes("gmail.com") || smtpUser.toLowerCase().endsWith("@gmail.com");

      // Gmail App Passwords consist of 16 lowercase letter characters, often written with space separators.
      // We unconditionally strip all whitespace from Gmail passwords for correctness.
      if (isGmail && smtpPass) {
        const strippedPass = smtpPass.replace(/\s+/g, "");
        console.log(`[SMTP SANITIZATION] Automatically stripped spaces from Gmail password. Length: ${strippedPass.length}`);
        smtpPass = strippedPass;
      }

      console.log("[SMTP CONFIG DIAGNOSTIC] Values from environment:", {
        SMTP_HOST: smtpHost,
        SMTP_PORT: smtpPort,
        SMTP_USER: smtpUser,
        SMTP_PASS_PRESENT: !!smtpPass,
        SMTP_PASS_LENGTH: smtpPass.length,
        IS_GMAIL: isGmail
      });

      // --- INTELLIGENT AUTO-FIXES FOR USER TYPOS ---

      // Fix 1: If they put their username (e.g., shasha6587) in SMTP_HOST instead of SMTP_USER
      if (smtpHost && !smtpHost.includes(".")) {
        console.log(`[SMTP AUTO-CORRECT] SMTP_HOST "${smtpHost}" is not a valid hostname. Checking patterns.`);
        if (smtpHost.toLowerCase().includes("shasha") || smtpUser.toLowerCase().endsWith("@gmail.com")) {
          // If the user's email was supposed to be in smtpUser but is empty/short
          if (!smtpUser || smtpUser === "shasha6587") {
            smtpUser = smtpHost.includes("@") ? smtpHost : `${smtpHost}@gmail.com`;
          }
          smtpHost = "smtp.gmail.com";
          smtpPort = "465"; // Default to secure SSL for Gmail
          console.log(`[SMTP AUTO-CORRECTED] Inferred Gmail setup. Corrected host to "${smtpHost}" and port to "${smtpPort}". User set to "${smtpUser}"`);
        }
      }

      // Fix 2: If they are using Gmail (SMTP_USER is @gmail.com) but host is missing, localhost, or invalid
      if (smtpUser.toLowerCase().endsWith("@gmail.com") && (!smtpHost || smtpHost === "localhost" || smtpHost === "127.0.0.1")) {
        console.log(`[SMTP AUTO-CORRECT] Gmail user detected. Overriding host to "smtp.gmail.com" and port to "465"`);
        smtpHost = "smtp.gmail.com";
        smtpPort = "465";
      }

      // Determine proper port and security flag
      const portNum = parseInt(smtpPort) || 465;
      const isSecure = portNum === 465;

      const missingSmtpFields = [];

if (!smtpHost) missingSmtpFields.push("SMTP_HOST");
if (!smtpUser) missingSmtpFields.push("SMTP_USER");
if (!smtpPass) missingSmtpFields.push("SMTP_PASS");

if (
    process.env.NODE_ENV === "production" &&
    missingSmtpFields.length > 0
) {
    console.error(
        "[CONFIG ALERT] Contact request rejected because SMTP is unavailable.",
        {
            docketId,
            missingFields: missingSmtpFields
        }
    );

    return res.status(503).json({
        error: "Our contact service is temporarily unavailable. Please contact us directly using the email address displayed on our website."
    });
}

      // 1. Determine if the user is intending to use a real SMTP server.
      // If they defined any of the core SMTP credentials, we consider it an SMTP attempt.
      const hasSmtpConfig = !!(smtpHost || smtpUser || smtpPass || smtpPort);

      if (hasSmtpConfig) {
        // Validation: If they provided some fields but are missing others, return a bad request validation error.
        if (!smtpHost || !smtpUser || !smtpPass) {
          const missingFields = [];
          if (!smtpHost) missingFields.push("SMTP_HOST");
          if (!smtpUser) missingFields.push("SMTP_USER");
          if (!smtpPass) missingFields.push("SMTP_PASS");
          
          return res.status(400).json({
            error: "Incomplete SMTP Configuration",
            hint: `SMTP credentials are partially configured but missing critical values: ${missingFields.join(", ")}. Please check your environment variables and define them fully.`
          });
        }

        try {
          let verified = false;

          // Attempt 1: Try using the "gmail" service shortcut if it is Gmail
          if (isGmail) {
            try {
              console.log(`[SMTP ATTEMPT 1] Connecting using Nodemailer 'gmail' service config with user: ${smtpUser}...`);
              transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: smtpUser,
                  pass: smtpPass,
                },
                tls: {
                  
                },
                connectionTimeout: 8000,
                greetingTimeout: 8000,
                socketTimeout: 8000,
              });
              await transporter.verify();
              verified = true;
              console.log("[SMTP SUCCESS] Connected via 'gmail' service shortcut.");
            } catch (err1: any) {
              console.warn(`[SMTP WARN] Attempt 1 (gmail service) failed: ${err1.message}. Trying Attempt 2 (standard SMTP)...`);
            }
          }

          // Attempt 2 (or default): Standard SMTP host and port
          if (!verified) {
            console.log(`[SMTP ATTEMPT 2] Connecting to ${smtpHost}:${portNum} (Secure: ${isSecure}) using auth user ${smtpUser}...`);
            transporter = nodemailer.createTransport({
              host: smtpHost,
              port: portNum,
              secure: isSecure,
              auth: {
                user: smtpUser,
                pass: smtpPass,
              },
              tls: {
                rejectUnauthorized: true
              },
              connectionTimeout: 8000,
              greetingTimeout: 8000,
              socketTimeout: 8000,
            });
            await transporter.verify();
            console.log("[SMTP SUCCESS] Connected via standard SMTP host.");
          }

          if (!transporter) {
            throw new Error("SMTP transporter was not initialized.");
          }

          // Send Email to Requestor
          const clientMailOptions = {
            from: `"The Corporate Vashishtha" <${smtpUser}>`,
            to: cleanEmail,
            subject: `[${docketId}] Scoping Confirmation - The Corporate Vashishtha`,
            html: emailContentHtml,
          };

          // Send Email to Partner Desk
          const partnerMailOptions = {
            from: `"The Corporate Vashishtha Portal" <${smtpUser}>`,
            to: partnerEmail,
            replyTo: cleanEmail,
            subject: `🚨 [${docketId}] New Practice Brief: ${safeDomain} - ${safeName}`,
            html: `
              <div style="background-color: #fef3c7; border: 1px solid #f59e0b; padding: 12px; border-radius: 6px; margin-bottom: 20px; font-family: sans-serif; font-size: 13px; color: #78350f;">
                <strong>High-Priority Practice Brief Alert:</strong> This scoping brief requires response planning from the designated practice partner.
              </div>
              ${emailContentHtml}
            `,
          };

          await transporter.sendMail(clientMailOptions);
          await transporter.sendMail(partnerMailOptions);

          console.log("=========================================");
          console.log(`[DISPATCH] Scoping brief docket: ${docketId} sent via SMTP successfully!`);
          console.log(`[RECIPIENT 1] Client: ${email}`);
          console.log(`[RECIPIENT 2] Partner: ${partnerEmail}`);
          console.log("=========================================");

          return res.status(200).json({
            success: true,
            docketId,
            email,
            partnerEmail,
            simulated: false
          });
        } catch (err: any) {
          console.error("[SMTP ERROR] Real SMTP gateway failed:", err);
          const sendError = err.message || err;

          let smtpHint = "Please verify your SMTP credentials and settings.";
          if (smtpHost.includes("gmail.com") || smtpUser.toLowerCase().endsWith("@gmail.com")) {
            if (sendError.includes("535") || sendError.toLowerCase().includes("auth") || sendError.toLowerCase().includes("username")) {
              smtpHint = "Gmail authentication failed (535). IMPORTANT: You MUST use a 16-character Google 'App Password' instead of your regular Google account password. Generate one under Google Account > Security > 2-Step Verification > App passwords. Also, check Google Account Security notifications as Google sometimes blocks sign-in requests from server hosts located in different countries.";
            } else if (sendError.includes("EAI_AGAIN") || sendError.includes("ENOTFOUND")) {
              smtpHint = "DNS resolution failed. Please ensure SMTP_HOST is set to exactly 'smtp.gmail.com'.";
            } else {
              smtpHint = "Gmail connection failed. Try setting SMTP_PORT to '465' (for secure SSL) or '587' (for TLS/STARTTLS).";
            }
          }

          // Return a 500 error on failure instead of falling back to sandbox!
          return res.status(500).json({
            error: `SMTP Transmission Failed: ${sendError}`,
            hint: smtpHint,
            config: {
              SMTP_HOST: smtpHost,
              SMTP_PORT: smtpPort,
              SMTP_USER: smtpUser
            }
          });
        }
      }

      // Fallback or Test Transport (if no SMTP is provided in the environment at all)
      console.log("[SMTP FALLBACK] No SMTP config found. Executing secure sandbox simulation.");
      transporter = nodemailer.createTransport({
        jsonTransport: true // Returns the message in the sendMail callback instead of network transmission
      });

      // Send Email to Requestor
      const clientMailOptionsFallback = {
        from: '"The Corporate Vashishtha" <no-reply@tcvadvisors.org>',
        to: email,
        subject: `[${docketId}] Scoping Confirmation - The Corporate Vashishtha`,
        html: emailContentHtml,
      };

      // Send Email to Partner Desk
      const partnerMailOptionsFallback = {
        from: '"The Corporate Vashishtha Portal" <portal@tcvadvisors.org>',
        to: partnerEmail,
        replyTo: cleanEmail,
        subject: `🚨 [${docketId}] New Practice Brief: ${safeDomain} - ${safeName}`,
        html: `
          <div style="background-color: #fef3c7; border: 1px solid #f59e0b; padding: 12px; border-radius: 6px; margin-bottom: 20px; font-family: sans-serif; font-size: 13px; color: #78350f;">
            <strong>High-Priority Practice Brief Alert:</strong> This scoping brief requires response planning from the designated practice partner.
          </div>
          ${emailContentHtml}
        `,
      };

      const clientResultFallback = await transporter.sendMail(clientMailOptionsFallback);
      const partnerResultFallback = await transporter.sendMail(partnerMailOptionsFallback);

      // Log transmissions clearly to server console (very helpful for sandbox environments)
      console.log("=========================================");
      console.log(`[DISPATCH] Scoping brief docket: ${docketId}`);
      console.log(`[RECIPIENT 1] Client: ${email}`);
      console.log(`[RECIPIENT 2] Partner: ${partnerEmail}`);
      console.log(`[TRANSPORT] Resilient fallback triggered. Simulated transmission via JSON Transport.`);
      console.log("---------------- CLIENT EMAIL ----------------");
      console.log(JSON.stringify(clientResultFallback.message, null, 2));
      console.log("---------------- PARTNER EMAIL ----------------");
      console.log(JSON.stringify(partnerResultFallback.message, null, 2));
      console.log("=========================================");

      res.status(200).json({
        success: true,
        docketId,
        email,
        partnerEmail,
        simulated: true,
        warning: "No SMTP configuration was found. The scoping brief was simulated successfully in the secure sandbox."
      });
    } catch (error: unknown) {
    console.error("Error dispatching scoping brief emails:", error);

    res.status(500).json({
        error: "Unable to process your request. Please try again later."
    });
}
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }
app.set("trust proxy", "loopback");

  const HOST =
    process.env.NODE_ENV === "production"
        ? "127.0.0.1"
        : "0.0.0.0";

app.listen(PORT, HOST, () => {
    console.log(`Server running on ${HOST}:${PORT}`);
});
}

startServer();
