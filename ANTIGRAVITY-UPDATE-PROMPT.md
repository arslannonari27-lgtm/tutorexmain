# TutorEx Academy — Antigravity Phase 1 exam-program update

The updated ZIP already includes this work. Use this prompt after opening the folder in Antigravity to review and extend it; do not ask the agent to recreate the entire website from scratch.

## Ready-to-copy prompt

Review the existing TutorEx Academy Next.js project. Keep its existing brand, domain, subject pages, external tutor registration form, and security/privacy safeguards.

Verify that these new modules are present and correctly linked:
- /programs overview: O Level, A Level, IELTS
- /programs/o-level: Cambridge O Level inquiry content
- /programs/a-level: Cambridge International AS & A Level inquiry content
- /programs/ielts: Academic and General Training prep inquiry content with Listening, Reading, Writing and Speaking
- Homepage exam preparation section and navigation/footer links
- Find a Tutor form with program type, correct curriculum/subject options, IELTS test type, and optional exam board/target band details
- SEO descriptions, internal links, sitemap, FAQ, and responsive mobile layout

All specialist offerings must be clearly described as inquiry categories subject to screening and tutor availability. Do not fabricate approved tutors, accreditations, Cambridge/IELTS affiliation, success rates, band score guarantees, packages or fees.

Run `npm install`, `npm run lint`, `npm run typecheck`, `npm run check:content`, and `npm run build`. Fix issues. Test all four new paths and form switching among School, O Level, A Level, IELTS Academic and IELTS General Training in the browser at mobile and desktop sizes. Verify only the intended fields are required and the inquiry copy/email logic includes the correct program. Report real test results, and do not deploy or change Namecheap DNS without my explicit approval.

The current inquiry composer does NOT submit automatically to a database; preserve this truthful warning. When a separate parent Google Form becomes available, link it via `NEXT_PUBLIC_PARENT_FORM_URL`, and make sure that external form also has Program, Test Type, Subject/Skill Focus, Exam Board and Test Goal fields.
