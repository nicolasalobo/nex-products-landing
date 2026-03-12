import React, { useEffect } from "react";
import { CheckCircle, Mail, Smartphone, ExternalLink } from "lucide-react";

const Confirmation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="section fade-in"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container text-center" style={{ maxWidth: "800px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80px",
            height: "80px",
            background: "rgba(34, 197, 94, 0.1)",
            borderRadius: "50%",
            marginBottom: "2rem",
          }}
        >
          <CheckCircle size={48} color="var(--accent)" />
        </div>

        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "900",
            marginBottom: "1rem",
            color: "var(--accent)",
          }}
        >
          PARABÉNS! SEU PEDIDO FOI APROVADO.
        </h1>
        <p
          className="subtitle"
          style={{ margin: "0 auto", marginBottom: "3rem" }}
        >
          Sua jornada para uma vida digital blindada começa agora. Siga os
          passos abaixo para acessar o seu material.
        </p>

        <div
          className="glass-card"
          style={{ textAlign: "left", marginBottom: "3rem" }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              marginBottom: "2rem",
              borderBottom: "1px solid var(--glass-border)",
              paddingBottom: "1rem",
            }}
          >
            Próximos Passos:
          </h2>

          <div className="flex gap-4 mb-4 items-start">
            <div
              style={{
                background: "var(--primary)",
                color: "#000",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                flexShrink: 0,
              }}
            >
              1
            </div>
            <div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Mail size={20} color="var(--primary)" /> Verifique seu e-mail
              </h3>
              <p style={{ color: "var(--text-muted)" }}>
                Acabamos de enviar suas credenciais de acesso para o e-mail
                cadastrado na compra. Procure por "Escudo Digital".
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div
              style={{
                background: "var(--primary)",
                color: "#000",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                flexShrink: 0,
              }}
            >
              2
            </div>
            <div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Smartphone size={20} color="var(--primary)" /> Acesse a
                plataforma
              </h3>
              <p style={{ color: "var(--text-muted)" }}>
                Use o link no e-mail para acessar a área de membros.
                Recomendamos assistir ao módulo de Configuração Imediata
                primeiro.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => alert("Redirecionando para a plataforma de alunos...")}
          className="cta-button"
        >
          <ExternalLink size={24} /> ACESSAR PLATAFORMA AGORA
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
