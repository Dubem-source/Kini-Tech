"use client";

import { useState } from "react";
import TopNav from "../components/TopNav";
import ScrollTopButton from "../components/ScrollTopButton";
import ScrollReveal from "../components/ScrollReveal";

const EXCHANGE_RATE_NGN_TO_USD = 1362;

const formatNgnPrice = (value: number, plus = false) => {
  const formatted = `NGN ${value.toLocaleString("en-NG")}`;
  return plus ? `${formatted}+` : formatted;
};

const formatUsdPrice = (value: number, plus = false) => {
  const usdValue = Math.round(value / EXCHANGE_RATE_NGN_TO_USD);
  const formatted = `$${usdValue.toLocaleString("en-US")}`;
  return plus ? `${formatted}+` : formatted;
};

export default function PricingPage() {
  const [currency, setCurrency] = useState<"NGN" | "USD">("USD");
  const [activePlan, setActivePlan] = useState<string | null>(null);

  // ========== PRICING PACKAGES =========
  // Add, remove, or edit plans below. Each plan shows features and pricing
  // Format: priceNgnValue is the base price in Naira, USD auto-calculates
  const plans = [
    {
      name: "Starter",
      priceNgnValue: 180000,
      description: "Best for personal brands and simple business websites.",
      features: [
        "Up to 5 pages",
        "Mobile responsive design",
        "Basic contact form",
        "Speed optimization",
        "2 weeks support after launch",
      ],
      cta: "Choose Starter",
      highlighted: false,
    },
    {
      name: "Growth",
      priceNgnValue: 350000,
      description:
        "Best for growing businesses that need a stronger web presence.",
      features: [
        "Up to 12 pages",
        "Custom UI sections",
        "Advanced contact/lead forms",
        "Basic on-page SEO setup",
        "CMS-ready structure",
        "1 month support after launch",
      ],
      cta: "Choose Growth",
      highlighted: true,
    },
    {
      name: "Premium",
      priceNgnValue: 650000,
      plus: true,
      description:
        "Best for custom platforms and conversion-focused web products.",
      features: [
        "Custom full-stack architecture",
        "Database and admin dashboard",
        "Performance and SEO deep optimization",
        "Payment/API integration",
        "Scalable deployment setup",
        "2 months support after launch",
      ],
      cta: "Book Premium Call",
      highlighted: false,
    },
  ];

  const handlePlanClick = (planName: string) => {
    setActivePlan(planName);
    window.setTimeout(() => setActivePlan(null), 1200);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <TopNav />
      {/* ========== PRICING HERO SECTION ========== */}
      {/* Main headline and intro - edit text here */}
      <section className="relative overflow-hidden px-6 pb-16 pt-34 md:px-12 md:pb-20 md:pt-40 lg:px-24">
        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-28 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <ScrollReveal origin="up">
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Our Pricing Packages
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80 md:text-xl">
              Choose a package that fits your stage right now. Every plan is
              crafted with speed, responsive design, and conversion in mind.
            </p>
          </ScrollReveal>
        </div>
      </section>
      {/* ========== PRICING CARDS & CURRENCY TOGGLE ========== */}
      {/* Shows all three packages with currency switcher (NGN/USD) */}
      <section className="bg-white px-6 py-14 text-black md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto max-w-7xl">
          {/* Currency toggle buttons - let users switch between NGN and USD */}
          <div className="mb-10 flex justify-center">
            <div className="inline-flex rounded-full bg-black/10 p-1.5">
              <button
                type="button"
                onClick={() => setCurrency("NGN")}
                className={`min-w-30 rounded-full px-7 py-3 text-2xl font-bold transition-all duration-300 ${
                  currency === "NGN"
                    ? "bg-orange-500 text-white shadow-[0_8px_20px_-10px_rgba(249,115,22,0.8)]"
                    : "text-black/30"
                }`}
              >
                NGN
              </button>
              <button
                type="button"
                onClick={() => setCurrency("USD")}
                className={`min-w-30 rounded-full px-7 py-3 text-2xl font-bold transition-all duration-300 ${
                  currency === "USD"
                    ? "bg-orange-500 text-white shadow-[0_8px_20px_-10px_rgba(249,115,22,0.8)]"
                    : "text-black/30"
                }`}
              >
                USD
              </button>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => {
              const displayPrice =
                currency === "NGN"
                  ? formatNgnPrice(plan.priceNgnValue, plan.plus)
                  : formatUsdPrice(plan.priceNgnValue, plan.plus);

              const waText = `Hello, I am interested in the ${plan.name} plan (${displayPrice}). I would like to discuss details and get a quote.`;
              const waHref = `https://wa.me/2347065968213?text=${encodeURIComponent(
                waText,
              )}`;

              return (
                <article
                  key={plan.name}
                  className={`rounded-3xl border p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    plan.highlighted
                      ? "border-orange-500 bg-black text-white"
                      : "border-black/10 bg-white text-black"
                  }`}
                >
                  <p
                    className={`text-sm font-semibold uppercase tracking-[0.2em] ${
                      plan.highlighted ? "text-orange-400" : "text-orange-600"
                    }`}
                  >
                    {plan.name}
                  </p>
                  <h2 className="mt-3 text-4xl font-bold">{displayPrice}</h2>
                  <p
                    className={`mt-3 text-sm leading-7 ${
                      plan.highlighted ? "text-white/80" : "text-black/75"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span
                          className={`mt-1 inline-block h-2.5 w-2.5 rounded-full ${
                            plan.highlighted ? "bg-orange-400" : "bg-orange-500"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            plan.highlighted ? "text-white/90" : "text-black/80"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handlePlanClick(plan.name)}
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-base font-bold transition-all duration-300 ${
                      activePlan === plan.name
                        ? "scale-[0.98] ring-2 ring-orange-300/80 ring-offset-2 ring-offset-black"
                        : ""
                    } ${
                      plan.highlighted
                        ? "bg-orange-500 text-black hover:bg-orange-400"
                        : "bg-black text-white hover:bg-orange-500 hover:text-black"
                    }`}
                  >
                    {activePlan === plan.name
                      ? "Opening WhatsApp..."
                      : plan.cta}
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      {/* Shows features that come with every plan - add or remove items here */}
      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-24">
        <div className="rounded-3xl border border-white/15 bg-[#101010] p-7 md:p-10">
          <h2 className="text-3xl font-bold md:text-5xl">
            What Is Included In Every Plan?
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/45 p-5">
              <p className="text-lg font-semibold text-orange-400">
                UI/UX Quality
              </p>
              <p className="mt-2 text-white/80">
                Clean layout, responsive behavior, and structured content flow.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/45 p-5">
              <p className="text-lg font-semibold text-orange-400">
                Performance
              </p>
              <p className="mt-2 text-white/80">
                Optimized assets, loading speed improvements, and smooth user
                experience across devices.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/45 p-5">
              <p className="text-lg font-semibold text-orange-400">
                Collaboration
              </p>
              <p className="mt-2 text-white/80">
                Frequent updates, milestone review, and clear communication.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/45 p-5">
              <p className="text-lg font-semibold text-orange-400">Support</p>
              <p className="mt-2 text-white/80">
                Post-launch support window included with every package.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ========== CUSTOM PRICING CTA ========== */}
      {/* For projects that don't fit the standard packages - edit the heading/text here */}
      <section className="bg-white px-6 py-14 text-black md:px-12 md:py-18 lg:px-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            We Offer Custom Pricing?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-black/75">
            If your project has unique requirements, integrations, or a specific
            business workflow, we can prepare a custom package that fits your
            goals.
          </p>
          <a
            href="https://wa.me/2347065968213?text=Hello,%20I%20am%20contacting%20you%20from%20your%20website.%20I%20would%20like%20a%20custom%20pricing%20package.%20My%20project%20details%20are%3A%20"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-3 text-lg font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-lg active:scale-95 active:bg-orange-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Request Custom Pricing
          </a>
        </div>
      </section>
      <ScrollTopButton />
    </main>
  );
}
