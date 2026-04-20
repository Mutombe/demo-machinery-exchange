import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';

export default function IndustryCard({ industry, index }) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <article className="group relative overflow-hidden bg-charcoal-800 border border-charcoal-700 hover:border-safety-500 transition-colors duration-500 h-full flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={industry.image}
          alt={industry.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1000ms] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />

        {/* Number */}
        <div className="absolute top-5 left-5 font-mono text-[11px] tracking-widest-2 text-safety-500">
          // {num}
        </div>

        {/* Title over image */}
        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="font-heavy text-3xl sm:text-4xl text-charcoal-50 uppercase tracking-mega leading-none">
            {industry.name}
          </h3>
          <p className="mt-2 text-sm text-charcoal-200">{industry.tagline}</p>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <p className="text-sm text-charcoal-300 leading-relaxed flex-1">
          {industry.description}
        </p>

        {/* Stats */}
        <dl className="grid grid-cols-2 gap-3 mt-5 pt-5 border-t border-charcoal-700">
          {industry.stats.map((s) => (
            <div key={s.l}>
              <dt className="text-[10px] font-mono tracking-widest-2 uppercase text-charcoal-500">
                {s.l}
              </dt>
              <dd className="font-heavy text-2xl text-safety-500 mt-1 tracking-tight">
                {s.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
