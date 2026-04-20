import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { List, X, Phone, WhatsappLogo } from '@phosphor-icons/react';
import { business } from '../data/siteData';

const links = [
  { to: '/', label: 'Home' },
  { to: '/equipment', label: 'Equipment' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const waHref = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`;
  const telHref = `tel:${business.phone.replace(/\s/g, '')}`;

  return (
    <>
      {/* Utility strip */}
      <div className="hidden lg:block bg-charcoal-950 border-b border-charcoal-800">
        <div className="max-w-[1400px] mx-auto px-10 h-9 flex items-center justify-between text-[11px] tracking-widest-2 uppercase text-charcoal-400">
          <div className="flex items-center gap-6 font-mono">
            <span>// Est. 1954</span>
            <span className="text-charcoal-500">|</span>
            <span>5 Martin Drive, Harare</span>
            <span className="text-charcoal-500">|</span>
            <span>Mon–Fri 07:30 – 17:00</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={telHref} className="flex items-center gap-1.5 hover:text-safety-500 transition-colors">
              <Phone size={11} weight="bold" /> {business.phone}
            </a>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-safety-500 transition-colors">
              <WhatsappLogo size={11} weight="bold" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-charcoal-900/95 backdrop-blur-md border-b border-charcoal-700'
            : 'bg-charcoal-900 border-b border-charcoal-800'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-10 h-16 lg:h-20 flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-3 group min-w-0">
            <img
              src={business.logo}
              alt={business.name}
              className="h-10 lg:h-12 w-auto shrink-0"
              loading="eager"
            />
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-heavy text-[15px] lg:text-[17px] text-charcoal-50 tracking-mega uppercase">
                MACHINERY
              </span>
              <span className="font-heavy text-[15px] lg:text-[17px] text-safety-500 tracking-mega uppercase -mt-0.5">
                EXCHANGE
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative text-[13px] font-semibold tracking-widest-2 uppercase font-display transition-colors ${
                    isActive
                      ? 'text-safety-500'
                      : 'text-charcoal-200 hover:text-safety-500'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <span className="absolute -bottom-[22px] left-0 right-0 h-[3px] bg-safety-500" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-safety-500 text-charcoal-950 px-5 py-2.5 text-[11px] tracking-widest-2 uppercase font-bold hover:bg-safety-400 transition-colors"
            >
              Request Quote
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="h-10 w-10 flex lg:hidden items-center justify-center text-charcoal-50"
            >
              <List size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal-950/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-[88%] max-w-sm bg-charcoal-900 border-l border-charcoal-700 flex flex-col transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="h-1.5 hazard-stripe-thin" />
          <div className="flex items-center justify-between px-6 h-20 border-b border-charcoal-700">
            <span className="font-heavy text-lg tracking-mega uppercase text-charcoal-50">Menu</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="h-10 w-10 flex items-center justify-center text-charcoal-200"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col px-6 py-6 gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `py-3 border-b border-charcoal-800 font-display font-bold text-2xl uppercase tracking-wide transition-colors ${
                    isActive ? 'text-safety-500' : 'text-charcoal-100'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-6 py-5 border-t border-charcoal-700 space-y-3 bg-charcoal-950">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-safety-500 text-charcoal-950 py-3 text-[11px] tracking-widest-2 uppercase font-bold"
            >
              <WhatsappLogo size={16} weight="fill" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${business.phone.replace(/\s/g, '')}`}
              className="w-full flex items-center justify-center gap-2 border border-charcoal-600 text-charcoal-100 py-3 text-[11px] tracking-widest-2 uppercase"
            >
              <Phone size={14} /> {business.phone}
            </a>
            <p className="text-[10px] text-charcoal-500 text-center pt-2 tracking-wide">
              {business.address}
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
