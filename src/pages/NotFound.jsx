import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, House } from '@phosphor-icons/react';
import { notFound } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="404 — Machinery Exchange" description="Page not found." />

      <section className="relative bg-charcoal-950 min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        <div className="absolute top-0 left-0 right-0 h-1.5 hazard-stripe-thin" />
        <div className="absolute bottom-0 left-0 right-0 h-1.5 hazard-stripe-thin" />

        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-24 w-full">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] tracking-widest-2 uppercase text-safety-500 mb-4">
              // System: {notFound.code} — Resource not found
            </p>
            <h1 className="font-heavy text-[120px] sm:text-[200px] lg:text-[260px] leading-none text-charcoal-50 tracking-mega">
              404
            </h1>
            <h2 className="mt-4 font-display font-black text-3xl sm:text-5xl lg:text-6xl text-safety-500 uppercase tracking-mega leading-[1.0] text-balance">
              {notFound.heading}
            </h2>
            <p className="mt-6 text-charcoal-300 text-base lg:text-lg leading-relaxed max-w-xl">
              {notFound.body}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-safety-500 text-charcoal-950 px-7 py-3.5 text-[11px] tracking-widest-2 uppercase font-bold hover:bg-safety-400"
              >
                <House size={14} weight="bold" /> Back to home
              </Link>
              <Link
                to="/equipment"
                className="inline-flex items-center justify-center gap-2 border-2 border-charcoal-50 text-charcoal-50 px-7 py-3.5 text-[11px] tracking-widest-2 uppercase font-bold hover:bg-charcoal-50 hover:text-charcoal-950 transition-colors"
              >
                <ArrowLeft size={14} weight="bold" /> Browse equipment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
