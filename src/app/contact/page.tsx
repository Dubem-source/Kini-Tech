"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import TopNav from "../components/TopNav";
import ScrollTopButton from "../components/ScrollTopButton";
import ScrollReveal from "../components/ScrollReveal";

export default function ContactPage() {
  const recipientEmail = "dubem1817@gmail.com";

  const [sending, setSending] = useState(false);
  const [resultMessage, setResultMessage] = useState<string | null>(null);

  const handleQuickContactSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setResultMessage(null);
    setSending(true);
    const form = event.currentTarget;

    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const projectType = String(formData.get("projectType") ?? "").trim();
    const details = String(formData.get("details") ?? "").trim();

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, projectType, details }),
      });

      if (res.ok) {
        setResultMessage(
          "Message sent successfully. I’ll get back to you soon.",
        );
        form.reset();
      } else {
        const data = await res.json().catch(() => null);
        setResultMessage(
          data?.error
            ? `Failed to send message. ${data.error}`
            : "Failed to send message. Please try again.",
        );
      }
    } catch (err) {
      setResultMessage("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white relative">
      <TopNav />

      {/* Background video and overlay for aesthetic effect */}
      <video
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-50"
        src="/videos/shine.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Subtle overlay to keep text legible */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-black/30 via-transparent to-black/60" />

      <div className="relative z-20">
        <ScrollReveal origin="up">
          {/* ========== CONTACT HERO SECTION ========== */}
          {/* Main contact intro - edit headline here */}
          <section className="relative overflow-hidden px-6 pb-16 pt-34 md:px-12 md:pb-20 md:pt-40 lg:px-24">
            <div className="pointer-events-none absolute -left-28 top-20 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 top-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-400">
                Let’s Talk
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                Have a project in mind?{" "}
                <span className="text-orange-500">Let’s build it.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
                Whether you need a personal Brand portfolio, E-commerce website,
                or a full-stack web platform, I’m ready to help bring it to life
                with a clean design and reliable development.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
                    Email
                  </p>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-lg font-semibold text-white transition-colors hover:text-orange-400"
                  >
                    {recipientEmail}
                  </a>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/2347065968213?text=Hello%2C%20i%20am%20contacting%20you%20from%20your%20website.%20I%20need%20your%20service%20for%20%28_______%29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-white transition-colors hover:text-orange-400"
                  >
                    <i className="fab fa-whatsapp" aria-hidden="true"></i>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* ========== CONTACT FORM ========== */}
              {/* Email form that sends via /api/send-email endpoint using Resend */}
              {/* Form data: name, email, projectType, details */}
              <div className="mt-8 rounded-3xl border border-white/15 bg-[#0f0f0f] p-5 shadow-[0_30px_80px_-30px_rgba(249,115,22,0.45)] md:p-7">
                <div className="rounded-2xl border border-white/10 bg-black/80 p-5 md:p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                    Quick Contact
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-orange-400 md:text-3xl">
                    Send a message
                  </h2>

                  <form
                    className="mt-6 space-y-4"
                    onSubmit={handleQuickContactSubmit}
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/40 focus:border-orange-500"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        required
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/40 focus:border-orange-500"
                      />
                    </div>

                    <input
                      type="text"
                      name="projectType"
                      placeholder="Project type"
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/40 focus:border-orange-500"
                    />

                    <textarea
                      rows={6}
                      name="details"
                      placeholder="Tell me about your project"
                      required
                      className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/40 focus:border-orange-500"
                    />

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-orange-500 px-6 py-3 text-lg font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-400"
                    >
                      {sending ? "Sending message..." : "Send Message"}
                    </button>
                    {resultMessage ? (
                      <p className="mt-3 text-sm text-white/80">
                        {resultMessage}
                      </p>
                    ) : null}
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Info cards */}
          <section className="px-6 pb-16 md:px-12 lg:px-24">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-white/15 bg-[#111] p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
                  Response Time
                </p>
                <h3 className="mt-3 text-2xl font-semibold">Fast replies</h3>
                <p className="mt-3 text-white/75">
                  I usually respond within 24 hours on business days.
                </p>
              </div>

              <div className="rounded-3xl border border-white/15 bg-[#111] p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
                  Services
                </p>
                <h3 className="mt-3 text-2xl font-semibold">What I handle</h3>
                <p className="mt-3 text-white/75">
                  Brand portfolios, E-commerce websites, Payments integration,
                  and custom web apps.
                </p>
              </div>

              <div className="rounded-3xl border border-white/15 bg-[#111] p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
                  Location
                </p>
                <h3 className="mt-3 text-2xl font-semibold">
                  Working remotely
                </h3>
                <p className="mt-3 text-white/75">
                  Available for remote work Freelancing and project discussions
                  anywhere.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>

      <ScrollTopButton />
    </main>
  );
}
