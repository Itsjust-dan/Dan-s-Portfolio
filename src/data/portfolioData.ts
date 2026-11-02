import { Project, Certification, Experience, Education, RiskScenario } from '../types/portfolio';

import heroPortrait from '../assets/images/hero_tech_portrait_1792591175475.jpg';
import projectBankingRisk from '../assets/images/project_banking_risk_1792591176631.jpg';
import projectFintechUi from '../assets/images/project_fintech_ui_1792591177231.jpg';
import projectSocMonitor from '../assets/images/project_soc_monitor_1792591177328.jpg';
import projectGoRideUi from '../assets/images/goride_minimal_ui_1793050252141.jpg';

export const heroUserPhoto = '/assets/aistudio/Daan_18f7fc8c.jpeg';

export { heroPortrait, projectBankingRisk, projectFintechUi, projectSocMonitor, projectGoRideUi };

export const personalInfo = {
  name: 'Adejinmi Dan Toluwase',
  preferredName: 'Dan Adejinmi',
  tagline: 'Cybersecurity Analyst · Front-End Developer · UI/UX Designer',
  email: 'tolua612@gmail.com',
  phone: '09054026463',
  location: 'Lagos, Nigeria',
  linkedinUrl: 'https://linkedin.com/in/dan-adejinmi',
  githubUrl: 'https://github.com/Itsjust-dan',
  resumePdfUrl: '/assets/aistudio/Dan_Adejinmi_Resume_3bc7f78c.pdf',
  profile:
    'Cybersecurity Analyst and Front-End Developer with hands-on experience in banking risk management (ProvidusUnity Bank), phishing threat heuristics (PhishGuard ML), and modern interface design.',
  status: 'Open to Junior Roles & Opportunities',
  stats: [
    { label: 'Risk Experience', value: 'ProvidusUnity Bank' },
    { label: 'Degree', value: 'B.Tech Comp Sci' },
    { label: 'Institution', value: 'Bells University' },
  ],
};

export const experiences: Experience[] = [
  {
    id: 'providus-unity-bank',
    role: 'Intern, Risk Management Department',
    company: 'ProvidusUnity Bank',
    department: 'Enterprise Risk Management',
    location: 'Lagos, Nigeria',
    period: 'March 2025 – September 2025',
    type: 'Internship / Banking Operations',
    overview:
      'Supported the Risk Management department across market, operational, and IT risk functions within commercial banking operations.',
    achievements: [
      'Market Risk: Monitored banking portfolio indicators and financial transaction metrics across operational streams.',
      'Operational Risk: Assisted in daily risk reviews, operational control checklists, and departmental risk documentation.',
      'IT Risk: Evaluated IT security procedures, user authorization checkpoints, and system risk baselines.',
    ],
    frameworks: ['Market Risk Governance', 'Operational Risk Framework', 'IT Security & Risk Controls', 'Banking Compliance'],
    tools: ['Risk Assessment Worksheets', 'Excel Analytics', 'Core Banking Portals', 'Internal Audit Tools'],
  },
];

export const technicalProjects: Project[] = [
  {
    id: 'phishguard',
    title: 'PhishGuard – Phishing Detection Browser Extension',
    category: 'cybersecurity',
    categoryLabel: 'Cybersecurity & Machine Learning',
    year: '2025 – 2026',
    subtitle: 'Final Year Project · Bells University of Technology',
    summary:
      'A real-time browser extension that detects phishing websites using a Random Forest machine learning model combined with a heuristic rule engine and VirusTotal API cross-checks.',
    challenge:
      'Users are frequently exposed to deceptive phishing URLs, credential harvesting pages, and zero-day malicious domains that static blacklists fail to detect in real-time.',
    solution:
      'Built a hybrid detection engine combining client-side heuristic inspection (URL lexical analysis, abnormal tokens, domain length) with a pre-trained Random Forest model and live VirusTotal API reputation scoring.',
    image: projectSocMonitor,
    imageAlt: 'PhishGuard phishing detection browser extension and threat telemetry',
    featured: true,
    metrics: [
      { label: 'Training Dataset', value: '236,000 URLs' },
      { label: 'Datasets Used', value: 'PhiUSIIL + OpenPhish' },
      { label: 'ML Algorithm', value: 'Random Forest' },
    ],
    techStack: ['Python', 'Random Forest ML', 'VirusTotal API', 'JavaScript', 'HTML & CSS', 'Browser Extension APIs'],
    securityControls: [
      {
        framework: 'Phishing Threat Mitigation',
        controlId: 'Heuristic + ML',
        description: 'Multi-layer URL analysis checking IP usage, typosquatting, subdomains, and VirusTotal reputation score.',
      },
    ],
    designHighlights: [
      'Clean popup extension interface alerting users with Instant Warning or Verified Safe states.',
      'Visual risk breakdown explaining why a URL was flagged.',
    ],
    githubUrl: 'https://github.com/Itsjust-dan/phishguard',
  },
  {
    id: 'transportation-app-interface',
    title: 'GoRide – Transportation App Interface',
    category: 'uiux',
    categoryLabel: 'UI/UX Design · School Project',
    year: '2024 – 2025',
    subtitle: 'Usability-Focused Mobile Transportation Experience in Figma',
    summary:
      'A personal transportation mobile app interface designed in Figma, focusing on intuitive commuter booking flows, clean visual hierarchy, and accessible navigation.',
    challenge:
      'Existing transit and ride-hailing interfaces can be cluttered and difficult to navigate rapidly when booking trips on congested transit routes.',
    solution:
      'Designed a streamlined user journey with minimal taps to book, prominent route maps, fare estimates, and readable typography compliant with usability standards.',
    image: projectGoRideUi,
    imageAlt: 'GoRide Transportation mobile app interface designed in Figma',
    featured: true,
    metrics: [
      { label: 'Design Tool', value: 'Figma' },
      { label: 'Focus Area', value: 'Usability & Visuals' },
      { label: 'Project Type', value: 'School Project' },
    ],
    techStack: ['Figma', 'UI/UX Design', 'Wireframing', 'User Flows', 'Prototyping', 'Design Systems'],
    designHighlights: [
      'Clean card-based layout with high-contrast text and accessible touch targets.',
      'Intuitive ride status tracking and fare transparency screens.',
    ],
    figmaUrl: 'https://www.figma.com/proto/kO5brtgKSMvMVFbMKm9zUA/GoRide-Transportation-App?node-id=0-1&t=aPEgg7nQrhTrViMs-1',
  },
  {
    id: 'banking-risk-framework',
    title: 'ProvidusUnity Bank Risk Management Support',
    category: 'risk',
    categoryLabel: 'Risk Management · Banking Operations',
    year: '2025',
    subtitle: 'Market, Operational & IT Risk Functions',
    summary:
      'Supported risk tracking and reporting across core banking units, evaluating operational checklists and IT risk safeguards during my internship.',
    challenge:
      'Maintaining continuous risk oversight across multi-channel commercial banking operations requires rigorous documentation and cross-functional coordination.',
    solution:
      'Assisted the ERM team with operational risk monitoring, IT compliance checkpoints, and anomaly tracking.',
    image: projectBankingRisk,
    imageAlt: 'ProvidusUnity Bank risk management dashboard',
    featured: false,
    metrics: [
      { label: 'Scope', value: 'Market, Ops & IT' },
      { label: 'Institution', value: 'ProvidusUnity Bank' },
      { label: 'Period', value: '6 Months' },
    ],
    techStack: ['Market Risk', 'Operational Risk', 'IT Risk Controls', 'Excel Risk Modeling', 'Compliance Audit'],
  },
];

export const educationList: Education[] = [
  {
    id: 'bells-tech',
    degree: 'B.Tech in Computer Science',
    institution: 'Bells University of Technology',
    location: 'Ota, Ogun State, Nigeria',
    period: '2021 – 2026',
    grade: 'B.Tech Graduate · 3.59 / 5.00',
    capstoneTitle: 'PhishGuard – Phishing Detection Browser Extension Using Random Forest & Heuristics',
    capstoneSummary:
      'Final Year Project: Trained a Random Forest classifier on 236,000 URLs from PhiUSIIL and OpenPhish datasets, integrating the VirusTotal API for real-time browser phishing prevention.',
    coursework: [
      'Cybersecurity Fundamentals',
      'Artificial Intelligence & Machine Learning',
      'Data Structures & Algorithms',
      'Software Engineering & Web Development',
      'Computer Networking & Systems Security',
      'Database Management Systems',
    ],
    honors: [
      'Final Year Capstone Project: PhishGuard Extension',
      'Public Speaking & Debate Competitions',
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: 'ict-datapower',
    name: 'ICT Training Program – Desktop Expert',
    issuer: 'Datapower Technologies',
    date: 'September 2015',
    credentialId: 'DATAPOWER-ICT-2015',
    category: 'development',
    skills: ['Computer Systems', 'Operating Environments', 'Productivity Software', 'ICT Fundamentals'],
    status: 'Verified',
  },
  {
    id: 'cyber-fundamentals',
    name: 'Cybersecurity Fundamentals & Risk Management',
    issuer: 'Bells University of Technology / Self-Study',
    date: '2024 – 2025',
    credentialId: 'CYBER-RISK-BELLS',
    category: 'cybersecurity',
    skills: ['Network Security', 'Threat Vectors', 'Market & Operational Risk', 'IT Risk'],
    status: 'Active',
  },
  {
    id: 'python-ml',
    name: 'Python for Machine Learning & Data Analysis',
    issuer: 'Independent Capstone Research',
    date: '2025',
    credentialId: 'PY-ML-RF-2025',
    category: 'development',
    skills: ['Random Forest Algorithm', 'Dataset Preprocessing', 'VirusTotal API', 'Heuristic Rules'],
    status: 'Active',
  },
  {
    id: 'uiux-figma',
    name: 'UI/UX Design in Figma',
    issuer: 'Bells University School Project',
    date: '2024',
    credentialId: 'FIGMA-UX-2024',
    category: 'development',
    skills: ['User Interface Design', 'Wireframing', 'Prototyping', 'Usability Principles'],
    status: 'Active',
  },
];

export const skillCategories = [
  {
    title: 'Cybersecurity & ML',
    skills: [
      'Cybersecurity Fundamentals',
      'Python & Machine Learning',
      'Random Forest Classification',
      'Phishing Detection & Heuristics',
      'VirusTotal API Integration',
    ],
  },
  {
    title: 'Banking Risk Management',
    skills: [
      'ProvidusUnity Bank Experience',
      'Market Risk Analysis',
      'Operational Risk Assessment',
      'IT Risk Governance',
      'Risk Documentation',
    ],
  },
  {
    title: 'Front-End Development',
    skills: [
      'HTML & CSS',
      'JavaScript & TypeScript',
      'React Development',
      'Tailwind CSS',
      'Browser Extension APIs',
    ],
  },
  {
    title: 'UI/UX & Core Skills',
    skills: [
      'UI/UX Design (Figma)',
      'Wireframing & Prototyping',
      'Usability & Visual Design',
      'Public Speaking & Debate',
      'Teamwork & Collaboration',
    ],
  },
];

// Interactive PhishGuard Demonstration Data for visitors to test
export interface PhishTestSample {
  url: string;
  isPhishing: boolean;
  rfScore: number; // 0 - 100% confidence
  heuristicFlags: string[];
  vtStatus: 'Clean' | 'Malicious' | 'Suspicious';
  explanation: string;
}

export const phishGuardSamples: PhishTestSample[] = [
  {
    url: 'https://paypal-security-verification.com/login?token=8923',
    isPhishing: true,
    rfScore: 98.4,
    heuristicFlags: ['Brand spoofing ("paypal")', 'Hyphenated domain', 'Suspicious login endpoint', 'High entropy subpath'],
    vtStatus: 'Malicious',
    explanation: 'Detected credential harvesting attempt mimicking payment gateway. Flagged by Random Forest model trained on PhiUSIIL dataset.',
  },
  {
    url: 'https://bellsuniversity.edu.ng/student-portal',
    isPhishing: false,
    rfScore: 2.1,
    heuristicFlags: ['Valid educational TLD (.edu.ng)', 'Clean domain reputation', 'Standard SSL certificates'],
    vtStatus: 'Clean',
    explanation: 'Legitimate academic domain verified clean across VirusTotal engines and heuristic rules.',
  },
  {
    url: 'http://192.168.1.105:8080/providus-account-update/verify.php',
    isPhishing: true,
    rfScore: 99.2,
    heuristicFlags: ['Raw IP address as host', 'HTTP unencrypted protocol', 'Banking keyword spoofing', 'Non-standard port 8080'],
    vtStatus: 'Malicious',
    explanation: 'Critical threat: Raw IP address impersonating banking verification endpoint. Heuristic rule engine triggered instant block.',
  },
  {
    url: 'https://github.com/dan-adejinmi/phishguard',
    isPhishing: false,
    rfScore: 1.4,
    heuristicFlags: ['Established developer platform', 'Reputable certificate authority', 'Zero anomaly tokens'],
    vtStatus: 'Clean',
    explanation: 'Safe URL. Verified developer repository.',
  },
];
