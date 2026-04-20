import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { industries } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import IndustryCard from '../components/IndustryCard';

export default function Industries() {
  return (
    <PageTransition>
      <SEO
        title="Industries Served — Machinery Exchange"
        description="Mining, construction, agriculture and quarrying — four sectors, one specialist equipment partner."
      />

      <section className="relative bg-charcoal-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&w=2000&q=80"
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
            <span className="text-safety-500">Industries</span>
          </nav>
          <p className="font-mono text-[11px] tracking-widest-2 uppercase text-safety-500 mb-4">
            // Mining · Construction · Agriculture · Quarrying
          </p>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl text-charcoal-50 leading-[0.92] uppercase tracking-mega text-balance">
            The sectors <span className="text-safety-500">we serve.</span>
          </h1>
          <p className="mt-6 text-charcoal-200 text-base lg:text-lg max-w-2xl leading-relaxed">
            From the Great Dyke to the Plumtree corridor, our equipment is at work across every sector that digs, hauls, crushes, plants or builds in Zimbabwe.
          </p>
        </div>
      </section>

      <section className="relative bg-charcoal-900 py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {industries.map((ind, i) => (
              <SectionReveal key={ind.slug} delay={i * 80}>
                <IndustryCard industry={ind} index={i} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-charcoal-950 py-20 border-t border-charcoal-800 text-center">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-charcoal-50 uppercase tracking-mega leading-[1.0]">
            Different sector? <span className="text-safety-500">Talk to us.</span>
          </h2>
          <p className="mt-5 text-charcoal-300 max-w-xl mx-auto">
            Energy projects, infrastructure, public works — if it needs heavy iron, we can help spec and supply.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 bg-safety-500 text-charcoal-950 px-7 py-3.5 text-[11px] tracking-widest-2 uppercase font-bold hover:bg-safety-400"
          >
            Start a conversation <ArrowRight size={13} weight="bold" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
