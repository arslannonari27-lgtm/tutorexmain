# TutorEx Academy — Prompts for real brand assets

Use with ChatGPT image generation. Replace `public/images` placeholders after reviewing output. Keep the site text as real HTML, not text baked into AI images.

## Hero image (16:9, replace `hero-placeholder.svg`)

> Premium photorealistic editorial website hero for a global tutor-matching agency, featuring a South Asian parent helping a school-age student at a laptop in a bright, modern home learning space. Warm natural daylight, thoughtful, genuine expressions, books and notebook, subtle navy and teal accents, premium modern composition. Place people mainly on the RIGHT, leave generous clean negative space on the LEFT for headings and buttons. No logos, text, watermark, fake diplomas or implied real TutorEx participants. Wide 16:9.

## About image (4:3, replace `about-placeholder.svg`)

> Elegant realistic still-life of a modern learning workspace: laptop, books, notebook, globe and pencil, warm daylight, pale off-white background, deep navy and muted teal accents. International education editorial photography, refined and uncluttered. No brand text, logos or watermark. Horizontal 4:3.

## Logo icon (1:1, replace `logo-placeholder.svg`)

> Premium minimalist vector-style icon for TutorEx Academy using an abstract open book and connected world motif, deep navy #102C4E and teal #16A6B6 with subtle warm gold #D5B36A, geometrically balanced, memorable at favicon size, transparent background, no brand words, no watermark, flat design, 1:1.

## Open Graph (1200x630, replace `og-placeholder.png`)

> Clean premium social share artwork for an international education brand, elegant navy background, teal subtle global connectivity patterns, warm gold accents, abstract open book symbol, spacious center-left area for brand typography overlay in code. No text, no fake ratings or testimonials, ratio 1200x630.

Tip: Antigravity can replace the SVG references with optimized `.webp` image files using Next.js `Image`. Keep descriptive alt text.

## Exam preparation services (three separate 4:3 images)

**O Level illustration** (`o-level-service.webp`)

> Premium editorial educational still-life representing Cambridge O Level inquiry support: math notebook, physics graph, science book and pen on a bright modern desk. Navy #102C4E, teal #16A6B6 and warm white palette, coherent with the TutorEx Academy site, soft daylight, precise composition, 4:3 horizontal. Do not include official Cambridge logos, certificate artwork, endorsement marks, invented test scores or any text.

**A Level illustration** (`a-level-service.webp`)

> Premium educational still-life representing advanced AS & A Level study support: open advanced mathematics notebook with abstract non-readable symbols, science reference book, laptop and study planner, contemporary clean learning space, navy and teal accents, sophisticated editorial photography, 4:3 horizontal. No official qualification logos, fake certificates, scores, marks or text.

**IELTS illustration** (`ielts-service.webp`)

> Sophisticated international English-language learning editorial illustration showing a desk with headphones, microphone, open blank notebook, laptop screen with abstract speech waveform, and global learning motifs. Minimal modern palette of deep navy #102C4E, teal #16A6B6, off-white. 4:3 horizontal, no letters, branded IELTS logos, band score certificates, endorsements, watermarks or text. This is an illustration, not evidence of an approved IELTS coach.

Place reviewed images in `public/images/` and ask Antigravity to reference them from the program detail cards or pages. The three service pages work without these images.
