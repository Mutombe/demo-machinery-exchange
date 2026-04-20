import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import {
  ArrowRight,
  FunnelSimple,
  Wrench,
  Truck,
  HardHat,
  Lightning,
  Fan,
  Gear,
  Tractor,
} from '@phosphor-icons/react';
import {
  business,
  equipmentCategories,
  featuredEquipment,
  brands,
} from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import EquipmentCard from '../components/EquipmentCard';

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

export default function Equipment() {
  const [filter, setFilter] = useState('all');
  const [brandFilter, setBrandFilter] = useState('all');

  const onQuote = (item) => {
    const msg = `Hi Machinery Exchange, I'd like a quote on the ${item.brand} ${item.model}.`;
    const url = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener');
    toast.success(`Quote opened for ${item.model}`);
  };

  const filtered = useMemo(() => {
    return featuredEquipment.filter((e) => {
      const catOk = filter === 'all' || e.categorySlug === filter;
      const brandOk = brandFilter === 'all' || e.brand.toLowerCase() === brandFilter.toLowerCase();
      return catOk && brandOk;
    });
  }, [filter, brandFilter]);

  const uniqueBrands = useMemo(
    () => Array.from(new Set(featuredEquipment.map((e) => e.brand))),
    []
  );

  return (
    <PageTransition>
      <SEO
        title="Equipment Catalogue — Machinery Exchange"
        description="Browse excavators, loaders, drills, dump trucks, crushers, generators, compressors and spare parts from Shantui, Hitachi, Wirtgen, Rokbak, Bobcat and Cummins."
      />

      {/* HERO */}
      <section className="relative bg-charcoal-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=2000&q=80"
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
            <span className="text-safety-500">Equipment</span>
          </nav>
          <p className="font-mono text-[11px] tracking-widest-2 uppercase text-safety-500 mb-4">
            // 8 Categories · 4,200+ Parts in Stock
          </p>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl text-charcoal-50 leading-[0.92] uppercase tracking-mega text-balance">
            The Equipment <span className="text-safety-500">Catalogue.</span>
          </h1>
          <p className="mt-6 text-charcoal-200 text-base lg:text-lg max-w-2xl leading-relaxed">
            Every machine we sell, rent, service or rebuild — filtered by category and brand. All specs are indicative; speak to our team for configuration and pricing.
          </p>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="relative bg-charcoal-900 py-16 lg:py-24">
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal>
            <p className="font-mono text-[11px] tracking-widest-2 uppercase text-safety-500 mb-3">
              // Categories
            </p>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-charcoal-50 uppercase tracking-mega leading-none mb-10">
              Shop by category
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-charcoal-700">
            {equipmentCategories.map((c, i) => {
              const Icon = CAT_ICONS[c.icon] || Gear;
              const active = filter === c.slug;
              return (
                <SectionReveal key={c.slug} delay={i * 30} className="bg-charcoal-900">
                  <button
                    onClick={() => setFilter(active ? 'all' : c.slug)}
                    className={`w-full relative block aspect-square p-5 lg:p-6 text-left transition-colors duration-300 overflow-hidden ${
                      active
                        ? 'bg-safety-500 text-charcoal-950'
                        : 'hover:bg-charcoal-800 text-charcoal-50'
                    }`}
                  >
                    <div className="h-full flex flex-col">
                      <div className="flex items-start justify-between">
                        <div className={`h-11 w-11 border flex items-center justify-center ${
                          active ? 'bg-charcoal-950 border-charcoal-950 text-safety-500' : 'bg-charcoal-800 border-charcoal-700 text-safety-500'
                        }`}>
                          <Icon size={20} weight="bold" />
                        </div>
                        <span className={`font-mono text-[10px] tracking-widest-2 ${active ? 'text-charcoal-950' : 'text-charcoal-500'}`}>
                          {c.count}+ units
                        </span>
                      </div>
                      <div className="flex-1" />
                      <h3 className="font-heavy text-lg lg:text-xl uppercase tracking-tight leading-none">
                        {c.name}
                      </h3>
                    </div>
                  </button>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FILTER BAR + EQUIPMENT GRID */}
      <section className="relative bg-charcoal-950 py-16 lg:py-20 border-t border-charcoal-800">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10 pb-6 border-b border-charcoal-800">
            <div className="flex items-center gap-3">
              <FunnelSimple size={18} weight="bold" className="text-safety-500" />
              <span className="font-mono text-[11px] tracking-widest-2 uppercase text-charcoal-300">
                {filtered.length} {filtered.length === 1 ? 'machine' : 'machines'} matching
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] tracking-widest-2 uppercase text-charcoal-500 mr-1">
                // Brand
              </span>
              <button
                onClick={() => setBrandFilter('all')}
                className={`px-3 py-1.5 text-[11px] tracking-widest-2 uppercase font-bold border ${
                  brandFilter === 'all'
                    ? 'bg-safety-500 text-charcoal-950 border-safety-500'
                    : 'bg-charcoal-900 text-charcoal-300 border-charcoal-700 hover:border-safety-500'
                }`}
              >
                All
              </button>
              {uniqueBrands.map((b) => (
                <button
                  key={b}
                  onClick={() => setBrandFilter(b)}
                  className={`px-3 py-1.5 text-[11px] tracking-widest-2 uppercase font-bold border ${
                    brandFilter === b
                      ? 'bg-safety-500 text-charcoal-950 border-safety-500'
                      : 'bg-charcoal-900 text-charcoal-300 border-charcoal-700 hover:border-safety-500'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24 border border-charcoal-800 bg-charcoal-900">
              <p className="font-mono text-sm tracking-widest-2 uppercase text-charcoal-500">
                // No machines match these filters
              </p>
              <button
                onClick={() => { setFilter('all'); setBrandFilter('all'); }}
                className="mt-6 inline-flex items-center gap-2 bg-safety-500 text-charcoal-950 px-6 py-3 text-[11px] tracking-widest-2 uppercase font-bold hover:bg-safety-400"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
              {filtered.map((item, i) => (
                <SectionReveal key={item.slug} delay={i * 40}>
                  <EquipmentCard item={item} onQuote={onQuote} />
                </SectionReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* BRANDS STRIP */}
      <section className="bg-charcoal-900 border-t border-charcoal-800 py-14">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <p className="font-mono text-[11px] tracking-widest-2 uppercase text-safety-500 mb-6 text-center">
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

      {/* CTA */}
      <section className="relative bg-charcoal-950 py-20 border-t border-charcoal-800">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 text-center">
          <h2 className="font-display font-black text-3xl sm:text-5xl text-charcoal-50 uppercase tracking-mega leading-[1.0]">
            Can't see what you need? <span className="text-safety-500">Ask us.</span>
          </h2>
          <p className="mt-5 text-charcoal-300 max-w-xl mx-auto">
            Our sales team has access to OEM stock lists across Shanghai, Johannesburg and Harare. If we don't have it, we can source it.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 bg-safety-500 text-charcoal-950 px-7 py-3.5 text-[11px] tracking-widest-2 uppercase font-bold hover:bg-safety-400"
          >
            Request a Quote <ArrowRight size={13} weight="bold" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
