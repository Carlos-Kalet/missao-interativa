# 🎮 Missão Interativa

Um jogo de aventura narrativa onde **cada escolha muda o rumo da história**.  
O protagonista recebe um **nome aleatório** a cada partida e as afirmações finais são **sorteadas**, tornando cada jogada única.

Projeto desenvolvido durante os cursos da **Alura**, com foco em HTML, CSS e JavaScript moderno.

---

## 🌐 Jogue agora

👉 **[Clique aqui para jogar](https://seu-usuario.github.io/missao-interativa/)**

> Substitua `seu-usuario` pelo seu nome de usuário do GitHub após ativar o GitHub Pages.

---

## ✨ Funcionalidades

- 🎬 **Tela inicial** com introdução à missão
- 🎲 **Nome do protagonista sorteado aleatoriamente** a cada partida
- 🧩 **Perguntas com múltiplas alternativas**
- 📜 **Afirmações finais aleatórias** (usando `Math.random()`)
- 🌿 **Caminhos ramificados**: cada escolha leva a uma pergunta diferente
- 🔁 **Botão "Jogar novamente"** para reiniciar a missão
- 📱 **Layout responsivo** com Flexbox
- 🎨 **Fontes personalizadas** (Inter e Chakra Petch via Google Fonts)

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso |
|------------|-----|
| **HTML5** | Estrutura da página |
| **CSS3** | Estilização, Flexbox, variáveis, Google Fonts |
| **JavaScript (ES6+)** | Lógica do jogo, aleatoriedade, manipulação do DOM |

---

## 📁 Estrutura do projeto
missao-interativa/
├── index.html
├── style.css
├── script.js
└── README.md

text

---

## ▶️ Como rodar localmente

Como o projeto **não usa módulos ES**, basta abrir o `index.html` no navegador.  
Se quiser usar um servidor local:

```bash
# Com Python
python -m http.server 8000
