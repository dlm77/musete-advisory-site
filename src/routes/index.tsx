import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

const nav = [
  { label: "Cabinet", href: "#cabinet" },
  { label: "Expertises", href: "#expertises" },
  { label: "Prestations", href: "#prestations" },
  { label: "Secteurs", href: "#secteurs" },
  { label: "Insights", href: "#insights" },
];

const stats = [
  { value: "26", label: "Ans d'expérience", note: "SI, infrastructures critiques, gouvernance & direction générale." },
  { value: "DG", label: "Ancien DG & Administrateur", note: "Compréhension concrète des décisions, risques et responsabilités." },
  { value: "CISA", label: "COBIT 2019", note: "Audit SI, gouvernance et assurance numérique certifiés." },
  { value: "FR·AF", label: "France · Afrique", note: "Standards internationaux et réalités opérationnelles." },
];

const questions = [
  { n: "01", q: "Quels sont nos vrais risques numériques ?", a: "Identifier les vulnérabilités, dépendances critiques, écarts de gouvernance, risques cyber, data et conformité." },
  { n: "02", q: "Nos dispositifs de contrôle sont-ils suffisants ?", a: "Évaluer politiques, processus, responsabilités, contrôles internes, prestataires, architectures et reporting." },
  { n: "03", q: "Que devons-nous prioriser ?", a: "Transformer les constats techniques en décisions de direction : priorités, budgets, responsabilités, délais." },
  { n: "04", q: "Comment démontrer notre maîtrise ?", a: "Produire les preuves, tableaux de bord, rapports exécutifs et feuilles de route attendus par les conseils, régulateurs et bailleurs." },
];

const principles = [
  { title: "Indépendance", body: "Un regard d'auditeur, sans conflit d'intérêts avec un éditeur ou un intégrateur." },
  { title: "Vision dirigeante", body: "Des recommandations formulées pour aider les directions générales et les conseils à décider." },
  { title: "Rigueur", body: "Référentiels reconnus, preuves, constats documentés et recommandations actionnables." },
  { title: "Confidentialité", body: "Discrétion, protection des informations sensibles et confiance comme principes de travail." },
  { title: "Transfert", body: "Nous ne livrons pas seulement des rapports : nous aidons vos équipes à monter en compétence." },
];

const foundations = [
  { title: "Expérience de Direction Générale", tag: "Décision & gouvernance", body: "Pilotage d'organisation, transformation numérique, gestion des risques, arbitrages budgétaires, dialogue avec les conseils, tutelles, régulateurs et bailleurs." },
  { title: "CISA", tag: "Audit & assurance", body: "Audit des systèmes d'information, contrôle interne, maîtrise des risques SI, évaluation des dispositifs de gouvernance et de sécurité." },
  { title: "COBIT 2019", tag: "Gouvernance & valeur", body: "Pilotage du numérique, alignement stratégie / SI, performance IT, responsabilités, indicateurs et création de valeur." },
  { title: "Data & IA", tag: "Cloud, data, IA", body: "Architectures data, pipelines ETL/ELT, cloud, API et systèmes d'IA — pour auditer avec une lecture stratégique, technique et conformité." },
];

const expertises = [
  { n: "I", title: "Gouvernance numérique pour dirigeants", body: "Modèles de gouvernance, comités de pilotage, arbitrages, tableaux de bord, reporting exécutif et alignement technologie / risques / stratégie." },
  { n: "II", title: "Audit SI et assurance numérique", body: "Évaluation indépendante des systèmes, processus, risques et contrôles selon CISA, COBIT, ISO 27001 et NIST CSF." },
  { n: "III", title: "Cybersécurité et résilience", body: "Analyse de risques, PSSI, continuité d'activité, gestion de crise, dispositifs de sécurité et protection des actifs critiques." },
  { n: "IV", title: "e-Gov et transformation publique", body: "Modernisation des services publics numériques, gouvernance des plateformes, interopérabilité, identité numérique, cloud gouvernemental." },
  { n: "V", title: "Données, cloud et IA", body: "Gouvernance des données, revue d'architecture, contrôle des traitements, sécurisation cloud et maîtrise des risques liés à l'IA." },
  { n: "VI", title: "Conformité et réglementation", body: "Mise en conformité RGPD, NIS2, DORA, AI Act, ISO 27001 et exigences sectorielles applicables." },
  { n: "VII", title: "Infrastructures critiques", body: "Audit, gouvernance et sécurisation des datacenters, réseaux et plateformes numériques essentielles." },
];

const prestations = [
  { tag: "Diagnostic", title: "Diagnostic exécutif des risques numériques", body: "Lecture claire des principaux risques SI, cyber, data, IA et conformité, avec priorités de décision." },
  { tag: "Gouvernance", title: "Audit de gouvernance SI", body: "Évaluation des responsabilités, comités, politiques, contrôles, budgets, indicateurs et mécanismes de redevabilité." },
  { tag: "Pilotage", title: "Tableau de bord cyber pour COMEX", body: "Indicateurs compréhensibles par les dirigeants : risques majeurs, incidents, conformité, dette technique." },
  { tag: "Revue", title: "Revue de projets numériques critiques", body: "Analyse des risques, de la gouvernance, des prestataires, des budgets, de l'architecture et de la capacité de mise en œuvre." },
  { tag: "Temps partagé", title: "Accompagnement RSSI / Audit SI", body: "Appui récurrent aux dirigeants pour piloter sécurité, risques, conformité et plans d'action." },
  { tag: "Data & IA", title: "Gouvernance des données & IA", body: "Audit des architectures data, cloud, qualité, traçabilité, risques algorithmiques, conformité AI Act / RGPD." },
];

const secteurs = [
  "Directions générales & CA",
  "Gouvernements & secteur public",
  "Régulateurs & autorités",
  "Banques & assurances",
  "Télécoms & infrastructures",
  "Énergie & mines",
  "Groupes industriels",
  "Bailleurs de fonds",
  "Cabinets & partenaires",
];

const insights = [
  { tag: "Gouvernance", date: "À paraître", title: "Gouvernance numérique en Afrique : par où commencer ?" },
  { tag: "Audit", date: "À paraître", title: "CISA & COBIT 2019 : ce que change un audit indépendant." },
  { tag: "Conformité", date: "À paraître", title: "AI Act, NIS2, DORA : ce que les conseils doivent anticiper." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-semibold tracking-tight">MUSETE</span>
            <span className="eyebrow">Advisory</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[12px] font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-ink px-4 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-parchment transition-colors hover:bg-gold"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main id="top" className="mx-auto max-w-7xl px-6">
        {/* HERO */}
        <section className="border-b border-border pb-24 pt-24 md:pt-32">
          <div className="max-w-[90ch] animate-reveal">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />
              <span className="eyebrow">Cabinet de conseil pour dirigeants · France — Afrique francophone</span>
            </div>
            <h1 className="mb-12 text-balance font-display text-5xl italic leading-[0.98] md:text-7xl lg:text-[5.5rem]">
              Audit SI, gouvernance numérique et{" "}
              <span className="text-gold underline decoration-1 underline-offset-[10px]">cybersécurité</span> pour
              les dirigeants entre la France et l'Afrique francophone.
            </h1>
            <div className="grid items-end gap-12 md:grid-cols-2">
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                MUSETE Advisory accompagne les dirigeants, conseils d'administration, gouvernements,
                régulateurs et organisations internationales dans la gouvernance, l'audit, la sécurisation
                et le pilotage stratégique de leurs systèmes numériques.
              </p>
              <div className="border-l border-border pl-8">
                <p className="mb-4 text-sm leading-relaxed">
                  <span className="eyebrow mr-2">Notre mission</span>
                </p>
                <p className="text-pretty leading-relaxed">
                  Aider les décideurs à transformer les risques numériques, cyber, data et IA en{" "}
                  <em className="font-display italic text-foreground">décisions maîtrisées</em>, en
                  conformité démontrable et en création de valeur durable.
                </p>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-ink px-6 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-parchment transition-colors hover:bg-gold"
              >
                Discuter de votre projet
              </a>
              <a
                href="#expertises"
                className="border border-ink/20 px-6 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-parchment"
              >
                Découvrir nos expertises
              </a>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="grid gap-px border-b border-border bg-border/60 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-8">
              <div className="mb-6 font-display text-5xl italic text-gold">{s.value}</div>
              <div className="mb-2 text-sm font-semibold uppercase tracking-widest">{s.label}</div>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.note}</p>
            </div>
          ))}
        </section>

        {/* CABINET */}
        <section id="cabinet" className="grid gap-20 py-24 md:grid-cols-[1fr_2fr]">
          <aside className="h-fit md:sticky md:top-24">
            <span className="eyebrow mb-4 block">01 — Le cabinet</span>
            <h2 className="mb-6 font-display text-4xl leading-tight">
              Une expertise conçue pour <em>aider les dirigeants à décider</em>.
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Fondé par Didier MUSETE. Un double ancrage France–Afrique, une culture d'auditeur, une
              expérience de Direction Générale.
            </p>
          </aside>

          <div className="space-y-8 text-lg leading-relaxed text-foreground/85">
            <p>
              MUSETE Advisory accompagne les organisations publiques et privées dans la gouvernance,
              l'audit, la sécurisation et la transformation de leurs systèmes numériques.
            </p>
            <p>
              Notre singularité repose sur une expérience rarement réunie :{" "}
              <strong className="font-semibold text-foreground">
                ancien Directeur Général d'un opérateur public national
              </strong>
              , membre de Conseil d'administration, auditeur SI certifié <strong>CISA</strong>,
              certifié <strong>COBIT 2019</strong>, et praticien des infrastructures critiques, de la
              cybersécurité, de l'e-Gov, de la data et de l'IA.
            </p>
            <p>
              Cette expérience nous permet de parler à la fois le langage des dirigeants, des conseils
              d'administration, des DSI, des RSSI, des auditeurs, des régulateurs et des bailleurs.
            </p>
            <p className="border-l-2 border-gold pl-6 font-display text-2xl italic text-foreground">
              Une décision numérique n'est jamais seulement technique. Elle engage la stratégie, les
              finances, la conformité, la réputation, la continuité d'activité, la souveraineté — et
              parfois la responsabilité personnelle des dirigeants.
            </p>
          </div>
        </section>

        {/* 4 QUESTIONS */}
        <section className="border-t border-border py-24">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
            <div>
              <span className="eyebrow mb-3 block">02 — Notre promesse</span>
              <h2 className="max-w-[24ch] font-display text-4xl leading-tight md:text-5xl">
                Aider les dirigeants à répondre à <em>quatre questions simples</em>.
              </h2>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Note de synthèse · Diagnostic exécutif
            </span>
          </div>

          <div className="grid gap-px bg-border/60 md:grid-cols-2">
            {questions.map((q) => (
              <div key={q.n} className="bg-background p-10">
                <div className="mb-6 flex items-baseline gap-4">
                  <span className="font-mono text-xs text-gold">{q.n}</span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <h3 className="mb-4 font-display text-2xl italic leading-snug">{q.q}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{q.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRINCIPES */}
        <section className="border-t border-border py-24">
          <div className="mb-16">
            <span className="eyebrow mb-3 block">03 — Nos principes</span>
            <h2 className="max-w-[26ch] font-display text-4xl leading-tight md:text-5xl">
              La manière dont nous travaillons.
            </h2>
          </div>
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <div key={p.title} className="border-t border-border pt-6">
                <div className="mb-2 flex items-baseline gap-3">
                  <span className="font-mono text-[11px] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl">{p.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FONDATIONS */}
        <section className="border-t border-border py-24">
          <div className="mb-16">
            <span className="eyebrow mb-3 block">04 — Nos fondations professionnelles</span>
            <h2 className="max-w-[30ch] font-display text-4xl leading-tight md:text-5xl">
              Un socle rare : <em>décision, audit, gouvernance</em> et technique.
            </h2>
          </div>
          <div className="grid gap-px bg-border/60 md:grid-cols-2">
            {foundations.map((f) => (
              <div key={f.title} className="bg-background p-10">
                <span className="mb-4 block font-mono text-[11px] uppercase tracking-widest text-gold">
                  {f.tag}
                </span>
                <h3 className="mb-4 font-display text-3xl">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* EXPERTISES - dark band */}
      <section id="expertises" className="border-y border-ink/40 bg-ink py-24 text-parchment">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6 border-b border-parchment/15 pb-6">
            <div>
              <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
                05 — Expertises
              </span>
              <h2 className="max-w-[24ch] font-display text-4xl leading-tight md:text-5xl">
                Nos domaines d'intervention.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-parchment/60">
              Sept domaines, un même fil directeur : outiller la décision des dirigeants.
            </p>
          </div>

          <div className="grid gap-px bg-parchment/10">
            {expertises.map((e) => (
              <article
                key={e.n}
                className="group grid gap-8 bg-ink p-8 transition-colors hover:bg-ink/70 md:grid-cols-[80px_1fr_2fr] md:items-baseline md:p-10"
              >
                <span className="font-display text-3xl italic text-gold">{e.n}</span>
                <h3 className="font-display text-2xl leading-snug md:text-3xl">{e.title}</h3>
                <p className="text-parchment/70 leading-relaxed md:text-base">{e.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6">
        {/* PRESTATIONS */}
        <section id="prestations" className="border-b border-border py-24">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
            <div>
              <span className="eyebrow mb-3 block">06 — Prestations</span>
              <h2 className="max-w-[26ch] font-display text-4xl leading-tight md:text-5xl">
                Prestations pour dirigeants et <em>conseils d'administration</em>.
              </h2>
            </div>
          </div>

          <div className="grid gap-px bg-border/60 md:grid-cols-2 lg:grid-cols-3">
            {prestations.map((p) => (
              <article key={p.title} className="group flex flex-col bg-background p-8">
                <span className="mb-6 font-mono text-[11px] uppercase tracking-widest text-gold">
                  {p.tag}
                </span>
                <h3 className="mb-4 font-display text-2xl leading-snug">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                <div className="mt-8 h-px w-8 bg-ink/30 transition-all duration-500 group-hover:w-full group-hover:bg-gold" />
              </article>
            ))}
          </div>
        </section>

        {/* SECTEURS */}
        <section id="secteurs" className="border-b border-border py-24">
          <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
            <div>
              <span className="eyebrow mb-3 block">07 — Secteurs</span>
              <h2 className="font-display text-4xl leading-tight md:text-5xl">
                Les secteurs que nous accompagnons.
              </h2>
            </div>
            <ul className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {secteurs.map((s, i) => (
                <li
                  key={s}
                  className="flex items-baseline gap-6 border-b border-border py-4 text-lg"
                >
                  <span className="font-mono text-[11px] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* RÉFÉRENCES */}
        <section id="references" className="border-b border-border py-24">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <span className="eyebrow mb-3 block">08 — Missions & références</span>
              <h2 className="mb-8 font-display text-4xl leading-tight md:text-5xl">
                Nos <em>références d'excellence</em>.
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
                <p>
                  Nos références couvrent des missions de <strong>gouvernance numérique</strong>,
                  d'<strong>audit SI</strong>, de <strong>cybersécurité</strong>, de transformation{" "}
                  <strong>e-Gov</strong>, de modernisation d'<strong>infrastructures critiques</strong>,
                  d'accompagnement de <strong>directions générales</strong> et de programmes financés
                  par des <strong>bailleurs internationaux</strong>.
                </p>
                <p className="text-base text-muted-foreground">
                  Pour des raisons de confidentialité, certaines références sont présentées sous forme
                  anonymisée ou détaillées uniquement sur demande, lors d'un échange sécurisé.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center gap-3 bg-ink px-6 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-parchment transition-colors hover:bg-gold"
              >
                Demander nos références →
              </a>
            </div>

            <div className="border border-border bg-secondary/40 p-10">
              <div className="mb-8 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                <span>Dossier confidentiel</span>
                <span>Fig. 08.1</span>
              </div>
              <dl className="space-y-6">
                {[
                  ["Gouvernance & CA", "Opérateur public, ~1 200 collaborateurs"],
                  ["Audit SI indépendant", "Institution financière régionale"],
                  ["Cybersécurité & résilience", "Infrastructure critique nationale"],
                  ["e-Gov / transformation publique", "Ministère régalien"],
                  ["Gouvernance data & IA", "Régulateur sectoriel"],
                  ["Programmes bailleurs", "Banque multilatérale de développement"],
                ].map(([label, val]) => (
                  <div key={label} className="flex items-baseline justify-between gap-8 border-b border-border pb-4">
                    <dt className="text-sm text-muted-foreground">{label}</dt>
                    <dd className="text-right font-display text-lg italic">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* INSIGHTS */}
        <section id="insights" className="border-b border-border py-24">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
            <div>
              <span className="eyebrow mb-3 block">09 — Insights</span>
              <h2 className="max-w-[24ch] font-display text-4xl leading-tight md:text-5xl">
                Publications & analyses.
              </h2>
              <p className="mt-4 max-w-lg text-sm text-muted-foreground">
                Bientôt : nos analyses sur l'audit SI, la gouvernance numérique et la cybersécurité,
                pour les dirigeants en France et en Afrique francophone.
              </p>
            </div>
          </div>

          <div className="grid gap-px bg-border/60 md:grid-cols-3">
            {insights.map((it) => (
              <article key={it.title} className="group flex flex-col justify-between bg-background p-8">
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-gold">
                      {it.tag}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      {it.date}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl leading-snug">{it.title}</h3>
                </div>
                <div className="mt-10 h-px w-8 bg-ink/30 transition-all duration-500 group-hover:w-full group-hover:bg-gold" />
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* CONTACT */}
      <section id="contact" className="bg-ink py-24 text-parchment">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 grid gap-16 md:grid-cols-2">
            <div>
              <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
                10 — Contact
              </span>
              <h2 className="mb-8 font-display text-4xl leading-tight md:text-6xl">
                Parlons de <em>votre projet</em>.
              </h2>
              <p className="max-w-[46ch] leading-relaxed text-parchment/70">
                Un risque à évaluer, une gouvernance à structurer, un projet critique à sécuriser,
                un conseil d'administration à éclairer ? Échangeons en toute confidentialité.
              </p>
              <div className="mt-12 space-y-4">
                <ContactLine tag="Email" value="contact@musete-advisory.com" href="mailto:contact@musete-advisory.com" />
                <ContactLine tag="Tél." value="+33 6 65 01 61 57" href="tel:+33665016157" />
                <ContactLine tag="LinkedIn" value="Profil Didier MUSETE" href="https://www.linkedin.com/in/didier-musete" />
              </div>
            </div>

            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "mailto:contact@musete-advisory.com";
              }}
            >
              <Field label="Nom complet" type="text" name="name" required />
              <Field label="Email professionnel" type="email" name="email" required />
              <Field label="Organisation & fonction" type="text" name="org" />
              <Field label="Votre besoin" type="textarea" name="msg" />
              <button
                type="submit"
                className="w-full bg-parchment py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink transition-colors hover:bg-gold hover:text-parchment"
              >
                Envoyer ma demande →
              </button>
            </form>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 border-t border-parchment/15 pt-8 text-[11px] uppercase tracking-widest text-parchment/50 md:flex-row md:items-center">
            <span>© {new Date().getFullYear()} MUSETE Advisory — Cabinet indépendant.</span>
            <div className="flex gap-8">
              <a href="#" className="hover:text-gold">Mentions légales</a>
              <a href="#" className="hover:text-gold">Confidentialité</a>
              <a href="https://www.linkedin.com/in/didier-musete" className="hover:text-gold">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactLine({ tag, value, href }: { tag: string; value: string; href: string }) {
  return (
    <a
      href={href}
      className="group flex items-baseline gap-6 border-b border-parchment/15 pb-4 transition-colors hover:border-gold"
    >
      <span className="w-16 font-mono text-[11px] uppercase tracking-widest text-gold">{tag}</span>
      <span className="font-display text-xl italic text-parchment group-hover:text-gold">{value}</span>
    </a>
  );
}

function Field({
  label,
  type,
  name,
  required,
}: {
  label: string;
  type: "text" | "email" | "textarea";
  name: string;
  required?: boolean;
}) {
  const shared =
    "w-full border-b border-parchment/20 bg-transparent py-3 text-sm text-parchment placeholder:text-parchment/30 focus:border-gold focus:outline-none transition-colors";
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-parchment/50">
        {label}
      </span>
      {type === "textarea" ? (
        <textarea name={name} rows={3} className={`${shared} resize-none`} required={required} />
      ) : (
        <input type={type} name={name} className={shared} required={required} />
      )}
    </label>
  );
}
