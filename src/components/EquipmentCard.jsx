import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';

const STATUS_STYLES = {
  available: { bg: 'bg-safety-500', text: 'text-charcoal-950', label: 'In Stock' },
  incoming: { bg: 'bg-caution-500', text: 'text-charcoal-950', label: 'Incoming' },
  used: { bg: 'bg-steel-300', text: 'text-charcoal-950', label: 'Pre-Owned' },
  rental: { bg: 'bg-charcoal-100', text: 'text-charcoal-950', label: 'Rental' },
  service: { bg: 'bg-steel-500', text: 'text-charcoal-50', label: 'Service Exchange' },
};

export default function EquipmentCard({ item, onQuote }) {
  const status = STATUS_STYLES[item.status] || STATUS_STYLES.available;

  return (
    <article className="group relative bg-charcoal-800 border border-charcoal-700 hover:border-safety-500 transition-colors duration-300 flex flex-col h-full">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-900">
        <img
          src={item.image}
          alt={`${item.brand} ${item.model}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[800ms] group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />

        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <span className={`${status.bg} ${status.text} text-[10px] tracking-widest-2 uppercase font-bold px-2.5 py-1`}>
            {status.label}
          </span>
        </div>

        {/* Brand tag */}
        <div className="absolute bottom-3 left-3 bg-charcoal-950/80 backdrop-blur-sm px-2.5 py-1 border-l-2 border-safety-500">
          <span className="font-mono text-[10px] tracking-widest-2 uppercase text-charcoal-100">
            {item.brand}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-heavy text-lg text-charcoal-50 uppercase tracking-tight leading-tight">
          {item.model}
        </h3>
        <p className="mt-1 text-[11px] font-mono tracking-widest-2 uppercase text-safety-500">
          {item.keySpec}
        </p>
        <p className="mt-3 text-sm text-charcoal-400 leading-relaxed flex-1">
          {item.tagline}
        </p>

        {/* Specs preview */}
        <dl className="mt-4 pt-4 border-t border-charcoal-700 grid grid-cols-2 gap-x-3 gap-y-2">
          {item.specs.slice(0, 2).map((s) => (
            <div key={s.label} className="min-w-0">
              <dt className="text-[9px] font-mono tracking-widest-2 uppercase text-charcoal-500 truncate">
                {s.label}
              </dt>
              <dd className="text-xs text-charcoal-100 font-semibold mt-0.5 truncate">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* CTA */}
        <button
          onClick={() => onQuote && onQuote(item)}
          className="mt-5 w-full inline-flex items-center justify-between gap-2 bg-charcoal-900 hover:bg-safety-500 hover:text-charcoal-950 text-charcoal-100 px-4 py-3 text-[11px] tracking-widest-2 uppercase font-bold transition-colors border border-charcoal-700 hover:border-safety-500"
        >
          Request Quote
          <ArrowRight size={12} weight="bold" />
        </button>
      </div>
    </article>
  );
}
