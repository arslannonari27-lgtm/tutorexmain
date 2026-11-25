/** Public inquiry categories, not a claim that specialist tutors are currently approved. */
export const programs = [
  {
    slug: 'o-level',
    name: 'O Level',
    subtitle: 'Cambridge O Level Subject Support',
    description: 'Request one-to-one help with O Level topics, practice questions, revision planning and subject understanding. Matching depends on the syllabus, exam board and tutor screening.',
    subjects: ['Mathematics', 'English', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Urdu', 'Islamiat', 'Pakistan Studies'],
    topics: ['Subject-specific concept support', 'Syllabus and past-paper guidance', 'Revision and study planning', 'Flexible scheduling discussions'],
    formValue: 'Cambridge O Level',
  },
  {
    slug: 'a-level',
    name: 'A Level',
    subtitle: 'Cambridge International AS & A Level Support',
    description: 'Request one-to-one support for AS & A Level subjects, advanced concepts and exam-focused study strategies. Specify the syllabus and subject before we assess possible matches.',
    subjects: ['Mathematics', 'English', 'Physics', 'Chemistry', 'Biology', 'Computer Science'],
    topics: ['AS & A Level subject guidance', 'Advanced topic explanations', 'Past-paper and exam technique discussion', 'Curriculum-specific matching'],
    formValue: 'Cambridge International AS & A Level',
  },
  {
    slug: 'ielts',
    name: 'IELTS',
    subtitle: 'IELTS Academic & General Training Preparation',
    description: 'Tell us whether you are preparing for IELTS Academic or General Training, your target band and areas where you want support. Specialist tutor availability must be confirmed.',
    subjects: ['Listening', 'Reading', 'Writing', 'Speaking'],
    topics: ['Listening and reading practice', 'Writing task guidance and feedback', 'Speaking practice', 'Study plans based on learning needs'],
    formValue: 'IELTS Preparation',
  },
] as const;

export type ProgramSlug = (typeof programs)[number]['slug'];
export function getProgram(slug: string) { return programs.find(program => program.slug === slug); }
