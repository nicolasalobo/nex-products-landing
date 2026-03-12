import React, { useEffect } from 'react';
import { CheckCircle, Mail, Smartphone, Download } from 'lucide-react';

const Confirmation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="section fade-in" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container text-center" style={{ maxWidth: '800px' }}>
        
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '50%', marginBottom: '2rem' }}>
          <CheckCircle size={48} color="var(--accent)" />
        </div>

        <h1 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1rem', color: 'var(--accent)' }}>
          PARABÉNS! SEU PAGAMENTO FOI APROVADO.
        </h1>
        <p className="subtitle" style={{ margin: '0 auto', marginBottom: '3rem' }}>
          Sua jornada para blindar a sua família começa agora. O seu arquivo já está disponível tanto no seu E-mail quanto no botão abaixo!
        </p>

        <div className="glass-card" style={{ textAlign: 'left', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
            Próximos Passos:
          </h2>
          
          <div className="flex gap-4 mb-4 items-start">
            <div style={{ background: 'var(--primary)', color: '#000', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>
              1
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Smartphone size={20} color="var(--primary)"/> Baixe o Arquivo PDF</h3>
              <p style={{ color: 'var(--text-muted)' }}>Clique no botão verde no final desta página para baixar o arquivo imediatamente para o seu aparelho.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div style={{ background: 'var(--primary)', color: '#000', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>
              2
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={20} color="var(--primary)"/> Verifique o seu E-mail</h3>
              <p style={{ color: 'var(--text-muted)' }}>Nós também acabamos de te enviar um e-mail contendo o PDF original para você guardar com segurança.</p>
              <p style={{ color: 'var(--danger)', fontSize: '0.85rem', marginTop: '0.5rem' }}>*Verifique também a sua caixa de Spam ou Lixo Eletrônico caso não chegue em 5 minutos.</p>
            </div>
          </div>
        </div>

        <a 
          href="/PROTOCOLO-ESCUDO-DIGITAL-2026.pdf" 
          download="Protocolo-Escudo-Digital"
          className="cta-button" 
          style={{ width: '100%', maxWidth: '100%', padding: '1.5rem', fontSize: '1.2rem' }}
        >
          <Download size={24} />
          BAIXAR MEU PROTOCOLO AGORA
        </a>

      </div>
    </div>
  );
};

export default Confirmation;
