(function () {
  "use strict";

  const TABS = {
    home: {
      ext: "tsx",
      lang: "TypeScript React",
      render: () => `
        <section class="page">
          <p class="comment">// hello world !! Welcome to my portfolio</p>

          <h1 class="home__name">
            <span class="home__name-line home__name-line--white">Mendes</span>
            <span class="home__name-line home__name-line--magenta">Dev</span>
          </h1>

          <div class="home__tags">
            <span class="badge"><span class="badge__dot badge__dot--yellow"></span>Estagio Engenharia</span>
            <span class="badge"><span class="badge__dot badge__dot--cyan"></span>Desenvolvedor Junior</span>
            <span class="badge"><span class="badge__dot badge__dot--magenta"></span>Joinville, BR</span>
          </div>

          <p class="home__typewriter">
            <span class="home__typewriter-text" id="typewriter"></span><span class="home__cursor">▍</span>
          </p>

          <p class="home__bio">
            Tenho 20 anos, estou em transição de carreira
            para desenvolvimento de software. Gosto de sistemas funcionais,
            código limpo e nunca parar de aprender.
          </p>

          <div class="home__actions">
            <button class="btn-primary" data-goto="projects">📁 Projetos</button>
            <button class="btn-outline" data-goto="about">👤 Sobre mim</button>
            <button class="btn-outline" data-goto="contact">✉ Contato</button>
          </div>

          <div class="home__stats">
            <div class="home__stat">
              <div class="home__stat-value">1+</div>
              <div class="home__stat-label">ANOS DE ESTUDO</div>
            </div>
            <div class="home__stat">
              <div class="home__stat-value">X</div>
              <div class="home__stat-label">PROJETOS</div>
            </div>
            <div class="home__stat">
              <div class="home__stat-value">∞</div>
              <div class="home__stat-label">CURIOSIDADE</div>
            </div>
            <div class="home__stat">
              <div class="home__stat-value">↑</div>
              <div class="home__stat-label">SEMPRE APRENDENDO</div>
            </div>
          </div>

          <div class="home__socials">
            <span class="home__socials-label">// encontre-me em:</span>
            <a class="badge" href="https://linkedin.com/in/maiconmendesdev" target="_blank" rel="noopener">LinkedIn</a>
            <a class="badge" href="https://www.instagram.com/maiconn.mendes/" target="_blank" rel="noopener">Instagran</a>
            <a class="badge" href="https://github.com/Mendes006" target="_blank" rel="noopener">GitHub</a>
            <a class="badge" href="mailto:maiconmendes.ph@gmail.com">Email</a>
          </div>
        </section>`,
      onMount: startTypewriter,
    },

    about: {
      ext: "html",
      lang: "HTML",
      render: () => `
        <section class="page about">
          <p class="comment">&lt;!-- about.html - Mendes --&gt;</p>
          <h1 class="section-title">About Me</h1>
          <p class="comment about__subtitle">// who I am · what I do · where I'm going</p>

          <div class="card about__bio">
            <p>
              Tenho 20 anos, moro em Joinville (SC) e estou cursando Engenharia de
              Software. Tenho vivência prática com automação de processos (n8n),
              integração de IA em fluxos operacionais e atendimento técnico/comercial,
              o que me dá visão de produto e de problema real, não só de código.
              Sou autodidata, aprendo rápido e acredito que consistência bate
              talento no longo prazo.
            </p>
          </div>

          <h2 class="about__heading">FOCO ATUAL</h2>
          <div class="about__grid">
            <div class="about__item">
              <span class="about__item-icon">🖥</span>
              <span>Desenvolvendo meu portfólio do zero em HTML, CSS e JS</span>
            </div>
            <div class="about__item">
              <span class="about__item-icon">📚</span>
              <span>Estudando lógica de programação e fundamentos de dev</span>
            </div>
            <div class="about__item">
              <span class="about__item-icon">🚀</span>
              <span>Participando do ecossistema de inovação de Joinville (Liga Ágora / Ágora Tech Park)</span>
            </div>
            <div class="about__item">
              <span class="about__item-icon">⚡</span>
              <span>Buscando minha primeira vaga como Dev Júnior ou Estágio (Full Stack / automação-IA)</span>
            </div>
            <div class="about__item">
              <span class="about__item-icon">🌐</span>
              <span>Integrando IA a fluxos e processos operacionais no dia a dia</span>
            </div>
            <div class="about__item">
              <span class="about__item-icon">🎯</span>
              <span>Sempre aprendendo, sempre evoluindo</span>
            </div>
          </div>

          <h2 class="about__heading">EDUCAÇÃO</h2>
          <div class="about__grid">
            <div class="about__item">
              <span class="about__item-icon">🎓</span>
              <span>Bacharelado em Engenharia de Software, Católica de Santa Catarina (2025-2029 · Cursando)</span>
            </div>
            <div class="about__item">
              <span class="about__item-icon">🎓</span>
              <span>Técnico em Desenvolvimento de Sistemas, SENAI/SC (2022-2024 · Concluído)</span>
            </div>
          </div>
        </section>`,
    },

    projects: {
      ext: "js",
      lang: "JavaScript",
      render: () => `
        <section class="page projects">
          <p class="comment">// projects.js : things I've built &amp; shipped</p>
          <h1 class="section-title">Projects</h1>
          <p class="comment projects__subtitle">const projects = [ ...shipped, ...building ]</p>

          <div class="projects__grid">
            ${projectCard({
              icon: "💻",
              cats: ["FRONT END", "PORTFÓLIO", "HTML"],
              name: "Este Portfólio",
              desc: "Portfólio pessoal com tema inspirado no VS Code, feito do zero. Em construção.",
              tech: ["HTML", "CSS", "JavaScript"],
            })}
            ${projectCard({
              icon: "🚧",
              cats: ["EM BREVE"],
              name: "Em breve 🚧",
              desc: "Meu próximo projeto está a caminho.",
              tech: [],
            })}
            ${projectCard({
              icon: "📦",
              cats: ["PLACEHOLDER"],
              name: "[placeholder]",
              desc: "Espaço reservado para um projeto futuro.",
              tech: [],
            })}
            ${projectCard({
              icon: "📦",
              cats: ["PLACEHOLDER"],
              name: "[placeholder]",
              desc: "Espaço reservado para um projeto futuro.",
              tech: [],
            })}
          </div>
        </section>`,
    },

    skills: {
      ext: "json",
      lang: "JSON",
      render: () => `
        <section class="page skills">
          <p class="comment">// skills.json : tech stack &amp; tools I actually use</p>
          <h1 class="section-title">Skills</h1>
          <p class="comment skills__subtitle">{ "status": "always_learning", "passion": "immeasurable" }</p>

          <div class="skills__grid">
            ${skillSection("LINGUAGENS & DEV", [
              ["JavaScript", 65, "orange"],
              ["HTML / CSS", 75, "cyan"],
              ["C#", 45, "purple"],
              ["PHP", 40, "green"],
            ])}
            ${skillSection("DADOS", [
              ["SQL", 55, "cyan"],
              ["MySQL", 55, "green"],
            ])}
            ${skillSection("FERRAMENTAS & PRÁTICAS", [
              ["Git", 65, "purple"],
              ["APIs REST", 55, "cyan"],
              ["n8n", 70, "green"],
              ["Automação de Processos", 75, "orange"],
            ])}
            ${skillSection("SOFT SKILLS", [
              ["Resolução de problemas", 90, "green"],
              ["Comunicação", 88, "cyan"],
              ["Proatividade", 92, "orange"],
              ["Trabalho em equipe", 88, "purple"],
            ])}
          </div>
        </section>`,
      onMount: startSkillBars,
    },

    experience: {
      ext: "ts",
      lang: "TypeScript",
      render: () => `
        <section class="page experience">
          <p class="comment">// experience.ts : professional journey</p>
          <h1 class="section-title">Experience</h1>
          <p class="comment experience__subtitle">interface Career extends Timeline {}</p>

          <ol class="timeline">
            <li class="timeline__entry">
              <div class="timeline__dot"></div>
              <div class="card timeline__card">
                <div class="timeline__period">Mai 2026 - Jun 2026</div>
                <h3 class="timeline__role">Automação, Processos e Cobrança | Devalor Soluções</h3>
                <div class="timeline__tags">
                  <span class="badge">n8n</span>
                  <span class="badge">Integração de IA</span>
                  <span class="badge">Automação de processos</span>
                </div>
              </div>
            </li>

            <li class="timeline__entry">
              <div class="timeline__dot"></div>
              <div class="card timeline__card">
                <div class="timeline__period">Mar 2026 - Mai 2026</div>
                <h3 class="timeline__role">SDR Comercial | Devalor Soluções</h3>
                <div class="timeline__tags">
                  <span class="badge">Prospecção</span>
                  <span class="badge">Qualificação de leads</span>
                  <span class="badge">Abordagem consultiva</span>
                </div>
              </div>
            </li>

            <li class="timeline__entry">
              <div class="timeline__dot"></div>
              <div class="card timeline__card">
                <div class="timeline__period">Fev 2025 - Mar 2026</div>
                <h3 class="timeline__role">Engenharia de Produtos, Estagiário | Sensorville (Automação, IIoT e I4.0)</h3>
                <div class="timeline__tags">
                  <span class="badge">Especificação técnica</span>
                  <span class="badge">Suporte técnico</span>
                  <span class="badge">Automação de rotinas</span>
                </div>
              </div>
            </li>
          </ol>
        </section>`,
    },

    contact: {
      ext: "css",
      lang: "CSS",
      render: () => `
        <section class="page contact">
          <p class="comment">/* contact.css : let's build something */</p>
          <h1 class="section-title">Contact</h1>
          <p class="comment contact__subtitle">// open to work &amp; good conversations</p>

          <div class="contact__grid">
            <div class="contact__col">
              <h2 class="contact__heading">FIND ME ON</h2>
              <ul class="social-list">
                <li>
                  <a class="social-link" href="https://linkedin.com/in/maiconmendesdev" target="_blank" rel="noopener">
                    <span class="social-link__icon">💼</span>
                    <span class="social-link__body">
                      <span class="social-link__label">LinkedIn</span>
                      <span class="social-link__url">linkedin.com/in/maiconmendesdev</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a class="social-link" href="mailto:maiconmendes.ph@gmail.com">
                    <span class="social-link__icon">✉</span>
                    <span class="social-link__body">
                      <span class="social-link__label">Email</span>
                      <span class="social-link__url">maiconmendes.ph@gmail.com</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="contact__col">
              <h2 class="contact__heading">SEND A MESSAGE</h2>
              <form class="contact-form" id="contactForm"
                    action="https://formspree.io/f/maqrpznq" method="POST">
                <label class="contact-form__field">
                  <span class="contact-form__label comment">// YOUR_NAME <span class="req">*</span></span>
                  <input type="text" name="name" placeholder="string" required />
                </label>
                <label class="contact-form__field">
                  <span class="contact-form__label comment">// YOUR_EMAIL <span class="req">*</span></span>
                  <input type="email" name="email" placeholder="string" required />
                </label>
                <label class="contact-form__field">
                  <span class="contact-form__label comment">// MESSAGE <span class="req">*</span></span>
                  <textarea name="message" rows="5" placeholder="'sua mensagem'" required></textarea>
                </label>
                <button type="submit" class="btn-primary contact-form__submit">
                  → send_message()
                </button>
                <p class="contact-form__status" id="formStatus" role="status" aria-live="polite"></p>
                <p class="comment contact-form__note">// Powered by Formspree</p>
              </form>
            </div>
          </div>
        </section>`,
      onMount: bindContactForm,
    },
  };

  const DEFAULT_TAB = "home";

  function projectCard({ icon, cats, name, desc, tech }) {
    const techBadges = tech.length
      ? `<div class="card__tech">${tech
          .map((t) => `<span class="badge">${t}</span>`)
          .join("")}</div>`
      : "";
    return `
      <article class="card project-card">
        <div class="project-card__top">
          <span class="project-card__icon">${icon}</span>
        </div>
        <div class="project-card__cats">${cats.join(" · ")}</div>
        <h3 class="project-card__name">${name}</h3>
        <p class="project-card__desc">${desc}</p>
        ${techBadges}
      </article>`;
  }

  function skillSection(title, items) {
    const bars = items
      .map(
        ([label, pct, color]) => `
        <div class="skill">
          <div class="skill__head">
            <span class="skill__label">${label}</span>
            <span class="skill__pct">${pct}%</span>
          </div>
          <div class="skill__track">
            <div class="skill__fill skill__fill--${color}" data-pct="${pct}" style="width:0%"></div>
          </div>
        </div>`
      )
      .join("");
    return `
      <div class="skills__section">
        <h2 class="skills__title">${title}</h2>
        ${bars}
      </div>`;
  }

  const TYPEWRITER_PHRASES = [
    "Cursando Engenharia de Software",
    "Automação de processos e IA aplicada",
    "Em busca da minha primeira vaga como dev",
  ];

  let activeTimers = [];
  let activeObservers = [];

  function clearActiveTimers() {
    activeTimers.forEach((t) => clearTimeout(t));
    activeTimers = [];
    activeObservers.forEach((o) => o.disconnect());
    activeObservers = [];
  }

  function startTypewriter() {
    const el = document.getElementById("typewriter");
    if (!el) return;

    const TYPE_SPEED = 65;
    const ERASE_SPEED = 35;
    const HOLD = 1600;
    const GAP = 400;

    let phraseIndex = 0;

    function typePhrase() {
      if (!document.body.contains(el)) return;

      const phrase = TYPEWRITER_PHRASES[phraseIndex];
      let i = 0;

      function typeChar() {
        el.textContent = phrase.slice(0, i);
        if (i < phrase.length) {
          i++;
          activeTimers.push(setTimeout(typeChar, TYPE_SPEED));
        } else {
          activeTimers.push(setTimeout(eraseChar, HOLD));
        }
      }

      function eraseChar() {
        el.textContent = phrase.slice(0, i);
        if (i > 0) {
          i--;
          activeTimers.push(setTimeout(eraseChar, ERASE_SPEED));
        } else {
          phraseIndex = (phraseIndex + 1) % TYPEWRITER_PHRASES.length;
          activeTimers.push(setTimeout(typePhrase, GAP));
        }
      }

      typeChar();
    }

    typePhrase();
  }

  function startSkillBars() {
    const fills = document.querySelectorAll(".skill__fill");
    if (!fills.length) return;

    if (!("IntersectionObserver" in window)) {
      fills.forEach((f) => (f.style.width = f.dataset.pct + "%"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fill = entry.target;
            fill.style.width = fill.dataset.pct + "%";
            obs.unobserve(fill);
          }
        });
      },
      { threshold: 0.3 }
    );

    fills.forEach((f) => observer.observe(f));
    activeObservers.push(observer);
  }

  function bindContactForm() {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (form.action.includes("maqrpznq")) {
        status.textContent =
        status.className = "contact-form__status is-error";
        return;
      }

      status.textContent = "// enviando...";
      status.className = "contact-form__status";

      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          form.reset();
          status.textContent = "// mensagem enviada! obrigado :)";
          status.className = "contact-form__status is-success";
        } else {
          status.textContent = "// erro ao enviar. tente novamente.";
          status.className = "contact-form__status is-error";
        }
      } catch (err) {
        status.textContent = "// falha de rede. tente novamente.";
        status.className = "contact-form__status is-error";
      }
    });
  }

  function initCustomCursor() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (reduce || !finePointer) return;

    const dot = document.createElement("div");
    dot.className = "cursor-dot";
    document.body.appendChild(dot);

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    document.addEventListener("mousemove", (e) => {
      tx = e.clientX;
      ty = e.clientY;
    });

    function loop() {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      dot.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    document.addEventListener("mouseover", (e) => {
      if (e.target.closest("a, button, .file, .tab, input, textarea")) {
        dot.classList.add("cursor-dot--active");
      }
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest("a, button, .file, .tab, input, textarea")) {
        dot.classList.remove("cursor-dot--active");
      }
    });
  }

  const contentEl = document.getElementById("content");
  const statusLangEl = document.getElementById("statusLang");
  const tabEls = document.querySelectorAll(".tab");
  const fileEls = document.querySelectorAll(".file");

  function activateTab(tabKey) {
    const tab = TABS[tabKey];
    if (!tab) return;

    clearActiveTimers();

    contentEl.innerHTML = tab.render();

    tabEls.forEach((el) => {
      el.classList.toggle("active", el.dataset.tab === tabKey);
    });

    fileEls.forEach((el) => {
      el.classList.toggle("active", el.dataset.tab === tabKey);
    });

    statusLangEl.textContent = tab.lang;

    if (window.location.hash !== "#" + tabKey) {
      history.replaceState(null, "", "#" + tabKey);
    }

    if (typeof tab.onMount === "function") {
      tab.onMount();
    }
  }

  function bindEvents() {
    [...tabEls, ...fileEls].forEach((el) => {
      el.addEventListener("click", (e) => {
        if (e.target.classList.contains("tab__close")) {
          e.stopPropagation();
          return;
        }
        activateTab(el.dataset.tab);
      });
    });

    contentEl.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-goto]");
      if (trigger) {
        e.preventDefault();
        activateTab(trigger.dataset.goto);
      }
    });
  }

  function init() {
    bindEvents();
    initCustomCursor();

    const fromHash = window.location.hash.replace("#", "");
    const initialTab = TABS[fromHash] ? fromHash : DEFAULT_TAB;
    activateTab(initialTab);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
