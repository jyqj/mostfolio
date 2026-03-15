export type Category = 'Rings' | 'Chains' | 'Bracelets' | 'Accessories';

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  shortDescription: string;
  additionalImages?: string[];
  storytelling: string[];
  specifications: {
    material: string;
    finish?: string;
    width?: string;
    weight?: string;
    length?: string;
  };
}

export const products: Product[] = [
  {
    id: "rng-1",
    slug: "the-obsidian-signet",
    name: "The Obsidian Signet",
    price: 190,
    category: "Rings",
    image: "/images/product_ring_1_1773565644419.png",
    shortDescription: "A monolithic manifestation of structure, The Obsidian Signet redefines the classic gentleman's ring through an uncompromising, dark architectural lens.",
    storytelling: [
      "The Obsidian Signet is an exercise in absolute minimalism. Cast from an incredibly dense block of blackened steel, its austere geometry rejects all traditional ornamentation.",
      "Its signature feature is the perfectly flat, unpolished top plane—a void-like surface that absorbs ambient light and commands authority through its stark emptiness.",
      "A heavy, unapologetic piece of wearable brutalism, this signet is designed for those who appreciate the gravity and permanence of pure, industrial form."
    ],
    additionalImages: [
      "/images/the-obsidian-signet-view1.png",
      "/images/the-obsidian-signet-view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "rng-2",
    slug: "forged-carbon-band",
    name: "Forged Carbon Band",
    price: 428,
    category: "Rings",
    image: "/images/product_ring_2_1773565762145.png",
    shortDescription: "Engineered from advanced composites, the Forged Carbon Band defines modern endurance and stark industrial allure.",
    storytelling: [
      "The Forged Carbon Band redefines material limitations. Crafted from genuine forged carbon, it achieves an unparalleled strength-to-weight ratio without sacrificing its bold, monolithic presence.",
      "Each band exhibits a unique marbled pattern—born from high pressure and heat—ensuring no two rings possess the exact same structural fingerprint.",
      "Its tactile, matte-finished surface absorbs light, providing a stealthy, understated elegance that is remarkably durable yet surprisingly lightweight for everyday wear."
    ],
    additionalImages: [
      "/images/forged-carbon-band-view1.png",
      "/images/forged-carbon-band-view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "rng-3",
    slug: "tungsten-core-band",
    name: "Tungsten Core Band",
    price: 548,
    category: "Rings",
    image: "/images/tungsten_core_band_1773566249877.png",
    shortDescription: "A monument of mass and resilience, the Tungsten Core Band withstands the elements and time.",
    storytelling: [
      "Built around a virtually indestructible tungsten carbide core, this band redefines resilience. It is forged to endure extreme conditions without losing its structural integrity.",
      "The heavy, unapologetic build delivers a profound sense of gravity, grounding the wearer with its substantial presence.",
      "Finished with a raw, brushed texture, the surface proudly displays the industrial aesthetic of untamed metal, resisting scratches and reflecting a steadfast resolve."
    ],
    additionalImages: [
      "/images/tungsten-core-band-view1.png",
      "/images/tungsten-core-band-view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "rng-4",
    slug: "damascus-steel-band",
    name: "Damascus Steel Band",
    price: 313,
    category: "Rings",
    image: "/images/damascus_steel_band_1773566275907.png",
    shortDescription: "A testament to ancient metallurgy, the Damascus Steel Band reveals rippling topographies born from fire and friction.",
    storytelling: [
      "The Damascus Steel Band is born from chaos precisely controlled. Master artisans repeatedly fold and forge alternating layers of steel, culminating in a striking, organic pattern reminiscent of flowing water or wind-swept deserts.",
      "Finished with a deep acid etch, the contrasting metallic grains are exposed in high relief, providing an unforgiving, tactile edge that commands respect.",
      "Every singular band carries its own unique history forged into the metal—a robust, commanding piece of heritage luxury engineered to outlast its owner."
    ],
    additionalImages: [
      "/images/damascus-steel-band-view1.png",
      "/images/damascus-steel-band-view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "rng-5",
    slug: "hammered-sterling-band",
    name: "Hammered Sterling Band",
    price: 539,
    category: "Rings",
    image: "/images/hammered_sterling_band_1773566287685.png",
    shortDescription: "A testament to artisanal precision, the Hammered Sterling Band bears the distinct physical marks of its creation.",
    storytelling: [
      "The Hammered Sterling Band honors the raw authenticity of hand-wrought silver. Crafted from premium 925 sterling, it eschews machine perfection in favor of enduring artisanal character.",
      "Each faceted plane is meticulously struck by hand, creating an irregular, cratered topography that catches and reflects ambient light in unpredictable, brilliant flashes.",
      "Weighted for substantial wear and finished with a dark antiquing process to enhance depth, this band is an unyielding anchor—a wearable artifact born from sheer force."
    ],
    additionalImages: [
      "/images/hammered-sterling-band-view1.png",
      "/images/hammered-sterling-band-view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "rng-6",
    slug: "brushed-titanium-edge",
    name: "Brushed Titanium Edge",
    price: 601,
    category: "Rings",
    image: "/images/brushed_titanium_edge_1773566300625.png",
    shortDescription: "Engineered for the modern minimalist, the Brushed Titanium Edge delivers high-performance durability with a sleek, aerodynamic profile.",
    storytelling: [
      "The Brushed Titanium Edge represents the pinnacle of modern metallurgy. Precision-milled from aerospace-grade titanium, it offers unparalleled strength while remaining virtually weightless on the hand.",
      "The exterior features a directional brushed finish that elegantly mitigates glare, while the polished inner bevel ensures maximum comfort for everyday wear.",
      "Clean lines and absolute geometric precision define its silhouette. It is not merely an accessory, but a functional piece of minimalist engineering designed for the future."
    ],
    additionalImages: [
      "/images/brushed-titanium-edge-view1.png",
      "/images/brushed-titanium-edge-view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "rng-7",
    slug: "architect-geometric",
    name: "Architect Geometric",
    price: 506,
    category: "Rings",
    image: "/images/architect_geometric_1773566314446.png",
    shortDescription: "A masterclass in raw brutalist geometry, the Architect Geometric embodies uncompromising structural integrity.",
    storytelling: [
      "The Architect Geometric represents an uncompromising vision. Forged from solid gunmetal, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/architect-geometric_concrete.png",
      "/images/architect-geometric_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "rng-8",
    slug: "crimson-garnet-signet",
    name: "Crimson Garnet Signet",
    price: 388,
    category: "Rings",
    image: "/images/crimson_garnet_signet_1773566328340.png",
    shortDescription: "A bold emblem of modern nobility, the Crimson Garnet Signet commands attention with its deep, blood-red centerpiece and stark metallic frame.",
    storytelling: [
      "The Crimson Garnet Signet reimagines classic heraldry for the contemporary era. At its heart lies a dark, natural garnet—a stone historically favored by royalty for its uncompromising, fiery depth.",
      "The gem is securely flush-set within a heavy, brushed dark metal band, creating a stark contrast between the stone’s smoldering inner light and the ring's cold, industrial brutalism.",
      "Engineered for presence, this weighty signet is not just a piece of jewelry, but a personal monolith. It serves as an unyielding anchor of individuality that grows richer with every passing generation."
    ],
    additionalImages: [
      "/images/crimson-garnet-signet-view1.png",
      "/images/crimson-garnet-signet-view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "rng-9",
    slug: "matte-gold-accent",
    name: "Matte Gold Accent",
    price: 155,
    category: "Rings",
    image: "/images/matte_gold_accent_ring_1773566340333.png",
    shortDescription: "Minimalist and refined, the Matte Gold Accent ring relies on the subtle interplay of dark metal against a single, warm gold sliver.",
    storytelling: [
      "Stripping away excess to find absolute balance, the Matte Gold Accent ring marries two opposing forces. An enduring band of dark, matte-finished steel forms the unyielding foundation of this design.",
      "Embedded within this dark profile is an unbroken streak of pure gold—a flash of warmth and luxury that reveals itself dynamically as the hand moves.",
      "It is the embodiment of understated wealth. Designed for those who appreciate quiet luxury, this ring speaks volumes without ever raising its voice."
    ],
    additionalImages: [
      "/images/matte-gold-accent-view1.png",
      "/images/matte-gold-accent-view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "rng-10",
    slug: "mariner-anchor-ring",
    name: "Mariner Anchor Ring",
    price: 426,
    category: "Rings",
    image: "/images/mariner_anchor_ring_1773566353937.png",
    shortDescription: "A tribute to deep-sea heritage, the Mariner Anchor Ring features a nautical emblem set into heavily aged metal.",
    storytelling: [
      "Conceived for those drawn to the relentless pull of the ocean, the Mariner Anchor Ring is a wearable piece of maritime lore. The classic anchor motif is stamped deeply into its face, representing steadfastness and hope.",
      "Cast with a rugged, battered finish, the surface intentionally mimics metal that has been weathered by decades of salt, wind, and crushing waves.",
      "Far from polished perfection, this ring is an artifact of resilience. It is a daily companion designed to endure life's heaviest storms and deepest waters."
    ],
    additionalImages: [
      "/images/mariner-anchor-view1.png",
      "/images/mariner-anchor-view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "rng-11",
    slug: "slate-texture-band",
    name: "Slate Texture Band",
    price: 235,
    category: "Rings",
    image: "/images/slate_texture_band_1773566367022.png",
    shortDescription: "Echoing the organic randomness of natural stone, the Slate Texture Band captures the crude beauty of the earth itself.",
    storytelling: [
      "The Slate Texture Band rejects the symmetrical conformity of traditional jewelry. Its entire circumference is sculpted to mirror the jagged, unpredictable face of sheer rock cliffs.",
      "Through an intensive texturing and darkening process, deep crevices are formed alongside stark highlights, ensuring that no two angles catch the light in exactly the same way.",
      "Tactile and grounding, this ring serves as a visceral connection to the wild. It carries the weight and permanence of mountains upon the wearer’s hand."
    ],
    additionalImages: [
      "/images/slate-texture-band-view1.png",
      "/images/slate-texture-band-view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "rng-12",
    slug: "braided-wire-ring",
    name: "Braided Wire Ring",
    price: 381,
    category: "Rings",
    image: "/images/braided_wire_ring_1773566382882.png",
    shortDescription: "An intricate display of mechanical tension, the Braided Wire Ring intertwines strands of steel into an unbreakable mesh.",
    storytelling: [
      "The Braided Wire Ring celebrates the complex beauty of industrial engineering. Multiple thick gauges of metal wire are methodically twisted and woven together under immense pressure.",
      "This interlocking mesh creates a visual paradox—it appears incredibly detailed and flexible, yet feels solid, unyielding, and armor-like against the skin.",
      "Designed to age distinctly, the friction points of the braids polish naturally over time while the recessed depths darken from oxidation, highlighting its structural depth."
    ],
    additionalImages: [
      "/images/braided-wire-ring-view1.png",
      "/images/braided-wire-ring-view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "rng-13",
    slug: "oxidized-skull-ring",
    name: "Oxidized Skull Ring",
    price: 412,
    category: "Rings",
    image: "/images/oxidized_skull_ring_1773566395824.png",
    shortDescription: "A masterclass in sculptural geometry, the Oxidized Skull Ring embodies a commanding unique presence.",
    storytelling: [
      "The Oxidized Skull Ring represents an uncompromising vision. Forged from solid gunmetal, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/oxidized-skull-ring_concrete.png",
      "/images/oxidized-skull-ring_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "rng-14",
    slug: "sovereign-crown",
    name: "Sovereign Crown",
    price: 301,
    category: "Rings",
    image: "/images/sovereign_crown_1773566412224.png",
    shortDescription: "A masterclass in monolithic geometry, the Sovereign Crown embodies defiance against traditional ornamentation.",
    storytelling: [
      "The Sovereign Crown represents an uncompromising vision. Forged from solid gunmetal, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/sovereign-crown_concrete.png",
      "/images/sovereign-crown_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "rng-15",
    slug: "minimalist-groove-band",
    name: "Minimalist Groove Band",
    price: 647,
    category: "Rings",
    image: "/images/minimalist_groove_band_1773566424952.png",
    shortDescription: "A masterclass in stark industrial geometry, the Minimalist Groove Band embodies enduring tactile weight.",
    storytelling: [
      "The Minimalist Groove Band represents an uncompromising vision. Forged from solid gunmetal, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/minimalist-groove-band_concrete.png",
      "/images/minimalist-groove-band_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "chn-1",
    slug: "heavyweight-cuban-12mm",
    name: "Heavyweight Cuban 12mm",
    price: 286,
    category: "Chains",
    image: "/images/product_chain_1_1773565778295.png",
    shortDescription: "A masterclass in dark architectural geometry, the Heavyweight Cuban 12mm embodies relentless mechanical purity.",
    storytelling: [
      "The Heavyweight Cuban 12mm represents an uncompromising vision. Forged from solid heavyweight steel, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/heavyweight-cuban-12mm_concrete.png",
      "/images/heavyweight-cuban-12mm_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "chn-2",
    slug: "rope-chain-5mm",
    name: "Rope Chain 5mm",
    price: 579,
    category: "Chains",
    image: "/images/product_chain_2_1773565802825.png",
    shortDescription: "A masterclass in raw brutalist geometry, the Rope Chain 5mm embodies uncompromising structural integrity.",
    storytelling: [
      "The Rope Chain 5mm represents an uncompromising vision. Forged from solid heavyweight steel, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/rope-chain-5mm_concrete.png",
      "/images/rope-chain-5mm_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "chn-3",
    slug: "cuban-link-8mm",
    name: "Cuban Link 8mm",
    price: 539,
    category: "Chains",
    image: "/images/kuban_link_8mm_1773566447852.png",
    shortDescription: "A masterclass in sculptural geometry, the Cuban Link 8mm embodies a commanding unique presence.",
    storytelling: [
      "The Cuban Link 8mm represents an uncompromising vision. Forged from solid heavyweight steel, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/cuban-link-8mm_concrete.png",
      "/images/cuban-link-8mm_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "chn-4",
    slug: "north-star-pendant",
    name: "North Star Pendant",
    price: 298,
    category: "Chains",
    image: "/images/north_star_pendant_1773566462207.png",
    shortDescription: "A masterclass in monolithic geometry, the North Star Pendant embodies defiance against traditional ornamentation.",
    storytelling: [
      "The North Star Pendant represents an uncompromising vision. Forged from solid heavyweight steel, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/north-star-pendant_concrete.png",
      "/images/north-star-pendant_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "chn-5",
    slug: "oxidized-rope-chain",
    name: "Oxidized Rope Chain",
    price: 512,
    category: "Chains",
    image: "/images/oxidized_rope_chain_1773566474513.png",
    shortDescription: "A masterclass in stark industrial geometry, the Oxidized Rope Chain embodies enduring tactile weight.",
    storytelling: [
      "The Oxidized Rope Chain represents an uncompromising vision. Forged from solid heavyweight steel, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/oxidized-rope-chain_concrete.png",
      "/images/oxidized-rope-chain_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "chn-6",
    slug: "minimalist-bar-pendant",
    name: "Minimalist Bar Pendant",
    price: 170,
    category: "Chains",
    image: "/images/minimalist_bar_pendant_1773566489115.png",
    shortDescription: "A masterclass in dark architectural geometry, the Minimalist Bar Pendant embodies relentless mechanical purity.",
    storytelling: [
      "The Minimalist Bar Pendant represents an uncompromising vision. Forged from solid heavyweight steel, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/minimalist-bar-pendant_concrete.png",
      "/images/minimalist-bar-pendant_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "chn-7",
    slug: "blackened-cross-pendant",
    name: "Blackened Cross Pendant",
    price: 517,
    category: "Chains",
    image: "/images/blackened_cross_pendant_1773566501679.png",
    shortDescription: "A masterclass in raw brutalist geometry, the Blackened Cross Pendant embodies uncompromising structural integrity.",
    storytelling: [
      "The Blackened Cross Pendant represents an uncompromising vision. Forged from solid heavyweight steel, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/blackened-cross-pendant_concrete.png",
      "/images/blackened-cross-pendant_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "chn-8",
    slug: "figaro-chain-5mm",
    name: "Figaro Chain 5mm",
    price: 568,
    category: "Chains",
    image: "/images/figaro_chain_5mm_1773566514110.png",
    shortDescription: "A masterclass in sculptural geometry, the Figaro Chain 5mm embodies a commanding unique presence.",
    storytelling: [
      "The Figaro Chain 5mm represents an uncompromising vision. Forged from solid heavyweight steel, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/figaro-chain-5mm_concrete.png",
      "/images/figaro-chain-5mm_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "chn-9",
    slug: "lion-head-medallion",
    name: "Lion Head Medallion",
    price: 502,
    category: "Chains",
    image: "/images/lion_head_medallion_1773566527532.png",
    shortDescription: "A masterclass in monolithic geometry, the Lion Head Medallion embodies defiance against traditional ornamentation.",
    storytelling: [
      "The Lion Head Medallion represents an uncompromising vision. Forged from solid heavyweight steel, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/lion-head-medallion_concrete.png",
      "/images/lion-head-medallion_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "chn-10",
    slug: "layered-double-chain",
    name: "Layered Double Chain",
    price: 246,
    category: "Chains",
    image: "/images/layered_double_chain_1773566538681.png",
    shortDescription: "A masterclass in stark industrial geometry, the Layered Double Chain embodies enduring tactile weight.",
    storytelling: [
      "The Layered Double Chain represents an uncompromising vision. Forged from solid heavyweight steel, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/layered-double-chain_concrete.png",
      "/images/layered-double-chain_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "chn-11",
    slug: "matte-finish-tag-pendant",
    name: "Matte Finish Tag Pendant",
    price: 401,
    category: "Chains",
    image: "/images/matte_finish_tag_pendant_1773566551362.png",
    shortDescription: "A masterclass in dark architectural geometry, the Matte Finish Tag Pendant embodies relentless mechanical purity.",
    storytelling: [
      "The Matte Finish Tag Pendant represents an uncompromising vision. Forged from solid heavyweight steel, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/matte-finish-tag-pendant_concrete.png",
      "/images/matte-finish-tag-pendant_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "chn-12",
    slug: "artisan-hammered-cross",
    name: "Artisan Hammered Cross",
    price: 493,
    category: "Chains",
    image: "/images/artisan_hammered_cross_1773566564914.png",
    shortDescription: "A masterclass in raw brutalist geometry, the Artisan Hammered Cross embodies uncompromising structural integrity.",
    storytelling: [
      "The Artisan Hammered Cross represents an uncompromising vision. Forged from solid heavyweight steel, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/artisan-hammered-cross_concrete.png",
      "/images/artisan-hammered-cross_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "chn-13",
    slug: "heavyweight-box-chain",
    name: "Heavyweight Box Chain",
    price: 263,
    category: "Chains",
    image: "/images/heavyweight_box_chain_1773566577297.png",
    shortDescription: "A masterclass in sculptural geometry, the Heavyweight Box Chain embodies a commanding unique presence.",
    storytelling: [
      "The Heavyweight Box Chain represents an uncompromising vision. Forged from solid heavyweight steel, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/heavyweight-box-chain_concrete.png",
      "/images/heavyweight-box-chain_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "chn-14",
    slug: "geometric-triangle-pendant",
    name: "Geometric Triangle Pendant",
    price: 389,
    category: "Chains",
    image: "/images/geometric_triangle_pendant_1773566589749.png",
    shortDescription: "A masterclass in monolithic geometry, the Geometric Triangle Pendant embodies defiance against traditional ornamentation.",
    storytelling: [
      "The Geometric Triangle Pendant represents an uncompromising vision. Forged from solid heavyweight steel, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/geometric-triangle-pendant_concrete.png",
      "/images/geometric-triangle-pendant_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "chn-15",
    slug: "vintage-coin-medallion",
    name: "Vintage Coin Medallion",
    price: 586,
    category: "Chains",
    image: "/images/vintage_coin_medallion_1773566604039.png",
    shortDescription: "A masterclass in stark industrial geometry, the Vintage Coin Medallion embodies enduring tactile weight.",
    storytelling: [
      "The Vintage Coin Medallion represents an uncompromising vision. Forged from solid heavyweight steel, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/vintage-coin-medallion_concrete.png",
      "/images/vintage-coin-medallion_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "brc-1",
    slug: "braided-leather-wrap",
    name: "Braided Leather Wrap",
    price: 158,
    category: "Bracelets",
    image: "/images/product_bracelet_1_1773565815852.png",
    shortDescription: "A masterclass in dark architectural geometry, the Braided Leather Wrap embodies relentless mechanical purity.",
    storytelling: [
      "The Braided Leather Wrap represents an uncompromising vision. Forged from solid matte titanium, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/braided-leather-wrap_concrete.png",
      "/images/braided-leather-wrap_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "brc-2",
    slug: "titanium-cuff",
    name: "Titanium Cuff",
    price: 229,
    category: "Bracelets",
    image: "/images/product_bracelet_2_1773565827690.png",
    shortDescription: "A masterclass in raw brutalist geometry, the Titanium Cuff embodies uncompromising structural integrity.",
    storytelling: [
      "The Titanium Cuff represents an uncompromising vision. Forged from solid matte titanium, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/titanium-cuff_concrete.png",
      "/images/titanium-cuff_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "brc-3",
    slug: "matte-black-beaded",
    name: "Matte Black Beaded",
    price: 264,
    category: "Bracelets",
    image: "/images/matte_black_beaded_bracelet_1773566699215.png",
    shortDescription: "A masterclass in sculptural geometry, the Matte Black Beaded embodies a commanding unique presence.",
    storytelling: [
      "The Matte Black Beaded represents an uncompromising vision. Forged from solid matte titanium, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/matte-black-beaded_concrete.png",
      "/images/matte-black-beaded_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "brc-4",
    slug: "leather-steel-wrap",
    name: "Leather Steel Wrap",
    price: 167,
    category: "Bracelets",
    image: "/images/braided_leather_steel_wrap_1773566713099.png",
    shortDescription: "A masterclass in monolithic geometry, the Leather Steel Wrap embodies defiance against traditional ornamentation.",
    storytelling: [
      "The Leather Steel Wrap represents an uncompromising vision. Forged from solid matte titanium, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/leather-steel-wrap_concrete.png",
      "/images/leather-steel-wrap_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "brc-5",
    slug: "chunky-silver-chain",
    name: "Chunky Silver Chain",
    price: 414,
    category: "Bracelets",
    image: "/images/chunky_silver_chain_bracelet_1773566726652.png",
    shortDescription: "A masterclass in stark industrial geometry, the Chunky Silver Chain embodies enduring tactile weight.",
    storytelling: [
      "The Chunky Silver Chain represents an uncompromising vision. Forged from solid matte titanium, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/chunky-silver-chain_concrete.png",
      "/images/chunky-silver-chain_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "brc-6",
    slug: "woven-paracord-titanium",
    name: "Woven Paracord Titanium",
    price: 576,
    category: "Bracelets",
    image: "/images/woven_paracord_titanium_1773566743399.png",
    shortDescription: "A masterclass in dark architectural geometry, the Woven Paracord Titanium embodies relentless mechanical purity.",
    storytelling: [
      "The Woven Paracord Titanium represents an uncompromising vision. Forged from solid matte titanium, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/woven-paracord-titanium_concrete.png",
      "/images/woven-paracord-titanium_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "brc-7",
    slug: "hammered-copper-cuff",
    name: "Hammered Copper Cuff",
    price: 516,
    category: "Bracelets",
    image: "/images/hammered_copper_cuff_1773566755617.png",
    shortDescription: "A masterclass in raw brutalist geometry, the Hammered Copper Cuff embodies uncompromising structural integrity.",
    storytelling: [
      "The Hammered Copper Cuff represents an uncompromising vision. Forged from solid matte titanium, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/hammered-copper-cuff_concrete.png",
      "/images/hammered-copper-cuff_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "brc-8",
    slug: "tiger-eye-bead",
    name: "Tiger Eye Bead",
    price: 376,
    category: "Bracelets",
    image: "/images/timers_eye_bead_bracelet_1773566768455.png",
    shortDescription: "A masterclass in sculptural geometry, the Tiger Eye Bead embodies a commanding unique presence.",
    storytelling: [
      "The Tiger Eye Bead represents an uncompromising vision. Forged from solid matte titanium, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/tiger-eye-bead_concrete.png",
      "/images/tiger-eye-bead_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "brc-9",
    slug: "sleek-gunmetal-bangle",
    name: "Sleek Gunmetal Bangle",
    price: 606,
    category: "Bracelets",
    image: "/images/sleek_gunmetal_bangle_1773566783334.png",
    shortDescription: "A masterclass in monolithic geometry, the Sleek Gunmetal Bangle embodies defiance against traditional ornamentation.",
    storytelling: [
      "The Sleek Gunmetal Bangle represents an uncompromising vision. Forged from solid matte titanium, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/sleek-gunmetal-bangle_concrete.png",
      "/images/sleek-gunmetal-bangle_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "brc-10",
    slug: "multi-layer-onyx-silver",
    name: "Multi Layer Onyx Silver",
    price: 426,
    category: "Bracelets",
    image: "/images/multi_layer_onyx_silver_1773566796502.png",
    shortDescription: "A masterclass in stark industrial geometry, the Multi Layer Onyx Silver embodies enduring tactile weight.",
    storytelling: [
      "The Multi Layer Onyx Silver represents an uncompromising vision. Forged from solid matte titanium, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/multi-layer-onyx-silver_concrete.png",
      "/images/multi-layer-onyx-silver_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "acc-1",
    slug: "engraved-silver-money-clip",
    name: "Engraved Silver Money Clip",
    price: 552,
    category: "Accessories",
    image: "/images/engraved_silver_money_clip_1773566855322.png",
    shortDescription: "A masterclass in dark architectural geometry, the Engraved Silver Money Clip embodies relentless mechanical purity.",
    storytelling: [
      "The Engraved Silver Money Clip represents an uncompromising vision. Forged from solid oxidized silver, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/engraved-silver-money-clip_concrete.png",
      "/images/engraved-silver-money-clip_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "acc-2",
    slug: "leather-wallet-metal-corner",
    name: "Leather Wallet Metal Corner",
    price: 524,
    category: "Accessories",
    image: "/images/leather_wallet_metal_corner_1773566868242.png",
    shortDescription: "A masterclass in raw brutalist geometry, the Leather Wallet Metal Corner embodies uncompromising structural integrity.",
    storytelling: [
      "The Leather Wallet Metal Corner represents an uncompromising vision. Forged from solid oxidized silver, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/leather-wallet-metal-corner_concrete.png",
      "/images/leather-wallet-metal-corner_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "acc-3",
    slug: "gunmetal-tie-clip",
    name: "Gunmetal Tie Clip",
    price: 291,
    category: "Accessories",
    image: "/images/gunmetal_tie_clip_1773566883911.png",
    shortDescription: "A masterclass in sculptural geometry, the Gunmetal Tie Clip embodies a commanding unique presence.",
    storytelling: [
      "The Gunmetal Tie Clip represents an uncompromising vision. Forged from solid oxidized silver, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/gunmetal-tie-clip_concrete.png",
      "/images/gunmetal-tie-clip_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "acc-4",
    slug: "matte-black-cufflinks",
    name: "Matte Black Cufflinks",
    price: 533,
    category: "Accessories",
    image: "/images/matte_black_cufflinks_1773566897458.png",
    shortDescription: "A masterclass in monolithic geometry, the Matte Black Cufflinks embodies defiance against traditional ornamentation.",
    storytelling: [
      "The Matte Black Cufflinks represents an uncompromising vision. Forged from solid oxidized silver, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/matte-black-cufflinks_concrete.png",
      "/images/matte-black-cufflinks_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "acc-5",
    slug: "silver-skull-keychain",
    name: "Silver Skull Keychain",
    price: 197,
    category: "Accessories",
    image: "/images/silver_skull_keychain_1773566913996.png",
    shortDescription: "A masterclass in stark industrial geometry, the Silver Skull Keychain embodies enduring tactile weight.",
    storytelling: [
      "The Silver Skull Keychain represents an uncompromising vision. Forged from solid oxidized silver, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/silver-skull-keychain_concrete.png",
      "/images/silver-skull-keychain_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "acc-6",
    slug: "minimalist-metal-cardholder",
    name: "Minimalist Metal Cardholder",
    price: 572,
    category: "Accessories",
    image: "/images/minimalist_metal_cardholder_1773566930169.png",
    shortDescription: "A masterclass in dark architectural geometry, the Minimalist Metal Cardholder embodies relentless mechanical purity.",
    storytelling: [
      "The Minimalist Metal Cardholder represents an uncompromising vision. Forged from solid oxidized silver, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/minimalist-metal-cardholder_concrete.png",
      "/images/minimalist-metal-cardholder_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "acc-7",
    slug: "steel-watch-winder",
    name: "Steel Watch Winder",
    price: 418,
    category: "Accessories",
    image: "/images/steel_watch_winder_1773566946422.png",
    shortDescription: "A masterclass in raw brutalist geometry, the Steel Watch Winder embodies uncompromising structural integrity.",
    storytelling: [
      "The Steel Watch Winder represents an uncompromising vision. Forged from solid oxidized silver, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/steel-watch-winder_concrete.png",
      "/images/steel-watch-winder_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "acc-8",
    slug: "leather-valet-tray",
    name: "Leather Valet Tray",
    price: 416,
    category: "Accessories",
    image: "/images/leather_valet_tray_1773566958632.png",
    shortDescription: "A masterclass in sculptural geometry, the Leather Valet Tray embodies a commanding unique presence.",
    storytelling: [
      "The Leather Valet Tray represents an uncompromising vision. Forged from solid oxidized silver, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/leather-valet-tray_concrete.png",
      "/images/leather-valet-tray_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "acc-9",
    slug: "silver-collar-stays",
    name: "Silver Collar Stays",
    price: 218,
    category: "Accessories",
    image: "/images/silver_collar_stays_1773566972243.png",
    shortDescription: "A masterclass in monolithic geometry, the Silver Collar Stays embodies defiance against traditional ornamentation.",
    storytelling: [
      "The Silver Collar Stays represents an uncompromising vision. Forged from solid oxidized silver, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/silver-collar-stays_concrete.png",
      "/images/silver-collar-stays_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  },
  {
    id: "acc-10",
    slug: "titanium-lapel-pin",
    name: "Titanium Lapel Pin",
    price: 516,
    category: "Accessories",
    image: "/images/titanium_lapel_pin_1773566985295.png",
    shortDescription: "A masterclass in stark industrial geometry, the Titanium Lapel Pin embodies enduring tactile weight.",
    storytelling: [
      "The Titanium Lapel Pin represents an uncompromising vision. Forged from solid oxidized silver, it strips away the non-essential within its form to reveal true structural gravity.",
      "Finished with a signature industrial matte treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is precisely beveled yet perfectly wearable—an exercise in raw architectural geometry designed to endure the test of time."
    ],
    additionalImages: [
      "/images/titanium-lapel-pin_concrete.png",
      "/images/titanium-lapel-pin_steel.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable"
    }
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  const decoded = decodeURIComponent(slug).replace(/ /g, '-');
  return products.find(p => p.slug === decoded);
}

export function getAllCategories(): Category[] {
  return ['Rings', 'Chains', 'Bracelets', 'Accessories'];
}

export function getProductsByCategory(category: Category | 'All'): Product[] {
  if (category === 'All') return products;
  return products.filter(p => p.category === category);
}
