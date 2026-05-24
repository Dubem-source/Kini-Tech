"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ScrollTopButton from "./components/ScrollTopButton";
import ScrollReveal from "./components/ScrollReveal";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const desktopLinkClass = (href: string) =>
    `relative inline-flex pb-1 transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-orange-500 after:transition-transform after:duration-200 hover:text-orange-400 hover:after:scale-x-100 ${
      pathname === href ? "text-orange-500" : ""
    }`;

  const mobileLinkClass = (href: string) =>
    `block w-full rounded-md border border-transparent px-3 py-3 transition-colors hover:border-white/15 hover:bg-white/5 hover:text-orange-500 ${
      pathname === href ? "text-orange-500" : ""
    }`;

  useEffect(() => {
    const faqQuestions =
      document.querySelectorAll<HTMLElement>(".faq-question");

    if (faqQuestions.length > 0) {
      faqQuestions.forEach((question) => {
        question.addEventListener("click", () => {
          const currentItem = question.closest(".faq-item");

          faqQuestions.forEach((otherQuestion) => {
            const item = otherQuestion.closest(".faq-item");
            const answer = item ? item.querySelector(".faq-answer") : null;
            const icon = item ? item.querySelector(".faq-icon") : null;

            if (!item || !answer || !icon) {
              return;
            }

            if (item !== currentItem) {
              otherQuestion.setAttribute("aria-expanded", "false");
              answer.classList.add("hidden");
              icon.textContent = "+";
            }
          });

          if (!currentItem) {
            return;
          }

          const currentAnswer = currentItem.querySelector(".faq-answer");
          const currentIcon = currentItem.querySelector(".faq-icon");
          const isOpen = question.getAttribute("aria-expanded") === "true";

          if (!currentAnswer || !currentIcon) {
            return;
          }

          question.setAttribute("aria-expanded", String(!isOpen));
          currentAnswer.classList.toggle("hidden", isOpen);
          currentIcon.textContent = isOpen ? "+" : "-";
        });
      });
    }
  }, []);

  return (
    <div className="relative isolate overflow-x-clip bg-black text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(circle at top, rgba(255,122,89,0.14), transparent 32%), radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05), transparent 26%), radial-gradient(circle at 80% 0%, rgba(255,122,89,0.08), transparent 20%), linear-gradient(180deg, #090909 0%, #0b0b0b 45%, #050505 100%)",
        }}
      />
      <div>
        {/* ========== HEADER / NAVIGATION ========== */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black p-4 text-white font-bold md:p-6">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-6">
            {/* Logo - click to go home */}
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange-500 ring-1 ring-orange-500 shadow-lg shadow-orange-950/40">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 fill-white"
                >
                  <title>Kingston Technology</title>
                  <path d="M14.123.0007c-.5442-.0038-1.0301.008-1.4389.0204C7.185.1697 4.2115 1.7057 4.2115 1.7057s-.2967.1988-.148.8428c0 0 .0993.7921.1983 1.139l.0494.0996c-.099.099-.4958.2973-.6445.4954-.3468.446-.0493 2.4772-.0493 2.4772.3468 2.1303.6938 2.5265.6938 2.5265s.4956.6436 1.1892 1.0895c.2973.1486.2477.4954.2477.4954L3.3203 24h16.3492l-3.4187-7.4808c.6936 0 2.1306.3464 2.9232-1.883.7432-2.1303 1.1397-5.3502 1.1893-6.2915.099-.9414-.0999-2.9233-.0503-3.4187 0-.1486.3473-.6442.3473-.9415.0496-.4459-.0006-.8418-.0996-1.585-.0496-.2972-.0983-.644-.1974-.9908-.0496-.2478-.0999-.3964-.298-.4955C17.91.1701 15.7555.0124 14.123.0007Zm-1.4389.4171c.545 0 5.1027-.0492 7.233.8922.1983.1486.0498.8915-.0493 1.2879-.0495.2972-.3967.3967-.3967.3967-.3468.099-.446.3464-.446.3464s.4458 4.3102.4954 4.4589c.0495.1981-.1485.1981-.5448.2477-.1982 0-2.4772.0493-2.4772.0493s-.4956-.0491-.446-.3464c0-.1981.0992-.595.1983-.595h.4461s.991.0497.6938-.0494l-1.0402-.2477s-.2483.0004-.3474.149c-.0495.1486-.297.9415-.297.9415s-.0002.0491.0493.0987c.0495.0495 2.5768 1.883 2.5768 1.883s-2.1311-.199-2.7752-.0503c-.644.1486-1.9813.8422-2.8235.9908-.8422.1487-3.9636.4955-4.1618.4955l-1.2386-5.35s-.1484-1.3375-1.5356-1.288c-1.0404.0495-1.189.2967-1.2386.3958-.099.1981 0 .3967 0 .3967l3.3693 5.7468s-2.2792-1.0896-3.171-2.3282c-.4954-.644-.9416-3.8645-.6444-4.4095.2973-.4954 2.1306-.8915 2.9233-.7925.3963.0496.7433.4452.9415.6929.0495.099.0985.0501.148.0996 0 0-.1982-1.2383-.9909-1.2879-1.1394-.099-2.3774.3464-2.3774.3464s-.0995-.0004-.149-.149c-.0496-.1982-.1984-1.2386-.1984-1.2386s.0495-.198.2477-.297c0 0 3.2209-1.4863 8.0265-1.4863zm.6435 1.4273c-.0704.003-.0987.0096-.0987.0096-2.0808.8423-3.765 2.675-3.765 2.5759.1981.0495.594 0 .594 0 1.8332-1.5854 3.4187-2.2295 3.4187-2.2295 1.3377 0 3.6165.7927 3.765.7432.0496 0 .0498-.2475-.0493-.297-.2477-.0496-.7433-.2973-1.6846-.4955-1.3748-.2973-1.9688-.316-2.1801-.3067Zm6.788 1.3972c.1981.0496.198.049.297.148.1486.0992.0991.3966 0 .4461-.099.0991-.1484-.0988-.7925-.0493 0 0 .2973-.5943.4955-.5448zm-4.8711.1016c-.3623-.0186-.8641.0469-1.4215.1955-.7431.1982-2.2294.9415-2.2294.9415.5945.2477 1.5861.3468 2.5275.4954 1.0404.0991 2.179-.446 2.179-.446-.0495-.1487-.3963-1.0408-.743-1.14-.0868-.0247-.1919-.0402-.3126-.0464zm.7867 7.4015c.7242.0174 1.5759.1012 2.449.3241 0 0 .4957.3964.4461.7432 0 0-3.567.198-4.9543-.9416 0 0 .852-.1548 2.0592-.1257zm-9.7383.176 1.5356 1.0403 2.5265 11.5429H3.9145Zm11.8032 1.4554a8.479 8.479 0 0 1 .7315.031s.2973.2475-.4954 1.0401c-.9909.9414-2.7256 1.6843-4.2615 1.288 0 0 .5664-2.351 4.0254-2.3591zm-8.0875 4.1918s3.1216 1.9323 3.617 2.6755l.3464 4.3108h-2.2787Zm5.3007 3.9634s1.8335 1.6852 2.3785 3.0229h-3.0713z" />
                </svg>
              </span>
              <span className="font-bold text-3xl tracking-tight text-orange-500">
                Kini-Tech
              </span>
            </Link>

            {/* Desktop menu - links to all main pages */}
            <ul className="hidden items-center justify-center gap-6 text-base md:flex">
              <li>
                <Link href="/" className={desktopLinkClass("/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={desktopLinkClass("/about")}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/our-work"
                  className={desktopLinkClass("/our-work")}
                >
                  Our work
                </Link>
              </li>
              <li>
                <Link href="/contact" className={desktopLinkClass("/contact")}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className={desktopLinkClass("/pricing")}>
                  Pricing
                </Link>
              </li>
            </ul>

            <a
              href="https://wa.me/2347065968213?text=Hello%2C%20i%20am%20contacting%20you%20from%20your%20website.%20I%20need%20your%20service%20for%20%28_______%29"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden bg-orange-500  text-white font-bold py-2 px-4 rounded hover:scale-110 transition-all cursor-pointer md:inline-flex"
            >
              Hire Me
            </a>

            <button
              id="mobileMenuButton"
              type="button"
              className="col-start-3 inline-flex items-center justify-center justify-self-end rounded border border-white/30 px-3 py-2 md:hidden text-orange-500"
              aria-controls="mobileMenu"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 6l12 12M18 6l-12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <div
            id="mobileMenu"
            className={`mt-4 rounded bg-white text-black p-4 md:hidden ${
              mobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/" className={mobileLinkClass("/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={mobileLinkClass("/about")}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/our-work" className={mobileLinkClass("/our-work")}>
                  Our work
                </Link>
              </li>
              <li>
                <Link href="/contact" className={mobileLinkClass("/contact")}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className={mobileLinkClass("/pricing")}>
                  Pricing
                </Link>
              </li>
            </ul>
            <a
              href="https://wa.me/2347065968213?text=Hello%2C%20i%20am%20contacting%20you%20from%20your%20website.%20I%20need%20your%20service%20for%20%28_______%29"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full rounded bg-orange-500 px-4 py-2 text-center font-bold text-white transition-all "
            >
              Hire Me
            </a>
          </div>
        </nav>
      </div>

      <div className="relative">
        <video
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-40"
          src="/videos/shine2.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />

        <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-black/30 via-transparent to-black/60" />

        <div className="relative z-20">
          {/* Social media icons on left side (desktop only) */}
          <div className="absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-5 text-2xl text-white md:flex">
            <a
              href="http://www.youtube.com/@dubemCodes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="transition-colors hover:text-orange-500"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-chidubem-m-663851377/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIcg97LSoQ9GUoqDhobWjXg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-orange-500"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Dubem-source"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-orange-500"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://wa.me/2347065968213?text=Hello%2C%20i%20am%20contacting%20you%20from%20your%20website.%20I%20need%20your%20service%20for%20%28_______%29"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="transition-colors hover:text-orange-500"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>

          <ScrollReveal origin="up">
            {/* ========== HERO SECTION ========== */}
            {/* Main headline and value proposition */}
            <article className="mt-6 text-white text-3xl md:text-5xl py-16 md:py-24 px-5 md:px-12 lg:px-24 pt-32 md:pt-40">
              <h1 className="font-bold">
                <span
                  className="hero-write-reveal hero-write-line"
                  style={{ animationDelay: "0s" }}
                >
                  Kini-Tech Full-Stack
                </span>
                <br />
                <span
                  className="hero-write-reveal hero-write-line"
                  style={{ animationDelay: "1.15s" }}
                >
                  Website Development
                </span>
              </h1>
              <h2
                className="hero-write-reveal hero-write-line text-orange-500 font-bold"
                style={{ animationDelay: "2.3s" }}
              >
                Solution in Nigeria
              </h2>
              <p
                className="hero-write-reveal py-7 md:py-9 text-lg md:text-2xl"
                style={{ animationDelay: "3.45s" }}
              >
                We help Build Good looking and Stable Full-Stack websites.
              </p>
              <p
                className="hero-write-reveal text-lg md:text-2xl"
                style={{ animationDelay: "4.6s" }}
              >
                For Organisations,Freelancers,Companies And Business Owners{" "}
                <br />
                Who are looking forward to increase there sales,marketing system
                and solve Problems.
              </p>
              <a
                href="https://wa.me/2347065968213?text=Hello%2C%20i%20am%20contacting%20you%20from%20your%20website.%20I%20need%20your%20service%20for%20%28_______%29"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded bg-orange-500 text-lg"
              >
                <span className="inline-block px-7 py-2">Learn More</span>
              </a>
            </article>
          </ScrollReveal>
        </div>
      </div>

      {/* ========== SERVICES SECTION ========== */}
      {/* Showcase main service offerings with icons and descriptions */}
      <ScrollReveal origin="up" className="relative z-10">
        <section className="relative isolate overflow-hidden min-h-175 md:min-h-205">
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=2000&q=80")',
            }}
          ></div>
          <div className="absolute inset-0 -z-10 bg-black/45"></div>

          <div className="flex w-full flex-col items-center justify-start px-4 py-16 text-center md:py-24">
            <div className="max-w-4xl">
              {/* Section title - edit here if you want to change the main headline */}
              <h2 className="font-[Poppins] text-5xl font-bold text-orange-500 md:text-5xl -mt-13">
                Our Services
              </h2>
              <p className="mt-4 text-xl font-medium text-white/95 md:mt-6 md:text-2xl">
                Website Development In Nigeria
              </p>
            </div>
            <div className="mt-10 grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ScrollReveal origin="up" className="">
                <div className="group flex h-full min-h-80 w-full flex-col rounded-2xl border border-orange-500/35 bg-black/60 p-6 text-left shadow-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/70">
                  <div className="mb-5 grid h-20 w-20 place-items-center rounded-full bg-black transition-colors duration-300 group-hover:bg-orange-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-10 w-10 text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:text-black"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3 12h18" />
                      <path d="M12 3a14 14 0 0 1 0 18" />
                      <path d="M12 3a14 14 0 0 0 0 18" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-2xl">
                    High-Perfomance Web Platforms
                  </h3>
                  <p className="mt-3 text-base leading-6 font-medium text-white/95">
                    Specialized in building blazing-fast,SEO-optimized websites
                    that load in under 2 seconds.From landing pages to complex
                    corporate sites,We ensure your digital presence is
                    mobile-responsive and conversion Ready. <br />
                    Key Tech:Next.js,Vercel, Tailwindcss
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal origin="up">
                <div className="group flex h-full min-h-80 w-full flex-col rounded-2xl border border-orange-500/35 bg-black/60 p-6 text-left shadow-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/70">
                  <div className="mb-5 grid h-20 w-20 place-items-center rounded-full bg-black transition-colors duration-300 group-hover:bg-orange-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-10 w-10 text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:text-black"
                      aria-hidden="true"
                    >
                      <path d="M7 7v4" />
                      <path d="M17 7v4" />
                      <path d="M9 11h6" />
                      <path d="M12 11v5" />
                      <path d="M9 16h6" />
                      <path d="M12 21v-5" />
                      <path d="M9 7h6" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-2xl">
                    Real-Time Systems & API Integration
                  </h3>
                  <p className="mt-3 text-base leading-6 font-medium text-white/95">
                    Implementation of real-time data features such as instant
                    notifications,and third-party API
                    integrations(Payments,Maps,etc.)
                    <br />
                    Key-Tech:Supabase Realtime,Google Maps API
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal origin="up">
                <div className="group flex h-full min-h-80 w-full flex-col rounded-2xl border border-orange-500/35 bg-black/60 p-6 text-left shadow-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/70">
                  <div className="mb-5 grid h-20 w-20 place-items-center rounded-full bg-black transition-colors duration-300 group-hover:bg-orange-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-10 w-10 text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:text-black"
                      aria-hidden="true"
                    >
                      <path d="M14 4c3 0 5 2 5 5-2 0-4-2-5-5Z" />
                      <path d="M13 5c-4 1-7 4-8 8l6 1 1 6c4-1 7-4 8-8" />
                      <path d="M9 14 5 18" />
                      <path d="M6 14c-1 0-2 1-2 2v2h2c1 0 2-1 2-2" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-2xl">
                    Full-Stack Saas & MVP Development
                  </h3>
                  <p className="mt-3 text-base leading-6 font-medium text-white/95">
                    We turn business ideas into scalable software products.Using
                    robust backend-as-a-service solutions,We build secure user
                    authentication,Database,and adminstrative dashboards
                    tailored to your workflow <br />
                    Key Tech: Node.js, typescript, PostgreSQL.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal origin="up" className="relative z-10">
        <section className="px-5 py-16 md:px-12 lg:px-24 lg:py-24">
          <div className="mx-auto grid max-w-400 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <h2 className="font-serif text-3xl lg:font-semibold text-white">
                Meet Emmanuel Chidubem👩‍💻
              </h2>

              <div className="mt-8 space-y-8 text-lg leading- text-white/85 md:text-2xl">
                <p>
                  I`m a Passionate Full-Stack Developer.With the Zeal and
                  dedication of building Mordern web Applications.From your nice
                  looking UI down to your Backend...Always feeling good when it
                  comes to building Solutions for the Web.
                </p>
                <p>
                  From personal brands to growing businesses, I help clients
                  build meaningful online identities that attract, engage, and
                  convert. Every project I handle is approached with precision
                  and creativity — because good design should do more than just
                  look good; it should deliver results.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-orange-500 px-10 py-4 text-xl font-semibold text-white transition hover:scale-105 hover:bg-orange-400"
                >
                  Contact Me
                </Link>
                <Link
                  href="/about"
                  className="rounded-full border-2 border-orange-500 px-10 py-4 text-xl font-semibold text-orange-500 transition hover:scale-105 hover:bg-orange-500 hover:text-black"
                >
                  About Me
                </Link>
              </div>
            </div>

            <div className="relative mx-auto h-72 w-72 overflow-hidden rounded-full border border-orange-500/30 bg-black/60 p-2 shadow-[0_0_40px_rgba(249,115,22,0.22)] sm:h-80 sm:w-80 md:h-100 md:w-100 md:p-3">
              <img
                src="images/MGG.jpeg"
                alt="Your portrait"
                className="h-full w-full rounded-full object-cover object-center"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-2xl mt-20 gap-6">
            <div className="rounded-2xl bg-[#111] p-10">
              <h2 className="text-orange-500 text-xl font-bold">My Approach</h2>
              <p className="mt-3 text-gray-300">
                Strategy meets design. Every project is guided by purpose and
                creativity.
              </p>
            </div>

            <div className="rounded-2xl bg-[#111] p-10">
              <h2 className="text-orange-500 text-xl font-bold">
                What I Build
              </h2>
              <p className="mt-3 text-gray-300">
                Clean, functional websites that help brands scale effortlessly
                online..
              </p>
            </div>

            <div className="rounded-2xl bg-[#111] p-10">
              <h2 className="text-orange-500 text-xl font-bold">Vision</h2>
              <p className="mt-3 text-gray-300">
                Creating impactful digital experiences that drive growth and
                innovation.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal origin="up" className="relative z-10">
        <section className="px-5 pb-20 md:px-12 lg:px-24">
          <div className="mx-auto max-w-400">
            <div className="mb-8">
              <div>
                <h2 className="font-serif text-3xl font-bold text-white md:text-5xl text-center">
                  Featured Projects
                </h2>
                <p className="mt-2 text-sm text-white/70 md:text-base text-center">
                  Check out few of my works done
                </p>
                <div className="w-100 h-1 bg-orange-500 mt-6 mx-auto"></div>
              </div>
            </div>

            <div
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              aria-label="Projects showcase"
            >
              <ScrollReveal origin="up" delay={0}>
                <article className="overflow-hidden rounded-3xl border border-white/35 bg-[#e8e8ea] text-black">
                  <div className="h-85 overflow-hidden p-3 sm:h-105 lg:h-120">
                    <iframe
                      src="https://ember-and-ash-three.vercel.app/"
                      title="Ember-and-Ash Live Preview"
                      className="h-full min-h-full w-full rounded-2xl border border-black/10 bg-white"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                    ></iframe>
                  </div>
                  <div className="border-t border-black/10 bg-white p-6">
                    <h3 className="font-serif text-3xl font-semibold text-black">
                      Amber-and-Ash Restaurant Website
                    </h3>
                    <p className="mt-3 text-lg leading-8 text-black/75">
                      A modern restaurant Demo website with online menu,
                      reservation system, and contact form for seamless customer
                      engagement.
                    </p>
                    <a
                      href="https://weather-app-vp0i.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block rounded-full border border-black/30 px-5 py-2 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
                    >
                      Open Live Project
                    </a>
                  </div>
                </article>
              </ScrollReveal>

              <ScrollReveal origin="up" delay={0.06}>
                <article className="overflow-hidden rounded-3xl border border-white/35 bg-[#e8e8ea] text-black">
                  <div className="h-85 overflow-hidden p-3 sm:h-105 lg:h-120">
                    <iframe
                      src="https://dubem-source.github.io/Taskflow/"
                      title="TaskFlow Dashboard Live Preview"
                      className="h-full min-h-full w-full rounded-2xl border border-black/10 bg-white"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                    ></iframe>
                  </div>
                  <div className="border-t border-black/10 bg-white p-6">
                    <h3 className="font-serif text-3xl font-semibold text-black">
                      TaskFlow Dashboard
                    </h3>
                    <p className="mt-3 text-lg leading-8 text-black/75">
                      A productivity web app for managing tasks, priorities, and
                      team workflows in one place.
                    </p>
                    <a
                      href="https://dubem-source.github.io/Taskflow/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block rounded-full border border-black/30 px-5 py-2 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
                    >
                      Open Live Project
                    </a>
                  </div>
                </article>
              </ScrollReveal>

              <ScrollReveal origin="up" delay={0.12}>
                <article className="overflow-hidden rounded-3xl border border-white/35 bg-[#e8e8ea] text-black">
                  <div className="h-85 overflow-hidden p-3 sm:h-105 lg:h-120">
                    <iframe
                      src="https://megacious-business-center.vercel.app/"
                      title="Megacious Store Live Preview"
                      className="h-full min-h-full w-full rounded-2xl border border-black/10 bg-white"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                    ></iframe>
                  </div>
                  <div className="border-t border-black/10 bg-white p-6">
                    <h3 className="font-serif text-3xl font-semibold text-black">
                      Megacious Store
                    </h3>
                    <p className="mt-3 text-lg leading-8 text-black/75">
                      A Business storefront for Variety of products Ranging from
                      fashion,foot-wears,Clothing,Food-stuff products......And
                      so on.Click the Open live Project for better viewing
                      Experience.
                    </p>
                    <a
                      href="https://megacious-business-center.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block rounded-full border border-black/30 px-5 py-2 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
                    >
                      Open Live Project
                    </a>
                  </div>
                </article>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <section className="w-full h-[20vh] relative">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="Technology workspace"
          className="w-full h-full object-cover"
        />
      </section>

      <ScrollReveal origin="up" className="relative z-10">
        <section className="px-5 py-14 md:px-12 lg:px-24 bg-white">
          <div className="mx-auto max-w-400 text-center">
            <h2 className="font-[poppins] text-5xl font-bold text-orange-500 md:text-6xl">
              Why Choose Us
            </h2>
            <p className="mt-5 text-2xl font-bold text-orange-500 md:text-2xl font-[Poppins]">
              Website Development In Nigeria
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-400 grid gap-8 lg:grid-cols-2">
            <div className="rounded-4xl bg-black p-8 shadow-2xl md:p-10 lg:p-12">
              <h2 className="text-center font-serif text-3xl font-bold text-orange-500 md:text-5xl">
                What You Get
              </h2>

              <ul className="mt-10 space-y-8 text-white md:mt-14">
                <li className="flex items-start gap-4 text-xl md:text-2xl">
                  <span className="text-4xl leading-none text-orange-500">
                    ✓
                  </span>
                  <span>Custom website tailored to your goals</span>
                </li>
                <li className="flex items-start gap-4 text-xl md:text-2xl">
                  <span className="text-4xl leading-none text-orange-500">
                    ✓
                  </span>
                  <span>Fast-loading & SEO-optimized designs</span>
                </li>
                <li className="flex items-start gap-4 text-xl md:text-2xl">
                  <span className="text-4xl leading-none text-orange-500">
                    ✓
                  </span>
                  <span>Cross-device responsiveness</span>
                </li>
                <li className="flex items-start gap-4 text-xl md:text-2xl">
                  <span className="text-4xl leading-none text-orange-500">
                    ✓
                  </span>
                  <span>Secure & scalable websites</span>
                </li>
                <li className="flex items-start gap-4 text-xl md:text-2xl">
                  <span className="text-4xl leading-none text-orange-500">
                    ✓
                  </span>
                  <span>Ongoing support and maintenance</span>
                </li>
              </ul>
            </div>

            <div className="rounded-4xl bg-black p-8 text-center shadow-2xl md:p-10 lg:p-12">
              <h2 className="font-serif text-3xl font-bold text-orange-500 md:text-5xl">
                Our Vision
              </h2>

              <div className="mt-10 space-y-8 text-xl leading-10 text-white/90 md:mt-14 md:text-2xl">
                <p>
                  To empower Nigerian brands with world-class digital solutions.
                </p>
                <p>
                  To craft digital experiences that drive growth and results.
                </p>
                <p>
                  To raise the standard of design and development in Africa.
                </p>
              </div>
            </div>
          </div>
          <div className="justify-center">
            <h2 className="text-orange-500 mt-10 font-semibold text-3xl lg:text-6xl font-[poppins] text-center">
              Industries We Work With
            </h2>
          </div>
          <section className="py-16 px-6 text-black font-[poppins]">
            <div className="flex flex-wrap justify-center gap-6">
              <div className="px-8 py-4 border border-gray-300 rounded-full text-lg font-semibold bg-white">
                Real Estate & Property Brands
              </div>

              <div className="px-8 py-4 border border-gray-300 rounded-full text-lg font-semibold bg-white">
                Fashion & Lifestyle Startups
              </div>

              <div className="px-8 py-4 border border-gray-300 rounded-full text-lg font-semibold bg-white">
                Tech & SaaS Companies
              </div>

              <div className="px-8 py-4 border border-gray-300 rounded-full text-lg font-semibold bg-white">
                NGOs & Educational Platforms
              </div>

              <div className="px-8 py-4 border border-gray-300 rounded-full text-lg font-semibold bg-white">
                Personal Brands & Creatives
              </div>
            </div>
          </section>
        </section>
      </ScrollReveal>

      <ScrollReveal origin="up" className="relative z-10">
        <section className="bg-[#ededee] px-5 py-16 md:px-12 lg:px-40 lg:py-24">
          <div className="mx-auto max-w-350">
            <h2 className="text-center font-serif text-3xl font-medium text-black md:text-5xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-12 divide-y divide-black/15" id="faqList">
              <div className="faq-item py-7 md:py-10">
                <button
                  type="button"
                  className="faq-question flex w-full items-center justify-between gap-6 text-left"
                  aria-expanded="false"
                >
                  <span className="text-xl font-normal text-black md:text-3xl">
                    What Services Do I Offer?
                  </span>
                  <span className="faq-icon text-3xl font-medium text-orange-500">
                    +
                  </span>
                </button>
                <div className="faq-answer hidden pr-12 pt-4 text-lg leading-8 text-black/75 md:text-2xl">
                  We Offer Full-stack Web Development Services.
                </div>
              </div>

              <div className="faq-item py-7 md:py-10">
                <button
                  type="button"
                  className="faq-question flex w-full items-center justify-between gap-6 text-left"
                  aria-expanded="false"
                >
                  <span className="text-xl font-normal text-black md:text-3xl">
                    How Long Does It Take To Complete A project?
                  </span>
                  <span className="faq-icon text-3xl font-medium text-orange-500">
                    +
                  </span>
                </button>
                <div className="faq-answer hidden pr-12 pt-4 text-lg leading-8 text-black/75 md:text-2xl">
                  Depending on the project size, it can take anywhere from a few
                  days to several weeks. We always set clear timelines from the
                  start.
                </div>
              </div>

              <div className="faq-item py-7 md:py-10">
                <button
                  type="button"
                  className="faq-question flex w-full items-center justify-between gap-6 text-left"
                  aria-expanded="false"
                >
                  <span className="text-xl font-normal text-black md:text-3xl">
                    Do you provide website maintenance?
                  </span>
                  <span className="faq-icon text-3xl font-medium text-orange-500">
                    +
                  </span>
                </button>
                <div className="faq-answer hidden pr-12 pt-4 text-lg leading-8 text-black/75 md:text-2xl">
                  Yes, we provide ongoing maintenance to ensure your website
                  stays updated, secure, and running smoothly.
                </div>
              </div>

              <div className="faq-item py-7 md:py-10">
                <button
                  type="button"
                  className="faq-question flex w-full items-center justify-between gap-6 text-left"
                  aria-expanded="false"
                >
                  <span className="text-xl font-normal text-black md:text-3xl">
                    Do you offer SEO services?
                  </span>
                  <span className="faq-icon text-3xl font-medium text-orange-500">
                    +
                  </span>
                </button>
                <div className="faq-answer hidden pr-12 pt-4 text-lg leading-8 text-black/75 md:text-2xl">
                  Yes, we integrate SEO best practices into every website we
                  create and offer dedicated SEO optimization packages.
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal origin="up" className="relative z-10">
        <section className="bg-white py-20 px-6 text-white">
          <h2 className="text-orange-500 text-center text-4xl lg:text-5xl font-bold font-[poppins]">
            Feedback From My Clients
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
            <div className="bg-black hover:scale-105 border transition-all duration-300 hover:border-orange-500 rounded-3xl p-10 h-fit lg:h-125 flex flex-col justify-between">
              <div>
                <span className="text-orange-500 text-5xl">“</span>

                <p className="mt-4 text-lg leading-8 text-gray-200 text-center">
                  I hired Emmanuel to design and develop my company’s website,
                  and I couldn’t be more pleased with the results. The design
                  was sleek and modern, and the website functions flawlessly.
                  The process was smooth, and communication was always clear.
                </p>
              </div>

              <h3 className="mt-8 pb-2 text-center text-xl font-semibold text-orange-500">
                David Samuel
              </h3>
            </div>

            <div className="bg-black border hover:scale-105 transition-all duration-300 hover:border-orange-500 rounded-3xl p-10 h-fit lg:h-125 flex flex-col justify-between">
              <div>
                <span className="text-orange-500 text-5xl">“</span>

                <p className="mt-4 text-lg leading-8 text-gray-200 text-center">
                  Working With Emmanuel Was an Exeptional Experience from start
                  to finish. He took the time to understand my vision and
                  delivered a website that exceeded my expectations. The design
                  is stunning, and the functionality is top-notch. I highly
                  recommend his services.
                </p>
              </div>

              <h3 className="mt-8 pb-2 text-center text-xl font-semibold text-orange-500">
                Sarah Johnson
              </h3>
            </div>

            <div className="bg-black border hover:scale-105 transition-all duration-300 hover:border-orange-500 rounded-3xl p-10 h-fit lg:h-125 flex flex-col justify-between">
              <div>
                <span className="text-orange-500 text-5xl">“</span>

                <p className="mt-4 text-lg leading-8 text-gray-200 text-center">
                  Emmanuel is incredibly professional and proactive. They
                  transformed my outdated website into something fresh,
                  responsive, and user-friendly. I highly recommend their
                  services.
                </p>
              </div>

              <h3 className="mt-8 pb-2 text-center text-xl font-semibold text-orange-500">
                Anthony Smith
              </h3>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal origin="up" className="relative z-10">
        <section className="bg-black text-white mt-16 p-10">
          <div className=" font-[poppins] text-left md:text-center">
            <h2 className=" lg:text-xl leading-10">
              Need a Full-Stack WEB Developer <br />
              Get In Touch With Us
            </h2>
            <p className="mt-8  lg:text-xl">
              Have a project in mind or need expert website designer and website
              developer in Nigeria? <br />
              Get in touch with me today! Click the link below to start a
              conversation.
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              window.open(
                "https://wa.me/2347065968213?text=Hello%2C%20i%20am%20contacting%20you%20from%20your%20website.%20I%20need%20your%20service%20for%20%28_______%29",
                "_blank",
                "noopener,noreferrer",
              )
            }
            className="mt-6 text-lg bg-orange-500 rounded block hover:bg-white hover:text-black md:mx-auto"
          >
            <span className="py-2 px-7 inline-block">Contact Us</span>
          </button>
        </section>
      </ScrollReveal>

      <ScrollTopButton />
    </div>
  );
}
