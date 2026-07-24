# Portfolio - Maicon Mendes

Portfólio pessoal com tema inspirado no **VS Code**, construído do zero em HTML, CSS e JavaScript puro (sem frameworks). A interface simula um editor de código: sidebar com "arquivos", abas no topo, status bar e cada página nomeada como um arquivo (`home.tsx`, `about.html`, `projects.js`, etc.).

## Funcionalidades

- **Navegação estilo editor**: troca de "abas" pela topbar ou pela sidebar, com sincronização de estado e hash na URL.
- **Efeito typewriter** na home, alternando frases.
- **Timeline de experiência** com linha vertical e pontos animados.
- **Barras de skills** que animam ao entrar na viewport (`IntersectionObserver`).
- **Formulário de contato** integrado ao [Formspree](https://formspree.io) (envio sem backend).
- **Cursor customizado** que segue o mouse, com fade-in nas páginas e smooth scroll.
- **Responsivo** e com suporte a `prefers-reduced-motion`.

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis, grid, flexbox, animações, `@media`)
- JavaScript (ES6+, sem dependências)
- [Formspree](https://formspree.io) para o formulário de contato
- Google Fonts: JetBrains Mono + Space Grotesk
- Deploy no [GitHub Pages](https://pages.github.com)

## Estrutura

```
.
├── index.html
├── css/
│   ├── base.css        (reset, variáveis, tipografia)
│   ├── layout.css      (sidebar, abas, status bar, páginas)
│   ├── components.css  (badge, card, botões, comment, section-title)
│   └── animations.css  (fade-in, cursor, hover, smooth scroll)
└── js/
    └── main.js         (navegação, typewriter, skills, formulário, cursor)
```

## Rodando localmente

Por ser estático, basta abrir o `index.html` no navegador. Para servir localmente (recomendado, para o `fetch` do formulário funcionar):

```bash
npx http-server . -p 8123
```

Depois acesse `http://localhost:8123`.

## Deploy no GitHub Pages

1. Suba o projeto para um repositório no GitHub (ver seção abaixo).
2. No repositório: **Settings** > **Pages**.
3. Em **Source**, escolha **Deploy from a branch**.
4. Selecione a branch `main` e a pasta `/ (root)`. Salve.
5. Aguarde ~1 min. O site fica em `https://<usuario>.github.io/<repositorio>/`.

## Subindo para o GitHub (primeira vez)

```bash
git init
git add .
git commit -m "Primeiro commit: portfolio estilo VS Code"
git branch -M main
git remote add origin https://github.com/<usuario>/<repositorio>.git
git push -u origin main
```

A cada mudança futura: `git add .`, `git commit -m "descricao"`, `git push`.

## Configurar o formulário (Formspree)

1. Crie um formulário em [formspree.io](https://formspree.io) e copie o endpoint.
2. Em `js/main.js`, substitua `YOUR_FORM_ID` na `action` do formulário de contato pelo seu ID.

## Deploy

Link do deploy: _[adicionar após publicar no GitHub Pages]_

---

Feito por **Maicon Mendes**.
