'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch { /* fail silently */ }
    setSubmitting(false);
  };

  return (
    <>
      {/* ─── Page Header ──────────────────────── */}
      <section className="bg-carbon-950 pb-8 pt-32 lg:pt-40">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p
            className="text-xs font-medium uppercase tracking-[0.35em] text-gold-400"
           
          >
            Get In Touch
          </p>
          <h1
            className="mt-4 text-4xl font-light tracking-wide text-silver-100 sm:text-5xl md:text-6xl"
           
          >
            Contact Us
          </h1>
          <div className="mx-auto mt-6 h-px w-20 bg-gold-500/60" />
        </div>
      </section>

      {/* ─── Split Content ────────────────────── */}
      <section className="bg-carbon-950 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* ── Contact Form ───────────────── */}
            <div>
              <h2
                className="text-2xl font-light tracking-wide text-silver-100"
               
              >
                Send a Message
              </h2>
              <div className="mt-2 h-px w-10 bg-gold-500/40" />

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium uppercase tracking-[0.15em] text-silver-400"
                   
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-sm border border-carbon-600 bg-carbon-800 px-4 py-3 text-sm text-silver-200 placeholder:text-silver-500/50 transition-colors"
                    placeholder="Your full name"
                   
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium uppercase tracking-[0.15em] text-silver-400"
                   
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-sm border border-carbon-600 bg-carbon-800 px-4 py-3 text-sm text-silver-200 placeholder:text-silver-500/50 transition-colors"
                    placeholder="you@example.com"
                   
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium uppercase tracking-[0.15em] text-silver-400"
                   
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full resize-none rounded-sm border border-carbon-600 bg-carbon-800 px-4 py-3 text-sm text-silver-200 placeholder:text-silver-500/50 transition-colors"
                    placeholder="Tell us about your inquiry..."
                   
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 border border-gold-500 bg-transparent px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-gold-400 transition-all duration-500 hover:bg-gold-500 hover:text-carbon-950"
                 
                >
                  {submitted ? <><span>Message Sent</span><Check size={14} className="inline ml-1" /></> : submitting ? 'Sending…' : 'Submit'}
                </button>
              </form>
            </div>

            {/* ── Contact Info ────────────────── */}
            <div className="space-y-10 lg:pl-8 lg:pt-2">
              <div>
                <h2
                  className="text-2xl font-light tracking-wide text-silver-100"
                 
                >
                  Visit Our Studio
                </h2>
                <div className="mt-2 h-px w-10 bg-gold-500/40" />
              </div>

              <div className="space-y-6">
                {/* Company */}
                <div className="space-y-1">
                  <p
                    className="text-xs font-medium uppercase tracking-[0.15em] text-silver-400"
                   
                  >
                    Company
                  </p>
                  <p
                    className="text-base tracking-wide text-silver-200"
                   
                  >
                    MOSTFOLIO LLC
                  </p>
                </div>

                {/* Address */}
                <div className="space-y-1">
                  <p
                    className="text-xs font-medium uppercase tracking-[0.15em] text-silver-400"
                   
                  >
                    Address
                  </p>
                  <address
                    className="not-italic text-base leading-relaxed text-silver-200"
                   
                  >
                    130 DAIRY FARM RD
                    <br />
                    MOORESVILLE, NC 28115
                  </address>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-carbon-700/40" />

                {/* Body text */}
                <p
                  className="text-sm leading-[1.8] text-silver-400"
                 
                >
                  Reach out for custom designs, sizing inquiries, or general
                  support. We typically respond within 24 hours.
                </p>
              </div>

              {/* Decorative accent block */}
              <div className="relative mt-8 rounded-sm border border-carbon-700/30 bg-carbon-900 p-6">
                <div className="absolute -left-px -top-px h-6 w-px bg-gold-500/60" />
                <div className="absolute -left-px -top-px h-px w-6 bg-gold-500/60" />
                <p
                  className="text-xs uppercase tracking-[0.2em] text-silver-500"
                 
                >
                  Business Hours
                </p>
                <p
                  className="mt-2 text-sm text-silver-300"
                 
                >
                  Mon – Fri: 9:00 AM – 6:00 PM EST
                </p>
                <p
                  className="text-sm text-silver-500"
                 
                >
                  Sat – Sun: By Appointment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
