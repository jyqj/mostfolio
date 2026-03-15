'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export default function AboutPage() {
  return (
    <>
      {/* ─── Page Header — ASYMMETRIC LAYOUT ──── */}
      <section className="relative overflow-hidden bg-carbon-950 pb-8 pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gold-500/50" />
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold-400">
                Our Story
              </p>
            </div>
            <h1 className="text-4xl font-light tracking-wide text-silver-100 sm:text-5xl md:text-6xl leading-[1.1]">
              The vision behind<br />the metal.
            </h1>
          </div>
        </div>
      </section>

      {/* ─── Founder Split ────────────────────── */}
      <section className="relative bg-carbon-950 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image */}
            <ScrollReveal variant="left">
              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[3/4]">
                <Image
                  src="/images/workshop.png"
                  alt="MOSTFOLIO jewelry workshop"
                  fill
                  className="object-cover"
                  quality={90}
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/40 to-transparent" />
                {/* Gold corner accent */}
                <div className="absolute bottom-0 left-0 h-24 w-px bg-gradient-to-t from-gold-500/60 to-transparent" />
                <div className="absolute bottom-0 left-0 h-px w-24 bg-gradient-to-r from-gold-500/60 to-transparent" />
              </div>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal delay={150}>
              <div className="space-y-6">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold-400">
                  The Founder
                </p>
                <h2 className="text-3xl font-light tracking-wide text-silver-100 sm:text-4xl">
                  Joshua Ayers
                </h2>
                <div className="h-px w-12 bg-gold-500/40" />
                <p className="text-base leading-[1.8] text-silver-400">
                  Founded by Joshua Ayers, MOSTFOLIO LLC was born out of a desire
                  to create jewelry that speaks to strength and sophistication.
                  Every piece is meticulously designed to be worn daily and last a
                  lifetime.
                </p>
                <p className="text-base leading-[1.8] text-silver-400">
                  From sourcing the finest titanium and carbon fiber to
                  hand-finishing every clasp and setting, our process ensures that
                  each ring, chain, and bracelet embodies the same bold vision
                  that sparked MOSTFOLIO into existence.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Values — HORIZONTAL rather than grid ─ */}
      <section className="border-t border-carbon-700/30 bg-carbon-850 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid gap-12 sm:grid-cols-3">
              {[
                {
                  num: '01',
                  title: 'Precision',
                  body: 'Every dimension measured to the micron. We believe greatness lives in the details.',
                },
                {
                  num: '02',
                  title: 'Durability',
                  body: 'Built from aerospace-grade metals and reinforced composites. Made to endure.',
                },
                {
                  num: '03',
                  title: 'Character',
                  body: 'Bold design language that communicates confidence without saying a word.',
                },
              ].map((v) => (
                <div key={v.title} className="space-y-3">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold-500/50">
                    {v.num}
                  </span>
                  <h3 className="text-lg font-light tracking-[0.15em] text-silver-100">
                    {v.title}
                  </h3>
                  <div className="h-px w-8 bg-gold-500/40" />
                  <p className="text-sm leading-relaxed text-silver-500">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
