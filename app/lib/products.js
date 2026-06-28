// Central product + customisation data for the My Oche demo storefront.

export const BASE_PRICE = 149; // GBP

export const LED_ADDON = {
  id: "led",
  name: "RGB LED edge lighting",
  description: "Colour-changing LED strip around the frame with remote control.",
  price: 40,
};

// Design themes for the live customiser. Each renders a stylised preview
// via CSS so the concept is demonstrable without uploading real artwork.
export const DESIGNS = [
  {
    id: "wine",
    name: "Classic Wine",
    tagline: "The signature My Oche carpet finish.",
    surface: "radial-gradient(120% 90% at 50% 0%, #8a1828 0%, #6e1420 45%, #4d0d17 100%)",
    accent: "#f4d9b0",
    textColor: "#ffffff",
    swatch: "#6e1420",
  },
  {
    id: "blackout",
    name: "Blackout",
    tagline: "Understated matte black for any room.",
    surface: "linear-gradient(180deg, #1b1b1d 0%, #101012 100%)",
    accent: "#e11d2a",
    textColor: "#ffffff",
    swatch: "#141416",
  },
  {
    id: "pro-red",
    name: "Pro Red",
    tagline: "Bold abstract shards, tournament energy.",
    surface: "linear-gradient(135deg, #1a0306 0%, #2b0a0f 40%, #7a0f1a 100%)",
    accent: "#ff2e3f",
    textColor: "#ffffff",
    swatch: "#7a0f1a",
  },
  {
    id: "ice",
    name: "Ice Blue",
    tagline: "Cool stadium-night gradient.",
    surface: "linear-gradient(160deg, #0a1d3a 0%, #123a72 55%, #1e63b8 100%)",
    accent: "#ffffff",
    textColor: "#ffffff",
    swatch: "#123a72",
  },
  {
    id: "bespoke",
    name: "Bespoke Artwork",
    tagline: "Your club, crest or photo — designed for you.",
    surface: "conic-gradient(from 220deg at 30% 20%, #232326, #0e0e0e 35%, #2a0a0d 70%, #0e0e0e)",
    accent: "#e11d2a",
    textColor: "#ffffff",
    swatch: "#232326",
    bespoke: true,
  },
];

export const SIZES = [
  {
    id: "standard",
    name: "Standard — Steel tip",
    detail: '290 × 60 cm · oche line at 7ft 9¼in',
    price: 0,
  },
  {
    id: "soft",
    name: "Soft tip",
    detail: '290 × 60 cm · oche line at 8ft',
    price: 0,
  },
  {
    id: "compact",
    name: "Compact",
    detail: '240 × 60 cm · space-saving fold',
    price: 0,
  },
];

export function getDesign(id) {
  return DESIGNS.find((d) => d.id === id) || DESIGNS[0];
}

export function getSize(id) {
  return SIZES.find((s) => s.id === id) || SIZES[0];
}

// Showcase gallery — real customer builds.
export const GALLERY = [
  {
    src: "/images/asp.jpg",
    title: "The Asp",
    caption: "Custom club branding with a pro-red theme.",
  },
  {
    src: "/images/chelsea.jpg",
    title: "Chelsea FC",
    caption: "Full-length stadium artwork and crest.",
  },
  {
    src: "/images/newcastle.jpg",
    title: "The Magpies",
    caption: "Newcastle United tribute with LED lighting.",
  },
  {
    src: "/images/rangers.jpg",
    title: "Rangers FC",
    caption: "Bold club crest on a folding frame.",
  },
  {
    src: "/images/asp-led.jpg",
    title: "The Asp — lit",
    caption: "RGB LED edge lighting in a games room.",
  },
  {
    src: "/images/oche-wine.jpg",
    title: "Classic Wine",
    caption: "The signature carpet finish, folded flat.",
  },
];
