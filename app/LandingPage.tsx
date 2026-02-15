"use client";

import { useState } from "react";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Legalent.ai" className="h-12 md:h-14" />
          <span className="text-xl font-bold text-primary-900 tracking-tight">
            LegalEnt<span className="text-accent-600">.ai</span>
          </span>
        </div>
        <a
          href="#stay-informed"
          className="text-sm font-medium text-primary-700 hover:text-primary-500 transition-colors"
        >
          Get Early Access
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-28 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-[3.5rem] font-bold tracking-tight text-neutral-900 leading-tight">
          Build the Law Firm
          <br />
          <span className="text-primary-700">of Your Design</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          The market is flooded with rigid tools that force you to change how
          you work. At legalent.ai, we believe the software should adapt to the
          practitioner. You are the architect. We provide the high-precision
          infrastructure for you to build custom AI agents that mirror your
          specific logic, your templates, and your professional
          &ldquo;secret sauce.&rdquo;
        </p>
        <div className="mt-10">
          <a
            href="#stay-informed"
            className="inline-block bg-accent-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-accent-400 hover:text-neutral-900 transition-colors text-base"
          >
            Stay Informed
          </a>
        </div>
      </div>
    </section>
  );
}

function CoreBeliefsSection() {
  const beliefs = [
    {
      title: "Your Workflow, Your Rules",
      description:
        "Building a custom agent should be as intuitive as practicing law. We make it easy to codify your unique processes into automated workflows that work exactly the way you do.",
      icon: (
        <svg className="w-8 h-8 text-accent-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      ),
    },
    {
      title: "Precision as a Mandate",
      description:
        "High-stakes work requires absolute certainty. Our agents are engineered for factual grounding. When a machine reaches the edge of its data, it defers to the expert\u2014you.",
      icon: (
        <svg className="w-8 h-8 text-accent-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      ),
    },
    {
      title: "Amplifying Expertise",
      description:
        "Technology should liberate the legal mind. By handling the data-heavy \u201Cpre-work,\u201D we empower you to spend more time on high-level strategy and creative advocacy.",
      icon: (
        <svg className="w-8 h-8 text-accent-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 md:py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-neutral-900 text-center">
          Our Core Beliefs
        </h2>
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {beliefs.map((belief) => (
            <div
              key={belief.title}
              className="p-8 rounded-2xl border border-neutral-100 bg-neutral-50 hover:border-primary-100 hover:shadow-sm transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                {belief.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-neutral-900">
                {belief.title}
              </h3>
              <p className="mt-3 text-base text-neutral-600 leading-relaxed">
                {belief.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfrastructureSection() {
  return (
    <section className="py-12 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-neutral-900">
            Why Infrastructure Matters
          </h2>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            Most legal AI is a &ldquo;black box&rdquo;&mdash;you can&apos;t see
            the logic or tweak the engine. legalent.ai is a{" "}
            <strong className="text-neutral-900">Glass Box</strong>. Every
            workflow you build is transparent, auditable, and entirely under
            your control. Stop adapting to your software; start building
            software that adapts to you.
          </p>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="py-12 md:py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-neutral-900">
          Built by Industry Leaders
        </h2>
        <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          We aren&apos;t just building another AI wrapper. legalent.ai is built
          by a team of engineers and leaders from{" "}
          <strong className="text-neutral-900">Uber</strong> and{" "}
          <strong className="text-neutral-900">Apple</strong> who have pioneered
          consumer-grade applications for millions and mission-critical
          enterprise systems. We are bringing that same standard of reliability,
          scale, and world-class design to the legal profession.
        </p>
      </div>
    </section>
  );
}

function CTASection() {
  const [email, setEmail] = useState("");

  return (
    <section id="stay-informed" className="py-12 md:py-20 px-6 bg-primary-900">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-white">
          Let&apos;s Build Together
        </h2>
        <p className="mt-4 text-lg text-primary-100 leading-relaxed">
          We are currently in the early stages of development and are looking to
          learn from forward-thinking firms. If you believe the future of law is
          bespoke, not &ldquo;one-size-fits-all,&rdquo; we would love to talk to
          you. Sign up below to stay updated on our progress and to start a
          conversation.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@lawfirm.com"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-400 text-base"
          />
          <button
            type="button"
            className="px-6 py-3 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-400 hover:text-neutral-900 transition-colors text-base whitespace-nowrap"
          >
            Stay Informed
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6 bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <span className="text-sm text-neutral-600">
          &copy; {new Date().getFullYear()} LegalEnt.ai. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <CoreBeliefsSection />
      <InfrastructureSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </>
  );
}
