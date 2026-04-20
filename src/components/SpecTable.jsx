import React from 'react';

export default function SpecTable({ specs, title = 'Technical Specifications' }) {
  return (
    <div className="bg-charcoal-800 border border-charcoal-700">
      <div className="px-5 py-3 border-b border-charcoal-700 bg-charcoal-950 flex items-center gap-3">
        <span className="h-2 w-2 bg-safety-500" />
        <h4 className="font-mono text-[11px] tracking-widest-2 uppercase text-charcoal-200">
          // {title}
        </h4>
      </div>
      <dl>
        {specs.map((s, i) => (
          <div
            key={s.label}
            className={`grid grid-cols-[1fr_1fr] items-center px-5 py-3 ${
              i % 2 === 1 ? 'bg-charcoal-850 bg-charcoal-800/40' : ''
            } ${i < specs.length - 1 ? 'border-b border-charcoal-700' : ''}`}
          >
            <dt className="text-[11px] font-mono tracking-widest-2 uppercase text-charcoal-400">
              {s.label}
            </dt>
            <dd className="text-sm text-charcoal-50 font-semibold text-right font-mono">
              {s.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
