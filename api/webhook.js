import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Apenas aceita requisições POST vindas da Cakto
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  try {
    const payload = req.body;

    // A Cakto envia os dados do evento. Ex: "purchase_approved"
    if (payload.event !== 'purchase_approved' && payload.event !== 'pix_approved') {
       return res.status(200).json({ message: 'Event ignored' });
    }

    const { customer, product } = payload.data;
    const customerName = customer?.name || 'Cliente';
    const customerEmail = customer?.email;

    if (!customerEmail) {
      return res.status(400).json({ message: 'No customer email found' });
    }

    // Disparar o e-mail via Resend
    const { data, error } = await resend.emails.send({
      from: 'Escudo Digital <suporte@seu-dominio.com>', // Para uso real, configure um domínio na Resend
      to: customerEmail,
      subject: '🛡️ O seu Protocolo Escudo Digital está aqui!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #00f0ff; background: #050a15; padding: 20px; text-align: center; border-radius: 8px;">
            Protocolo Escudo Digital
          </h2>
          <p>Olá, <strong>${customerName}</strong>!</p>
          <p>Parabéns por dar este passo importante. A segurança da sua família não tem preço, e as economias de uma vida inteira merecem ser blindadas.</p>
          <p>O seu Protocolo já está disponível. Acesse o material no link abaixo:</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="URL_DO_SEU_PDF_HOSPEDADO" style="background: #22c55e; color: #fff; padding: 15px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px;">
              🔗 ACESSAR MEU PROTOCOLO AGORA
            </a>
          </div>

          <p>Se tiver qualquer dúvida, basta responder a este e-mail.</p>
          <p>Um forte abraço,<br/>Equipe Escudo Digital.</p>
        </div>
      `,
    });

    if (error) {
       console.error('Error sending email:', error);
       return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ message: 'Email sent successfully', data });

  } catch (err) {
    console.error('Webhook Error:', err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
