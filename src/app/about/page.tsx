import TopNav from "../components/TopNav";
import ScrollTopButton from "../components/ScrollTopButton";
import StackSphere from "../components/StackSphere";
import ScrollReveal from "../components/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="relative isolate min-h-screen overflow-x-clip bg-black text-white">
      <TopNav />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(circle at top, rgba(255,122,89,0.12), transparent 34%), radial-gradient(circle at 82% 8%, rgba(255,255,255,0.05), transparent 20%), linear-gradient(180deg, #090909 0%, #0b0b0b 45%, #050505 100%)",
        }}
      />

      {/* ========== HERO SECTION ========== */}
      {/* Main about page hero with intro text and image */}
      <ScrollReveal origin="up" className="relative z-10">
        <section className="relative mt-6 bg-black px-5 py-14 text-white md:px-6 md:py-18 overflow-hidden">
          {/* Background video for hero only */}
          <video
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-40"
            src="/videos/shine4.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          />

          <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-black/30 via-transparent to-black/60" />

          <div className="relative z-20">
            <div className="mx-auto grid max-w-6xl mt-4 items-center gap-10 md:grid-cols-2 md:gap-8">
              <div>
                <p className="mb-4 text-sm text-gray-400 md:mb-6 mt-6">
                  Full-Stack Web Development
                </p>

                <h1 className="text-xl font-semibold leading-tight tracking-tight md:text-2xl">
                  I`m a Developer who love building fast accessible,and visual
                  stunninng web applications .
                </h1>

                <p className="mt-5 max-w-xl text-base leading-7 text-gray-300 md:mt-6 md:text-lg">
                  Based In Nigeria.We help Brand and Startups across the Globe
                  transform their Ideas into Powerful Digital growing
                  Platformss.
                </p>
              </div>

              <div className="mt-2 flex justify-center md:mt-9 md:justify-end">
                <div className="h-72 w-full max-w-sm overflow-hidden rounded-2xl border border-white/40 md:h-104 md:max-w-md">
                  <img
                    src="/images/img3.png"
                    alt="Developer portrait"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ========== WHO WE ARE SECTION ========== */}
      {/* Team description, mission, and approach */}
      <ScrollReveal origin="up" className="relative z-10">
        <section className="mx-4 rounded-2xl border border-white/10 bg-linear-to-br from-stone-950 via-neutral-900 to-amber-950 px-4 py-12 text-white shadow-[0_18px_60px_rgba(0,0,0,0.28)] md:mx-17 md:px-9 md:py-18">
          <div className="mx-auto max-w-6xl py-8 text-center md:py-12">
            {/* Edit this heading to update the section title */}
            <h2 className="-mt-4 text-3xl font-bold font-[poppins] text-center md:-mt-8 md:text-5xl">
              Who We Are
            </h2>
            <div className="mx-auto mt-2 h-1 w-20 bg-orange-500 md:w-45"></div>
          </div>
          <div className="grid gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
            <div className="text-center leading-8 tracking-wide md:text-left">
              <p className="  font-[poppins] md:text-xl">
                I am Emmanuel Chidubem A Sofware Engineer and a full-stack web
                developer in Nigeria.Student of the FEDERAL UNIVERSITY OF
                TECHNOLOGY OWERRI (FUTO) We are a team of creative
                thinkers,developer and a problem solver, committed to building
                meaningful digital experiences.
              </p>
              <p className="mt-6  font-[poppins] md:mt-8 md:text-xl">
                Whether you are a startup,Personal brand owner or an established
                business, we are here to help you achieve your digital goals.{" "}
                <br />
                We tailor every solution to help you grow,Ranging from Static
                websites down to E-commerce websites,With payment intergration
                To give our Clients and Users best Experience.
              </p>
              <p className="mt-6  font-[poppins]  md:mt-8 md:text-xl">
                Our approach is simple __Clear communication,startegic
                execution,and world-class support.
              </p>
            </div>

            <div className="mt-8 flex justify-center px-3 md:mt-10 md:px-8">
              <div className="group relative h-71.5 w-62.5 sm:h-75 sm:w-75 md:h-80 md:w-90">
                <div className="absolute left-1/2 z-10 translate-x-[-64%] translate-y-0.5 -rotate-6 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] sm:z-10 sm:-rotate-6 sm:-translate-x-22 sm:translate-y-2 md:-translate-x-20 group-hover:-rotate-8 group-hover:translate-x-[-66%] group-hover:scale-105 sm:group-hover:-rotate-10 sm:group-hover:-translate-x-26 md:group-hover:-rotate-12 md:group-hover:-translate-x-28 drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)] w-40 sm:w-45 md:w-50">
                  <div className="bg-black/60 p-3 pb-10 rounded-sm shadow-2xl border border-white/10">
                    <div className="overflow-hidden h-44 w-34 sm:h-49.5 sm:w-39 md:h-55 md:w-43.5">
                      <img
                        src="/images/Dubem.jpeg"
                        alt="Dubem at event"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-2 flex items-center justify-center">
                      <span
                        className="text-white/80 text-xs tracking-wide"
                        style={{ fontFamily: "'Caveat', cursive" }}
                      >
                        @codeWithDubem
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute left-1/2 z-20 translate-x-[-38%] translate-y-2.5 rotate-3 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-50 sm:z-20 sm:translate-x-8 md:translate-x-20 group-hover:rotate-4 group-hover:translate-x-[-62%] group-hover:scale-105 sm:group-hover:rotate-5 sm:group-hover:translate-x-14 md:group-hover:rotate-6 md:group-hover:translate-x-28 drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)] w-40 sm:w-45 md:w-50">
                  <div className="bg-black/60 p-3 pb-10 rounded-sm shadow-2xl border border-white/10">
                    <div className="overflow-hidden h-44 w-34 sm:h-49.5 sm:w-39 md:h-55 md:w-43.5">
                      <img
                        src="/images/self3.jpeg"
                        alt="Dubem mirror selfie"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-2 flex items-center justify-center">
                      <span
                        className="text-white/80 text-xs tracking-wide"
                        style={{ fontFamily: "'Caveat', cursive" }}
                      >
                        @codeWithDubem
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ========== HOW WE WORK SECTION ========== */}
      {/* Process breakdown - discovery, planning, design, development, testing, launch */}
      <ScrollReveal origin="up" className="relative z-10">
        <section className="bg-gray-100 py-20 px-6 mt-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              {/* Edit these headings if you want to update section titles */}
              <h2 className="text-4xl md:text-5xl font-semibold text-orange-500 mb-6 font-[poppins]">
                How We Work
              </h2>

              <p className="text-gray-600 text-lg leading-7 mb-10 max-w-md">
                Website Developer in Nigeria. Every project we take follows a
                clear process from start to finish.
              </p>

              <div className="h-80 w-full overflow-hidden rounded-2xl md:h-112">
                <img
                  src="/images/img2.png"
                  className="w-full h-full object-cover"
                  alt="img"
                />
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-semibold text-orange-500 mb-3 font-[poppins]">
                  1. Discovery & Strategy
                </h3>
                <p className="text-gray-600 leading-7">
                  We start by understanding your goals, target audience, and
                  brand vision to define the best direction for your project.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-orange-500 mb-3 font-[poppins]">
                  2. Planning & Structure
                </h3>
                <p className="text-gray-600 leading-7">
                  A structured plan is developed, including user flows,Payments
                  integration, system architecture, and project scope,giving you
                  high security performannce and ensuring a solid and scalable
                  foundation.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-orange-500 mb-3 font-[poppins]">
                  3. Design & Prototyping
                </h3>
                <p className="text-gray-600 leading-7">
                  We create refined, user-centric designs and interactive
                  prototypes that align with your brand while optimizing
                  usability and engagement.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-orange-500 mb-3 font-[poppins]">
                  4. Development
                </h3>
                <p className="text-gray-600 leading-7">
                  Leveraging modern technologies, we build secure,
                  high-performance, and scalable solutions with clean,
                  maintainable code across both frontend and backend.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-orange-500 mb-3 font-[poppins]">
                  5.Launch & Support
                </h3>
                <p className="text-gray-600 leading-7">
                  Following rigorous testing, we deploy your project seamlessly
                  and provide ongoing support to ensure optimal performance and
                  long-term growth.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal origin="up" className="relative z-10">
        <section className="mt-12 mx-4 rounded-2xl border border-white/10 bg-linear-to-br from-stone-950 via-neutral-900 to-amber-950 px-4 py-12 text-white shadow-[0_18px_60px_rgba(0,0,0,0.28)] md:mx-17 md:px-9 md:py-18">
          <div className="font-[poppins] text-center">
            <h2 className="mb-6 text-3xl font-semibold text-orange-500 md:text-4xl lg:text-6xl">
              Our Mission & Vision
            </h2>
            <p className="text-gray-300 leading-7 max-w-2xl mx-auto">
              What drives us and where we’re heading — a look into our purpose
              and future goals.
            </p>
          </div>

          <div className="mx-auto grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-2">
            <div className="mt-12 min-h-92 rounded-2xl border border-orange-500 px-6 py-10 md:px-7 md:py-12">
              <h2 className="text-2xl lg:text-4xl text-orange-500 font-bold font-[poppins]">
                Our Mission
              </h2>
              <p className="mt-6 md:text-lg lg:text-2xl">
                To craft intuitive, engaging, and high-performing digital
                experiences that empower businesses and individuals to thrive
                online. We merge creativity with functionality to deliver web
                solutions that make lasting impact, tailored to every brand’s
                unique identity.
              </p>
            </div>
            <div className="mt-12 min-h-92 rounded-2xl border border-orange-500 px-6 py-10 md:px-7 md:py-12">
              <h2 className="font-[poppins] text-2xl font-bold text-orange-500 lg:text-4xl">
                Our Vision
              </h2>
              <p className="mt-6 md:text-lg lg:text-2xl">
                To become a leading force in digital transformation by
                redefining how brands connect with their audiences online —
                through seamless design, thoughtful strategy, and innovative
                technology. We envision a future where every client, regardless
                of size, can compete globally with a powerful digital presence.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>
      <ScrollReveal origin="up" className="relative z-10">
        <section className="px-4 py-14 md:px-8 md:py-20">
          <StackSphere />
        </section>
      </ScrollReveal>
      <ScrollTopButton />
      <ScrollReveal origin="up" className="relative z-10">
        <div className="mx-auto mt-4 w-60 px-4 font-bold font-[poppins] sm:max-w-xs md:mt-2 md:w-45 md:px-0">
          <a
            href="/Docs/C-V.pdf"
            download
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 px-5 py-4 text-center text-sm text-white shadow-lg shadow-orange-500/25 transition-all duration-200 select-none touch-manipulation hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-orange-500/35 active:scale-[0.98] active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:px-6 sm:text-base"
          >
            <span aria-hidden="true">↓</span>
            Download CV
          </a>
        </div>
      </ScrollReveal>
      <ScrollReveal origin="up" className="relative z-10">
        <section className="bg-white text-black font-[poppins] py-19 px-10 mt-10  text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="md:text-3xl lg:text-4xl font-bold">
              Let’s Build Something Great For You
            </h2>
            <p className="mt-6 py-3  md:text-xl lg:text-xl">
              Whether you`re real estate brand, tech startup, or personal brand
              or have a spark of an idea,
              <br /> we’re here to help you bring it to life. Let’s create
              something amazing together.
            </p>
            <div className="mx-auto mt-2 h-1 w-20 bg-orange-500 md:w-45"></div>
            <a
              href="https://wa.me/2347065968213?text=Hello,%20I%20am%20contacting%20you%20from%20your%20website.%20I%20would%20like%20to%20discuss%20a%20project.%20Briefly%3A%20"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 mt-6 inline-block hover:bg-black text-white font-bold py-2 px-4 rounded hover:scale-110 transition-all cursor-pointer"
            >
              Contact Us
            </a>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
