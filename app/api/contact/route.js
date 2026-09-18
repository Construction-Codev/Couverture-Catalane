import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value) {
  return (value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req) {
  try {
    const body = await req.json();

    const name = body.name 
    const email = body.email 
    const phone = body.phone 
    const message = body.message 

    // Validation côté serveur
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        {
          message: "Tous les champs requis ne sont pas remplis.",
        },
        { status: 400 }
      );
    }

    // Sécurisation des données injectées dans le HTML
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message);

    const { data, error } = await resend.emails.send({
      // On conserve EXACTEMENT tes variables d'environnement existantes
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,

      // Quand Gregory clique sur "Répondre",
      // la réponse part directement au prospect
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
        { message: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Email envoyé avec succès !",
        id: data.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur Serveur API :", error);

    return NextResponse.json(
      {
        message: "Erreur réseau, veuillez réessayer plus tard.",
      },
      { status: 500 }
    );
  }
}