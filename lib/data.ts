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
    shortDescription: "A architectural study in form, the The Obsidian Signet is expressing mechanical purity.",
    storytelling: [
      "The The Obsidian Signet represents an uncompromising vision. Forged from gunmetal, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature industrial treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/the-obsidian-signet_view1.png",
      "/images/the-obsidian-signet_view2.png"
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
    shortDescription: "A stark study in form, the Forged Carbon Band is engineered for endurance.",
    storytelling: [
      "The Forged Carbon Band represents an uncompromising vision. Forged from oxidized silver, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature tactile treatment, the surface absorbs light instead of reflecting it, creating a deep, uncompromising intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/forged-carbon-band_view1.png",
      "/images/forged-carbon-band_view2.png"
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
    shortDescription: "A forged study in form, the Tungsten Core Band is engineered for endurance.",
    storytelling: [
      "The Tungsten Core Band represents an uncompromising vision. Forged from damascus steel, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature raw treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/tungsten-core-band_view1.png",
      "/images/tungsten-core-band_view2.png"
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
    shortDescription: "A industrial study in form, the Damascus Steel Band is commanding a unique presence.",
    storytelling: [
      "The Damascus Steel Band represents an uncompromising vision. Forged from oxidized silver, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature forged treatment, the surface absorbs light instead of reflecting it, creating a deep, forged intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/damascus-steel-band_view1.png",
      "/images/damascus-steel-band_view2.png"
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
    shortDescription: "A resolute study in form, the Hammered Sterling Band is anchoring the physical frame.",
    storytelling: [
      "The Hammered Sterling Band represents an uncompromising vision. Forged from forged carbon, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature sculptural treatment, the surface absorbs light instead of reflecting it, creating a deep, forged intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/hammered-sterling-band_view1.png",
      "/images/hammered-sterling-band_view2.png"
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
    shortDescription: "A industrial study in form, the Brushed Titanium Edge is redefining structural integrity.",
    storytelling: [
      "The Brushed Titanium Edge represents an uncompromising vision. Forged from industrial grade metals, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature tactile treatment, the surface absorbs light instead of reflecting it, creating a deep, raw intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/brushed-titanium-edge_view1.png",
      "/images/brushed-titanium-edge_view2.png"
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
    shortDescription: "A relentless study in form, the Architect Geometric is commanding a unique presence.",
    storytelling: [
      "The Architect Geometric represents an uncompromising vision. Forged from matte titanium, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature forged treatment, the surface absorbs light instead of reflecting it, creating a deep, industrial intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/architect-geometric_view1.png",
      "/images/architect-geometric_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "rng-8",
    slug: "crimson-garnet-signet",
    name: "Crimson Garnet Signet",
    price: 388,
    category: "Rings",
    image: "/images/crimson_garnet_signet_1773566328340.png",
    shortDescription: "A monolithic study in form, the Crimson Garnet Signet is engineered for endurance.",
    storytelling: [
      "The Crimson Garnet Signet represents an uncompromising vision. Forged from damascus steel, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature industrial treatment, the surface absorbs light instead of reflecting it, creating a deep, architectural intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/crimson-garnet-signet_view1.png",
      "/images/crimson-garnet-signet_view2.png"
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
    shortDescription: "A industrial study in form, the Matte Gold Accent is expressing mechanical purity.",
    storytelling: [
      "The Matte Gold Accent represents an uncompromising vision. Forged from tungsten core, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature tactile treatment, the surface absorbs light instead of reflecting it, creating a deep, resolute intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/matte-gold-accent_view1.png",
      "/images/matte-gold-accent_view2.png"
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
    shortDescription: "A industrial study in form, the Mariner Anchor Ring is anchoring the physical frame.",
    storytelling: [
      "The Mariner Anchor Ring represents an uncompromising vision. Forged from matte titanium, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature uncompromising treatment, the surface absorbs light instead of reflecting it, creating a deep, tactile intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/mariner-anchor-ring_view1.png",
      "/images/mariner-anchor-ring_view2.png"
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
    shortDescription: "A resolute study in form, the Slate Texture Band is redefining structural integrity.",
    storytelling: [
      "The Slate Texture Band represents an uncompromising vision. Forged from matte titanium, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature resolute treatment, the surface absorbs light instead of reflecting it, creating a deep, industrial intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/slate-texture-band_view1.png",
      "/images/slate-texture-band_view2.png"
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
    shortDescription: "A industrial study in form, the Braided Wire Ring is stripped of excess.",
    storytelling: [
      "The Braided Wire Ring represents an uncompromising vision. Forged from heavyweight steel, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature tactile treatment, the surface absorbs light instead of reflecting it, creating a deep, architectural intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/braided-wire-ring_view1.png",
      "/images/braided-wire-ring_view2.png"
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
    shortDescription: "A industrial study in form, the Oxidized Skull Ring is stripped of excess.",
    storytelling: [
      "The Oxidized Skull Ring represents an uncompromising vision. Forged from gunmetal, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature tactile treatment, the surface absorbs light instead of reflecting it, creating a deep, monolithic intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/oxidized-skull-ring_view1.png",
      "/images/oxidized-skull-ring_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "rng-14",
    slug: "sovereign-crown",
    name: "Sovereign Crown",
    price: 301,
    category: "Rings",
    image: "/images/sovereign_crown_1773566412224.png",
    shortDescription: "A sculptural study in form, the Sovereign Crown is defying traditional ornamentation.",
    storytelling: [
      "The Sovereign Crown represents an uncompromising vision. Forged from gunmetal, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature stark treatment, the surface absorbs light instead of reflecting it, creating a deep, industrial intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/sovereign-crown_view1.png",
      "/images/sovereign-crown_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "rng-15",
    slug: "minimalist-groove-band",
    name: "Minimalist Groove Band",
    price: 647,
    category: "Rings",
    image: "/images/minimalist_groove_band_1773566424952.png",
    shortDescription: "A resolute study in form, the Minimalist Groove Band is redefining structural integrity.",
    storytelling: [
      "The Minimalist Groove Band represents an uncompromising vision. Forged from industrial grade metals, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature industrial treatment, the surface absorbs light instead of reflecting it, creating a deep, stark intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/minimalist-groove-band_view1.png",
      "/images/minimalist-groove-band_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "chn-1",
    slug: "heavyweight-cuban-12mm",
    name: "Heavyweight Cuban 12mm",
    price: 286,
    category: "Chains",
    image: "/images/product_chain_1_1773565778295.png",
    shortDescription: "A uncompromising study in form, the Heavyweight Cuban 12mm is anchoring the physical frame.",
    storytelling: [
      "The Heavyweight Cuban 12mm represents an uncompromising vision. Forged from forged carbon, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature sculptural treatment, the surface absorbs light instead of reflecting it, creating a deep, raw intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/heavyweight-cuban-12mm_view1.png",
      "/images/heavyweight-cuban-12mm_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "chn-2",
    slug: "rope-chain-5mm",
    name: "Rope Chain 5mm",
    price: 579,
    category: "Chains",
    image: "/images/product_chain_2_1773565802825.png",
    shortDescription: "A resolute study in form, the Rope Chain 5mm is redefining structural integrity.",
    storytelling: [
      "The Rope Chain 5mm represents an uncompromising vision. Forged from oxidized silver, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature stark treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/rope-chain-5mm_view1.png",
      "/images/rope-chain-5mm_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "chn-3",
    slug: "cuban-link-8mm",
    name: "Cuban Link 8mm",
    price: 539,
    category: "Chains",
    image: "/images/kuban_link_8mm_1773566447852.png",
    shortDescription: "A stark study in form, the Cuban Link 8mm is redefining structural integrity.",
    storytelling: [
      "The Cuban Link 8mm represents an uncompromising vision. Forged from matte titanium, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature stark treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/cuban-link-8mm_view1.png",
      "/images/cuban-link-8mm_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "chn-4",
    slug: "north-star-pendant",
    name: "North Star Pendant",
    price: 298,
    category: "Chains",
    image: "/images/north_star_pendant_1773566462207.png",
    shortDescription: "A brutalist study in form, the North Star Pendant is expressing mechanical purity.",
    storytelling: [
      "The North Star Pendant represents an uncompromising vision. Forged from damascus steel, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature sculptural treatment, the surface absorbs light instead of reflecting it, creating a deep, raw intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/north-star-pendant_view1.png",
      "/images/north-star-pendant_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "chn-5",
    slug: "oxidized-rope-chain",
    name: "Oxidized Rope Chain",
    price: 512,
    category: "Chains",
    image: "/images/oxidized_rope_chain_1773566474513.png",
    shortDescription: "A forged study in form, the Oxidized Rope Chain is commanding a unique presence.",
    storytelling: [
      "The Oxidized Rope Chain represents an uncompromising vision. Forged from industrial grade metals, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature monolithic treatment, the surface absorbs light instead of reflecting it, creating a deep, tactile intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/oxidized-rope-chain_view1.png",
      "/images/oxidized-rope-chain_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "chn-6",
    slug: "minimalist-bar-pendant",
    name: "Minimalist Bar Pendant",
    price: 170,
    category: "Chains",
    image: "/images/minimalist_bar_pendant_1773566489115.png",
    shortDescription: "A raw study in form, the Minimalist Bar Pendant is commanding a unique presence.",
    storytelling: [
      "The Minimalist Bar Pendant represents an uncompromising vision. Forged from oxidized silver, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature relentless treatment, the surface absorbs light instead of reflecting it, creating a deep, industrial intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/minimalist-bar-pendant_view1.png",
      "/images/minimalist-bar-pendant_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "chn-7",
    slug: "blackened-cross-pendant",
    name: "Blackened Cross Pendant",
    price: 517,
    category: "Chains",
    image: "/images/blackened_cross_pendant_1773566501679.png",
    shortDescription: "A resolute study in form, the Blackened Cross Pendant is redefining structural integrity.",
    storytelling: [
      "The Blackened Cross Pendant represents an uncompromising vision. Forged from oxidized silver, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature monolithic treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/blackened-cross-pendant_view1.png",
      "/images/blackened-cross-pendant_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "chn-8",
    slug: "figaro-chain-5mm",
    name: "Figaro Chain 5mm",
    price: 568,
    category: "Chains",
    image: "/images/figaro_chain_5mm_1773566514110.png",
    shortDescription: "A forged study in form, the Figaro Chain 5mm is defying traditional ornamentation.",
    storytelling: [
      "The Figaro Chain 5mm represents an uncompromising vision. Forged from heavyweight steel, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature industrial treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/figaro-chain-5mm_view1.png",
      "/images/figaro-chain-5mm_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "chn-9",
    slug: "lion-head-medallion",
    name: "Lion Head Medallion",
    price: 502,
    category: "Chains",
    image: "/images/lion_head_medallion_1773566527532.png",
    shortDescription: "A monolithic study in form, the Lion Head Medallion is expressing mechanical purity.",
    storytelling: [
      "The Lion Head Medallion represents an uncompromising vision. Forged from heavyweight steel, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature uncompromising treatment, the surface absorbs light instead of reflecting it, creating a deep, raw intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/lion-head-medallion_view1.png",
      "/images/lion-head-medallion_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "chn-10",
    slug: "layered-double-chain",
    name: "Layered Double Chain",
    price: 246,
    category: "Chains",
    image: "/images/layered_double_chain_1773566538681.png",
    shortDescription: "A industrial study in form, the Layered Double Chain is anchoring the physical frame.",
    storytelling: [
      "The Layered Double Chain represents an uncompromising vision. Forged from damascus steel, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature tactile treatment, the surface absorbs light instead of reflecting it, creating a deep, monolithic intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/layered-double-chain_view1.png",
      "/images/layered-double-chain_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "chn-11",
    slug: "matte-finish-tag-pendant",
    name: "Matte Finish Tag Pendant",
    price: 401,
    category: "Chains",
    image: "/images/matte_finish_tag_pendant_1773566551362.png",
    shortDescription: "A tactile study in form, the Matte Finish Tag Pendant is expressing mechanical purity.",
    storytelling: [
      "The Matte Finish Tag Pendant represents an uncompromising vision. Forged from industrial grade metals, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature tactile treatment, the surface absorbs light instead of reflecting it, creating a deep, sculptural intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/matte-finish-tag-pendant_view1.png",
      "/images/matte-finish-tag-pendant_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "chn-12",
    slug: "artisan-hammered-cross",
    name: "Artisan Hammered Cross",
    price: 493,
    category: "Chains",
    image: "/images/artisan_hammered_cross_1773566564914.png",
    shortDescription: "A brutalist study in form, the Artisan Hammered Cross is expressing mechanical purity.",
    storytelling: [
      "The Artisan Hammered Cross represents an uncompromising vision. Forged from gunmetal, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature tactile treatment, the surface absorbs light instead of reflecting it, creating a deep, brutalist intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/artisan-hammered-cross_view1.png",
      "/images/artisan-hammered-cross_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "chn-13",
    slug: "heavyweight-box-chain",
    name: "Heavyweight Box Chain",
    price: 263,
    category: "Chains",
    image: "/images/heavyweight_box_chain_1773566577297.png",
    shortDescription: "A monolithic study in form, the Heavyweight Box Chain is expressing mechanical purity.",
    storytelling: [
      "The Heavyweight Box Chain represents an uncompromising vision. Forged from industrial grade metals, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature stark treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/heavyweight-box-chain_view1.png",
      "/images/heavyweight-box-chain_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "chn-14",
    slug: "geometric-triangle-pendant",
    name: "Geometric Triangle Pendant",
    price: 389,
    category: "Chains",
    image: "/images/geometric_triangle_pendant_1773566589749.png",
    shortDescription: "A sculptural study in form, the Geometric Triangle Pendant is expressing mechanical purity.",
    storytelling: [
      "The Geometric Triangle Pendant represents an uncompromising vision. Forged from heavyweight steel, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature relentless treatment, the surface absorbs light instead of reflecting it, creating a deep, monolithic intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/geometric-triangle-pendant_view1.png",
      "/images/geometric-triangle-pendant_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "chn-15",
    slug: "vintage-coin-medallion",
    name: "Vintage Coin Medallion",
    price: 586,
    category: "Chains",
    image: "/images/vintage_coin_medallion_1773566604039.png",
    shortDescription: "A uncompromising study in form, the Vintage Coin Medallion is engineered for endurance.",
    storytelling: [
      "The Vintage Coin Medallion represents an uncompromising vision. Forged from matte titanium, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature stark treatment, the surface absorbs light instead of reflecting it, creating a deep, raw intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/vintage-coin-medallion_view1.png",
      "/images/vintage-coin-medallion_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "brc-1",
    slug: "braided-leather-wrap",
    name: "Braided Leather Wrap",
    price: 158,
    category: "Bracelets",
    image: "/images/product_bracelet_1_1773565815852.png",
    shortDescription: "A sculptural study in form, the Braided Leather Wrap is expressing mechanical purity.",
    storytelling: [
      "The Braided Leather Wrap represents an uncompromising vision. Forged from matte titanium, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature resolute treatment, the surface absorbs light instead of reflecting it, creating a deep, monolithic intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/braided-leather-wrap_view1.png",
      "/images/braided-leather-wrap_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "brc-2",
    slug: "titanium-cuff",
    name: "Titanium Cuff",
    price: 229,
    category: "Bracelets",
    image: "/images/product_bracelet_2_1773565827690.png",
    shortDescription: "A sculptural study in form, the Titanium Cuff is redefining structural integrity.",
    storytelling: [
      "The Titanium Cuff represents an uncompromising vision. Forged from industrial grade metals, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature uncompromising treatment, the surface absorbs light instead of reflecting it, creating a deep, brutalist intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/titanium-cuff_view1.png",
      "/images/titanium-cuff_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "brc-3",
    slug: "matte-black-beaded",
    name: "Matte Black Beaded",
    price: 264,
    category: "Bracelets",
    image: "/images/matte_black_beaded_bracelet_1773566699215.png",
    shortDescription: "A brutalist study in form, the Matte Black Beaded is engineered for endurance.",
    storytelling: [
      "The Matte Black Beaded represents an uncompromising vision. Forged from tungsten core, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature architectural treatment, the surface absorbs light instead of reflecting it, creating a deep, sculptural intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/matte-black-beaded_view1.png",
      "/images/matte-black-beaded_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "brc-4",
    slug: "leather-steel-wrap",
    name: "Leather Steel Wrap",
    price: 167,
    category: "Bracelets",
    image: "/images/braided_leather_steel_wrap_1773566713099.png",
    shortDescription: "A industrial study in form, the Leather Steel Wrap is balancing raw mass with precision.",
    storytelling: [
      "The Leather Steel Wrap represents an uncompromising vision. Forged from tungsten core, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature forged treatment, the surface absorbs light instead of reflecting it, creating a deep, brutalist intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/leather-steel-wrap_view1.png",
      "/images/leather-steel-wrap_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "brc-5",
    slug: "chunky-silver-chain",
    name: "Chunky Silver Chain",
    price: 414,
    category: "Bracelets",
    image: "/images/chunky_silver_chain_bracelet_1773566726652.png",
    shortDescription: "A architectural study in form, the Chunky Silver Chain is redefining structural integrity.",
    storytelling: [
      "The Chunky Silver Chain represents an uncompromising vision. Forged from damascus steel, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature industrial treatment, the surface absorbs light instead of reflecting it, creating a deep, forged intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/chunky-silver-chain_view1.png",
      "/images/chunky-silver-chain_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "brc-6",
    slug: "woven-paracord-titanium",
    name: "Woven Paracord Titanium",
    price: 576,
    category: "Bracelets",
    image: "/images/woven_paracord_titanium_1773566743399.png",
    shortDescription: "A uncompromising study in form, the Woven Paracord Titanium is engineered for endurance.",
    storytelling: [
      "The Woven Paracord Titanium represents an uncompromising vision. Forged from premium grade alloys, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature tactile treatment, the surface absorbs light instead of reflecting it, creating a deep, resolute intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/woven-paracord-titanium_view1.png",
      "/images/woven-paracord-titanium_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "brc-7",
    slug: "hammered-copper-cuff",
    name: "Hammered Copper Cuff",
    price: 516,
    category: "Bracelets",
    image: "/images/hammered_copper_cuff_1773566755617.png",
    shortDescription: "A industrial study in form, the Hammered Copper Cuff is defying traditional ornamentation.",
    storytelling: [
      "The Hammered Copper Cuff represents an uncompromising vision. Forged from gunmetal, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature sculptural treatment, the surface absorbs light instead of reflecting it, creating a deep, sculptural intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/hammered-copper-cuff_view1.png",
      "/images/hammered-copper-cuff_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "brc-8",
    slug: "tiger-eye-bead",
    name: "Tiger Eye Bead",
    price: 376,
    category: "Bracelets",
    image: "/images/timers_eye_bead_bracelet_1773566768455.png",
    shortDescription: "A architectural study in form, the Tiger Eye Bead is stripped of excess.",
    storytelling: [
      "The Tiger Eye Bead represents an uncompromising vision. Forged from matte titanium, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature industrial treatment, the surface absorbs light instead of reflecting it, creating a deep, relentless intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/tiger-eye-bead_view1.png",
      "/images/tiger-eye-bead_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "brc-9",
    slug: "sleek-gunmetal-bangle",
    name: "Sleek Gunmetal Bangle",
    price: 606,
    category: "Bracelets",
    image: "/images/sleek_gunmetal_bangle_1773566783334.png",
    shortDescription: "A sculptural study in form, the Sleek Gunmetal Bangle is defying traditional ornamentation.",
    storytelling: [
      "The Sleek Gunmetal Bangle represents an uncompromising vision. Forged from matte titanium, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature relentless treatment, the surface absorbs light instead of reflecting it, creating a deep, raw intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/sleek-gunmetal-bangle_view1.png",
      "/images/sleek-gunmetal-bangle_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "brc-10",
    slug: "multi-layer-onyx-silver",
    name: "Multi Layer Onyx Silver",
    price: 426,
    category: "Bracelets",
    image: "/images/multi_layer_onyx_silver_1773566796502.png",
    shortDescription: "A relentless study in form, the Multi Layer Onyx Silver is expressing mechanical purity.",
    storytelling: [
      "The Multi Layer Onyx Silver represents an uncompromising vision. Forged from forged carbon, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature monolithic treatment, the surface absorbs light instead of reflecting it, creating a deep, industrial intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/multi-layer-onyx-silver_view1.png",
      "/images/multi-layer-onyx-silver_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "acc-1",
    slug: "engraved-silver-money-clip",
    name: "Engraved Silver Money Clip",
    price: 552,
    category: "Accessories",
    image: "/images/engraved_silver_money_clip_1773566855322.png",
    shortDescription: "A resolute study in form, the Engraved Silver Money Clip is defying traditional ornamentation.",
    storytelling: [
      "The Engraved Silver Money Clip represents an uncompromising vision. Forged from damascus steel, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature architectural treatment, the surface absorbs light instead of reflecting it, creating a deep, resolute intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/engraved-silver-money-clip_view1.png",
      "/images/engraved-silver-money-clip_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "acc-2",
    slug: "leather-wallet-metal-corner",
    name: "Leather Wallet Metal Corner",
    price: 524,
    category: "Accessories",
    image: "/images/leather_wallet_metal_corner_1773566868242.png",
    shortDescription: "A architectural study in form, the Leather Wallet Metal Corner is defying traditional ornamentation.",
    storytelling: [
      "The Leather Wallet Metal Corner represents an uncompromising vision. Forged from damascus steel, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature raw treatment, the surface absorbs light instead of reflecting it, creating a deep, uncompromising intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/leather-wallet-metal-corner_view1.png",
      "/images/leather-wallet-metal-corner_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "acc-3",
    slug: "gunmetal-tie-clip",
    name: "Gunmetal Tie Clip",
    price: 291,
    category: "Accessories",
    image: "/images/gunmetal_tie_clip_1773566883911.png",
    shortDescription: "A relentless study in form, the Gunmetal Tie Clip is expressing mechanical purity.",
    storytelling: [
      "The Gunmetal Tie Clip represents an uncompromising vision. Forged from gunmetal, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature relentless treatment, the surface absorbs light instead of reflecting it, creating a deep, architectural intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/gunmetal-tie-clip_view1.png",
      "/images/gunmetal-tie-clip_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "acc-4",
    slug: "matte-black-cufflinks",
    name: "Matte Black Cufflinks",
    price: 533,
    category: "Accessories",
    image: "/images/matte_black_cufflinks_1773566897458.png",
    shortDescription: "A brutalist study in form, the Matte Black Cufflinks is redefining structural integrity.",
    storytelling: [
      "The Matte Black Cufflinks represents an uncompromising vision. Forged from heavyweight steel, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature tactile treatment, the surface absorbs light instead of reflecting it, creating a deep, tactile intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/matte-black-cufflinks_view1.png",
      "/images/matte-black-cufflinks_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "acc-5",
    slug: "silver-skull-keychain",
    name: "Silver Skull Keychain",
    price: 197,
    category: "Accessories",
    image: "/images/silver_skull_keychain_1773566913996.png",
    shortDescription: "A stark study in form, the Silver Skull Keychain is anchoring the physical frame.",
    storytelling: [
      "The Silver Skull Keychain represents an uncompromising vision. Forged from gunmetal, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature monolithic treatment, the surface absorbs light instead of reflecting it, creating a deep, sculptural intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/silver-skull-keychain_view1.png",
      "/images/silver-skull-keychain_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "acc-6",
    slug: "minimalist-metal-cardholder",
    name: "Minimalist Metal Cardholder",
    price: 572,
    category: "Accessories",
    image: "/images/minimalist_metal_cardholder_1773566930169.png",
    shortDescription: "A stark study in form, the Minimalist Metal Cardholder is expressing mechanical purity.",
    storytelling: [
      "The Minimalist Metal Cardholder represents an uncompromising vision. Forged from damascus steel, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature brutalist treatment, the surface absorbs light instead of reflecting it, creating a deep, uncompromising intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/minimalist-metal-cardholder_view1.png",
      "/images/minimalist-metal-cardholder_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "acc-7",
    slug: "steel-watch-winder",
    name: "Steel Watch Winder",
    price: 418,
    category: "Accessories",
    image: "/images/steel_watch_winder_1773566946422.png",
    shortDescription: "A resolute study in form, the Steel Watch Winder is anchoring the physical frame.",
    storytelling: [
      "The Steel Watch Winder represents an uncompromising vision. Forged from gunmetal, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature industrial treatment, the surface absorbs light instead of reflecting it, creating a deep, stark intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/steel-watch-winder_view1.png",
      "/images/steel-watch-winder_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "acc-8",
    slug: "leather-valet-tray",
    name: "Leather Valet Tray",
    price: 416,
    category: "Accessories",
    image: "/images/leather_valet_tray_1773566958632.png",
    shortDescription: "A tactile study in form, the Leather Valet Tray is commanding a unique presence.",
    storytelling: [
      "The Leather Valet Tray represents an uncompromising vision. Forged from matte titanium, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature relentless treatment, the surface absorbs light instead of reflecting it, creating a deep, tactile intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/leather-valet-tray_view1.png",
      "/images/leather-valet-tray_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "acc-9",
    slug: "silver-collar-stays",
    name: "Silver Collar Stays",
    price: 218,
    category: "Accessories",
    image: "/images/silver_collar_stays_1773566972243.png",
    shortDescription: "A tactile study in form, the Silver Collar Stays is anchoring the physical frame.",
    storytelling: [
      "The Silver Collar Stays represents an uncompromising vision. Forged from heavyweight steel, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature uncompromising treatment, the surface absorbs light instead of reflecting it, creating a deep, stark intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/silver-collar-stays_view1.png",
      "/images/silver-collar-stays_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
    }
  },
  {
    id: "acc-10",
    slug: "titanium-lapel-pin",
    name: "Titanium Lapel Pin",
    price: 516,
    category: "Accessories",
    image: "/images/titanium_lapel_pin_1773566985295.png",
    shortDescription: "A stark study in form, the Titanium Lapel Pin is anchoring the physical frame.",
    storytelling: [
      "The Titanium Lapel Pin represents an uncompromising vision. Forged from industrial grade metals, it strips away the non-essential to reveal true structural gravity.",
      "Finished with a signature resolute treatment, the surface absorbs light instead of reflecting it, creating a deep, uncompromising intimacy.",
      "Every edge is sharply defined yet perfectly wearable—an exercise in raw architectural geometry designed to endure."
    ],
    additionalImages: [
      "/images/titanium-lapel-pin_view1.png",
      "/images/titanium-lapel-pin_view2.png"
    ],
    specifications: {
      material: "Premium Metals & Materials",
      finish: "Darkened / Matte / Brushed",
      width: "Variable",
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
