# Updated website — O Level, A Level and IELTS

This package is based on the existing TutorEx Academy Phase 1 public website and preserves the original design, branding and tutor application link.

## What changed

- New **Exam Preparation** menu item, homepage feature cards and footer links.
- New routes: `/programs`, `/programs/o-level`, `/programs/a-level`, `/programs/ielts`.
- O Level covers Cambridge O Level inquiry categories and common subject support.
- A Level covers Cambridge International AS & A Level subject inquiries.
- IELTS covers **Academic and General Training** with **Listening, Reading, Writing and Speaking**.
- Find a Tutor page now includes program selection, relevant syllabus/curriculum and subject selection, IELTS test type, and optional exam board/target band information.
- Dedicated program links preselect the program in the inquiry composer.
- SEO metadata, FAQ, sitemap, README, editorial mockup and image-generation prompts updated.
- `SPECIALIST-TUTOR-RECRUITMENT.md` explains new tutor screening and Google Form fields.

## Verified locally

- `npm run check:content`: PASS (structural routes, static asset checks, some claim checks).
- All 36 TypeScript/TSX files: PASS **syntactic parsing only** with global TypeScript compiler.

## Not yet verified

- `npm install --offline`: FAILED because the npm cache did not contain `@radix-ui/react-slot` (ENOTCACHED). Network access is disabled in this environment.
- `npm run lint` and `npm run build`: **FAILED to start**, reporting `next: not found` because dependencies are not installed.
- `npm run typecheck`: **FAILED**, reporting missing `next`, `lucide-react`, React type declarations and JSX types because dependencies are not installed.
- Complete semantic typecheck, ESLint/build, browser/mobile tests and form interaction tests remain **NOT VERIFIED**; rerun after successful dependency installation.
- Tutor Google Form has **not** been updated externally.
- Parent Google Form and automatic inquiry database submission remain pending.
- Website not deployed and Namecheap DNS/email records not touched.
- Privacy, Terms and Safeguarding text requires review before public launch.

## Recommended next step

Open this extracted project folder in Google Antigravity. Read `ANTIGRAVITY-UPDATE-PROMPT.md`, install dependencies with internet access, run the checks and test the full UI before deploying. Configure a separate parent inquiry submission form, and update tutor recruitment fields for O/A Level and IELTS specialist screening.
