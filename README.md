# TutorEx Academy — Phase 1 Website

**Brand:** TutorEx Academy · Learn Beyond Borders  
**Domain (owned):** `tutorexacademy.com`  
**Architecture:** Next.js 14 App Router, TypeScript, Tailwind CSS, shadcn-style UI primitives, Lucide icons.  
**Scope:** Public marketing website only. Not an admin dashboard or tutor/parent portal yet.

## Project structure

```
public/images/             Replaceable, local illustrative SVG image placeholders
src/app/                   15 public routes including program pages, metadata, robots & sitemap
src/components/            Header/footer, inquiry composer, cards and page sections
src/components/ui/         shadcn-style Button, Card, Input, Label, Textarea
src/lib/site.ts            Central brand, contact configuration, subjects and FAQ
src/lib/programs.ts        O Level, A Level and IELTS program definitions
scripts/content-check.mjs  Structural and content assertions
.env.example               Contact setup placeholders (not credentials)
```

## Setup in Antigravity / VS Code

1. Extract the ZIP. Open the folder `tutorex-academy` in Antigravity.
2. Use a terminal in the project folder. Node.js 20+ recommended.
3. Run `npm install` (requires internet access to install open-source dependencies).
4. Run `cp .env.example .env.local` (Windows PowerShell: `Copy-Item .env.example .env.local`).
5. Put the **real** business email into `NEXT_PUBLIC_CONTACT_EMAIL`. Leave the WhatsApp variable empty until a dedicated business number is confirmed. Example: `NEXT_PUBLIC_WHATSAPP_NUMBER=923001234567`.
6. Run `npm run dev` and open `http://localhost:3000`.
7. Run `npm run lint`, `npm run typecheck`, `npm run check:content`, `npm run build` before release.

## Inquiry handling — important

The **Find a Tutor** page now supports **School Subject Tutoring, Cambridge O Level, Cambridge International AS & A Level, and IELTS Preparation (Academic or General Training)**. IELTS users can select a skill area and optionally provide a target band/test date; O/A Level inquiries can identify an exam board or syllabus code. The **Find a Tutor** page is a client-side inquiry composer, **not a server submission endpoint**. The form validates fields and privacy acknowledgment. It has a functional **Copy Inquiry Details** action. When `NEXT_PUBLIC_CONTACT_EMAIL` is populated, it also opens the visitor's email client with an inquiry draft. The visitor MUST press Send. **No message is stored automatically in a database.** No false submission success is displayed.

Optional: set `NEXT_PUBLIC_PARENT_FORM_URL` to a *published responder URL* for a separately created parent inquiry Google Form. When configured, the inquiry page shows a prominent link to that real form. Do not substitute the existing **tutor** form for parent requests.

**Become a Tutor** links to the confirmed existing Google Forms public responder URL. Do not expose Google Sheets response data on the site.

## Images

Replace `public/images/hero-placeholder.svg`, `about-placeholder.svg`, `logo-placeholder.svg`, and `og-placeholder.png` with actual approved assets. You can keep the same filenames (or change references in the code) and preserve aspect ratios. The current SVG images are labeled illustrations, not representations of real TutorEx tutors or parents. See `IMAGE-PROMPTS.md` for ready-made generation prompts.

## Pages

- `/` Home
- `/subjects` Subject categories
- `/programs` Exam support overview
- `/programs/o-level` O Level inquiries
- `/programs/a-level` A Level inquiries
- `/programs/ielts` IELTS Academic / General Training inquiries
- `/how-it-works` Matching process
- `/about` Agency description
- `/find-a-tutor` Parent inquiry composer
- `/become-a-tutor` External registration link
- `/contact` Official contact channels, if configured
- `/faq` FAQs
- `/privacy` Draft privacy information — **review before launch**
- `/terms` Draft service terms — **review before launch**
- `/safeguarding` Draft safeguards — **review before launch**

### Specialist program screening checklist

- [ ] O Level: independently confirm which exact subject, syllabus and exam-board experience a tutor has.
- [ ] A Level: assess advanced subject knowledge and demonstrated AS/A Level teaching, not just a degree.
- [ ] IELTS: assess Academic vs General Training familiarity, all four skills, feedback quality and appropriate specialist teaching experience. Never guarantee a score.
- [ ] Until these checks are complete, these are inquiry categories rather than confirmed available specialist courses.
- [ ] Extend the dedicated **parent inquiry Google Form** to include the same Program, IELTS Type, Exam Board and exam goals fields; updating this frontend composer does not automatically edit Google Forms.

### Must-do before public launch

- [ ] Confirm and configure actual business email.
- [ ] Confirm a reliable parent inquiry submission process. Prefer a dedicated Google Form or later a secure backend, not mailto as the primary lead system.
- [ ] Review and approve Privacy, Terms, and Safeguarding pages with appropriate expertise, then remove `DRAFT` notices and allow indexing if appropriate.
- [ ] Establish tutor verification / child-safety procedures before accepting paid enrollments.
- [ ] Replace or approve logo and illustrative images.
- [ ] Test a tutor application, parent inquiry, email opening and mobile navigation manually.
- [ ] Run lint, typecheck, build and deploy to a preview deployment before production.
- [ ] Keep Namecheap MX/SPF/DKIM/DMARC records and existing nameservers unchanged unless specifically reviewed.
- [ ] Connect the domain only after confirming host-provided DNS records and existing email configuration.

## Deployment

Deploy via GitHub + Vercel after dependencies and tests pass. In the Vercel project settings, add the same non-secret `NEXT_PUBLIC_*` configuration values. Contact values are public on the website; do **not** use them for API secrets.

Add the root domain and `www` within Vercel, then copy exact DNS entries it provides into the authoritative DNS provider. Do **not** assume Namecheap Advanced DNS is authoritative if third-party nameservers are enabled. Do not change MX, TXT (SPF/DKIM/DMARC), email verification, or nameserver settings while adding website records.

## Future phases (not implemented)

**Phase 2:** Supabase Auth, RLS, secure Admin Dashboard, tutor application review, parent lead management, demo scheduling, matching and an audit log.  
**Phase 3:** Guardian-managed parent dashboard and approved tutor portal. Separate permissions, guardian consent and secure records.  
**Phase 4:** Verified payment integration, invoices, payouts, retention analytics, localization and additional launch security tests.

Do not treat placeholder UI, screenshots or future feature plans as completed product functionality.
