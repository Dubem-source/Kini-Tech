import TopNav from "../components/TopNav";
import ScrollTopButton from "../components/ScrollTopButton";
import ScrollReveal from "../components/ScrollReveal";

type Project = {
  title: string;
  category: string;
  summary: string;
  result: string;
  image: string;
  link: string;
};

//  to change hero text, case studies, workflow steps, and CTAs
//  new projects to the caseStudies.projects array
const PAGE_CONTENT = {
  hero: {
    eyebrow: "Real Projects, Real Results",
    titleStart: "Our Work That Turns",
    titleAccent: " Websites Into Revenue Machines",
    description:
      "We design and build conversion-focused platforms for brands that need more than a pretty interface. Every project is engineered for speed, trust, and measurable growth.",
    badges: ["18+ Projects Delivered", "99.9% Uptime Across Deployments"],
    preview: {
      label: "Featured Projects/Works",
      title: "Few of my works",
      description:
        "My project showcase where I showcase my best work, clean UI direction, responsive layouts, and full-stack implementation quality.",
      video: "/videos/vid.mp4",
    },
  },
  caseStudies: {
    title: "Selected Case Studies",
    subtitle:
      "Projects crafted for strong visual identity, fast performance, and business growth.",
    projects: [
      {
        title: "Ember-and-Ash (Demo) Restaurant Website",
        category: "Restaurant Website",
        summary:
          "This is an Excellent portfolio piece,it`s polished,functionally dense,and demonstrates a high level of 'product engineering'the ability to not just write code,but to build a cohesive,user centric product..",
        result: "100% increase in user engagement",
        image: "/images/ember-and-ash.png",
        link: "https://ember-and-ash-three.vercel.app/",
      },
      {
        title: "Megacious Business Service Hub",
        category: "Business Platform",
        summary:
          "A scalable Business Brand website with clear service funnels, CRM-ready forms, and consistent mobile UX.",
        result: "80% longer sales average session time",
        image: "/images/img4.png",
        link: "https://megacious-business-center.vercel.app/",
      },
      {
        title: "TaskFlow Web platform",
        category: "Task Management System",
        summary:
          "A high-speed task management system,to capture your thoughts,clear your mind.Simple space for your daily flow..",
        result: "32% increase in conversion in 8 weeks",
        image: "/images/pho1.png",
        link: "https://dubem-source.github.io/Taskflow/",
      },
      {
        title: "Weather App Website",
        category: "Weather Platform",
        summary:
          "A responsive weather application providing accurate forecasts and real-time updates around the world with open Weather API.",
        result: "2.4x more inbound inquiries",
        image: "/images/pho2.png",
        link: "https://weather-app-vp0i.onrender.com",
      },

      {
        title: "Kini-Tech Service Hub",
        category: "Business Platform",
        summary:
          "A scalable company website with clear service funnels, CRM-ready forms, and consistent mobile UX.",
        result: "47% longer average session time",
        image: "/images/img3.png",
        link: "https://example.com/project/kini-tech-service-hub",
      },
    ] as Project[],
  },
  workflow: {
    eyebrow: "Our Workflow",
    title: "How We Deliver Every Project",
    description:
      "We keep things simple and transparent from strategy to launch so your team always knows what is next and why it matters.",
    steps: [
      "Discovery and strategy workshop",
      "Wireframes and visual direction",
      "Full-stack development and QA",
      "Launch, optimization, and support",
    ],
  },
  cta: {
    title: "Ready To Build Your Next Project?",
    description:
      "Let us craft a website that looks premium, feels fast, and performs like a real business asset from day one.",
    buttonText: "Start Your Project",
  },
};

export default function OurWorkPage() {
  const { hero, caseStudies, workflow, cta } = PAGE_CONTENT;

  return (
    <main className="relative isolate min-h-screen overflow-x-clip bg-black text-white">
      <TopNav />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(circle at top, rgba(255,122,89,0.12), transparent 34%), radial-gradient(circle at 82% 8%, rgba(34,211,238,0.08), transparent 20%), linear-gradient(180deg, #090909 0%, #0b0b0b 45%, #050505 100%)",
        }}
      />

      {/* Main headline and intro for portfolio showcase - edit text in PAGE_CONTENT.hero */}
      <ScrollReveal origin="up" className="relative z-10">
        <section className="relative overflow-hidden px-6 pb-18 pt-34 md:px-12 md:pb-24 md:pt-40 lg:px-24">
          {/* Background video for hero only */}
          <video
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-40"
            src="/videos/shine3.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          />

          <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-black/30 via-transparent to-black/60" />

          <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 top-36 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative z-20">
            <ScrollReveal origin="up">
              <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <article>
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-400">
                    {hero.eyebrow}
                  </p>
                  <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
                    {hero.titleStart}
                    <span className="text-orange-500">{hero.titleAccent}</span>
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
                    {hero.description}
                  </p>

                  <div className="mt-9 flex flex-wrap gap-4">
                    <div className="rounded-xl border border-orange-500/45 bg-orange-500/10 px-5 py-3 text-sm font-semibold text-orange-300 md:text-base">
                      {hero.badges[0]}
                    </div>
                    <div className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 md:text-base">
                      {hero.badges[1]}
                    </div>
                  </div>
                </article>

                <div className="relative rounded-3xl border border-white/15 bg-[#0d0d0d] p-4 shadow-[0_30px_80px_-30px_rgba(249,115,22,0.45)]">
                  <div className="rounded-2xl border border-white/10 bg-black/80 p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/65">
                      {hero.preview.label}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold text-orange-400 md:text-3xl">
                      {hero.preview.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-white/80 md:text-base">
                      {hero.preview.description}
                    </p>
                    <video
                      className="mt-5 w-full rounded-xl border border-white/10"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    >
                      <source src={hero.preview.video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* Shows featured projects - add/edit projects in PAGE_CONTENT.caseStudies.projects */}
      <ScrollReveal origin="up" className="relative z-10">
        <section className="bg-white px-6 py-16 text-black md:px-12 md:py-20 lg:px-24">
          <div className="mb-8 flex items-end justify-between gap-6">
            <h2 className="text-3xl font-bold text-black md:text-5xl">
              {caseStudies.title}
            </h2>
            <p className="hidden max-w-md text-right text-base text-black/70 md:block">
              {caseStudies.subtitle}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {caseStudies.projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open project: ${project.title}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/10 bg-white shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/65"
              >
                <div className="relative aspect-16/10 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-black/10 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-black">
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl font-semibold text-black">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-black/75 md:text-base">
                    {project.summary}
                  </p>

                  <div className="mt-6 space-y-4 pt-4 border-t border-black/10">
                    <p className="rounded-lg border border-orange-500/35 bg-orange-500/10 px-4 py-3 text-sm font-semibold text-orange-700">
                      {project.result}
                    </p>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange-600">
                      View Project
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Shows the steps we follow for each project - edit workflow.steps in PAGE_CONTENT */}
      <ScrollReveal origin="up" className="relative z-10">
        <section className="px-6 pb-16 md:px-12 md:pb-20 lg:px-24">
          <div className="rounded-3xl border border-white/15 bg-linear-to-r from-[#121212] via-[#0d0d0d] to-[#18120c] p-7 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">
                  {workflow.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-5xl">
                  {workflow.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-white/80 md:text-lg">
                  {workflow.description}
                </p>
              </div>

              <ol className="space-y-4">
                {workflow.steps.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/45 px-4 py-4"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-orange-500 font-bold text-black">
                      {index + 1}
                    </span>
                    <p className="text-base font-medium text-white/95 md:text-lg">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ========== FINAL CTA ========== */}
      {/* Call-to-action at the bottom - edit cta text in PAGE_CONTENT */}
      <ScrollReveal origin="up" className="relative z-10">
        <section className=" pb-18 ">
          <div className=" border-orange-500/35 bg-white px-7 py-10 text-center text-black ">
            <h2 className="text-3xl font-bold md:text-5xl">{cta.title}</h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-black/75 md:text-lg">
              {cta.description}
            </p>
            <a
              href="https://wa.me/2347065968213?text=Hello%2C%20I%20would%20like%20to%20start%20a%20project%20with%20you.%20I%20am%20interested%20in%20a%20website%20build%20and%20would%20love%20to%20discuss%20my%20project%20details.%20"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-xl bg-orange-500 px-7 py-3 text-lg font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-400 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {cta.buttonText}
            </a>
          </div>
        </section>
      </ScrollReveal>

      <ScrollTopButton />
    </main>
  );
}
