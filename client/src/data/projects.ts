import type { Project } from "../types";

const preview = (seed: string, w = 900, h = 600) =>
  `https://picsum.photos/seed/${encodeURIComponent(`pooja-${seed}`)}/${w}/${h}`;

export const fallbackProjects: Project[] = [
  { name: "Anvi Couture", liveUrl: "https://anvicouture.com", image: preview("anvi"), videoPreview: preview("anvi-video", 1200, 720), category: "Web Design", summary: "Luxury-first ecommerce experience with editorial storytelling.", stack: ["React", "GSAP", "Tailwind"] },
  { name: "Tanishq Clone", liveUrl: "https://tanishqclone.netlify.app/", image: preview("tanishq"), videoPreview: preview("tanishq-video", 1200, 720), category: "Development", summary: "Pixel-precise brand clone focusing on interaction parity.", stack: ["React", "Framer Motion", "Node"] },
  { name: "Soladay", liveUrl: "https://soladay.in", image: preview("soladay"), videoPreview: preview("soladay-video", 1200, 720), category: "Web Design", summary: "Conversion-focused product landing with immersive visuals.", stack: ["React", "Tailwind", "GSAP"] },
  { name: "KareKraft", liveUrl: "https://karekraft.com", image: preview("karekraft"), videoPreview: preview("karekraft-video", 1200, 720), category: "Development", summary: "Modern commerce platform architecture and design system.", stack: ["MERN", "MongoDB", "Framer"] },
  { name: "Barks & Wags", liveUrl: "https://barksandwags.in", image: preview("barks"), videoPreview: preview("barks-video", 1200, 720), category: "Web Design", summary: "Playful brand identity translated into smooth shopping UX.", stack: ["React", "Tailwind", "Stripe"] },
  { name: "CosIQ", liveUrl: "https://mycosiq.com", image: preview("cosiq"), videoPreview: preview("cosiq-video", 1200, 720), category: "Development", summary: "Scale-ready frontend foundations with high-performance rendering.", stack: ["Next.js", "Node", "MongoDB"] },
  { name: "Bioexotica", liveUrl: "https://bioexotica.in", image: preview("bioexotica"), videoPreview: preview("bioexotica-video", 1200, 720), category: "Web Design", summary: "Premium beauty storytelling with product-led interaction.", stack: ["React", "GSAP", "Figma"] },
  { name: "Zenith Lights", liveUrl: "https://zenithlights.com", image: preview("zenith"), videoPreview: preview("zenith-video", 1200, 720), category: "Development", summary: "Catalog-heavy experience optimized for seamless discovery.", stack: ["MERN", "Express", "Redis"] },
  { name: "Evermore Skincare", liveUrl: "https://evermoreskincare.com", image: preview("evermore"), videoPreview: preview("evermore-video", 1200, 720), category: "Web Design", summary: "Calm visual system with conversion-centric page narratives.", stack: ["React", "Framer", "Tailwind"] },
  { name: "Patchvet", liveUrl: "https://patchvet980.netlify.app/", image: preview("patchvet"), videoPreview: preview("patchvet-video", 1200, 720), category: "Development", summary: "Healthcare workflows wrapped in user-friendly interfaces.", stack: ["React", "Node", "MongoDB"] },
  { name: "BigSmall", liveUrl: "https://bigsmall.in", image: preview("bigsmall"), videoPreview: preview("bigsmall-video", 1200, 720), category: "Web Design", summary: "High-energy product cards with refined micro interactions.", stack: ["GSAP", "Tailwind", "React"] },
  { name: "Zarf", liveUrl: "https://zarfstudios.com", image: preview("zarf"), videoPreview: preview("zarf-video", 1200, 720), category: "Development", summary: "Creative studio stack focused on speed and visual delight.", stack: ["MERN", "Motion", "AWS"] },
  { name: "Dalchini", liveUrl: "https://dalchini.ch", image: preview("dalchini"), videoPreview: preview("dalchini-video", 1200, 720), category: "Web Design", summary: "Warm, sensory interface style for D2C storytelling.", stack: ["React", "Tailwind", "GSAP"] },
  { name: "Homecrayons", liveUrl: "https://homecrayons.com", image: preview("homecrayons"), videoPreview: preview("homecrayons-video", 1200, 720), category: "Development", summary: "Interior discovery product with rich filtering and motion.", stack: ["React", "Node", "MongoDB"] },
  { name: "Choufani", liveUrl: "https://choufani.com", image: preview("choufani"), videoPreview: preview("choufani-video", 1200, 720), category: "Web Design", summary: "Fashion-centric cinematic layout with polished transitions.", stack: ["Framer", "GSAP", "React"] },
];
