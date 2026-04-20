import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Handshake,
  CalendarBlank,
  Gear,
  Wrench,
  GraduationCap,
  CheckCircle,
} from '@phosphor-icons/react';
import { services } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';

const ICONS = { Handshake, CalendarBlank, Gear, Wrench, GraduationCap };

export default function Services() {
  return (
    <PageTransition>
      <SEO
        title="Services — Machinery Exchange"
        description="Sales, rental, genuine parts, workshop service & repair, and technical training for heavy earthmoving and mining equipment in Zimbabwe."
      />

      {/* HERO */}
      <section className="relative bg-charcoal-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=2000&q=80"
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
            <span className="text-safety-500">Services</span>
          </nav>
          <p className="font-mono text-[11px] tracking-widest-2 uppercase text-safety-500 mb-4">
            // Sales · Rental · Parts · Service · Training
          </p>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl text-charcoal-50 leading-[0.92] uppercase tracking-mega text-balance">
            End-to-end <span className="text-safety-500">heavy</span> equipment.
          </h1>
          <p className="mt-6 text-charcoal-200 text-base lg:text-lg max-w-2xl leading-relaxed">
            We don't just sell machines — we keep them running. Five integrated service lines, one workshop, one phone number. Since 1954.
          </p>
        </div>
      </section>

      {/* SERVICES — large staggered rows */}
      <section className="relative bg-charcoal-900 py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 space-y-16 lg:space-y-24">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon] || Gear;
            const reverse = i % 2 === 1;
            return (
              <SectionReveal key={s.slug}>
                <article className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                  <div className={`lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}>
                    <div className="relative aspect-[4/3] lg:aspect-[16/11] overflow-hidden bg-charcoal-800">
                      <img
                        src={s.image}
                        alt={s.name}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-charcoal-950/30 to-transparent" />
                      {/* Service number */}
                      <div className="absolute top-5 left-5 bg-safety-500 text-charcoal-950 h-14 w-14 flex items-center justify-center font-heavy text-2xl tracking-tight">
                        0{i + 1}
                      </div>
                    </div>
                  </div>
                  <div className={`lg:col-span-5 ${reverse ? 'lg:order-1' : ''}`}>
                    <div className="h-12 w-12 bg-charcoal-800 border border-charcoal-700 flex items-center justify-center text-safety-500 mb-5">
                      <Icon size={22} weight="bold" />
                    </div>
                    <p className="font-mono text-[11px] tracking-widest-2 uppercase text-safety-500">
                      // Service 0{i + 1}
                    </p>
                    <h2 className="mt-2 font-display font-black text-3xl sm:text-5xl text-charcoal-50 uppercase tracking-mega leading-[1.0]">
                      {s.name}
                    </h2>
                    <p className="mt-4 text-safety-500 font-semibold text-sm uppercase tracking-wide">
                      {s.tagline}
                    </p>
                    <p className="mt-5 text-charcoal-300 leading-relaxed">
                      {s.description}
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-charcoal-200">
                          <CheckCircle size={16} weight="fill" className="mt-0.5 text-safety-500 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="mt-7 inline-flex items-center gap-2 bg-charcoal-800 border border-charcoal-700 hover:border-safety-500 hover:bg-safety-500 hover:text-charcoal-950 text-charcoal-50 px-6 py-3 text-[11px] tracking-widest-2 uppercase font-bold transition-colors"
                    >
                      Enquire about {s.name} <ArrowRight size={12} weight="bold" />
                    </Link>
                  </div>
                </article>
              </SectionReveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=2000&q=80"
            alt=""
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-charcoal-950/80" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-24 text-center">
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-charcoal-50 uppercase tracking-mega leading-[1.0]">
            Whatever the job, <span className="text-safety-500">we handle it.</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 bg-safety-500 text-charcoal-950 px-8 py-4 text-xs tracking-widest-2 uppercase font-bold hover:bg-safety-400"
          >
            Book a consultation <ArrowRight size={14} weight="bold" />
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 hazard-stripe-thin" />
      </section>
    </PageTransition>
  );
}
