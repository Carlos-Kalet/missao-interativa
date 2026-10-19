* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Inter", sans-serif;
  background: linear-gradient(135deg, #1b1b2f 0%, #162447 100%);
  color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
}

.caixa-principal {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 32px;
  width: 100%;
  max-width: 640px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
}

.titulo {
  font-family: "Chakra Petch", sans-serif;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 24px;
  color: #7cf7c4;
  letter-spacing: 1px;
}

.tela-inicial {
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
}

.texto-inicial {
  font-size: 1rem;
  line-height: 1.6;
  color: #dcdcdc;
}

.iniciar-btn,
.novamente-btn {
  font-family: "Chakra Petch", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: #7cf7c4;
  color: #0d1b2a;
  transition: transform 0.15s ease, background 0.2s ease;
}

.iniciar-btn:hover,
.novamente-btn:hover {
  background: #5be3a8;
  transform: translateY(-2px);
}

.caixa-perguntas {
  font-size: 1.15rem;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: center;
  min-height: 60px;
}

.caixa-alternativas {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.caixa-alternativas button {
  font-family: "Inter", sans-serif;
  font-size: 0.95rem;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid rgba(124, 247, 196, 0.4);
  background: rgba(255, 255, 255, 0.06);
  color: #f5f5f5;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
  text-align: left;
}

.caixa-alternativas button:hover {
  background: rgba(124, 247, 196, 0.15);
  border-color: #7cf7c4;
}

.caixa-resultado {
  display: none;
  flex-direction: column;
  gap: 20px;
  text-align: center;
}

.caixa-resultado.mostrar {
  display: flex;
}

.texto-resultado {
  font-size: 1rem;
  line-height: 1.7;
  color: #e4e4e4;
}