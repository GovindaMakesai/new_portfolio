const projectsSeed = [
  ["Anvi Couture", "https://anvicouture.com", "anvicouture.com", "Web Design"],
  ["Tanishq Clone", "https://tanishqclone.netlify.app/", "tanishqclone.netlify.app", "Development"],
  ["Soladay", "https://soladay.in", "soladay.in", "Web Design"],
  ["KareKraft", "https://karekraft.com", "karekraft.com", "Development"],
  ["Barks & Wags", "https://barksandwags.in", "barksandwags.in", "Web Design"],
  ["CosIQ", "https://mycosiq.com", "mycosiq.com", "Development"],
  ["Bioexotica", "https://bioexotica.in", "bioexotica.in", "Web Design"],
  ["Zenith Lights", "https://zenithlights.com", "zenithlights.com", "Development"],
  ["Evermore Skincare", "https://evermoreskincare.com", "evermoreskincare.com", "Web Design"],
  ["Patchvet", "https://patchvet980.netlify.app/", "patchvet980.netlify.app", "Development"],
  ["BigSmall", "https://bigsmall.in", "bigsmall.in", "Web Design"],
  ["Zarf", "https://zarfstudios.com", "zarfstudios.com", "Development"],
  ["Dalchini", "https://dalchini.ch", "dalchini.ch", "Web Design"],
  ["Homecrayons", "https://homecrayons.com", "homecrayons.com", "Development"],
  ["Choufani", "https://choufani.com", "choufani.com", "Web Design"],
];

module.exports = projectsSeed.map(([name, liveUrl, _domain, category], index) => ({
  name,
  liveUrl,
  image: `https://picsum.photos/seed/${encodeURIComponent(`server-${name}`)}/900/600`,
  videoPreview: `https://picsum.photos/seed/${encodeURIComponent(`server-${name}-video`)}/1200/720`,
  category,
  summary: `Premium digital product crafted for ${name} with conversion-focused storytelling and fluid interactions.`,
  stack: index % 2 ? ["React", "Node.js", "MongoDB"] : ["Tailwind", "GSAP", "Framer Motion"],
}));
