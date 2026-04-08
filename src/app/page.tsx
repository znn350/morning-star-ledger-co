import { siteContent, siteIdentity } from "@/content/site";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQs", href: "#faqs" },
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: siteIdentity.businessName,
    description: siteIdentity.metaDescription,
    url: siteIdentity.siteUrl,
    telephone: siteIdentity.phone,
    email: siteIdentity.email,
    areaServed: "United States",
    serviceType: siteContent.services.map((service) => service.title),
  };

  return (
    <>
      <main className="relative overflow-hidden">
        <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-[46rem]" />
        <div className="stars pointer-events-none absolute inset-0 opacity-70" />

        <section className="mx-auto flex min-h-[82vh] w-full max-w-7xl flex-col px-6 pb-4 pt-3 sm:px-10 lg:px-12">
          <header className="glass-panel sticky top-4 z-20 mb-4 flex items-center justify-between rounded-full px-5 py-3 backdrop-blur">
            <a href="#top" className="brand-lockup flex items-center gap-4 text-sm text-slate-100">
              <span className="brand-mark flex h-13 w-13 items-center justify-center rounded-full text-[1.35rem]">
                *
              </span>
              <span>
                <span className="block text-lg font-semibold uppercase tracking-[0.36em] text-amber-100">
                  Morning Star
                </span>
                <span className="text-[0.95rem] text-slate-300">{siteIdentity.businessTagline}</span>
              </span>
            </a>

            <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href={siteIdentity.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-amber-300/35 bg-amber-200 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-white"
            >
              Book a Call
            </a>
          </header>

          <div
            id="top"
            className="grid flex-1 items-center gap-8 pb-2 pt-2 lg:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="max-w-3xl">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.34em] text-amber-200">
                {siteContent.hero.eyebrow}
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                {siteContent.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                {siteContent.hero.description}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={siteIdentity.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-amber-200 px-7 py-4 text-center text-sm font-semibold text-slate-950 transition hover:bg-white"
                >
                  Book a Consultation
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/5"
                >
                  View Services
                </a>
              </div>
            </div>

            <div className="sunrise-panel rounded-[2rem] border border-white/10 p-8 shadow-2xl shadow-slate-950/45">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
                Morning Star
              </p>
              <div className="mt-8 grid gap-4">
                {siteContent.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-4 text-base font-medium text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-shell">
          <SectionIntro
            eyebrow="Services"
            title="What we help with"
            description="Focused bookkeeping support for small businesses."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {siteContent.services.map((service) => (
              <article key={service.title} className="card h-full">
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="why-us" className="section-shell">
          <SectionIntro
            eyebrow="Why Us"
            title={siteContent.about.title}
            description={siteContent.about.description}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {siteContent.reasons.map((reason) => (
              <article key={reason.title} className="card">
                <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-300">{reason.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="faqs" className="section-shell">
          <SectionIntro
            eyebrow="FAQs"
            title="Quick answers"
            description="A few common questions from new clients."
          />
          <div className="mt-10 grid gap-4">
            {siteContent.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[1.6rem] border border-white/10 bg-slate-900/75 px-6 py-5"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                  {faq.question}
                </summary>
                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-8 w-full max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="sunrise-panel rounded-[2rem] border border-white/10 px-7 py-10 sm:px-10 sm:py-14">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
                  {siteContent.cta.title}
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-200">
                  {siteContent.cta.description}
                </p>
              </div>
              <a
                href={siteIdentity.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold text-slate-950 transition hover:bg-amber-100"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 pb-10 pt-4 text-sm text-slate-400 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div>
          <p className="font-semibold text-slate-200">{siteIdentity.businessName}</p>
          <p>{siteIdentity.businessTagline}</p>
        </div>
        <div className="flex flex-col gap-2 text-left lg:text-right">
          <a href={`mailto:${siteIdentity.email}`} className="transition hover:text-white">
            {siteIdentity.email}
          </a>
          <a href={`tel:${siteIdentity.phoneDigits}`} className="transition hover:text-white">
            {siteIdentity.phone}
          </a>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function SectionIntro({ eyebrow, title, description }: SectionIntroProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-200">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-slate-300">{description}</p>
    </div>
  );
}
