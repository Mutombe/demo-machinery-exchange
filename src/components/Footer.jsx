import React from 'react';
import { Link } from 'react-router-dom';
import {
  WhatsappLogo,
  MapPin,
  Clock,
  Phone,
  EnvelopeSimple,
  ArrowRight,
} from '@phosphor-icons/react';
import { business, equipmentCategories, services, brands } from '../data/siteData';

export default function Footer() {
  const waHref = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`;

  return (
    <footer className="relative bg-charcoal-950 text-charcoal-300 mt-16 sm:mt-24">
      {/* hazard strip */}
      <div className="h-2 hazard-stripe-thin" />

      {/* Brand marquee */}
      <div className="border-b border-charcoal-800 py-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <p className="text-[10px] tracking-widest-2 uppercase text-charcoal-500 font-mono mb-3">
            // OEM Brands We Carry
          </p>
          <div className="flex items-center gap-8 flex-wrap">
            {brands.map((b) => (
              <span
                key={b}
                className="font-heavy text-base sm:text-lg tracking-mega uppercase text-charcoal-400"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-14 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <img src={business.logo} alt={business.name} className="h-11 w-auto" loading="lazy" />
              <div className="leading-none">
                <div className="font-heavy text-lg text-charcoal-50 tracking-mega uppercase">MACHINERY</div>
                <div className="font-heavy text-lg text-safety-500 tracking-mega uppercase -mt-0.5">EXCHANGE</div>
              </div>
            </Link>
            <p className="text-sm text-charcoal-400 leading-relaxed max-w-sm">
              Zimbabwe's earthmoving, mining and construction equipment specialists. Seventy years of heavy iron, parts, service and rental from 5 Martin Drive, Harare.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="h-10 w-10 border border-charcoal-700 flex items-center justify-center text-charcoal-300 hover:bg-safety-500 hover:text-charcoal-950 hover:border-safety-500 transition-colors"
              >
                <WhatsappLogo size={16} weight="bold" />
              </a>
              <a
                href={`tel:${business.phone.replace(/\s/g, '')}`}
                aria-label="Phone"
                className="h-10 w-10 border border-charcoal-700 flex items-center justify-center text-charcoal-300 hover:bg-safety-500 hover:text-charcoal-950 hover:border-safety-500 transition-colors"
              >
                <Phone size={16} weight="bold" />
              </a>
              <a
                href={`mailto:${business.email}`}
                aria-label="Email"
                className="h-10 w-10 border border-charcoal-700 flex items-center justify-center text-charcoal-300 hover:bg-safety-500 hover:text-charcoal-950 hover:border-safety-500 transition-colors"
              >
                <EnvelopeSimple size={16} weight="bold" />
              </a>
            </div>
          </div>

          {/* Equipment */}
          <div>
            <h4 className="font-display font-bold text-sm text-charcoal-50 mb-5 tracking-widest-2 uppercase">
              Equipment
            </h4>
            <ul className="space-y-2.5 text-sm">
              {equipmentCategories.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/equipment`}
                    className="text-charcoal-400 hover:text-safety-500 transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm text-charcoal-50 mb-5 tracking-widest-2 uppercase">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services`}
                    className="text-charcoal-400 hover:text-safety-500 transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h4 className="font-display font-bold text-sm text-charcoal-50 mb-5 tracking-widest-2 uppercase">
              Visit
            </h4>
            <ul className="space-y-3 text-sm text-charcoal-400">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 text-safety-500 shrink-0" weight="bold" />
                <span>{business.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} className="mt-0.5 text-safety-500 shrink-0" weight="bold" />
                <span>
                  Mon–Fri {business.hours.weekdays}
                  <br />
                  Sat {business.hours.saturday}
                  <br />
                  Sun {business.hours.sunday}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 text-safety-500 shrink-0" weight="bold" />
                <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="hover:text-safety-500">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <EnvelopeSimple size={16} className="mt-0.5 text-safety-500 shrink-0" weight="bold" />
                <a href={`mailto:${business.email}`} className="hover:text-safety-500 break-all">
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-14 pt-8 border-t border-charcoal-800 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="font-mono text-[10px] tracking-widest-2 uppercase text-safety-500">// Parts, service, quote</p>
            <p className="font-display text-2xl sm:text-3xl font-bold text-charcoal-50 mt-1 uppercase tracking-tight">
              Need something heavy, now?
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-safety-500 text-charcoal-950 px-6 py-3.5 text-[11px] tracking-widest-2 uppercase font-bold hover:bg-safety-400 transition-colors"
            >
              Request a Quote <ArrowRight size={14} weight="bold" />
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-charcoal-500 text-charcoal-100 px-6 py-3.5 text-[11px] tracking-widest-2 uppercase font-bold hover:bg-charcoal-800 transition-colors"
            >
              <WhatsappLogo size={14} weight="fill" /> WhatsApp Us
            </a>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-charcoal-800 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 text-xs text-charcoal-500 text-center sm:text-left font-mono">
          <p>© {new Date().getFullYear()} {business.name} · Earthmoving specialists since 1954.</p>
          <p>Built in Harare · All rights reserved.</p>
        </div>

        <p className="mt-4 text-center text-[11px] text-charcoal-500 tracking-wide">
          Website by{' '}
          <a
            href="https://bitstudio.co.zw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-safety-500 hover:underline"
          >
            Bit Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
