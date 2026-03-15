export type Category = 'Rings' | 'Chains' | 'Bracelets' | 'Accessories';

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  shortDescription: string;
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
    shortDescription: "A singular sculptural piece, engineered to balance raw mass with precision wearability.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "A singular sculptural piece, engineered to balance raw mass with precision wearability.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "A singular sculptural piece, engineered to balance raw mass with precision wearability.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "A singular sculptural piece, engineered to balance raw mass with precision wearability.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "A singular sculptural piece, engineered to balance raw mass with precision wearability.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "A singular sculptural piece, engineered to balance raw mass with precision wearability.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "A singular sculptural piece, engineered to balance raw mass with precision wearability.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "A singular sculptural piece, engineered to balance raw mass with precision wearability.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "A singular sculptural piece, engineered to balance raw mass with precision wearability.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "A singular sculptural piece, engineered to balance raw mass with precision wearability.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "A singular sculptural piece, engineered to balance raw mass with precision wearability.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "A singular sculptural piece, engineered to balance raw mass with precision wearability.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "A singular sculptural piece, engineered to balance raw mass with precision wearability.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "A singular sculptural piece, engineered to balance raw mass with precision wearability.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "A singular sculptural piece, engineered to balance raw mass with precision wearability.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "An exercise in structural repetition, designed to articulate movement and anchor the frame.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "An exercise in structural repetition, designed to articulate movement and anchor the frame.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "An exercise in structural repetition, designed to articulate movement and anchor the frame.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "An exercise in structural repetition, designed to articulate movement and anchor the frame.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "An exercise in structural repetition, designed to articulate movement and anchor the frame.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "An exercise in structural repetition, designed to articulate movement and anchor the frame.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "An exercise in structural repetition, designed to articulate movement and anchor the frame.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "An exercise in structural repetition, designed to articulate movement and anchor the frame.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "An exercise in structural repetition, designed to articulate movement and anchor the frame.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "An exercise in structural repetition, designed to articulate movement and anchor the frame.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "An exercise in structural repetition, designed to articulate movement and anchor the frame.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "An exercise in structural repetition, designed to articulate movement and anchor the frame.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "An exercise in structural repetition, designed to articulate movement and anchor the frame.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "An exercise in structural repetition, designed to articulate movement and anchor the frame.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "An exercise in structural repetition, designed to articulate movement and anchor the frame.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "Articulated hardware for the wrist, balancing industrial heritage with refined ergonomics.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "Articulated hardware for the wrist, balancing industrial heritage with refined ergonomics.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "Articulated hardware for the wrist, balancing industrial heritage with refined ergonomics.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "Articulated hardware for the wrist, balancing industrial heritage with refined ergonomics.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "Articulated hardware for the wrist, balancing industrial heritage with refined ergonomics.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "Articulated hardware for the wrist, balancing industrial heritage with refined ergonomics.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "Articulated hardware for the wrist, balancing industrial heritage with refined ergonomics.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "Articulated hardware for the wrist, balancing industrial heritage with refined ergonomics.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "Articulated hardware for the wrist, balancing industrial heritage with refined ergonomics.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "Articulated hardware for the wrist, balancing industrial heritage with refined ergonomics.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "A calculated study in utility and material weight, stripped of excess.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "A calculated study in utility and material weight, stripped of excess.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "A calculated study in utility and material weight, stripped of excess.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "A calculated study in utility and material weight, stripped of excess.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "A calculated study in utility and material weight, stripped of excess.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "A calculated study in utility and material weight, stripped of excess.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "A calculated study in utility and material weight, stripped of excess.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "A calculated study in utility and material weight, stripped of excess.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "A calculated study in utility and material weight, stripped of excess.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
    shortDescription: "A calculated study in utility and material weight, stripped of excess.",
    storytelling: [
      "This piece represents an architectural approach to personal adornment. Rather than relying on traditional ornamental techniques, the focus is entirely on structural integrity and the inherent qualities of the material.",
      "The finish is a deliberate choice—achieved through controlled mechanical processes to create a surface that respects its industrial origins while offering a tactile intimacy."
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
