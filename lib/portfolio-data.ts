export const profile = {
  name: 'Estifanos Birihane',
  title: 'Civil Engineer | Construction Project Manager | AI Engineering Subject Matter Expert',
  location: 'Hyattsville, Maryland, USA',
  email: 'estif1bubu@gmail.com',
  linkedin: 'https://www.linkedin.com/in/estifanos-birihane',
}

export type Experience = {
  role: string
  company: string
  period: string
  location: string
  project?: string
  responsibilities: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Civil Engineering Subject Matter Expert / AI Prompt Engineer',
    company: 'Handshake AI Fellowship',
    period: 'August 2026 – Present',
    location: 'Remote | Contract',
    responsibilities: [
      'Evaluate complex civil engineering documents, specifications, drawings, and AI-generated technical outputs.',
      'Apply structured criteria to assess technical accuracy, consistency, and compliance.',
      'Identify technical errors and reconcile conflicting engineering information.',
      'Document findings clearly for Project Buckeye, an advanced AI benchmarking initiative.',
    ],
  },
  {
    role: 'Project Manager',
    company: 'Wentu Engineering & Construction',
    period: 'March 2023 – July 2023',
    location: 'Addis Ababa, Ethiopia',
    project: 'Dangila–Jaw Road Project',
    responsibilities: [
      'Led budgeting, cost reporting, design coordination, and field planning for a 5 km section of the project.',
      'Monitored construction schedules, progress, and resource allocation.',
      'Coordinated field priorities to support project milestones.',
      'Communicated project status, cost issues, and design concerns with stakeholders.',
    ],
  },
  {
    role: 'Project Manager',
    company: 'Lorat Construction PLC',
    period: 'February 2022 – November 2022',
    location: 'Addis Ababa, Ethiopia',
    project: 'Agaro–Gera–Medabo Road Project',
    responsibilities: [
      'Administered construction project contracts.',
      'Prepared, reviewed, and tracked change-order documentation.',
      'Coordinated contractors and stakeholders to resolve scope, documentation, and delivery disputes.',
      'Maintained construction records and supported contract compliance and claims documentation.',
    ],
  },
  {
    role: 'Material Inspector / Junior Civil Engineer',
    company: 'Omega Consulting Engineers',
    period: 'November 2018 – November 2021',
    location: 'Addis Ababa, Ethiopia',
    responsibilities: [
      'Prepared quantity calculations, construction cost estimates, technical reports, and roadway design documentation.',
      'Inspected construction materials and field work against approved drawings and specifications.',
      'Documented material testing results and quality noncompliance issues.',
      'Supported progress verification, delay analysis, project reporting, and contract-claim documentation.',
    ],
  },
]

export const expertise = [
  {
    id: 'pm',
    title: 'Construction & Project Management',
    items: [
      'Construction Planning and Scheduling',
      'Budgeting and Cost Control',
      'Construction Cost Estimation',
      'Bill of Quantities (BOQ)',
      'Contract Administration',
      'Change Orders and Claims Documentation',
      'Progress Monitoring and Reporting',
      'Stakeholder Coordination',
    ],
  },
  {
    id: 'civil',
    title: 'Civil Engineering & Infrastructure',
    items: [
      'Highway and Roadway Construction',
      'AutoCAD Civil 3D',
      'AutoCAD Drafting',
      'Construction Material Inspection',
      'Quality Control',
      'Engineering Documentation',
      'Drawing and Specification Review',
      'Quantity Calculations',
    ],
  },
  {
    id: 'ai',
    title: 'AI Engineering & Technical Evaluation',
    items: [
      'AI Prompt Engineering',
      'Civil Engineering Subject Matter Expertise',
      'AI-Generated Technical Output Evaluation',
      'Technical Accuracy Verification',
      'Engineering Document Analysis',
      'Structured Error Identification',
      'Technical Compliance Assessment',
    ],
  },
] as const

export const projects = [
  {
    name: 'Dangila–Jaw Road Project',
    role: 'Project Manager',
    organization: 'Wentu Engineering & Construction',
    description:
      'Supported construction budgeting, cost reporting, field planning, design coordination, and progress tracking for a 5 km section of the road project.',
    tags: ['Budgeting', 'Cost Reporting', 'Field Planning'],
  },
  {
    name: 'Agaro–Gera–Medabo Road Project',
    role: 'Project Manager',
    organization: 'Lorat Construction PLC',
    description:
      'Administered construction contracts, managed change-order documentation, and coordinated contractors and stakeholders to resolve scope, documentation, and delivery disputes.',
    tags: ['Contract Administration', 'Change Orders', 'Claims'],
  },
  {
    name: 'Project Buckeye',
    role: 'Civil Engineering SME / AI Prompt Engineer',
    organization: 'Handshake AI Fellowship',
    description:
      'Evaluating civil engineering documents and AI-generated technical outputs against structured accuracy and compliance criteria for an advanced AI benchmarking initiative.',
    tags: ['AI Evaluation', 'Technical Accuracy', 'Compliance'],
  },
]
