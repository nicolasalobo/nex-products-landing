import { Resend } from "resend";
import fs from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests are allowed" });
  }

  try {
    const payload = req.body;

    // A Cakto envia os dados do evento. Ex: "purchase_approved"
    if (
      payload.event !== "purchase_approved" &&
      payload.event !== "pix_approved"
    ) {
      return res.status(200).json({ message: "Event ignored" });
    }

    const { customer } = payload.data;
    const customerName = customer?.name || "Cliente";
    const customerEmail = customer?.email;

    if (!customerEmail) {
      return res.status(400).json({ message: "No customer email found" });
    }

    // Lê o PDF para enviar em anexo
    const pdfPath = path.join(
      process.cwd(),
      "PROTOCOLO-ESCUDO-DIGITAL-2026.pdf",
    );
    const pdfBuffer = fs.readFileSync(pdfPath);

    // Disparar o e-mail via Resend
    const { data, error } = await resend.emails.send({
      from: "Escudo Digital <onboarding@resend.dev>", // E-mail padrão da Resend para testes sem domínio
      to: customerEmail,
      subject: "🛡️ O seu Protocolo Escudo Digital está aqui!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #00f0ff; background: #050a15; padding: 20px; text-align: center; border-radius: 8px;">
            Protocolo Escudo Digital
          </h2>
          <p>Olá, <strong>${customerName}</strong>!</p>
          <p>Parabéns por dar este passo importante. A segurança da sua família não tem preço, e as economias de uma vida inteira merecem ser blindadas.</p>
          <p>O seu Protocolo oficial está <b>EM ANEXO</b> neste e-mail. Basta rolar para baixo e baixar o seu PDF.</p>
          
          <div style="background: #f4f4f5; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #22c55e;">
            <p style="margin: 0;"><strong>Atenção:</strong> Recomendamos aplicar as 5 Leis de Ouro no aparelho dos seus pais hoje mesmo!</p>
          </div>

          <p>Um forte abraço,<br/>Equipe Escudo Digital.</p>
        </div>
      `,
      attachments: [
        {
          filename: "Protocolo-Escudo-Digital-2026.pdf",
          content: pdfBuffer,
        },
      ],
    });

    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: error.message });
    }

    return res
      .status(200)
      .json({ message: "Email sent successfully with attachment", data });
  } catch (err) {
    console.error("Webhook Error:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
