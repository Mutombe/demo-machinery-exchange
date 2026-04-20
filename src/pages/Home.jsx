import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import {
  ArrowRight,
  Phone,
  WhatsappLogo,
  Wrench,
  Handshake,
  CalendarBlank,
  GraduationCap,
  Gear,
  Lightning,
  HardHat,
  Truck,
  Tractor,
  Fan,
  Star,
  ShieldCheck,
  Clock,
  CheckCircle,
  ArrowUpRight,
} from '@phosphor-icons/react';
import {
  business,
  hero,
  brands,
  equipmentCategories,
  featuredEquipment,
  services,
  industries,
  stats,
  reviews,
} from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import EquipmentCard from '../components/EquipmentCard';
import IndustryCard from '../components/IndustryCard';

const CAT_ICONS = {
  Excavator: Wrench,
  Tractor,
  Wrench,
  Truck,
  HardHat,
  Lightning,
  Fan,
  Gear,
};

const SVC_ICONS = {
  Handshake,
  CalendarBlank,
  Gear,
  Wrench,
  GraduationCap,
};

export default function Home() {
  const [quoted, setQuoted] = useState(null);

  const waHref = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`;

  const onQuote = (item) => {
    setQuoted(item.model);
    const msg = `Hi Machinery Exchange, I'd like a quote on the ${item.brand} ${item.model}.`;
    const url = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener');
    toast.success(`Quote opened for ${item.model}`, {
      description: 'Your WhatsApp is ready. We respond within 2 business hours.',
    });
  };

  return (
    <PageTransition>
      <SEO
        title="Machinery Exchange — Earthmoving Equipment Specialists | Harare"
        description={hero.sub}
      />

      {/* ============================================ */}
      {/* HERO — full-bleed industrial */}
      {/* ============================================ */}
      <section className="relative bg-charcoal-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero.image}
            alt={hero.imageAlt}
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/80 to-charcoal-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/40" />
          <div className="absolute inset-0 blueprint-grid opacity-40" />
        </div>

        {/* Top hazard strip */}
        <div className="absolute top-0 left-0 right-0 h-1 hazard-stripe-thin z-10" />

        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-20 lg:pt-28 pb-28 lg:pb-36 min-h-[80vh] flex flex-col justify-center">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] sm:text-sm tracking-widest-2 uppercase text-safety-500 mb-5">
              {hero.eyebrow}
            </p>
            <h1 className="font-display font-black text-[44px] sm:text-7xl lg:text-8xl leading-[0.92] text-charcoal-50 uppercase tracking-mega text-balance">
              {hero.headline}
              <span className="block text-safety-500 mt-2">
                {hero.headlineAccent}
              </span>
            </h1>
            <p className="mt-7 text-charcoal-200 text-base lg:text-lg leading-relaxed max-w-2xl text-pretty">
              {hero.sub}
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to={hero.ctaPrimary.to}
                className="inline-flex items-center justify-center gap-2.5 bg-safety-500 text-charcoal-950 px-8 py-4 text-xs tracking-widest-2 uppercase font-bold hover:bg-safety-400 transition-colors group"
              >
                {hero.ctaPrimary.label}
                <ArrowRight size={14} weight="bold" className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to={hero.ctaSecondary.to}
                className="inline-flex items-center justify-center gap-2.5 border-2 border-charcoal-50 text-charcoal-50 px-8 py-4 text-xs tracking-widest-2 uppercase font-bold hover:bg-charcoal-50 hover:text-charcoal-950 transition-colors"
              >
                {hero.ctaSecondary.label}
              </Link>
            </div>

            {/* Inline stats */}
            <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-4 max-w-2xl border-t border-charcoal-700 pt-8">
              {hero.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-heavy text-3xl sm:text-4xl text-charcoal-50 tracking-tight">
                    {s.value}
                  </dt>
                  <dd className="text-[10px] tracking-widest-2 uppercase text-safety-500 mt-1.5 font-mono">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BRAND MARQUEE */}
      {/* ============================================ */}
      <section className="relative bg-charcoal-950 border-y border-charcoal-800 py-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="flex items-center gap-6">
            <p className="hidden md:block font-mono text-[11px] tracking-widest-2 uppercase text-charcoal-500 shrink-0">
              // OEM Partners
            </p>
            <div className="flex-1 overflow-hidden relative">
              <div className="flex items-center gap-10 animate-marquee whitespace-nowrap">
                {[...brands, ...brands].map((b, i) => (
                  <span
                    key={i}
                    className="font-heavy text-xl sm:text-2xl tracking-mega uppercase text-charcoal-500 shrink-0"
                  >
                    {b}
                    <span className="ml-10 text-charcoal-800">/</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* EQUIPMENT CATEGORIES — 8 tiles */}
      {/* ============================================ */}
      <section className="relative bg-charcoal-900 py-16 sm:py-24 lg:py-32">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
              <div className="max-w-2xl">
                <p className="font-mono text-[11px] tracking-widest-2 uppercase text-safety-500 mb-3">
                  // 01 — Equipment Categories
                </p>
                <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-charcoal-50 leading-[0.96] uppercase tracking-mega text-balance">
                  Everything that moves <span className="text-safety-500">ground.</span>
                </h2>
              </div>
              <Link
                to="/equipment"
                className="inline-flex items-center gap-2 text-[11px] tracking-widest-2 uppercase font-bold text-charcoal-50 border-b-2 border-safety-500 pb-1.5 hover:text-safety-500 self-start"
              >
                See full inventory <ArrowRight size={13} weight="bold" />
              </Link>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-charcoal-700">
            {equipmentCategories.map((c, i) => {
              const Icon = CAT_ICONS[c.icon] || Gear;
              return (
                <SectionReveal
                  key={c.slug}
                  delay={i * 40}
                  className="bg-charcoal-900 group"
                >
                  <Link
                    to="/equipment"
                    className="relative block aspect-square sm:aspect-[4/5] p-5 lg:p-6 hover:bg-charcoal-800 transition-colors duration-300 overflow-hidden"
                  >
                    {/* Image bg on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.18] transition-opacity duration-500">
                      <img src={c.image} alt="" className="h-full w-full object-cover object-center" loading="lazy" />
                    </div>
                    <div className="relative h-full flex flex-col">
                      <div className="flex items-start justify-between">
                        <div className="h-12 w-12 bg-charcoal-800 border border-charcoal-700 group-hover:bg-safety-500 group-hover:border-safety-500 flex items-center justify-center text-safety-500 group-hover:text-charcoal-950 transition-colors">
                          <Icon size={22} weight="bold" />
                        </div>
                        <span className="font-mono text-[10px] tracking-widest-2 text-charcoal-500">
                          // {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <div className="flex-1" />
                      <div>
                        <h3 className="font-heavy text-xl lg:text-2xl text-charcoal-50 uppercase tracking-mega leading-none">
                          {c.name}
                        </h3>
                        <p className="mt-2 text-[11px] font-mono tracking-widest-2 uppercase text-safety-500">
                          {c.count.toLocaleString()}+ units
                        </p>
                        <ArrowUpRight size={18} weight="bold" className="mt-3 text-charcoal-500 group-hover:text-safety-500 transition-colors" />
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FEATURED EQUIPMENT — 8 cards */}
      {/* ============================================ */}
      <section className="relative bg-charcoal-950 py-16 sm:py-24 lg:py-32 steel-plate">
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
              <div className="max-w-2xl">
                <p className="font-mono text-[11px] tracking-widest-2 uppercase text-safety-500 mb-3">
                  // 02 — On the Yard
                </p>
                <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-charcoal-50 leading-[0.96] uppercase tracking-mega text-balance">
                  Ready to roll, <span className="text-safety-500">today.</span>
                </h2>
                <p className="mt-4 text-charcoal-300 max-w-xl">
                  A live selection from our Martin Drive yard. Every unit comes with factory warranty, pre-delivery inspection and a parts plan.
                </p>
              </div>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {featuredEquipment.slice(0, 8).map((item, i) => (
              <SectionReveal key={item.slug} delay={i * 50}>
                <EquipmentCard item={item} onQuote={onQuote} />
              </SectionReveal>
            ))}
          </div>

          <SectionReveal>
            <div className="mt-12 text-center">
              <Link
                to="/equipment"
                className="inline-flex items-center gap-2 bg-charcoal-800 border border-charcoal-700 hover:border-safety-500 hover:bg-charcoal-900 text-charcoal-50 px-7 py-3.5 text-[11px] tracking-widest-2 uppercase font-bold"
              >
                Browse full equipment catalogue
                <ArrowRight size={13} weight="bold" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ============================================ */}
      {/* SERVICES — 5 services */}
      {/* ============================================ */}
      <section className="relative bg-charcoal-900 py-16 sm:py-24 lg:py-32">
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal>
            <div className="max-w-3xl mb-14">
              <p className="font-mono text-[11px] tracking-widest-2 uppercase text-safety-500 mb-3">
                // 03 — What we do, end to end
              </p>
              <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-charcoal-50 leading-[0.96] uppercase tracking-mega text-balance">
                Sales. Rental. Parts. <span className="text-safety-500">Service.</span> Training.
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-charcoal-700 border border-charcoal-700">
            {services.map((s, i) => {
              const Icon = SVC_ICONS[s.icon] || Gear;
              return (
                <SectionReveal
                  key={s.slug}
                  delay={i * 60}
                  className="bg-charcoal-900 group hover:bg-charcoal-800 transition-colors"
                >
                  <div className="h-full p-6 lg:p-7 flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="h-12 w-12 bg-safety-500 flex items-center justify-center text-charcoal-950 group-hover:bg-charcoal-50 transition-colors">
                        <Icon size={22} weight="bold" />
                      </div>
                      <span className="font-mono text-[10px] tracking-widest-2 text-charcoal-500">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="font-heavy text-xl text-charcoal-50 uppercase tracking-tight leading-tight">
                      {s.name}
                    </h3>
                    <p className="mt-3 text-sm text-charcoal-400 leading-relaxed flex-1">
                      {s.tagline}
                    </p>
                    <Link
                      to="/services"
                      className="mt-5 inline-flex items-center gap-1.5 text-[10px] font-mono tracking-widest-2 uppercase text-safety-500 border-b border-safety-500 pb-0.5 self-start"
                    >
                      Learn more <ArrowRight size={10} weight="bold" />
                    </Link>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* INDUSTRIES — 4 */}
      {/* ============================================ */}
      <section className="relative bg-charcoal-950 py-16 sm:py-24 lg:py-32">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div className="max-w-2xl">
                <p className="font-mono text-[11px] tracking-widest-2 uppercase text-safety-500 mb-3">
                  // 04 — Who we serve
                </p>
                <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-charcoal-50 leading-[0.96] uppercase tracking-mega text-balance">
                  Zimbabwe's <span className="text-safety-500">working</span> sectors.
                </h2>
              </div>
              <Link
                to="/industries"
                className="inline-flex items-center gap-2 text-[11px] tracking-widest-2 uppercase font-bold text-charcoal-50 border-b-2 border-safety-500 pb-1.5 hover:text-safety-500 self-start"
              >
                Explore industries <ArrowRight size={13} weight="bold" />
              </Link>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {industries.map((ind, i) => (
              <SectionReveal key={ind.slug} delay={i * 80}>
                <IndustryCard industry={ind} index={i} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* STATS BANNER */}
      {/* ============================================ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1530939027401-0221cfcf5ff3?auto=format&fit=crop&w=2000&q=80"
            alt="Heavy equipment at quarry sunset"
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-charcoal-950/80" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-20 sm:py-28">
          <SectionReveal>
            <div className="max-w-3xl mb-12">
              <p className="font-mono text-[11px] tracking-widest-2 uppercase text-safety-500 mb-3">
                // 05 — By the numbers
              </p>
              <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-charcoal-50 leading-[1.0] uppercase tracking-mega text-balance">
                Seven decades. One Martin Drive address.
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal-700 border border-charcoal-700">
            {stats.map((s, i) => (
              <SectionReveal key={s.label} delay={i * 80} className="bg-charcoal-950 p-7 lg:p-10">
                <div>
                  <dt className="font-mono text-[10px] tracking-widest-2 uppercase text-safety-500">
                    // 0{i + 1}
                  </dt>
                  <dd className="mt-3 font-heavy text-5xl lg:text-7xl text-charcoal-50 tracking-tight leading-none">
                    {s.value}
                    <span className="text-safety-500">{s.suffix}</span>
                  </dd>
                  <p className="mt-3 text-[11px] tracking-widest-2 uppercase text-charcoal-400 font-mono">
                    {s.label}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* REVIEWS — B2B testimonials */}
      {/* ============================================ */}
      <section className="relative bg-charcoal-900 py-16 sm:py-24 lg:py-32">
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal>
            <div className="max-w-2xl mb-14">
              <p className="font-mono text-[11px] tracking-widest-2 uppercase text-safety-500 mb-3">
                // 06 — From the operators
              </p>
              <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-charcoal-50 leading-[0.96] uppercase tracking-mega text-balance">
                What mine managers <span className="text-safety-500">actually</span> say.
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {reviews.map((r, i) => (
              <SectionReveal key={r.name} delay={i * 80}>
                <article className="h-full bg-charcoal-800 border border-charcoal-700 p-7 lg:p-8 flex flex-col relative clip-corners">
                  <div className="flex items-center gap-0.5 text-safety-500">
                    {Array.from({ length: r.rating }).map((_, k) => (
                      <Star key={k} size={16} weight="fill" />
                    ))}
                  </div>
                  <p className="mt-5 text-charcoal-100 leading-relaxed text-[15px] flex-1 italic">
                    "{r.body}"
                  </p>
                  <div className="mt-6 pt-6 border-t border-charcoal-700 flex items-center gap-3">
                    <img
                      src={r.avatar}
                      alt={r.name}
                      loading="lazy"
                      className="h-11 w-11 rounded-full object-cover object-center border border-charcoal-600"
                    />
                    <div>
                      <p className="font-display font-bold text-sm text-charcoal-50 uppercase tracking-wide">
                        {r.name}
                      </p>
                      <p className="text-[11px] text-charcoal-400 mt-0.5">{r.role}</p>
                    </div>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>

          {/* Google rating summary */}
          <SectionReveal>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 bg-charcoal-950 border border-charcoal-800 py-5 px-7">
              <div className="flex items-center gap-1 text-safety-500">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={18} weight="fill" />
                ))}
              </div>
              <p className="text-sm text-charcoal-200">
                <span className="font-heavy text-lg text-charcoal-50">{business.rating}</span>
                <span className="text-charcoal-500 mx-2">·</span>
                <span>{business.reviewCount} Google reviews</span>
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA */}
      {/* ============================================ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517030330234-94c4fb948ebc?auto=format&fit=crop&w=2000&q=80"
            alt="Bulldozer moving earth"
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-charcoal-950/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/70 to-charcoal-950/30" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-24 sm:py-32">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] tracking-widest-2 uppercase text-safety-500 mb-4">
              // Get on the phone
            </p>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-charcoal-50 leading-[0.96] uppercase tracking-mega text-balance">
              Got iron that needs moving?{' '}
              <span className="text-safety-500">Let's talk.</span>
            </h2>
            <p className="mt-6 text-charcoal-200 text-base lg:text-lg leading-relaxed max-w-xl">
              Sales quote, rental dispatch, spare parts, workshop booking — whatever you need, our Martin Drive team picks up the phone.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${business.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2.5 bg-safety-500 text-charcoal-950 px-7 py-4 text-xs tracking-widest-2 uppercase font-bold hover:bg-safety-400"
              >
                <Phone size={14} weight="bold" />
                {business.phone}
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 border-2 border-charcoal-50 text-charcoal-50 px-7 py-4 text-xs tracking-widest-2 uppercase font-bold hover:bg-charcoal-50 hover:text-charcoal-950 transition-colors"
              >
                <WhatsappLogo size={15} weight="fill" />
                WhatsApp Us
              </a>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              {[
                { icon: ShieldCheck, label: 'Factory-backed warranty' },
                { icon: Clock, label: '24-hour breakdown response' },
                { icon: CheckCircle, label: 'Nationwide lowbed delivery' },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-2.5 text-charcoal-200 text-xs">
                  <f.icon size={16} weight="bold" className="text-safety-500 shrink-0" />
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 hazard-stripe-thin" />
      </section>
    </PageTransition>
  );
}
