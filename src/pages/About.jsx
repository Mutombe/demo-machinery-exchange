import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Wrench,
  Clock,
  Handshake,
} from '@phosphor-icons/react';
import { business, timeline, values, stats, brands } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';

const VAL_ICONS = { ShieldCheck, Wrench, Clock, Handshake };

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="About — Machinery Exchange"
        description="Founded 1954 in Harare. Seventy years of earthmoving equipment service across Zimbabwe. Twelve OEM brands, one Martin Drive workshop."
      />

      {/* HERO */}
      <section className="relative bg-charcoal-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=80"
            alt=""
            loading="eager"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/85 to-charcoal-950" />
          <div className="absolute inset-0 blueprint-grid opacity-30" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-20 pb-16 lg:pt-28 lg:pb-20">
          <nav className="font-mono text-[11px] tracking-widest-2 uppercase text-charcoal-400 mb-8">
            <Link to="/" className="hover:text-safety-500">Home</Link>
            <span className="mx-2 text-charcoal-600">/</span>
            <span className="text-safety-500">About</span>
          </nav>
          <p className="font-mono text-[11px] tracking-widest-2 uppercase text-safety-500 mb-4">
            // Est. 1954 · Harare
          </p>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl text-charcoal-50 leading-[0.92] uppercase tracking-mega text-balance max-w-5xl">
            Seventy years of <span className="text-safety-500">heavy iron,</span> kept running.
          </h1>
          <p className="mt-6 text-charcoal-200 text-base lg:text-lg max-w-2xl leading-relaxed">
            Machinery Exchange has been part of Zimbabwe's earthmoving story since before independence — supplying, rebuilding and standing behind the machines that dig, haul and build this country.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="relative bg-charcoal-900 py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <SectionReveal className="lg:col-span-5">
              <div className="relative aspect-[4/5] max-w-[520px] bg-charcoal-800 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559087867-ce4c91325525?auto=format&fit=crop&w=1200&q=80"
                  alt="Heavy equipment workshop"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute -bottom-1 -right-1 h-24 w-24 bg-safety-500 flex flex-col items-center justify-center">
                  <span className="font-heavy text-3xl text-charcoal-950 leading-none">70+</span>
                  <span className="text-[9px] tracking-widest-2 uppercase font-mono text-charcoal-950 mt-1">Years</span>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal className="lg:col-span-7" delay={100}>
              <p className="font-mono text-[11px] tracking-widest-2 uppercase text-safety-500 mb-3">
                // The Machinery Exchange story
              </p>
              <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-charcoal-50 uppercase tracking-mega leading-[1.0]">
                From one workshop bay, to Zimbabwe's yard.
              </h2>
              <div className="mt-7 space-y-5 text-charcoal-300 leading-relaxed">
                <p>
                  Machinery Exchange was established in 1954 at 5 Martin Drive, Harare — one workshop, three mechanics, and a straightforward proposition: keep the earthmoving machines of a young country running.
                </p>
                <p>
                  That proposition never changed. Over seven decades we have grown from a single-bay workshop into a full-line distributor, parts counter and heavy-engineering facility — now representing twelve OEM brands including Shantui, Hitachi, Wirtgen, Rokbak, Bobcat and Cummins Power Generation.
                </p>
                <p>
                  Our workshop still operates from the same address. The technicians still diagnose machines by sound and oil colour. The parts counter still opens at 07:30. And the promise is still the same: uptime, delivered.
                </p>
              </div>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 border-2 border-charcoal-50 text-charcoal-50 px-7 py-3.5 text-[11px] tracking-widest-2 uppercase font-bold hover:bg-safety-500 hover:border-safety-500 hover:text-charcoal-950 transition-colors"
              >
                Visit the workshop <ArrowRight size={13} weight="bold" />
              </Link>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative bg-charcoal-950 py-16 sm:py-24 steel-plate">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal>
            <p className="font-mono text-[11px] tracking-widest-2 uppercase text-safety-500 mb-3">
              // The timeline
            </p>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-charcoal-50 uppercase tracking-mega leading-[1.0] mb-14">
              Seventy years, <span className="text-safety-500">one drive.</span>
            </h2>
          </SectionReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-charcoal-700 sm:-translate-x-px" />

            <div className="space-y-10 sm:space-y-14">
              {timeline.map((t, i) => {
                const leftSide = i % 2 === 0;
                return (
                  <SectionReveal key={t.year} delay={i * 60}>
                    <div className={`relative grid sm:grid-cols-2 gap-6 sm:gap-12 items-start`}>
                      {/* Dot */}
                      <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 h-4 w-4 bg-safety-500 ring-4 ring-charcoal-950 z-10" />

                      <div className={`pl-12 sm:pl-0 ${leftSide ? 'sm:text-right sm:pr-10' : 'sm:col-start-2 sm:pl-10'}`}>
                        <p className="font-heavy text-3xl sm:text-5xl text-safety-500 tracking-tight leading-none">
                          {t.year}
                        </p>
                        <h3 className="mt-3 font-display font-black text-xl sm:text-2xl text-charcoal-50 uppercase tracking-tight">
                          {t.title}
                        </h3>
                        <p className="mt-3 text-charcoal-300 leading-relaxed text-sm">
                          {t.body}
                        </p>
                      </div>
                    </div>
                  </SectionReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative bg-charcoal-900 py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal>
            <p className="font-mono text-[11px] tracking-widest-2 uppercase text-safety-500 mb-3">
              // What we stand for
            </p>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-charcoal-50 uppercase tracking-mega leading-[1.0] max-w-3xl mb-12">
              Values <span className="text-safety-500">welded</span> into the workshop.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-charcoal-700 border border-charcoal-700">
            {values.map((v, i) => {
              const Icon = VAL_ICONS[v.icon] || ShieldCheck;
              return (
                <SectionReveal key={v.title} delay={i * 80} className="bg-charcoal-900 p-8 lg:p-10">
                  <div className="flex items-start gap-5">
                    <div className="h-14 w-14 bg-safety-500 flex items-center justify-center text-charcoal-950 shrink-0">
                      <Icon size={24} weight="bold" />
                    </div>
                    <div>
                      <h3 className="font-display font-black text-xl sm:text-2xl text-charcoal-50 uppercase tracking-tight">
                        {v.title}
                      </h3>
                      <p className="mt-3 text-charcoal-300 leading-relaxed text-sm">
                        {v.body}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative bg-charcoal-950 py-16 border-t border-charcoal-800">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal-700 border border-charcoal-700">
            {stats.map((s, i) => (
              <SectionReveal key={s.label} delay={i * 60} className="bg-charcoal-950 p-7 lg:p-10">
                <dt className="font-mono text-[10px] tracking-widest-2 uppercase text-safety-500">// 0{i + 1}</dt>
                <dd className="mt-3 font-heavy text-5xl lg:text-6xl text-charcoal-50 tracking-tight leading-none">
                  {s.value}<span className="text-safety-500">{s.suffix}</span>
                </dd>
                <p className="mt-3 text-[11px] tracking-widest-2 uppercase text-charcoal-400 font-mono">
                  {s.label}
                </p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="relative bg-charcoal-900 py-14 border-t border-charcoal-800">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 text-center">
          <p className="font-mono text-[11px] tracking-widest-2 uppercase text-safety-500 mb-6">
            // Authorised dealer for
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {brands.map((b) => (
              <span key={b} className="font-heavy text-xl sm:text-2xl tracking-mega uppercase text-charcoal-400">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
