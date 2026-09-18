import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactBody = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  return /^[0-9+\s().-]{7,20}$/.test(phone);
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const emailFrom = process.env.EMAIL_FROM;
    const emailTo = process.env.EMAIL_TO;

    if (!apiKey || !emailFrom || !emailTo) {
      console.error(
        "Configuration email incomplète : RESEND_API_KEY, EMAIL_FROM ou EMAIL_TO manquant."
      );

      return NextResponse.json(
        { message: "Le service de contact est momentanément indisponible." },
        { status: 500 }
      );
    }

    let body: ContactBody;

    try {
      body = (await req.json()) as ContactBody;
    } catch {
      return NextResponse.json(
        { message: "Requête invalide." },
        { status: 400 }
      );
    }

    if (
      typeof body.name !== "string" ||
      typeof body.email !== "string" ||
      typeof body.phone !== "string" ||
      typeof body.message !== "string"
    ) {
      return NextResponse.json(
        { message: "Les informations transmises sont invalides." },
        { status: 400 }
      );
    }

    const name = body.name.trim();
    const email = body.email.trim().toLowerCase();
    const phone = body.phone.trim();
    const message = body.message.trim();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { message: "Tous les champs requis ne sont pas remplis." },
        { status: 400 }
      );
    }

    if (name.length > 100) {
      return NextResponse.json(
        { message: "Le nom renseigné est trop long." },
        { status: 400 }
      );
    }

    if (email.length > 254 || !isValidEmail(email)) {
      return NextResponse.json(
        { message: "Adresse e-mail invalide." },
        { status: 400 }
      );
    }

    if (phone.length > 30 || !isValidPhone(phone)) {
      return NextResponse.json(
        { message: "Numéro de téléphone invalide." },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { message: "Merci de préciser un peu plus votre demande." },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { message: "Votre message est trop long." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message);

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      replyTo: email,
      subject: `🏠 Nouvelle demande de chantier — ${name}`,
      html: `
        <!doctype html>
        <html lang="fr">
          <head>
            <meta charset="UTF-8">
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background-color: #f1f5f9;
              font-family: Arial, Helvetica, sans-serif;
              color: #0f172a;
            "
          >

            <table
              width="100%"
              cellpadding="0"
              cellspacing="0"
              border="0"
              style="background-color: #f1f5f9;"
            >
              <tr>
                <td align="center" style="padding: 32px 15px;">

                  <!-- CARTE PRINCIPALE -->

                  <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    style="
                      width: 100%;
                      max-width: 640px;
                      background-color: #ffffff;
                      border: 1px solid #e2e8f0;
                      border-radius: 16px;
                    "
                  >

                    <!-- HEADER -->

                    <tr>
                      <td
                        style="
                          background-color: #0f172a;
                          padding: 26px 30px;
                          border-bottom: 4px solid #f97316;
                        "
                      >

                        <table
                          width="100%"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                        >
                          <tr>

                            <td>
                              <div
                                style="
                                  color: #ffffff;
                                  font-size: 21px;
                                  font-weight: 800;
                                  line-height: 1.2;
                                "
                              >
                                COUVERTURE
                                <span style="color: #f97316;">
                                  CATALANE
                                </span>
                              </div>

                              <div
                                style="
                                  margin-top: 6px;
                                  color: #cbd5e1;
                                  font-size: 10px;
                                  font-weight: 700;
                                  text-transform: uppercase;
                                  letter-spacing: 1px;
                                "
                              >
                                Couverture · Zinguerie · Charpente
                              </div>
                            </td>

                            <td
                              align="right"
                              style="
                                font-size: 28px;
                                vertical-align: middle;
                              "
                            >
                              🏠
                            </td>

                          </tr>
                        </table>

                      </td>
                    </tr>

                    <!-- TITRE -->

                    <tr>
                      <td style="padding: 30px 30px 15px;">

                        <div
                          style="
                            display: inline-block;
                            background-color: #fff7ed;
                            border: 1px solid #fed7aa;
                            border-radius: 20px;
                            padding: 6px 11px;
                            color: #ea580c;
                            font-size: 10px;
                            font-weight: 800;
                            text-transform: uppercase;
                            letter-spacing: 0.7px;
                          "
                        >
                          🔥 Nouveau contact
                        </div>

                        <h1
                          style="
                            margin: 16px 0 7px;
                            color: #0f172a;
                            font-size: 24px;
                            line-height: 1.3;
                          "
                        >
                          Nouvelle demande de chantier
                        </h1>

                        <p
                          style="
                            margin: 0;
                            color: #64748b;
                            font-size: 13px;
                            line-height: 1.6;
                          "
                        >
                          Une nouvelle demande vient d'être envoyée
                          depuis le site Couverture Catalane.
                        </p>

                      </td>
                    </tr>

                    <!-- INFORMATIONS CLIENT -->

                    <tr>
                      <td style="padding: 15px 30px;">

                        <table
                          width="100%"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          style="
                            background-color: #f8fafc;
                            border: 1px solid #e2e8f0;
                            border-radius: 12px;
                          "
                        >

                          <tr>
                            <td style="padding: 20px;">

                              <div
                                style="
                                  margin-bottom: 14px;
                                  color: #94a3b8;
                                  font-size: 10px;
                                  font-weight: 800;
                                  text-transform: uppercase;
                                  letter-spacing: 1px;
                                "
                              >
                                Informations client
                              </div>

                              <table
                                width="100%"
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                style="
                                  font-family: Arial, Helvetica, sans-serif;
                                  font-size: 13px;
                                  line-height: 22px;
                                "
                              >

                                <tr>
                                  <td
                                    width="30"
                                    style="padding: 4px 0;"
                                  >
                                    👤
                                  </td>

                                  <td
                                    style="
                                      padding: 4px 0;
                                      color: #64748b;
                                    "
                                  >
                                    Nom
                                  </td>

                                  <td
                                    align="right"
                                    style="
                                      padding: 4px 0;
                                      color: #0f172a;
                                      font-weight: 700;
                                    "
                                  >
                                    ${safeName}
                                  </td>
                                </tr>

                                <tr>
                                  <td
                                    width="30"
                                    style="padding: 4px 0;"
                                  >
                                    📞
                                  </td>

                                  <td
                                    style="
                                      padding: 4px 0;
                                      color: #64748b;
                                    "
                                  >
                                    Téléphone
                                  </td>

                                  <td
                                    align="right"
                                    style="padding: 4px 0;"
                                  >
                                    <a
                                      href="tel:${safePhone}"
                                      style="
                                        color: #0f172a;
                                        font-weight: 700;
                                        text-decoration: none;
                                      "
                                    >
                                      ${safePhone}
                                    </a>
                                  </td>
                                </tr>

                                <tr>
                                  <td
                                    width="30"
                                    style="padding: 4px 0;"
                                  >
                                    ✉️
                                  </td>

                                  <td
                                    style="
                                      padding: 4px 0;
                                      color: #64748b;
                                    "
                                  >
                                    Email
                                  </td>

                                  <td
                                    align="right"
                                    style="padding: 4px 0;"
                                  >
                                    <a
                                      href="mailto:${safeEmail}"
                                      style="
                                        color: #ea580c;
                                        font-weight: 700;
                                        text-decoration: none;
                                      "
                                    >
                                      ${safeEmail}
                                    </a>
                                  </td>
                                </tr>

                              </table>

                            </td>
                          </tr>

                        </table>

                      </td>
                    </tr>

                    <!-- MESSAGE -->

                    <tr>
                      <td style="padding: 15px 30px 22px;">

                        <div
                          style="
                            margin-bottom: 10px;
                            color: #94a3b8;
                            font-size: 10px;
                            font-weight: 800;
                            text-transform: uppercase;
                            letter-spacing: 1px;
                          "
                        >
                          💬 Demande du client
                        </div>

                        <div
                          style="
                            background-color: #fff7ed;
                            border-left: 4px solid #f97316;
                            padding: 18px;
                            color: #334155;
                            font-size: 14px;
                            line-height: 1.7;
                            white-space: pre-wrap;
                          "
                        >${safeMessage}</div>

                      </td>
                    </tr>

                    <!-- BOUTONS -->

                    <tr>
                      <td style="padding: 0 30px 30px;">

                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                        >
                          <tr>

                            <td
                              style="
                                background-color: #f97316;
                                border-radius: 8px;
                              "
                            >
                              <a
                                href="tel:${safePhone}"
                                style="
                                  display: inline-block;
                                  padding: 13px 17px;
                                  color: #ffffff;
                                  font-size: 12px;
                                  font-weight: 700;
                                  text-decoration: none;
                                "
                              >
                                📞 Appeler le client
                              </a>
                            </td>

                            <td width="10"></td>

                            <td
                              style="
                                background-color: #0f172a;
                                border-radius: 8px;
                              "
                            >
                              <a
                                href="mailto:${safeEmail}"
                                style="
                                  display: inline-block;
                                  padding: 13px 17px;
                                  color: #ffffff;
                                  font-size: 12px;
                                  font-weight: 700;
                                  text-decoration: none;
                                "
                              >
                                ✉️ Répondre par email
                              </a>
                            </td>

                          </tr>
                        </table>

                      </td>
                    </tr>

                    <!-- FOOTER -->

                    <tr>
                      <td
                        align="center"
                        style="
                          background-color: #f8fafc;
                          border-top: 1px solid #e2e8f0;
                          padding: 17px 25px;
                          color: #94a3b8;
                          font-size: 10px;
                          line-height: 1.5;
                        "
                      >
                        Demande transmise automatiquement depuis
                        <strong style="color: #64748b;">
                          couverture-catalane.fr
                        </strong>
                      </td>
                    </tr>

                  </table>

                </td>
              </tr>
            </table>

          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Erreur technique Resend :", error);

      return NextResponse.json(
        {
          message:
            "Impossible d'envoyer votre demande pour le moment. Vous pouvez également nous contacter par téléphone.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        message: "Votre demande a bien été envoyée.",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur serveur API contact :", error);

    return NextResponse.json(
      { message: "Une erreur est survenue. Veuillez réessayer plus tard." },
      { status: 500 }
    );
  }
}
