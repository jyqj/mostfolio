'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero — Full Bleed ────────────────────── */}
      <section className="relative overflow-hidden bg-carbon-950 pb-16 pt-32 lg:pt-40 lg:pb-24">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/story_foundry_panorama.png"
            alt="MOSTFOLIO foundry"
            fill
            className="object-cover object-center opacity-30"
            quality={85}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon-950/60 via-carbon-950/40 to-carbon-950" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gold-500/50" />
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold-400">
                Our Story
              </p>
            </div>
            <h1 className="text-4xl font-light tracking-wide text-silver-100 sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8">
              The vision behind<br />the metal.
            </h1>
            <p className="text-lg leading-relaxed text-silver-400 max-w-xl">
              From a one-man foundry to a movement. Every piece we forge carries a lineage of fire, pressure, and uncompromising intention.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Founder Split ────────────────────────── */}
      <section className="relative bg-carbon-950 py-16 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image */}
            <ScrollReveal variant="left">
              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[3/4]">
                <Image
                  src="/images/workshop_tool_closeup.png"
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
                  MOSTFOLIO LLC was born from a singular obsession: to engineer artifacts that command attention through sheer structural integrity and uncompromising materials. Joshua Ayers built this brand for those who find beauty in the brutal and elegant in the heavy.
                </p>
                <p className="text-base leading-[1.8] text-silver-400">
                  By treating jewelry as architectural hardware rather than mere accessories, every ring, chain, and bracelet is cast to survive lifetimes. No hollow cores. No fragile aesthetics. This is modern metallurgy designed for permanence.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Origin Story ─────────────────────────── */}
      <section className="relative bg-carbon-900 py-16 lg:py-28 overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[20rem] font-display text-carbon-850 leading-none select-none pointer-events-none opacity-50">
          M
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Text — wider */}
            <ScrollReveal className="lg:col-span-3">
              <div className="space-y-6">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-silver-500">
                  Where It Began
                </p>
                <h2 className="text-3xl font-light tracking-wide text-silver-100 sm:text-4xl">
                  A garage. A torch.<br />An idea.
                </h2>
                <div className="h-px w-12 bg-silver-500/40" />
                <p className="text-base leading-[1.8] text-silver-400">
                  In 2019, Joshua Ayers began melting scrap metal in his garage in South Carolina. There was no grand plan — just a growing frustration with the jewelry market&apos;s obsession with fragile, hollow pieces that crumbled under real use.
                </p>
                <p className="text-base leading-[1.8] text-silver-400">
                  His first ring was forged from a reclaimed automotive piston. It was rough, asymmetric, and weighed three times more than anything on the shelf at a mall jeweler. A friend wore it to a construction site for six months. It survived without a scratch. That was the proof of concept.
                </p>
                <p className="text-base leading-[1.8] text-silver-400">
                  What started as a weekend experiment turned into a full-time pursuit. Word spread through trade shows and social media. By 2021, MOSTFOLIO had outgrown the garage and moved into a dedicated workshop — but the ethos never changed. Every piece would be engineered for real life, not display cases.
                </p>
              </div>
            </ScrollReveal>

            {/* Image — narrower */}
            <ScrollReveal variant="right" delay={150} className="lg:col-span-2">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/story_workshop_wall.png"
                  alt="Workshop tools on wall"
                  fill
                  className="object-cover"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-900/50 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Full-Bleed Image Break — Foundry ───── */}
      <section className="relative h-[50vh] lg:h-[70vh] overflow-hidden">
        <Image
          src="/images/story_foundry_panorama.png"
          alt="Inside the foundry"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-carbon-950/40" />
        {/* Centered pull-quote */}
        <div className="absolute inset-0 flex items-center justify-center">
          <ScrollReveal variant="scale">
            <blockquote className="max-w-2xl px-8 text-center">
              <span className="quote-mark -top-8 left-0">&ldquo;</span>
              <p className="text-2xl font-light italic leading-relaxed text-silver-100 sm:text-3xl lg:text-4xl">
                We don&apos;t make jewelry.<br />We forge statements.
              </p>
              <footer className="mt-6 text-xs uppercase tracking-[0.3em] text-gold-400">
                — Joshua Ayers, Founder
              </footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Materials Gallery ────────────────────── */}
      <section className="relative bg-carbon-950 py-16 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12 max-w-xl">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold-400 mb-4">
                The Materials
              </p>
              <h2 className="text-3xl font-light tracking-wide text-silver-100 sm:text-4xl">
                Sourced from the same<br />supply chain as aerospace.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                src: '/images/story_raw_materials.png',
                alt: 'Raw silver, titanium, and carbon fiber materials',
                title: '925 Sterling Silver',
                desc: 'Sourced as .999 fine silver, alloyed in-house to our exact 925 specification. No mystery metal. No shortcuts.',
              },
              {
                src: '/images/story_ring_macro.png',
                alt: 'Extreme close-up of forged carbon ring texture',
                title: 'Forged Carbon Fiber',
                desc: 'Aerospace-grade chopped carbon, compression-molded at 3,000 PSI. Each piece has a unique grain pattern — no two are identical.',
              },
              {
                src: '/images/story_artisan_hands.png',
                alt: 'Artisan hands forging metal with sparks',
                title: 'Medical-Grade Titanium',
                desc: 'Grade 5 Ti-6Al-4V titanium — the same alloy used in surgical implants and jet engine blades. Featherweight. Indestructible.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 120}>
                <div className="group">
                  <div className="relative aspect-[4/3] overflow-hidden mb-5">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/60 to-transparent" />
                  </div>
                  <h3 className="text-lg font-light tracking-[0.1em] text-silver-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-silver-400">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── The Process Split ────────────────────── */}
      <section className="relative bg-carbon-900 py-16 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Text */}
            <ScrollReveal variant="left" className="order-2 lg:order-1">
              <div className="space-y-6">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-silver-500">
                  The Process
                </p>
                <h2 className="text-3xl font-light tracking-wide text-silver-100 sm:text-4xl">
                  Forged in Fire. <br /> Finished by Hand.
                </h2>
                <div className="h-px w-12 bg-silver-500/40" />
                <p className="text-base leading-[1.8] text-silver-400">
                  We source our solid 925 sterling silver, medical-grade titanium, and forged carbon from the same foundries that supply aerospace engineering firms. Every gram of metal serves a structural purpose.
                </p>
                <p className="text-base leading-[1.8] text-silver-400">
                  Our artisans shape these raw elements using high-heat casting, precise machining, and deliberate oxidation. We push materials to their limits to extract raw, textured character that cannot be replicated by mass production.
                </p>

                {/* Process steps */}
                <div className="mt-8 space-y-4 border-l border-carbon-700/50 pl-6">
                  {[
                    { step: '01', label: 'Design & CAD modeling' },
                    { step: '02', label: 'Lost-wax casting at 1,100°F' },
                    { step: '03', label: 'Hand finishing & oxidation' },
                    { step: '04', label: 'Quality inspection (3-point)' },
                    { step: '05', label: 'Individual serialization' },
                  ].map((s) => (
                    <div key={s.step} className="flex items-baseline gap-4">
                      <span className="text-[10px] font-medium tracking-[0.3em] text-gold-500/60">
                        {s.step}
                      </span>
                      <span className="text-sm text-silver-400">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Image */}
            <ScrollReveal variant="right" delay={150} className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[3/4]">
                <Image
                  src="/images/artisan_metal_crafting.png"
                  alt="Artisan crafting metal"
                  fill
                  className="object-cover"
                  quality={90}
                />
                <div className="absolute inset-0 bg-carbon-950/20 mix-blend-multiply" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Philosophy Pullquote ─────────────────── */}
      <section className="relative overflow-hidden bg-carbon-950 py-20 lg:py-32">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image
            src="/images/brushed_metal_texture.png"
            alt=""
            fill
            className="object-cover"
            quality={60}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal variant="scale">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold-400 mb-10">
              Our Philosophy
            </p>
            <h2 className="text-3xl font-light italic leading-[1.5] text-silver-100 sm:text-4xl lg:text-5xl mb-8">
              Jewelry should outlast the person wearing it. If it can&apos;t survive what you survive, it doesn&apos;t belong on your body.
            </h2>
            <div className="mx-auto h-px w-16 bg-gold-500/40 mb-8" />
            <p className="text-base leading-[1.8] text-silver-400 max-w-2xl mx-auto">
              This isn&apos;t about luxury for luxury&apos;s sake. It&apos;s about building objects with the same rigor as a bridge or a blade. We design for the person who works with their hands, who refuses to remove their ring for any job, who treats their accessories as extensions of their character — not status symbols to be protected.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Values — HORIZONTAL ──────────────────── */}
      <section className="relative overflow-hidden border-t border-carbon-700/30 bg-carbon-900 py-20 lg:py-28">
        <div className="absolute right-0 top-0 h-full w-full md:w-1/2 opacity-20 pointer-events-none">
          <Image
            src="/images/abstract_metal_statement.png"
            alt="Abstract metal structure"
            fill
            className="object-cover object-center"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-carbon-900 via-carbon-900/80 to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold-400 mb-4">
                What We Stand For
              </p>
              <h2 className="text-3xl font-light tracking-wide text-silver-100 sm:text-4xl">
                Built on three truths.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid gap-12 sm:grid-cols-3 max-w-4xl">
              {[
                {
                  num: '01',
                  title: 'Precision',
                  body: 'Every dimension measured to the micron. We believe greatness lives in the details that most people will never notice — but we always will.',
                },
                {
                  num: '02',
                  title: 'Durability',
                  body: 'Built from aerospace-grade metals and reinforced composites. We test every design against impacts, scratches, and the chaos of daily life.',
                },
                {
                  num: '03',
                  title: 'Character',
                  body: 'Bold design language that communicates confidence without saying a word. Our pieces develop a patina, they age with you — they never fade into the background.',
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
                  <p className="text-sm leading-relaxed text-silver-400">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Closing CTA ──────────────────────────── */}
      <section className="relative bg-carbon-950 py-20 lg:py-28 border-t border-carbon-700/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal variant="scale">
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold-400 mb-6">
                See for Yourself
              </p>
              <h2 className="text-3xl font-light tracking-wide text-silver-100 sm:text-4xl lg:text-5xl mb-6">
                The weight tells the story.
              </h2>
              <p className="text-base text-silver-400 max-w-lg mx-auto mb-10">
                Browse our full collection of rings, chains, bracelets, and accessories. Each piece is made to order and ships with a lifetime structural warranty.
              </p>
              <Link
                href="/collections"
                className="group inline-flex items-center gap-3 border border-gold-500/40 px-8 py-4 text-sm uppercase tracking-[0.2em] text-gold-400 transition-all duration-300 hover:bg-gold-500/10 hover:border-gold-500/70"
              >
                Explore the Collection
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
