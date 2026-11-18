# TutorEx Academy — Implementation roadmap

## Stage 1 — Public site (source implemented, runtime checks pending dependency installation)

**Pages:** Home, Find a Tutor, Subjects, Programs overview, O Level, A Level, IELTS, How It Works, About, Become a Tutor, Contact, FAQ, Privacy, Terms and Safeguarding.

**Responsibilities:** clear content, responsive layout, semantic HTML, accessible labels, mobile navigation, metadata, sitemap and robots. Existing published tutor Google Form is linked directly.

**Parent inquiry:** supports school subject tutoring, O Level, A Level and IELTS (Academic/General Training, listening, reading, writing or speaking). Still currently client-side copy/mailto composer, not automated lead storage. Set up a separate parent inquiry Google Form as the recommended free next step, then provide its published responder URL in `NEXT_PUBLIC_PARENT_FORM_URL`.

**Specialist screening:** Record exam board/syllabus experience for O/A Levels and relevant IELTS teaching/feedback competency before offering a specialist tutor. No guaranteed grades or IELTS band scores.

**Do not launch until:** policies reviewed, real contact channel configured, form tested, tutor safety process defined, and all automated build/security checks completed.

## Stage 2 — Supabase secure backend + Admin Dashboard (NOT BUILT)

Authentication: Supabase Auth, private admin invitation only, guardian accounts for minors (no minors' independent public login). Require multi-factor authentication for admin users. Add rate limits and verification to exposed login or form paths.

Suggested data entities:

- `profiles` — identity and role (admin, tutor, guardian), role updates never self-service
- `tutor_applications` — submitted applicant screening data and progression status
- `tutor_profiles` — approved public-safe tutor attributes, kept private until consented
- `tutor_verifications` — private checks and verification metadata (restricted to staff)
- `parent_inquiries` — parent contact, grade, curriculum, budget, goals, status
- `students` — guardian-linked minimal student education profiles
- `tutor_matches` — admin review, family acceptance, tutor acceptance, status
- `demo_sessions` — scheduled times (stored in UTC) and feedback
- `enrollments` — agreed lesson package and start/end dates
- `lesson_sessions` — attendance and completion status
- `financial_agreements` — documented agreed currency, fee/commission model, charges and responsibility
- `invoices` — invoice history and payment status
- `payments` — payment events (never store raw card details)
- `payouts` — tutor payouts
- `support_tickets` — guardian/tutor issues and resolution
- `audit_logs` — staff actions and key record changes

Key role rules:

1. **Admin:** can screen/approve, match, schedule, manage fees. Grant admin only through secure server-side invitation/admin procedure. Admin edits should be audited.
2. **Tutor:** can access own profile, approved assignments and earnings only. Cannot change own verification status or view unrelated family records.
3. **Guardian:** can access only own family's student information and approved matches, invoices, sessions and tickets.
4. **Anonymous:** can access only public marketing pages and carefully scoped forms.
5. **No secrets in `NEXT_PUBLIC_*`**; service role keys only on trusted server routes or Edge Functions.
6. **Enable and test RLS for every exposed private table**, including foreign-key ownership and storage object policies.

Admin dashboard planned modules: overview, tutor applications, screening rubric, demo calendar, verified tutor directory, parent leads, matching workflow, enrollments, lessons, invoices, commission, payouts, support and audit logs.

## Stage 3 — Tutor and Guardian Portals (NOT BUILT)

Tutor portal: own schedule, verified subjects, demo invitations, assigned lessons, payment status, support. Guardian portal: student requirements, requests, approved matches, demo scheduling, agreed fees, invoices, attendance and complaints. Always require guardian approval for children.

## Stage 4 — Deployment, testing and scaling (NOT BUILT)

Vercel build + deployment previews; Namecheap DNS with existing MX/SPF/DKIM/DMARC and nameservers preserved. Configure `www` and root domain according to actual Vercel-generated DNS values. Validate SSL, SEO, responsive behavior, API security and authentication boundaries before switch-on.

Later features only after demonstrated demand: trusted transactional email, payments through an appropriately verified provider, reminders, reporting, referrals and multi-currency handling. Do not fake any statistics, reviews, approved tutors or enrollments.
