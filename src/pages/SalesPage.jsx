import React from "react";
import {
  Shield,
  Lock,
  AlertTriangle,
  CheckCircle,
  ChevronRight,
  Users,
  Smartphone,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const SalesPage = () => {
  const navigate = useNavigate();

  const handleBuy = () => {
    // Botão de compra clicao. Repassando tráfego param URIs.
    const checkoutBaseUrl = "https://pay.cakto.com.br/uj2xwnd_803501";
    const urlParams = new URLSearchParams(window.location.search);

    // Se a pessoa veio de um anúncio tipo ?utm_source=facebook, levamos o código com ela pra Cakto
    if (urlParams.toString()) {
      window.location.href = `${checkoutBaseUrl}?${urlParams.toString()}`;
    } else {
      window.location.href = checkoutBaseUrl;
    }
  };

  const scrollToOffer = () => {
    const offerSection = document.getElementById("offer-section");
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sales-page">
      <div
        style={{
          background: "#ef4444",
          padding: "0.5rem",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "0.9rem",
        }}
      >
        ⚠️ ATENÇÃO: Os golpes utilizando Inteligência Artificial aumentaram 400%
        no Brasil. Proteja sua família hoje!
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
          borderBottom: "1px solid var(--glass-border)",
          background: "rgba(15, 23, 42, 0.5)",
          backdropFilter: "blur(10px)",
          marginBottom: "2rem",
        }}
      >
        <Shield
          size={32}
          color="var(--primary)"
          style={{ marginRight: "0.5rem" }}
        />
        <span
          style={{
            fontSize: "1.5rem",
            fontWeight: "900",
            letterSpacing: "-0.5px",
          }}
        >
          PROTOCOLO <span style={{ color: "var(--primary)" }}>ESCUDO</span>
        </span>
      </div>

      <header className="section container text-center fade-in">
        <div className="flex justify-center mb-4">
          <div
            style={{
              background: "rgba(0, 240, 255, 0.1)",
              padding: "0.5rem 1rem",
              borderRadius: "50px",
              border: "1px solid var(--primary)",
              color: "var(--primary)",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Users size={16} /> O Guia Prático para as Famílias Brasileiras
          </div>
        </div>
        <h1
          className="h1-hero"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
        >
          O PROTOCOLO DEFINITIVO PARA <br />
          <span className="highlight">
            BLINDAR SUA FAMÍLIA CONTRA <br /> GOLPES DE IA EM 2026
          </span>
        </h1>
        <p
          className="subtitle"
          style={{ margin: "0 auto", marginBottom: "2.5rem" }}
        >
          Descubra como proteger as economias dos seus pais e avós com{" "}
          <strong>5 configurações de blindagem</strong> simples no celular,
          antes que eles sejam a próxima vítima do "Golpe do Filho Fake".
        </p>

        <div
          className="video-container"
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            marginBottom: "2.5rem",
            borderRadius: "16px",
            overflow: "hidden",
            border: "2px solid var(--glass-border)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
            aspectRatio: "16/9",
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800&h=450"
            alt="Família Segura"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: "0.4",
            }}
          />
          <div style={{ position: "absolute", pointerEvents: "none" }}>
            <div
              style={{
                background: "var(--primary)",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 20px var(--primary)",
              }}
            >
              <ChevronRight size={40} color="#000" />
            </div>
          </div>
        </div>

        <button onClick={scrollToOffer} className="cta-button">
          QUERO PROTEGER MINHA FAMÍLIA <ChevronRight size={24} />
        </button>
        <p
          className="mt-4"
          style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}
        >
          Acesso vitalício imediato. Inclui as rotinas de revisão anual.
        </p>
      </header>

      <section className="section" style={{ background: "var(--bg-darker)" }}>
        <div className="container">
          <div className="text-center mb-8">
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "800",
                marginBottom: "1rem",
              }}
            >
              Sua família corre risco de perder tudo{" "}
              <span style={{ color: "var(--danger)" }}>hoje</span>...
            </h2>
            <p className="subtitle" style={{ margin: "0 auto" }}>
              Os criminosos não cometem mais erros de português. Em 2026, eles
              usam Inteligência Artificial para imitar a realidade.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                icon: Smartphone,
                title: "O Golpe do Filho Fake (IA)",
                desc: "Clonam a SUA voz com Inteligência Artificial e mandam áudios chorando para sua mãe pedir dinheiro urgente.",
              },
              {
                icon: AlertTriangle,
                title: "O Falso Funcionário",
                desc: 'Ligam com todos os dados bancários dos seus pais relatando uma "compra falsa", exigindo um Pix para "estorno".',
              },
              {
                icon: Lock,
                title: "O Golpe da Maquininha",
                desc: 'Um motoboy falso chega na porta com um presente, inventa uma "taxa de entrega" e clona o cartão em segundos.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-card flex-col items-center text-center"
              >
                <item.icon
                  size={48}
                  color="var(--danger)"
                  style={{ marginBottom: "1.5rem" }}
                />
                <h3
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                    fontWeight: "700",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "var(--text-muted)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container text-center">
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "800",
            marginBottom: "2rem",
          }}
        >
          Apresentando: <br />
          <span className="highlight">Protocolo Escudo Digital 2026</span>
        </h2>
        <div
          className="glass-card text-left"
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
              }}
            >
              Este não é um manual técnico chato. É um{" "}
              <strong>Pacto de Confiança</strong> e um protocolo de
              sobrevivência digital testado para proteger pessoas de todas as
              idades, sem precisar saber de tecnologia.
            </p>
            <ul style={{ listStyle: "none" }}>
              {[
                "A Blindagem em 5 Minutos: O passo a passo exato para você configurar no celular dos seus pais (Foto de Perfil, PIN do WhatsApp e Filtro de Ligações).",
                'As 5 Leis de Ouro: Regras simples para imprimir e colar na geladeira (como a "Lei do Vídeo" e a "Lei do Bacalhau").',
                "Plano de Emergência MED (Contra-Ataque): O que fazer nos primeiros 30 minutos vitais se a transferência for feita, para recuperar o dinheiro pelo banco.",
                "Lista de Contatos de Emergência do Governo e Bancos (BACEN, Procon, Polícia) centralizada.",
              ].map((text, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                    background: "rgba(255,255,255,0.03)",
                    padding: "1rem",
                    borderRadius: "8px",
                  }}
                >
                  <CheckCircle
                    size={28}
                    color="var(--accent)"
                    style={{ flexShrink: 0 }}
                  />
                  <span style={{ fontWeight: "500", lineHeight: 1.5 }}>
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <button onClick={scrollToOffer} className="cta-button">
              QUERO TER ACESSO AO MATERIAL COMPLETO
            </button>
          </div>
        </div>
      </section>

      <section
        id="offer-section"
        className="section"
        style={{
          background: "linear-gradient(135deg, var(--bg-dark), #0f172a)",
        }}
      >
        <div className="container text-center">
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "800",
              marginBottom: "3rem",
            }}
          >
            A blindagem da sua família por:
          </h2>
          <div
            className="glass-card float-anim"
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              border: "1px solid var(--primary)",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "var(--primary)",
                color: "#000",
                padding: "0.5rem 1.5rem",
                borderRadius: "50px",
                fontWeight: "800",
              }}
            >
              PREÇO PROMOCIONAL
            </div>
            <p
              style={{
                textDecoration: "line-through",
                color: "var(--danger)",
                fontSize: "1.25rem",
                marginTop: "1rem",
              }}
            >
              De R$ 97,00
            </p>
            <p style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              Por apenas
            </p>
            <div
              style={{
                fontSize: "4rem",
                fontWeight: "900",
                color: "var(--accent)",
                lineHeight: "1",
              }}
            >
              R$ 47,90
            </div>
            <p style={{ marginBottom: "2rem", color: "var(--text-muted)" }}>
              Uma pechincha comparado ao prejuízo de um golpe bancário.
            </p>
            <button onClick={handleBuy} className="cta-button">
              BLINDAR MINHA FAMÍLIA AGORA <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      <footer
        style={{
          padding: "2rem",
          textAlign: "center",
          borderTop: "1px solid var(--glass-border)",
          marginTop: "2rem",
        }}
      >
        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
          Este site não faz parte do Facebook, Google ou suas entidades. Ao
          adquirir o produto, você concorda com nossos Termos de Uso.
        </p>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.875rem",
            marginTop: "0.5rem",
          }}
        >
          Copyright © 2026 Escudo Digital. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default SalesPage;
