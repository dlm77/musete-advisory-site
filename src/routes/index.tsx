import { createFileRoute } from "@tanstack/react-router";
const logoAsset = { url: "/musete-logo.png" };
import heroBoardroom from "@/assets/hero-boardroom.jpg";
import architecture from "@/assets/section-architecture.jpg";
import datacenter from "@/assets/section-datacenter.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "MUSETE Advisory | Audit SI, gouvernance & cybersécurité pour dirigeants",
      },
      {
        name: "description",
        content:
          "Cabinet de conseil indépendant pour dirigeants, conseils d'administration, gouvernements et régulateurs. Audit SI, gouvernance numérique, cybersécurité et IA en France et en Afrique francophone.",
      },
      {
        name: "keywords",
        content:
          "audit SI, gouvernance numérique, cybersécurité, conseil dirigeants, transformation digitale, data & IA, Afrique francophone, France, conseil d'administration, régulateur, DSI, RSSI",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "language", content: "fr-FR" },
      { property: "og:site_name", content: "MUSETE Advisory" },
      { property: "og:locale", content: "fr_FR" },
      {
        property: "og:title",
        content:
          "MUSETE Advisory | Audit SI, gouvernance & cybersécurité pour dirigeants",
      },
      {
        property: "og:description",
        content:
          "Audit SI, gouvernance numérique et cybersécurité pour dirigeants en France et en Afrique francophone.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "MUSETE Advisory | Conseil aux dirigeants",
      },
      {
        name: "twitter:description",
        content:
          "Audit SI, gouvernance numérique et cybersécurité pour dirigeants en France et en Afrique francophone.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "MUSETE Advisory",
          description:
            "Cabinet de conseil indépendant en audit SI, gouvernance numérique, cybersécurité, data & IA pour dirigeants, conseils d'administration, gouvernements et régulateurs.",
          areaServed: [
            { "@type": "Country", name: "France" },
            { "@type": "Place", name: "Afrique francophone" },
          ],
          knowsAbout: [
            "Audit des systèmes d'information",
            "Gouvernance numérique",
            "Cybersécurité",
            "Data & Intelligence Artificielle",
            "Transformation digitale",
            "Conseil aux dirigeants",
          ],
          serviceType: [
            "Audit SI",
            "Gouvernance numérique",
            "Cybersécurité",
            "Data & IA",
          ],
        }),
      },
    ],
  }),
});


const nav = [
  { label: "Cabinet", href: "#cabinet" },
  { label: "Expertises", href: "#expertises" },
  { label: "Prestations", href: "#prestations" },
  { label: "Références", href: "#references" },
  { label: "Insights", href: "#insights" },
];

/* ────────────────────────────────────────── Shared components */

function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  // Logo already has navy + gold; on dark bg we invert via mix-blend to keep gold legible.
  return (
    <img
      src={logoAsset.url}
      alt="MUSETE Advisory"
      className={`h-10 w-auto md:h-11 ${variant === "light" ? "brightness-0 invert" : ""}`}
      style={variant === "light" ? { filter: "brightness(0) invert(1)" } : undefined}
    />
  );
}

function Eyebrow({ children, tone = "gold" }: { children: React.ReactNode; tone?: "gold" | "navy" | "cream" }) {
  const color =
    tone === "gold" ? "text-gold" : tone === "navy" ? "text-navy-deep/70" : "text-cream/70";
  return <span className={`eyebrow ${color}`}>{children}</span>;
}

/* ────────────────────────────────────────── Page */

function Index() {
  return (
    <div className="min-h-screen bg-cream text-navy-deep">
      <TopNav />
      <Hero />
      <MarqueeBar />
      <Cabinet />
      <Questions />
      <Expertises />
      <Prestations />
      <Principes />
      <Fondations />
      <Secteurs />
      <References />
      <Insights />
      <Contact />
      <Footer />
    </div>
  );
}

/* ────────────────────────────────────────── Navigation */

function TopNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-navy-deep/10 bg-cream/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="MUSETE Advisory" className="h-10 w-auto" />
        </a>
        <nav className="hidden items-center gap-10 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="eyebrow text-navy-deep/70 transition-colors hover:text-gold"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

/* ────────────────────────────────────────── Hero */

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-navy-deep text-cream">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBoardroom}
          alt=""
          className="h-full w-full object-cover animate-slow-zoom"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-navy-deep/40" />
      </div>

      {/* Frame corner ornaments */}
      <div className="pointer-events-none absolute inset-6 border border-cream/10 md:inset-10" />
      <span className="pointer-events-none absolute left-6 top-6 h-4 w-4 border-l border-t border-gold md:left-10 md:top-10 md:h-6 md:w-6" />
      <span className="pointer-events-none absolute right-6 top-6 h-4 w-4 border-r border-t border-gold md:right-10 md:top-10 md:h-6 md:w-6" />
      <span className="pointer-events-none absolute bottom-6 left-6 h-4 w-4 border-b border-l border-gold md:bottom-10 md:left-10 md:h-6 md:w-6" />
      <span className="pointer-events-none absolute bottom-6 right-6 h-4 w-4 border-b border-r border-gold md:bottom-10 md:right-10 md:h-6 md:w-6" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-between px-6 pb-16 pt-32 md:px-16 md:pb-24 md:pt-40">
        {/* Top eyebrow */}
        <div className="animate-fade flex flex-wrap items-center gap-4 text-cream/70">
          <span className="h-px w-10 bg-gold" />
          <span className="eyebrow text-gold">Cabinet indépendant · Paris · Afrique francophone</span>
        </div>

        {/* Headline */}
        <div className="max-w-5xl animate-reveal">
          <h1 className="font-display text-[13vw] leading-[0.9] tracking-tight text-cream md:text-[7.5rem] lg:text-[9rem]">
            Décider,
            <br />
            <span className="italic text-gold">en connaissance</span>
            <br />
            de cause.
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-cream/75 md:text-xl">
            Audit SI, gouvernance numérique et cybersécurité pour dirigeants, conseils d'administration,
            gouvernements et régulateurs, entre la France et l'Afrique francophone.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 bg-gold px-8 py-4 text-navy-deep transition-all hover:bg-cream"
            >
              <span className="eyebrow">Discuter de votre projet</span>
              <span className="inline-block h-px w-8 bg-navy-deep transition-all group-hover:w-14" />
            </a>
            <a
              href="#expertises"
              className="eyebrow text-cream/70 underline-offset-8 transition-colors hover:text-gold hover:underline"
            >
              Découvrir nos expertises →
            </a>
          </div>
        </div>

        {/* Bottom meta line */}
        <div className="mt-16 grid gap-4 border-t border-cream/15 pt-6 md:grid-cols-3">
          <MetaLine k="Fondateur" v="Didier MUSETE" />
          <MetaLine k="Certifications" v="CISA · COBIT 2019" />
          <MetaLine k="Depuis" v="26 années d'expérience" />
        </div>
      </div>
    </section>
  );
}

function MetaLine({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="eyebrow text-gold">{k}</span>
      <span className="font-display text-lg italic text-cream/90">{v}</span>
    </div>
  );
}

/* ────────────────────────────────────────── Marquee / trust bar */

function MarqueeBar() {
  const items = [
    "Directions générales",
    "Conseils d'administration",
    "Gouvernements",
    "Régulateurs",
    "Bailleurs internationaux",
    "Banques & assurances",
    "Télécoms",
    "Énergie",
  ];
  return (
    <div className="border-b border-navy-deep/10 bg-navy-deep py-6 text-cream">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 md:justify-between md:px-16">
        {items.map((it) => (
          <span key={it} className="eyebrow text-cream/60">
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────── Cabinet (about) */

function Cabinet() {
  return (
    <section id="cabinet" className="relative bg-cream py-32">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-12 md:px-16">
        <aside className="md:col-span-4">
          <Eyebrow>01 · Le cabinet</Eyebrow>
          <h2 className="mt-6 font-display text-5xl leading-[1.02] md:text-6xl">
            Une expertise conçue pour <span className="italic text-gold">aider les dirigeants à décider</span>.
          </h2>

          <div className="mt-12 border border-navy-deep/10 bg-bone p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="eyebrow text-gold">Fondateur</span>
            </div>
            <p className="font-display text-3xl">Didier MUSETE</p>
            <p className="mt-2 text-sm text-navy-deep/70">
              Ancien DG d'un opérateur public national · Auditeur SI certifié CISA · COBIT 2019
            </p>
          </div>
        </aside>

        <div className="md:col-span-8 md:pl-8">
          <div className="space-y-7 text-lg leading-[1.75] text-navy-deep/85 md:text-xl">
            <p className="first-letter:mr-3 first-letter:float-left first-letter:font-display first-letter:text-7xl first-letter:font-medium first-letter:leading-[0.85] first-letter:text-gold">
              MUSETE Advisory accompagne les organisations publiques et privées dans la gouvernance,
              l'audit, la sécurisation et la transformation de leurs systèmes numériques.
            </p>
            <p>
              Notre singularité repose sur une expérience rarement réunie :{" "}
              <strong className="font-semibold">ancien Directeur Général d'un opérateur public national</strong>,
              membre de Conseil d'administration, praticien des infrastructures critiques, de la
              cybersécurité, de l'e-Gov, de la data et de l'IA.
            </p>
            <p>
              Nous parlons le langage des dirigeants, des conseils, des DSI, des RSSI, des auditeurs,
              des régulateurs et des bailleurs. Une décision numérique n'est jamais seulement technique.
              Elle engage la stratégie, les finances, la conformité et, parfois, la responsabilité
              personnelle des dirigeants.
            </p>
          </div>

          <blockquote className="mt-16 border-l-2 border-gold pl-8">
            <p className="font-display text-3xl italic leading-tight md:text-4xl">
              « Notre métier : produire des diagnostics clairs, des arbitrages compréhensibles et des
              feuilles de route actionnables. »
            </p>
            <footer className="mt-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow">Didier MUSETE · Fondateur</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────── Four questions */

function Questions() {
  const items = [
    {
      q: "Quels sont nos vrais risques numériques ?",
      a: "Vulnérabilités, dépendances critiques, écarts de gouvernance, risques cyber, data et conformité.",
    },
    {
      q: "Nos dispositifs de contrôle sont-ils suffisants ?",
      a: "Politiques, processus, responsabilités, contrôles internes, prestataires, architectures et reporting.",
    },
    {
      q: "Que devons-nous prioriser ?",
      a: "Transformer les constats techniques en décisions de direction : priorités, budgets, délais.",
    },
    {
      q: "Comment démontrer notre maîtrise ?",
      a: "Preuves, tableaux de bord, rapports exécutifs et feuilles de route pour conseils, régulateurs et bailleurs.",
    },
  ];

  return (
    <section className="relative bg-navy-deep py-32 text-cream">
      {/* Architecture image inset */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-16">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={architecture}
                alt="Architecture institutionnelle"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1200}
                height={1504}
              />
              <div className="absolute inset-0 bg-navy-deep/20" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-cream/70">
                <span className="eyebrow">Musete Advisory</span>
                <span className="eyebrow">Structure & décision</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 md:pl-8">
            <Eyebrow tone="gold">02 · Notre promesse</Eyebrow>
            <h2 className="mt-6 font-display text-5xl leading-[1.02] md:text-6xl">
              Aider les dirigeants à répondre à <span className="italic text-gold">quatre questions simples</span>.
            </h2>

            <div className="mt-12 divide-y divide-cream/10 border-y border-cream/10">
              {items.map((it, i) => (
                <details key={it.q} className="group py-6" open={i === 0}>
                  <summary className="flex cursor-pointer items-center justify-between gap-6 list-none">
                    <span className="font-display text-2xl italic md:text-3xl">{it.q}</span>
                    <span className="text-2xl text-gold transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-cream/70">{it.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────── Expertises */

function Expertises() {
  const items = [
    { title: "Gouvernance numérique pour dirigeants", body: "Modèles de gouvernance, comités, arbitrages, tableaux de bord, reporting exécutif et alignement technologie / risques / stratégie." },
    { title: "Audit SI & assurance numérique", body: "Évaluation indépendante des systèmes, processus, risques et contrôles selon CISA, COBIT, ISO 27001 et NIST CSF." },
    { title: "Cybersécurité & résilience", body: "Analyse de risques, PSSI, continuité d'activité, gestion de crise, protection des actifs critiques." },
    { title: "e-Gov & transformation publique", body: "Services publics numériques, gouvernance des plateformes, interopérabilité, identité numérique, cloud gouvernemental." },
    { title: "Données, cloud & IA", body: "Gouvernance des données, revue d'architecture, sécurisation cloud, maîtrise des risques liés à l'IA." },
    { title: "Conformité & réglementation", body: "Mise en conformité RGPD, NIS2, DORA, AI Act, ISO 27001 et exigences sectorielles." },
    { title: "Infrastructures critiques", body: "Audit, gouvernance et sécurisation des datacenters, réseaux et plateformes numériques essentielles." },
  ];

  return (
    <section id="expertises" className="bg-cream py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-16">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6 border-b border-navy-deep/15 pb-8">
          <div>
            <Eyebrow>03 · Expertises</Eyebrow>
            <h2 className="mt-6 max-w-[18ch] font-display text-5xl leading-[1.02] md:text-6xl">
              Sept domaines, un même <span className="italic text-gold">fil directeur</span>.
            </h2>
          </div>
          <p className="max-w-sm text-navy-deep/70">
            Outiller la décision pour que la gouvernance numérique cesse d'être un angle mort du
            comité exécutif.
          </p>
        </div>

        <div className="grid grid-cols-1 border-t border-navy-deep/10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((e, i) => (
            <article
              key={e.title}
              className={`group relative border-b border-navy-deep/10 p-10 transition-colors hover:bg-navy-deep hover:text-cream ${
                i % 3 !== 2 ? "lg:border-r" : ""
              } ${i % 2 !== 1 ? "md:border-r lg:border-r-0" : ""} ${i % 3 !== 2 ? "lg:border-r" : ""}`}
            >
              <h3 className="mb-4 font-display text-3xl leading-tight">{e.title}</h3>
              <p className="text-sm leading-relaxed text-navy-deep/70 group-hover:text-cream/70">{e.body}</p>
              <span className="mt-10 inline-flex h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
            </article>
          ))}

          {/* filler cell to keep grid balanced (7 items) */}
          <div className="hidden items-center justify-center border-b border-navy-deep/10 bg-bone p-10 text-center lg:flex">
            <div>
              <Eyebrow>Panorama</Eyebrow>
              <p className="mt-4 font-display text-2xl italic leading-snug">
                Un dispositif complet, du <span className="text-gold">diagnostic</span> à la{" "}
                <span className="text-gold">mise en œuvre</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────── Prestations (with image band) */

function Prestations() {
  const items = [
    { tag: "Diagnostic", title: "Diagnostic exécutif des risques numériques", body: "Lecture claire des principaux risques SI, cyber, data, IA et conformité, avec priorités de décision." },
    { tag: "Gouvernance", title: "Audit de gouvernance SI", body: "Évaluation des responsabilités, comités, politiques, contrôles, budgets et redevabilité." },
    { tag: "Pilotage", title: "Tableau de bord cyber pour COMEX", body: "Indicateurs compréhensibles par les dirigeants : risques majeurs, incidents, conformité, dette technique." },
    { tag: "Revue", title: "Revue de projets numériques critiques", body: "Risques, gouvernance, prestataires, budgets, architecture et capacité de mise en œuvre." },
    { tag: "Temps partagé", title: "Accompagnement RSSI / Audit SI", body: "Appui récurrent aux dirigeants pour piloter sécurité, risques, conformité et plans d'action." },
    { tag: "Data & IA", title: "Gouvernance des données & IA", body: "Architectures data, cloud, qualité, traçabilité, risques algorithmiques, AI Act / RGPD." },
  ];

  return (
    <section id="prestations" className="relative">
      {/* Image band with quote */}
      <div className="relative min-h-[70svh] overflow-hidden bg-navy-deep text-cream">
        <img
          src={datacenter}
          alt="Infrastructures numériques"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          loading="lazy"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/50 to-navy-deep" />
        <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-[1400px] flex-col justify-center px-6 py-32 md:px-16">
          <Eyebrow tone="gold">04 · Prestations</Eyebrow>
          <h2 className="mt-6 max-w-5xl font-display text-5xl leading-[1] md:text-7xl lg:text-8xl">
            Nous ne livrons pas seulement des rapports.
            <br />
            <span className="italic text-gold">Nous outillons la décision.</span>
          </h2>
          <p className="mt-10 max-w-2xl text-lg text-cream/70 md:text-xl">
            Six formats de mission conçus pour les dirigeants, les conseils d'administration et les
            comités exécutifs.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="bg-cream py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-16">
          <div className="grid gap-px bg-navy-deep/10 md:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <article
                key={p.title}
                className="group relative flex flex-col justify-between bg-cream p-10 transition-colors hover:bg-bone"
              >
                <div>
                  <span className="eyebrow text-gold">{p.tag}</span>
                  <h3 className="mb-5 mt-6 font-display text-3xl leading-tight">{p.title}</h3>
                  <p className="text-navy-deep/70">{p.body}</p>
                </div>
                <div className="mt-12 flex items-center justify-between">
                  <span className="h-px w-10 bg-navy-deep/30 transition-all duration-500 group-hover:w-24 group-hover:bg-gold" />
                  <span className="eyebrow text-navy-deep/50 transition-colors group-hover:text-gold">
                    Détail →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────── Principes */

function Principes() {
  const items = [
    { title: "Indépendance", body: "Un regard d'auditeur, sans conflit d'intérêts avec un éditeur ou un intégrateur." },
    { title: "Vision dirigeante", body: "Des recommandations formulées pour aider les directions générales et les conseils à décider." },
    { title: "Rigueur", body: "Référentiels reconnus, preuves, constats documentés et recommandations actionnables." },
    { title: "Confidentialité", body: "Discrétion, protection des informations sensibles et confiance comme principes de travail." },
    { title: "Transfert", body: "Nous aidons vos équipes à monter en compétence, pas seulement à recevoir un rapport." },
  ];

  return (
    <section className="bg-bone py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-16">
        <div className="mb-16">
          <Eyebrow>05 · Principes</Eyebrow>
          <h2 className="mt-6 max-w-[24ch] font-display text-5xl leading-[1.02] md:text-6xl">
            La manière dont <span className="italic text-gold">nous travaillons</span>.
          </h2>
        </div>

        <div className="grid gap-x-16 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <div key={p.title} className="border-t border-navy-deep/15 pt-6">
              <h3 className="mb-4 font-display text-3xl">{p.title}</h3>
              <p className="leading-relaxed text-navy-deep/70">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────── Fondations */

function Fondations() {
  const items = [
    { title: "Expérience de Direction Générale", tag: "Décision & gouvernance", body: "Pilotage d'organisation, transformation numérique, arbitrages budgétaires, dialogue avec conseils, tutelles, régulateurs et bailleurs." },
    { title: "CISA", tag: "Audit & assurance", body: "Audit des systèmes d'information, contrôle interne, maîtrise des risques SI, évaluation des dispositifs de gouvernance." },
    { title: "COBIT 2019", tag: "Gouvernance & valeur", body: "Pilotage du numérique, alignement stratégie / SI, performance IT, indicateurs et création de valeur." },
    { title: "Data & IA", tag: "Cloud, data, IA", body: "Architectures data, pipelines ETL/ELT, cloud, API et systèmes d'IA pour auditer avec une lecture stratégique et conformité." },
  ];

  return (
    <section className="bg-cream py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-16">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>06 · Fondations professionnelles</Eyebrow>
            <h2 className="mt-6 max-w-[26ch] font-display text-5xl leading-[1.02] md:text-6xl">
              Un socle rare : <span className="italic text-gold">décision, audit, gouvernance</span> & technique.
            </h2>
          </div>
        </div>

        <div className="grid gap-px bg-navy-deep/10 md:grid-cols-2">
          {items.map((f) => (
            <div key={f.title} className="bg-cream p-10 md:p-14">
              <Eyebrow>{f.tag}</Eyebrow>
              <h3 className="mt-6 font-display text-4xl md:text-5xl">{f.title}</h3>
              <p className="mt-6 max-w-lg leading-relaxed text-navy-deep/70">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────── Secteurs */

function Secteurs() {
  const items = [
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

  return (
    <section className="bg-navy-deep py-32 text-cream">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-12 md:px-16">
        <div className="md:col-span-4">
          <Eyebrow tone="gold">07 · Secteurs</Eyebrow>
          <h2 className="mt-6 font-display text-5xl leading-[1.02] md:text-6xl">
            Les secteurs que <span className="italic text-gold">nous accompagnons</span>.
          </h2>
        </div>
        <ul className="md:col-span-8">
          {items.map((s, i) => (
            <li
              key={s}
              className="group flex items-center justify-between gap-8 border-b border-cream/10 py-6 transition-colors hover:border-gold"
            >
              <div className="flex items-baseline gap-8">
                <span className="font-mono text-xs text-gold">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-2xl md:text-3xl">{s}</span>
              </div>
              <span className="text-gold opacity-0 transition-opacity group-hover:opacity-100">→</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────── References */

function References() {
  const refs = [
    ["Gouvernance & Conseil d'administration", "Opérateur public national · ~1 200 collaborateurs"],
    ["Audit SI indépendant", "Institution financière régionale"],
    ["Cybersécurité & résilience", "Infrastructure critique nationale"],
    ["e-Gov / transformation publique", "Ministère régalien"],
    ["Gouvernance data & IA", "Autorité de régulation sectorielle"],
    ["Programmes bailleurs", "Banque multilatérale de développement"],
  ] as const;

  return (
    <section id="references" className="bg-cream py-32">
      <div className="mx-auto grid max-w-[1400px] gap-20 px-6 md:grid-cols-12 md:px-16">
        <div className="md:col-span-5">
          <Eyebrow>08 · Missions & références</Eyebrow>
          <h2 className="mt-6 font-display text-5xl leading-[1.02] md:text-6xl">
            Des <span className="italic text-gold">références</span> qui parlent à voix basse.
          </h2>
          <div className="mt-10 space-y-6 leading-relaxed text-navy-deep/80">
            <p>
              Nos missions couvrent la gouvernance numérique, l'audit SI, la cybersécurité, l'e-Gov,
              la modernisation d'infrastructures critiques, l'accompagnement de directions générales
              et les programmes financés par des bailleurs internationaux.
            </p>
            <p className="text-navy-deep/60">
              Pour des raisons de confidentialité, certaines références sont anonymisées ou présentées
              uniquement sur demande, lors d'un échange sécurisé.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-4 bg-navy-deep px-6 py-3 text-cream transition-colors hover:bg-gold hover:text-navy-deep"
          >
            <span className="eyebrow">Demander nos références</span>
            <span className="h-px w-6 bg-gold" />
          </a>
        </div>

        <div className="md:col-span-7">
          <div className="border border-navy-deep/15 bg-bone">
            <div className="flex items-center justify-between border-b border-navy-deep/15 px-8 py-5">
              <span className="eyebrow text-gold">Dossier confidentiel</span>
              <span className="font-mono text-xs text-navy-deep/50">Extrait · 08.1</span>
            </div>
            <dl className="divide-y divide-navy-deep/10">
              {refs.map(([label, val], i) => (
                <div key={label} className="grid grid-cols-[auto_1fr] items-baseline gap-6 px-8 py-6 md:grid-cols-[80px_1fr_auto]">
                  <span className="font-mono text-xs text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <dt className="font-display text-xl md:text-2xl">{label}</dt>
                    <dd className="mt-1 text-sm text-navy-deep/60">{val}</dd>
                  </div>
                  <span className="hidden font-mono text-[10px] uppercase tracking-widest text-navy-deep/40 md:inline">
                    Anonymisé
                  </span>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────── Insights */

function Insights() {
  const items = [
    { tag: "Gouvernance", date: "À paraître", title: "Gouvernance numérique en Afrique : par où commencer ?" },
    { tag: "Audit", date: "À paraître", title: "CISA & COBIT 2019 : ce que change un audit indépendant." },
    { tag: "Conformité", date: "À paraître", title: "AI Act, NIS2, DORA : ce que les conseils doivent anticiper." },
  ];

  return (
    <section id="insights" className="bg-bone py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-16">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6 border-b border-navy-deep/15 pb-8">
          <div>
            <Eyebrow>09 · Insights</Eyebrow>
            <h2 className="mt-6 font-display text-5xl leading-[1.02] md:text-6xl">
              Publications & <span className="italic text-gold">analyses</span>.
            </h2>
          </div>
          <p className="max-w-md text-navy-deep/70">
            Nos analyses sur l'audit SI, la gouvernance numérique et la cybersécurité pour les
            dirigeants en France et en Afrique francophone.
          </p>
        </div>

        <div className="grid gap-px bg-navy-deep/10 md:grid-cols-3">
          {items.map((it, i) => (
            <article
              key={it.title}
              className="group flex min-h-[380px] flex-col justify-between bg-cream p-10 transition-colors hover:bg-navy-deep hover:text-cream"
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow text-gold">{it.tag}</span>
                <span className="font-mono text-xs text-navy-deep/50 group-hover:text-cream/60">
                  {String(i + 1).padStart(2, "0")} / 03
                </span>
              </div>
              <div>
                <h3 className="font-display text-3xl leading-tight md:text-4xl">{it.title}</h3>
                <div className="mt-8 flex items-center justify-between">
                  <span className="eyebrow text-navy-deep/50 group-hover:text-cream/60">
                    {it.date}
                  </span>
                  <span className="h-px w-10 bg-gold transition-all group-hover:w-20" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────── Contact */

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy-deep py-32 text-cream">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-16">
        <div className="grid gap-20 md:grid-cols-12">
          <div className="md:col-span-6">
            <Eyebrow tone="gold">10 · Contact</Eyebrow>
            <h2 className="mt-6 font-display text-6xl leading-[0.98] md:text-8xl">
              Parlons de
              <br />
              <span className="italic text-gold">votre projet</span>.
            </h2>
            <p className="mt-10 max-w-lg text-lg leading-relaxed text-cream/75">
              Un risque à évaluer, une gouvernance à structurer, un projet critique à sécuriser, un
              conseil d'administration à éclairer ? Échangeons en toute confidentialité.
            </p>

            <div className="mt-14 space-y-1">
              <ContactRow tag="Email" v="contact@musete-advisory.com" href="mailto:contact@musete-advisory.com" />
              <ContactRow tag="Téléphone" v="+33 6 65 01 61 57" href="tel:+33665016157" />
              <ContactRow tag="LinkedIn" v="Profil Didier MUSETE" href="https://www.linkedin.com/in/didier-musete" />
            </div>
          </div>

          <div className="md:col-span-6">
            <form
              className="border border-cream/15 bg-cream/[0.03] p-8 backdrop-blur md:p-10"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "mailto:contact@musete-advisory.com";
              }}
            >
              <div className="mb-8 flex items-center justify-between border-b border-cream/15 pb-4">
                <span className="eyebrow text-gold">Formulaire de contact</span>
                <span className="font-mono text-xs text-cream/50">Confidentiel</span>
              </div>
              <div className="space-y-6">
                <Field label="Nom complet" name="name" type="text" required />
                <Field label="Email professionnel" name="email" type="email" required />
                <Field label="Organisation & fonction" name="org" type="text" />
                <Field label="Votre besoin" name="msg" type="textarea" />
              </div>
              <button
                type="submit"
                className="group mt-10 flex w-full items-center justify-between bg-gold px-6 py-4 text-navy-deep transition-colors hover:bg-cream"
              >
                <span className="eyebrow">Envoyer ma demande</span>
                <span className="h-px w-8 bg-navy-deep transition-all group-hover:w-16" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ tag, v, href }: { tag: string; v: string; href: string }) {
  return (
    <a
      href={href}
      className="group flex items-baseline justify-between gap-8 border-b border-cream/15 py-5 transition-colors hover:border-gold"
    >
      <div className="flex items-baseline gap-6">
        <span className="eyebrow w-24 text-gold">{tag}</span>
        <span className="font-display text-2xl italic text-cream group-hover:text-gold md:text-3xl">{v}</span>
      </div>
      <span className="text-gold opacity-0 transition-opacity group-hover:opacity-100">→</span>
    </a>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: "text" | "email" | "textarea";
  required?: boolean;
}) {
  const cls =
    "w-full border-b border-cream/25 bg-transparent py-3 text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none transition-colors";
  return (
    <label className="block">
      <span className="mb-2 block eyebrow text-cream/60">{label}</span>
      {type === "textarea" ? (
        <textarea name={name} rows={3} className={`${cls} resize-none`} required={required} />
      ) : (
        <input type={type} name={name} className={cls} required={required} />
      )}
    </label>
  );
}

/* ────────────────────────────────────────── Footer */

function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-navy-deep py-14 text-cream/60">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center md:px-16">
        <div className="flex items-center gap-6">
          <img
            src={logoAsset.url}
            alt="MUSETE Advisory"
            className="h-9 w-auto brightness-0 invert"
          />
          <span className="eyebrow text-cream/40">Cabinet indépendant</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
          <a href="#" className="eyebrow hover:text-gold">Mentions légales</a>
          <a href="#" className="eyebrow hover:text-gold">Confidentialité</a>
          <a
            href="https://www.linkedin.com/in/didier-musete"
            className="eyebrow hover:text-gold"
          >
            LinkedIn
          </a>
          <span className="eyebrow text-cream/30">© {new Date().getFullYear()} MUSETE Advisory</span>
        </div>
      </div>
    </footer>
  );
}
