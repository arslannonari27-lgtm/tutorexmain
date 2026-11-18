export const site = {
  name: 'TutorEx Academy',
  tagline: 'Learn Beyond Borders',
  domain: 'https://tutorexacademy.com',
  description: 'TutorEx Academy connects families in Pakistan and worldwide with suitable independent online tutors. Share your learning needs and explore tutor-matching options.',
  tutorApplicationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfGRAcjdH4v39WPVcRm1gAviBbFYbMjp8lRxBKbrgA7t-4OOQ/viewform',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || '',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || '',
  parentFormUrl: process.env.NEXT_PUBLIC_PARENT_FORM_URL?.trim() || '',
};
export const navigation = [
  {href:'/', label:'Home'}, {href:'/subjects',label:'Subjects'}, {href:'/programs',label:'Exam Preparation'}, {href:'/how-it-works',label:'How It Works'},
  {href:'/about',label:'About Us'}, {href:'/become-a-tutor',label:'Become a Tutor'}, {href:'/contact',label:'Contact'},
];
export const subjects = [
  {name:'Mathematics',desc:'Number skills, problem-solving and mathematical reasoning.',icon:'calculator'},
  {name:'English',desc:'Reading, grammar, writing and language confidence.',icon:'book'},
  {name:'General Science',desc:'Build foundations across core scientific concepts.',icon:'flask'},
  {name:'Physics',desc:'Motion, forces, energy and quantitative thinking.',icon:'atom'},
  {name:'Chemistry',desc:'Matter, reactions and the fundamentals of chemistry.',icon:'flask'},
  {name:'Biology',desc:'Living systems, cells, human biology and more.',icon:'sprout'},
  {name:'Computer Science',desc:'Digital literacy, coding foundations and computing.',icon:'computer'},
  {name:'Urdu',desc:'Language, reading, writing and literary skills.',icon:'languages'},
  {name:'Islamiat',desc:'Curriculum-aligned Islamic studies support.',icon:'book'},
  {name:'Pakistan Studies',desc:'History, geography and civic understanding.',icon:'globe'},
  {name:'Quran & Tajweed',desc:'Recitation and Tajweed inquiries, subject to specialist assessment.',icon:'book'},
];
export const frequentlyAsked = [
 {q:'How does tutor matching work?',a:'Share the student’s grade, subjects, preferred timings, learning goals and budget. We review suitable tutor options and discuss the next steps with you, subject to availability.'},
 {q:'Which countries can inquire?',a:'We welcome inquiries from Pakistan, the UK, USA, UAE, Saudi Arabia and other countries. Tutor availability depends on subject, curriculum and time zone.'},
 {q:'Are tutors already approved?',a:'Our network is being established. Tutor applications are reviewed through screening, demonstrations and relevant checks. We never describe an applicant as approved or verified before those checks are complete.'},
 {q:'Is a demo class guaranteed?',a:'No. A demonstration can be discussed where a suitable tutor is available and the arrangements are agreed in advance.'},
 {q:'How are lessons and fees arranged?',a:'Schedule, duration, fees, payment responsibilities, cancellations and any agency charges will be communicated clearly before enrollment. We do not publish unconfirmed fee rates.'},
 {q:'Can I request an O Level, A Level or IELTS tutor?',a:'Yes, you can submit an inquiry for Cambridge O Level, Cambridge International AS & A Level, or IELTS Academic/General Training preparation. Specialist availability, suitability, syllabus coverage and fees are confirmed individually; no match or band score is guaranteed.'},
 {q:'Can I apply to become a tutor?',a:'Yes. Use the Become a Tutor page to submit an application. Applying does not guarantee approval or student placement.'},
];
