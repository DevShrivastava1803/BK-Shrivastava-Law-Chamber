import { 
  Scale, 
  Gavel, 
  Users, 
  Landmark, 
  ScrollText, 
  Building2, 
  ShieldAlert, 
  Briefcase 
} from 'lucide-react';
import { NavItem, PracticeArea, StatItem, Testimonial, FAQItem, ProcessStep } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Practice Areas', href: '#practice' },
  { label: 'Experience', href: '#stats' },
  { label: 'Contact', href: '#contact' },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'civil',
    title: 'Civil Litigation',
    description: 'Expert handling of civil disputes, property conflicts, and recovery suits with strategic precision.',
    icon: Scale,
  },
  {
    id: 'criminal',
    title: 'Criminal Defense',
    description: 'Robust defense strategies for individuals facing criminal charges, ensuring fair trial and justice.',
    icon: ShieldAlert,
  },
  {
    id: 'family',
    title: 'Family & Matrimonial',
    description: 'Compassionate counsel for divorce, custody, and inheritance matters, preserving dignity.',
    icon: Users,
  },
  {
    id: 'property',
    title: 'Property & Land',
    description: 'Navigating complex real estate laws, title disputes, and land acquisition cases in Madhya Pradesh.',
    icon: Landmark,
  },
  {
    id: 'constitutional',
    title: 'Constitutional & Writ',
    description: 'Protecting fundamental rights through Writ Petitions in High Courts and Supreme Court.',
    icon: ScrollText,
  },
  {
    id: 'corporate',
    title: 'Corporate Law',
    description: 'Comprehensive legal advisory for businesses, startups, and commercial contracts.',
    icon: Building2,
  },
  {
    id: 'arbitration',
    title: 'Arbitration',
    description: 'Efficient alternative dispute resolution services to settle commercial conflicts out of court.',
    icon: Gavel,
  },
  {
    id: 'advisory',
    title: 'Legal Advisory',
    description: 'Proactive legal consultation to mitigate risks and ensure regulatory compliance.',
    icon: Briefcase,
  },
];

export const STATS: StatItem[] = [
  { value: 25, suffix: '+', label: 'Years of Practice' },
  { value: 1500, suffix: '+', label: 'Cases Handled' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 850, suffix: '+', label: 'Successful Resolutions' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    rating: 5,
    text: "Advocate Shrivastava's deep knowledge of civil law turned our long-pending property dispute into a victory. His demeanor in court is truly commanding.",
    date: '2 months ago'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    rating: 5,
    text: "Highly professional and empathetic. The chamber guided me through a difficult matrimonial case with dignity and integrity.",
    date: '5 months ago'
  },
  {
    id: '3',
    name: 'Amitabh Verma',
    rating: 5,
    text: "The best legal advice in Bhopal. They don't just fight cases; they strategize for the best possible outcome. Highly recommended.",
    date: '1 year ago'
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Initial Consultation',
    description: 'We listen to your case details with strict confidentiality to understand the legal scope.'
  },
  {
    stepNumber: '02',
    title: 'Case Evaluation',
    description: 'Our team analyzes facts, evidence, and precedents to determine the merit of your case.'
  },
  {
    stepNumber: '03',
    title: 'Legal Strategy',
    description: 'We craft a robust, personalized legal roadmap tailored to achieve your specific goals.'
  },
  {
    stepNumber: '04',
    title: 'Representation',
    description: 'Advocacy in court with unwavering commitment, utilizing decades of experience.'
  },
  {
    stepNumber: '05',
    title: 'Resolution',
    description: 'Aiming for the most favorable outcome, whether through judgment or settlement.'
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "How do I book a consultation?",
    answer: "You can book a consultation by calling us directly at +91 98260 69541 or filling out the contact form below. We recommend carrying relevant documents for the first meeting."
  },
  {
    question: "What are your consultation charges?",
    answer: "Our consultation fees reflect our expertise and time. Please contact our office manager for the current fee structure. We ensure transparent pricing with no hidden costs."
  },
  {
    question: "Which courts do you practice in?",
    answer: "We primarily practice at the District Court Bhopal, Madhya Pradesh High Court (Jabalpur/Indore/Gwalior Benches), and handle select matters in the Supreme Court of India."
  },
  {
    question: "Is my case information confidential?",
    answer: "Absolutely. Attorney-client privilege is the cornerstone of our practice. All information shared with us remains strictly confidential."
  }
];

export const CONTACT_INFO = {
  address: "25, Talaiya Rd, Chobdarpura, Talaiya, Bhopal, Madhya Pradesh 462001",
  phone: "098260 69541",
  hours: "Opens at 7:00 PM",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.056637311746!2d77.3986!3d23.2435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4295bd66270b%3A0x6e8f47c32b5095d6!2sTalaiya%20Rd%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
};