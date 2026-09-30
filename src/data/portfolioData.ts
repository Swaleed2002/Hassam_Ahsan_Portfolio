export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  location: string;
  locationCity: string;
  locationCountry: string;
  whatsapp: string;
  whatsappRaw: string;
  whatsappUrl: string;
  phone: string;
  phoneUrl: string;
  email: string;
  emailUrl: string;
  linkedin: string;
  linkedinUrl: string;
  resumeUrl: string;
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
  highlight?: boolean;
}

export interface ClientItem {
  id: string;
  name: string;
  category: string;
  region: 'UAE' | 'Pakistan' | 'Regional';
  featuredProject?: string;
  badge?: string;
}

export interface ExpertiseCategory {
  id: string;
  title: string;
  categoryNum: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  isFeatured?: boolean;
  featuredBadge?: string;
  isLongestTenure?: boolean;
  keyClients?: string[];
  responsibilities: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: string;
  duration?: string;
  budget?: string;
  format?: string;
  isCenterpiece?: boolean;
  badge?: string;
  channels?: string[];
  scope?: string[];
  responsibilities?: string[];
  results: {
    primary: string;
    secondary?: string;
    details?: string;
  };
  narrative: string;
  strategicInsight?: string;
}

export interface AchievementItem {
  id: number;
  title: string;
  metric: string;
  description: string;
  tag: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  highlight: string;
}

export interface LanguageItem {
  name: string;
  proficiency: string;
}

export const personalInfo: PersonalInfo = {
  name: "Hassam Ahsan",
  title: "Marketing | Business Development | Brand & Experiential Marketing",
  tagline: "Bridging creative brand vision, high-stakes commercial growth, and precision project execution across the UAE and Pakistan.",
  summary: "Marketing and Business Development professional with 8+ years of experience across Pakistan and the UAE, combining integrated marketing, brand activation, experiential marketing, client acquisition, project delivery and commercial growth.",
  location: "International City, Dubai, UAE",
  locationCity: "Dubai",
  locationCountry: "UAE",
  whatsapp: "050 353 6318",
  whatsappRaw: "+971503536318",
  whatsappUrl: "https://wa.me/971503536318",
  phone: "050 170 2498",
  phoneUrl: "tel:+971501702498",
  email: "hassamahsanofficial@gmail.com",
  emailUrl: "mailto:hassamahsanofficial@gmail.com",
  linkedin: "linkedin.com/in/hassam-ahsan/",
  linkedinUrl: "https://www.linkedin.com/in/hassam-ahsan/",
  resumeUrl: "/Hassam_Ahsan_Resume.pdf"
};

export const executiveHighlights = [
  "Average +21% annual revenue performance against assigned targets",
  "Onboarded 11+ major/recurring clients",
  "Delivered campaigns resulting in 65% sales growth",
  "Delivered 80% brand visibility for a major automotive launch",
  "Strong UAE experience across defence, IT, agriculture, industrial and security sectors",
  "C-level stakeholder management & high-value negotiations",
  "Extensive vendor and contract management",
  "Cross-functional team leadership across strategy, production, creative & finance"
];

export const sectors = [
  "Automotive",
  "Real Estate",
  "Retail",
  "FMCG",
  "Technology",
  "Defence",
  "Agriculture",
  "Corporate"
];

export const keyMetrics: MetricItem[] = [
  {
    value: "8+ Years",
    label: "Professional Experience",
    sublabel: "Cross-border marketing & BD leadership in UAE & Pakistan",
    highlight: false
  },
  {
    value: "+21%",
    label: "Avg. Annual Revenue Growth",
    sublabel: "Consistently exceeded assigned annual commercial targets",
    highlight: true
  },
  {
    value: "11+",
    label: "Recurring / Major Clients",
    sublabel: "High-retention enterprise & multinational client accounts",
    highlight: false
  },
  {
    value: "65%",
    label: "Sales Growth Delivered",
    sublabel: "Flagship Hyundai Santa Fe multi-city launch campaign",
    highlight: true
  },
  {
    value: "80%",
    label: "Brand Visibility Achieved",
    sublabel: "Integrated automotive launch reach & market impact",
    highlight: false
  },
  {
    value: "PKR 31.5M",
    label: "Hyundai Campaign Budget",
    sublabel: "9-month nationwide integrated programme executed",
    highlight: true
  },
  {
    value: "PKR 23.5M",
    label: "Exhibition Space Sales",
    sublabel: "Future Fest commercial sales against PKR 19.0M target threshold",
    highlight: false
  },
  {
    value: "3,000+",
    label: "Daily Exhibition Footfall",
    sublabel: "Future Fest technology & live concert visitors per day",
    highlight: false
  }
];

export const clients: ClientItem[] = [
  { id: 'hyundai', name: 'Hyundai by Nishat', category: 'Automotive', region: 'Pakistan', featuredProject: 'Santa Fe Launch' },
  { id: 'etihad', name: 'Etihad Town', category: 'Real Estate', region: 'Pakistan', featuredProject: 'Housing Launch & Carnival' },
  { id: 'packages', name: 'Packages Mall', category: 'Retail & Commercial', region: 'Pakistan', featuredProject: 'Experiential Activations' },
  { id: 'mg', name: 'MG by SAIC Motors', category: 'Automotive', region: 'Pakistan', featuredProject: 'Brand Activation & Showrooms' },
  { id: 'timhortons', name: 'Tim Hortons Punjab', category: 'FMCG / Retail', region: 'Pakistan', featuredProject: 'Brand Rollout & Campaigns' },
  { id: 'streit', name: 'Streit Group', category: 'Defence & Security', region: 'UAE', featuredProject: 'UAE Exhibition & Client Sales' },
  { id: 'tplink', name: 'TP-Link', category: 'Technology & Networking', region: 'UAE', featuredProject: 'Exhibitions & B2B Partner Events' },
  { id: 'aldahra', name: 'Al Dahra', category: 'Agriculture & Food Security', region: 'UAE', featuredProject: 'Corporate Event & B2B Solutions' },
  { id: 'bristol', name: 'Bristol', category: 'Industrial & Fire Safety', region: 'UAE', featuredProject: 'Commercial Project Delivery' },
  { id: 'ajsteels', name: 'AJ Steels', category: 'Industrial & Engineering', region: 'UAE', featuredProject: 'Key Account Management' },
  { id: 'drager', name: 'Dräger', category: 'Healthcare & Safety Tech', region: 'UAE', featuredProject: 'Corporate B2B Exhibitions' },
  { id: 'gallagher', name: 'Gallagher Security', category: 'Enterprise Security', region: 'UAE', featuredProject: 'Project Servicing & Delivery' },
  { id: 'ducab', name: 'DUCAB', category: 'Industrial Manufacturing', region: 'UAE', featuredProject: '46th Anniversary Event Rescue', badge: 'Featured Rescue' },
];

export const expertiseCategories: ExpertiseCategory[] = [
  {
    id: 'marketing-brand',
    categoryNum: 'CATEGORY 01',
    title: 'Marketing & Brand Strategy',
    description: 'End-to-end multi-channel strategy, go-to-market roadmaps, and memorable brand activations that drive measurable recall and demand.',
    skills: [
      'Integrated Marketing Strategy',
      'Campaign Planning',
      'Brand Strategy',
      'Brand Activation',
      'Experiential Marketing',
      'Campaign Management',
      'Content Strategy',
      'Digital Marketing Strategy',
      'Social Media',
      'OOH',
      'TVC',
      'B2B Marketing',
      'B2C Marketing',
      'Go-to-Market Planning'
    ]
  },
  {
    id: 'business-development',
    categoryNum: 'CATEGORY 02',
    title: 'Business Development & Growth',
    description: 'Transforming commercial objectives into high-value client acquisitions, consultative proposals, and multi-year corporate partnerships.',
    skills: [
      'Business Development',
      'Lead Generation',
      'Client Acquisition',
      'Account Growth',
      'Account Management',
      'Proposal Development',
      'Pitch Development',
      'Commercial Negotiation',
      'C-Level Engagement',
      'Stakeholder Management',
      'Revenue Growth',
      'Commercial Planning'
    ]
  },
  {
    id: 'projects-operations',
    categoryNum: 'CATEGORY 03',
    title: 'Projects & Operations Execution',
    description: 'Precision execution of complex, multi-million budget exhibitions, crisis turnarounds, corporate launches, and technical setups.',
    skills: [
      'End-to-End Project Management',
      'Budget Management',
      'Timeline Management',
      'Risk Management',
      'Vendor Management',
      'Procurement Coordination',
      'Production',
      'Logistics',
      'Cross-Functional Leadership',
      'On-Site Execution',
      'Corporate Events',
      'Exhibitions',
      'Product Launches'
    ]
  },
  {
    id: 'digital-tools',
    categoryNum: 'CATEGORY 04',
    title: 'Digital Systems & Analytics',
    description: 'Leveraging modern technical foundations, workflow orchestration platforms, and analytics engines to ensure data-driven execution.',
    skills: [
      'SEO',
      'Website Management',
      'Google Analytics',
      'Zoho',
      'YouTrack',
      'Jira',
      'Web Development',
      'Social Media Strategy',
      'Content Direction',
      'Digital Brand Presence'
    ]
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: 'elegant-qubes',
    company: 'ELEGANT QUBES',
    role: 'Senior Manager – Business & Project Management',
    period: 'Jun 2025 – Jul 2026',
    location: 'UAE',
    keyClients: ['AJ Steels', 'Dräger', 'Gallagher Security'],
    responsibilities: [
      'Led business development, client servicing and project management for corporate, industrial, security and engineering-focused accounts across the UAE.',
      'Won and managed high-value accounts including AJ Steels, Dräger and Gallagher Security.',
      'Expanded client portfolio across industrial, healthcare and security segments throughout the UAE market.',
      'Managed full lifecycle: client discovery, solution development, proposal presentation, commercial discussions, project planning, execution coordination and post-delivery relationship management.',
      'Directed seamless collaboration across design, production, procurement, vendors and on-ground operations.',
      'Delivered complex projects strictly within agreed scope, timelines and stringent corporate quality standards.'
    ]
  },
  {
    id: 'ducab-rescue',
    company: 'FREELANCE PROJECT: DUCAB 46th ANNIVERSARY',
    role: 'Project Lead / Marketing & Event Execution',
    period: 'Special High-Stakes Project',
    location: 'Dubai, UAE',
    isFeatured: true,
    featuredBadge: 'Featured Case Study: 7-Day Crisis Turnaround',
    keyClients: ['DUCAB (Dubai Cable Company)'],
    responsibilities: [
      'Took complete ownership of DUCAB’s high-profile 46th Anniversary event with only 7 days remaining before on-ground execution.',
      'Event executed successfully at the iconic Jebel Ali Resorts, Dubai.',
      'Rapidly mobilized technical drawings, labor forces, municipality/venue approvals, production requirements, and emergency build-up extensions under extreme time pressure.',
      'Solved severe venue engineering constraints including uneven terrain and two massive mature palm trees directly obstructing the main stage setup.',
      'Coordinated and steered production teams, technical specialists, resort management, and senior client stakeholders in a unified emergency response.',
      'Flawless on-time delivery reinforced executive client confidence and directly contributed to DUCAB awarding a subsequent 3-year client contract.'
    ]
  },
  {
    id: 'wewillbe',
    company: 'WEWILLBE EVENTS & EXHIBITIONS',
    role: 'Sales & Project Manager',
    period: 'Jan 2024 – May 2025',
    location: 'UAE',
    keyClients: ['Streit Group', 'TP-Link', 'Al Dahra', 'Bristol'],
    responsibilities: [
      'Managed B2B sales, client acquisition and end-to-end project delivery in the highly competitive UAE events and exhibitions market.',
      'Connected commercial requirements with creative, production and operational execution.',
      'Built and managed strategic relationships across defence, IT, agriculture/livestock and diversified commercial sectors.',
      'Spearheaded key accounts including Streit Group, TP-Link, Al Dahra and Bristol.',
      'Led prospecting, discovery meetings, bespoke proposals, competitive pitches, commercial negotiations, project handover and long-term account servicing.',
      'Coordinated custom design, production, fabrication, logistics, specialized suppliers and on-site execution.',
      'Maintained rigorous control over project scope, timelines, build quality and C-level client expectations.',
      'Strengthened company UAE market presence through consultative project selling and repeat corporate business.'
    ]
  },
  {
    id: 'black-diamond',
    company: 'BLACK DIAMOND MEDIA SERVICES',
    role: 'Head of Marketing, Business Development & Project Management',
    period: 'Sep 2017 – Dec 2023 (6+ Years)',
    location: 'Pakistan',
    isLongestTenure: true,
    featuredBadge: 'Major Leadership Role • 6+ Years',
    keyClients: ['Hyundai by Nishat', 'Etihad Town', 'Packages Mall', 'MG by SAIC Motors', 'Tim Hortons Punjab'],
    responsibilities: [
      'Led Marketing, Business Development and Project Operations as the senior department head across a 6+ year tenure.',
      'Managed full client lifecycle from prospecting and high-stakes pitching through strategy, 3D visualization, production, live execution and post-campaign ROI analysis.',
      'Managed monthly, weekly and daily BD targets, instituting performance dashboards and market-feedback reporting systems.',
      'Managed senior stakeholders and C-level executives across multinational automotive and real estate groups.',
      'Led complex requirements gathering, commercial negotiations, budget discussions, production timelines, risk escalation and project governance.',
      'Generated an average +21% annual revenue performance against assigned commercial targets consistently year over year.',
      'Onboarded and nurtured 11+ major recurring clients including Hyundai by Nishat, Etihad Town, Packages Mall, MG by SAIC Motors and Tim Hortons Punjab.',
      'Led multidisciplinary cross-functional teams covering Marketing, Creative/Design, 3D Rendering, Production, Procurement, Finance, IT and Field Operations.',
      'Managed external vendor networks, fabrication facilities, logistics partners and media houses.',
      'Oversaw digital brand presence including websites, SEO, social media strategy, multi-channel campaign planning, web analytics and content direction.'
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    id: 'hyundai-santa-fe',
    title: 'Hyundai Santa Fe Nationwide Launch',
    client: 'Hyundai by Nishat',
    category: 'Automotive • Integrated Launch',
    duration: '9 Months',
    budget: 'PKR 31.5M',
    isCenterpiece: true,
    badge: 'Centerpiece Campaign',
    channels: [
      'Website & SEO',
      'Social Media Strategy',
      'TVC Production & Broadcast',
      'Influencer Marketing',
      'Experiential Brand Activation',
      'High-Impact OOH',
      'Strategic Sponsorships',
      'Multi-City Mini Launches'
    ],
    results: {
      primary: '65% Sales Growth',
      secondary: '80% Brand Visibility',
      details: 'Surpassed national automotive benchmark reach; multi-city roadshows translated directly into showroom footfall and vehicle pre-orders.'
    },
    narrative: 'A high-stakes, 9-month integrated marketing campaign orchestrated for the premier SUV launch of the Hyundai Santa Fe. The campaign unified national TV commercials, premium digital strategy, influencer partnerships, nationwide OOH billboards, and tailored multi-city mini launches across key metropolitan centers. Every channel was tightly synchronised with dealer networks to maximize lead conversion.',
    strategicInsight: 'By shifting from generic awareness to immersive multi-city mini launches where target consumers could experience the vehicle in premium ambient settings, showroom conversion velocity increased by 65%.'
  },
  {
    id: 'future-fest',
    title: 'Future Fest: Mega Tech Exhibition & Live Concert',
    client: 'Future Fest / Black Diamond Media',
    category: 'Technology & Mega-Events',
    duration: '10 Months',
    budget: 'PKR 14.0M',
    badge: 'Commercial Over-Performance',
    format: 'Technology Exhibition + Live Concert Festival',
    responsibilities: [
      'Floor Plan Planning & Space Optimization',
      'Exhibition Space Sales Strategy',
      'TVC & Multi-Channel Broadcast',
      'Social Media & Digital Amplification',
      'High-Impact OOH Strategy',
      'Influencer & Tech Creator Marketing',
      'C-Level Executive Interviews',
      'Sponsorship Package Architecture',
      'Post-Event ROI Analysis'
    ],
    results: {
      primary: 'PKR 23.5M Exhibition Space Sales',
      secondary: 'Threshold: PKR 19.0M',
      details: 'Exceeded strict sales threshold by PKR 4.5M (+23.7% above target); welcomed over 3,000 visitors per day across the tech expo and concert grounds.'
    },
    narrative: 'Future Fest combined Pakistan’s largest technology exhibition with an evening live concert format to drive unprecedented engagement between tech leaders, innovators, government stakeholders, and youth. Hassam managed commercial exhibition space sales, floor plan engineering, national promotions, and high-level sponsor acquisitions.',
    strategicInsight: 'Engineered high-density thematic zones that linked premium tech booths directly with keynote traffic corridors, allowing exhibitors to maximize ROI and justifying premium booth pricing.'
  },
  {
    id: 'healthcare-awareness',
    title: 'Nationwide Healthcare Awareness Campaign',
    client: 'National Health Sector',
    category: 'Healthcare & Public Awareness',
    duration: '6 Months',
    budget: 'PKR 6.0M',
    badge: 'Public Sector Impact',
    scope: [
      'Doctor Conferences & Medical Symposia',
      'TVC Broadcast & Media Planning',
      'Targeted Social Media Campaigns',
      'Educational & Promotional Communications'
    ],
    results: {
      primary: '27%+ Outcomes Over Benchmark',
      secondary: 'Broad Medical Community Reach',
      details: 'Significantly outperformed agreed campaign indicators across both medical practitioner attendance and public diagnostic inquiries.'
    },
    narrative: 'A 6-month public and clinical awareness campaign designed to educate communities and align medical professionals through accredited conferences, targeted TV broadcast, and patient education collaterals.',
    strategicInsight: 'Bridging healthcare professional credibility with accessible public messaging enabled the campaign to exceed targets by more than 27%.'
  },
  {
    id: 'housing-society-carnival',
    title: 'Housing Society Launch: The 3-Day Family Carnival',
    client: 'Etihad Town',
    category: 'Real Estate & Experiential Marketing',
    badge: 'Strategic Adaptability',
    responsibilities: [
      'Market & Demographics Location Research',
      'Strategic Pivot: 1-Day Concert to 3-Day Carnival',
      'Marketing Strategy & Media Planning',
      'Commercial Sales Packages',
      'Sponsorship Propositions',
      'Pre-Event Demand Generation',
      'Audience Engagement & Footfall Tracking'
    ],
    results: {
      primary: 'High-Volume Lead Generation',
      secondary: 'Complete Real Estate Plot Sell-Through',
      details: 'Repositioned property investment from a high-barrier transaction into an accessible, family-oriented weekend celebration, generating hundreds of qualified property buyers.'
    },
    narrative: 'Originally conceptualized by the client as a conventional one-day musical concert. After in-depth location research and local market feedback revealed that actual property purchasing decisions were made by extended families rather than youth concertgoers, Hassam spearheaded a strategic pivot to an immersive 3-day family carnival.',
    strategicInsight: 'True commercial agility requires challenging initial client assumptions with actionable market data. Converting the single-evening concert into a 3-day family carnival tripled the active commercial window and matched buyer demographics.'
  },
  {
    id: 'ducab-46th',
    title: 'DUCAB 46th Anniversary: 7-Day Crisis Turnaround',
    client: 'DUCAB (Dubai Cable Company)',
    category: 'Crisis Turnaround & Mega-Event Execution',
    badge: 'High-Stakes Crisis Rescue',
    responsibilities: [
      'Emergency Project Takeover (T-minus 7 Days)',
      'Jebel Ali Resorts Venue Management',
      'Engineering Solution for Uneven Ground & Palm Obstructions',
      'Rapid Technical Drawings & Authority Approvals',
      'Emergency Labor Mobilization & Round-the-clock Build-up',
      'Senior Stakeholder & VIP Protocol Coordination'
    ],
    results: {
      primary: 'Flawless On-Time Event Execution',
      secondary: 'Secured 3-Year Subsequent Contract',
      details: 'Restored executive client faith under extreme duress, transforming a high-risk operational crisis into a benchmark celebration praised by corporate leadership.'
    },
    narrative: 'Stepped in as lead with only 7 days remaining before execution of DUCAB’s milestone 46th Anniversary celebration at Jebel Ali Resorts, Dubai. The project was crippled by logistical bottlenecks and severe venue constraints: the terrain was heavily undulating, and two large mature palm trees obstructed the stage sightlines and load-bearing structures. Through rapid structural re-engineering, around-the-clock shift management, and proactive stakeholder coordination, the event was delivered flawlessly.',
    strategicInsight: 'Calm, transparent authority under severe time pressure transforms an operational crisis into an enduring multi-year commercial relationship.'
  }
];

export const achievements: AchievementItem[] = [
  {
    id: 1,
    title: 'Hyundai Santa Fe 65% Sales Growth',
    metric: '65% / 80%',
    description: 'Delivered 65% sales growth and 80% brand visibility for Hyundai Santa Fe through a PKR 31.5M, 9-month integrated launch programme.',
    tag: 'Automotive & Launch'
  },
  {
    id: 2,
    title: 'Future Fest Exhibition Sales Record',
    metric: 'PKR 23.5M',
    description: 'Exceeded Future Fest commercial target by selling PKR 23.5M exhibition space against PKR 19.0M threshold.',
    tag: 'Commercial Sales'
  },
  {
    id: 3,
    title: 'Future Fest Daily Footfall Milestone',
    metric: '3,000+ / day',
    description: 'Exceeded targeted daily Future Fest visitor volume of 3,000 visitors/day across technology expo and live concerts.',
    tag: 'Experiential Footfall'
  },
  {
    id: 4,
    title: 'Consistent Commercial Outperformance',
    metric: '+21% Target',
    description: 'Maintained average +21% annual revenue performance against assigned targets across 6+ years of agency leadership.',
    tag: 'Revenue Growth'
  },
  {
    id: 5,
    title: 'High-Retention Enterprise Portfolio',
    metric: '11+ Clients',
    description: 'Onboarded 11+ recurring clients during 6+ years of agency career, securing sustained multi-year brand retainers.',
    tag: 'Account Acquisition'
  },
  {
    id: 6,
    title: 'Market-Driven Strategic Transformation',
    metric: '1 to 3 Days',
    description: 'Converted a planned one-day housing society music event into a three-day carnival after location and market research, maximizing buyer lead capture.',
    tag: 'Strategic Adaptability'
  },
  {
    id: 7,
    title: 'Nationwide Healthcare Campaign Impact',
    metric: '27%+ Result',
    description: 'Delivered nationwide healthcare awareness programme with PKR 6.0M budget and 27%+ outcomes against agreed campaign benchmarks.',
    tag: 'Public Sector'
  },
  {
    id: 8,
    title: 'DUCAB 7-Day High-Stakes Event Rescue',
    metric: '7 Days & 3-Yr Contract',
    description: 'Rescued DUCAB 46th Anniversary event with only seven days remaining before execution and contributed to a subsequent three-year client contract.',
    tag: 'Crisis Execution'
  }
];

export const education: EducationItem = {
  degree: "Bachelor of Science (BSCS) – Computer Sciences",
  institution: "University of Sargodha",
  location: "Pakistan",
  period: "2013 – 2017",
  highlight: "Foundational computer science degree providing technical depth in systems architecture, software workflows, digital platforms, and data analytics that strengthens modern marketing and project leadership."
};

export const languages: LanguageItem[] = [
  { name: "English", proficiency: "Professional / Fluent" },
  { name: "Urdu", proficiency: "Native / Bilingual" },
  { name: "Hindi", proficiency: "Professional Working Proficiency" }
];
