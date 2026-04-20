import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import {
  Phone,
  WhatsappLogo,
  EnvelopeSimple,
  MapPin,
  Clock,
  ArrowRight,
  CaretDown,
} from '@phosphor-icons/react';
import { business, faqs } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: 'Equipment quote',
    message: '',
  });
  const [channel, setChannel] = useState('whatsapp');
  const [openFaq, setOpenFaq] = useState(0);

  const waHref = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`;
  const telHref = `tel:${business.phone.replace(/\s/g, '')}`;

  const onChange = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.message) {
      toast.error('Please fill in your name and message.');
      return;
    }
    const msg = [
      `New enquiry from ${form.name}`,
      form.company && `Company: ${form.company}`,
      form.phone && `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      `Subject: ${form.subject}`,
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n');

    if (channel === 'whatsapp') {
      const url = `${waHref}?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank', 'noopener');
      toast.success('Opening WhatsApp — send to complete your enquiry.');
    } else {
      const subject = `Machinery Exchange enquiry · ${form.subject}`;
      const url = `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(msg)}`;
      window.location.href = url;
      toast.success('Opening your email client…');
    }
  };

  return (
    <PageTransition>
      <SEO
        title="Contact — Machinery Exchange"
        description="5 Martin Drive, Harare. Phone +263 24 2447180. WhatsApp, email and workshop enquiries. We respond within 2 business hours."
      />

      {/* HERO */}
      <section className="relative bg-charcoal-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1530939027401-0221cfcf5ff3?auto=format&fit=crop&w=2000&q=80"
            alt=""
            loading="eager"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/90 to-charcoal-950" />
          <div className="absolute inset-0 blueprint-grid opacity-30" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-20 pb-14 lg:pt-28">
          <nav className="font-mono text-[11px] tracking-widest-2 uppercase text-charcoal-400 mb-8">
            <Link to="/" className="hover:text-safety-500">Home</Link>
            <span className="mx-2 text-charcoal-600">/</span>
            <span className="text-safety-500">Contact</span>
          </nav>
          <p className="font-mono text-[11px] tracking-widest-2 uppercase text-safety-500 mb-4">
            // Open Mon–Fri 07:30 – 17:00
          </p>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl text-charcoal-50 leading-[0.92] uppercase tracking-mega text-balance">
            Get in <span className="text-safety-500">touch.</span>
          </h1>
          <p className="mt-6 text-charcoal-200 text-base lg:text-lg max-w-2xl leading-relaxed">
            Phone, WhatsApp or walk in. Our sales and service teams are on site from 07:30. We respond to written enquiries within 2 business hours.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="relative bg-charcoal-900 py-16 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* FORM */}
            <SectionReveal className="lg:col-span-7">
              <div className="bg-charcoal-800 border border-charcoal-700 p-6 sm:p-8 lg:p-10">
                <p className="font-mono text-[11px] tracking-widest-2 uppercase text-safety-500 mb-2">
                  // Send us a message
                </p>
                <h2 className="font-display font-black text-2xl sm:text-4xl text-charcoal-50 uppercase tracking-tight leading-tight">
                  Tell us what you need.
                </h2>

                <form onSubmit={submit} className="mt-7 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Full name" required>
                      <input
                        type="text"
                        value={form.name}
                        onChange={onChange('name')}
                        className="field"
                        required
                      />
                    </Field>
                    <Field label="Company">
                      <input
                        type="text"
                        value={form.company}
                        onChange={onChange('company')}
                        className="field"
                      />
                    </Field>
                    <Field label="Phone">
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={onChange('phone')}
                        className="field"
                        placeholder="+263 ..."
                      />
                    </Field>
                    <Field label="Email">
                      <input
                        type="email"
                        value={form.email}
                        onChange={onChange('email')}
                        className="field"
                        placeholder="name@company.co.zw"
                      />
                    </Field>
                  </div>

                  <Field label="Subject">
                    <select
                      value={form.subject}
                      onChange={onChange('subject')}
                      className="field"
                    >
                      <option>Equipment quote</option>
                      <option>Rental enquiry</option>
                      <option>Spare parts</option>
                      <option>Workshop service</option>
                      <option>Training programme</option>
                      <option>General enquiry</option>
                    </select>
                  </Field>

                  <Field label="Message" required>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={onChange('message')}
                      className="field resize-none"
                      required
                      placeholder="Tell us the machine, the site, the timeline."
                    />
                  </Field>

                  {/* Channel selector */}
                  <div>
                    <label className="block font-mono text-[10px] tracking-widest-2 uppercase text-charcoal-400 mb-2">
                      // Send via
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setChannel('whatsapp')}
                        className={`flex items-center justify-center gap-2 py-3 text-[11px] tracking-widest-2 uppercase font-bold border transition-colors ${
                          channel === 'whatsapp'
                            ? 'bg-safety-500 text-charcoal-950 border-safety-500'
                            : 'bg-charcoal-900 text-charcoal-200 border-charcoal-700 hover:border-safety-500'
                        }`}
                      >
                        <WhatsappLogo size={14} weight="fill" /> WhatsApp
                      </button>
                      <button
                        type="button"
                        onClick={() => setChannel('email')}
                        className={`flex items-center justify-center gap-2 py-3 text-[11px] tracking-widest-2 uppercase font-bold border transition-colors ${
                          channel === 'email'
                            ? 'bg-safety-500 text-charcoal-950 border-safety-500'
                            : 'bg-charcoal-900 text-charcoal-200 border-charcoal-700 hover:border-safety-500'
                        }`}
                      >
                        <EnvelopeSimple size={14} weight="bold" /> Email
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-safety-500 text-charcoal-950 px-7 py-4 text-xs tracking-widest-2 uppercase font-bold hover:bg-safety-400 transition-colors"
                  >
                    Send enquiry <ArrowRight size={14} weight="bold" />
                  </button>
                </form>
              </div>
            </SectionReveal>

            {/* INFO */}
            <SectionReveal className="lg:col-span-5 space-y-5" delay={100}>
              <InfoCard icon={MapPin} label="Visit us" main={business.address} sub="5 minutes from Harare CBD." />
              <InfoCard
                icon={Phone}
                label="Call us"
                main={business.phone}
                sub="Mon–Fri 07:30 – 17:00 · Sat 08:00 – 13:00"
                href={telHref}
              />
              <InfoCard
                icon={WhatsappLogo}
                label="WhatsApp"
                main="Chat with the sales team"
                sub="Quotes, stock checks, parts enquiries"
                href={waHref}
                external
              />
              <InfoCard
                icon={EnvelopeSimple}
                label="Email"
                main={business.email}
                sub="We respond within 2 business hours"
                href={`mailto:${business.email}`}
              />
              <div className="bg-charcoal-800 border border-charcoal-700 p-5 lg:p-6 flex items-start gap-4">
                <Clock size={22} weight="bold" className="text-safety-500 shrink-0 mt-1" />
                <div>
                  <p className="font-mono text-[10px] tracking-widest-2 uppercase text-charcoal-400">// Opening hours</p>
                  <ul className="mt-2 space-y-1 text-sm text-charcoal-100">
                    <li className="flex justify-between gap-4">
                      <span>Mon – Fri</span>
                      <span className="font-semibold">{business.hours.weekdays}</span>
                    </li>
                    <li className="flex justify-between gap-4">
                      <span>Saturday</span>
                      <span className="font-semibold">{business.hours.saturday}</span>
                    </li>
                    <li className="flex justify-between gap-4">
                      <span>Sunday</span>
                      <span className="font-semibold text-charcoal-400">{business.hours.sunday}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="relative bg-charcoal-950 border-y border-charcoal-800">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-14">
          <p className="font-mono text-[11px] tracking-widest-2 uppercase text-safety-500 mb-3">
            // Find the yard
          </p>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-charcoal-50 uppercase tracking-mega leading-tight mb-6">
            5 Martin Drive, Harare.
          </h2>
          <div className="aspect-[16/9] bg-charcoal-800 border border-charcoal-700 overflow-hidden">
            <iframe
              src={business.mapsEmbed}
              title="Machinery Exchange map"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative bg-charcoal-900 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <SectionReveal>
            <p className="font-mono text-[11px] tracking-widest-2 uppercase text-safety-500 mb-3 text-center">
              // Frequently asked
            </p>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-charcoal-50 uppercase tracking-mega leading-[1.0] text-center mb-12">
              Questions we hear <span className="text-safety-500">a lot.</span>
            </h2>
          </SectionReveal>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <SectionReveal key={f.q} delay={i * 40}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full text-left bg-charcoal-800 border border-charcoal-700 hover:border-safety-500 transition-colors"
                >
                  <div className="flex items-center justify-between px-5 py-4 gap-4">
                    <span className="font-display font-bold text-base sm:text-lg text-charcoal-50 uppercase tracking-tight">
                      {f.q}
                    </span>
                    <CaretDown
                      size={18}
                      weight="bold"
                      className={`shrink-0 text-safety-500 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </div>
                  <div
                    className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                      openFaq === i ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="px-5 pb-5 text-sm text-charcoal-300 leading-relaxed border-t border-charcoal-700 pt-4">
                      {f.a}
                    </p>
                  </div>
                </button>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inline field styles */}
      <style>{`
        .field {
          width: 100%;
          background: #0E0E10;
          border: 1px solid #35353C;
          color: #F5F5F6;
          padding: 12px 14px;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s;
          outline: none;
        }
        .field:focus {
          border-color: #FF6B00;
        }
        .field::placeholder { color: #6F6F78; }
        select.field { appearance: none; background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6B00' stroke-width='2.5'><polyline points='6 9 12 15 18 9'/></svg>"); background-repeat: no-repeat; background-position: right 12px center; background-size: 16px; padding-right: 36px; }
      `}</style>
    </PageTransition>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block font-mono text-[10px] tracking-widest-2 uppercase text-charcoal-400 mb-2">
        // {label} {required && <span className="text-safety-500">*</span>}
      </span>
      {children}
    </label>
  );
}

function InfoCard({ icon: Icon, label, main, sub, href, external }) {
  const Wrapper = href ? 'a' : 'div';
  const props = href ? { href, ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}) } : {};
  return (
    <Wrapper
      {...props}
      className="group block bg-charcoal-800 border border-charcoal-700 hover:border-safety-500 p-5 lg:p-6 transition-colors"
    >
      <div className="flex items-start gap-4">
        <div className="h-11 w-11 bg-charcoal-900 border border-charcoal-700 flex items-center justify-center text-safety-500 group-hover:bg-safety-500 group-hover:text-charcoal-950 transition-colors shrink-0">
          <Icon size={20} weight="bold" />
        </div>
        <div className="min-w-0">
          <p className="font-mono text-[10px] tracking-widest-2 uppercase text-charcoal-400">// {label}</p>
          <p className="mt-1 font-display font-bold text-base text-charcoal-50 uppercase tracking-tight truncate">{main}</p>
          <p className="mt-1 text-xs text-charcoal-400">{sub}</p>
        </div>
      </div>
    </Wrapper>
  );
}
