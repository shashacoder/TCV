import { ServiceCategory, TeamMember, IndustryItem, PartnerAssociation } from "./types";

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "finance-audit",
    title: "Accounting, Audit & Assurance",
    iconName: "FileCheck",
    description: "Rigorous statutory auditing, internal control reviews, and scalable book-keeping designed to optimize operating costs and maintain regulatory alignment.",
    services: [
      {
        id: "accounting",
        title: "Accounting & Bookkeeping Services",
        description: "End-to-end accounting support ensuring precise financial health tracking.",
        bullets: [
          "Maintenance of comprehensive Books of Account",
          "Outsource Accounting & bookkeeping services",
          "Comprehensive Audit Support Services",
          "Outsourcing of accounts receivable (AR) and payable (AP) processes"
        ]
      },
      {
        id: "internal-audit",
        title: "Internal Audit & Risk Advisory",
        description: "Tailor-made diagnostic audits to secure internal systems and optimize performance.",
        bullets: [
          "Tailor-made scope oriented Internal Audits",
          "Internal GST Audit & compliance checks",
          "Monthly financial retainership and advisory",
          "Stock & Book Debt Audits for credit review",
          "Fixed Assets Verification & Tagging Audits"
        ]
      },
      {
        id: "statutory-audit",
        title: "Statutory & Government Audit",
        description: "Authoritative compliance audits under legal frameworks and government mandates.",
        bullets: [
          "Audit under The Companies Act, 2013",
          "Tax Audit under The Income Tax Act, 1961",
          "Cost Audit for manufacturing efficiency",
          "Audits allotted by Comptroller and Auditor General of India (C&AG)",
          "Audits of Balance Sheets for Corporates, Individuals, Firms, Trusts, and Societies"
        ]
      }
    ]
  },
  {
    id: "taxation",
    title: "Direct & Indirect Taxation",
    iconName: "Receipt",
    description: "Proactive tax planning, meticulous return filings, and strong defense representation before appellate tribunals.",
    services: [
      {
        id: "direct-tax",
        title: "Direct Taxation & Advisory",
        description: "Strategic tax planning for corporates, partnerships, and high-net-worth individuals.",
        bullets: [
          "Consultancy & Guidance for complex Income Tax matters",
          "Computation and tax liability optimization",
          "Filing of Income Tax Returns (ITR) – Individual, Corporate, & Firm",
          "Filing of TDS Returns and tax credit matching",
          "Registration & filing of Income Tax Returns of Trusts",
          "Filing for special permissions including FCRA, 12A, and 80G tax exemptions",
          "Certification and withholding tax audits"
        ]
      },
      {
        id: "indirect-tax",
        title: "Indirect Taxation & GST",
        description: "Comprehensive Goods & Services Tax advisory, periodic filing, and customs compliance.",
        bullets: [
          "GST Advisory: Impact implication studies & transactional mapping",
          "GST Exemptions and structuring assistance",
          "Compliance: Monthly & annual GST return filings",
          "Departmental intimations & reply coordination",
          "Customs Advisory, compliance audit, litigation support, and duty refunds"
        ]
      },
      {
        id: "tax-litigation",
        title: "Tax Litigation & Appeals",
        description: "Robust legal defense before tax tribunals and authorities.",
        bullets: [
          "Representation in Scrutiny Assessment of Income Tax",
          "Appeals before the Commissioner of Income Tax [Appeals]",
          "Litigation representation in Income Tax Appellate Tribunal (ITAT)",
          "GST show-cause notice replies & representation in GSTAT and High Court"
        ]
      }
    ]
  },
  {
    id: "legal-secretarial",
    title: "Corporate Legal & Business Setup",
    iconName: "Scale",
    description: "Frictionless business incorporation, meticulous contract drafting, and comprehensive statutory records maintenance.",
    services: [
      {
        id: "secretarial",
        title: "Secretarial & Governance",
        description: "Ensuring compliance with the Ministry of Corporate Affairs and company law guidelines.",
        bullets: [
          "Consultancy on company law matters and corporate governance",
          "Maintenance of statutory records, minutes, and register books",
          "Filing for changes in company name, objectives, and registered offices"
        ]
      },
      {
        id: "incorporation",
        title: "Compliance Formation & Incorporation",
        description: "Fast-tracked establishment of legal entities across standard jurisdictions.",
        bullets: [
          "Private Limited Company Incorporation",
          "Limited Liability Partnership (LLP) formation",
          "Partnership Firm drafting and registration",
          "Trust and Society constitution"
        ]
      },
      {
        id: "drafting",
        title: "Drafting of Deeds & Agreements",
        description: "Legally bulletproof agreement formulation to protect client interests.",
        bullets: [
          "Joint Venture (JV) Agreements & Shareholders Agreements",
          "Share Purchase Agreements & investment documentation",
          "Privacy, Non-Disclosure (NDA), and Disclosure Agreements",
          "Memorandums of Understanding (MoU)",
          "Family Settlement, Arrangement Deeds, and Gift Deeds"
        ]
      },
      {
        id: "startup-services",
        title: "Startup Acceleration & Due Diligence",
        description: "Crucial strategic services for newly established enterprises.",
        bullets: [
          "Strategic setup advisory & tax holiday compliance",
          "Assistance in commercial accounting & financial record-keeping setup",
          "Statutory registrations under various state & central statutes",
          "Detailed Project Reports (DPR) for commercial bank financing approval",
          "Comprehensive Legal, Financial, and Secretarial Due Diligence",
          "Health checks for internal control and compliance accuracy"
        ]
      }
    ]
  },
  {
    id: "hr-industrial",
    title: "HR, IR & Engineering Solutions",
    iconName: "Cpu",
    description: "Innovative hybrid solutions linking professional Human Resources & Industrial Relations with elite technical engineering consulting.",
    services: [
      {
        id: "hr-management",
        title: "Human Resources & Payroll Outsourcing",
        description: "Optimized personnel structures, transparent HR policies, and secure payroll operations.",
        bullets: [
          "Salary and wage administration & automated payroll processing",
          "Formulation of transparent HR policies, procedures, and manuals",
          "Advisory in recruitment, candidate selection, and job design",
          "Development of clear Job Descriptions (JDs) and Key Result Areas (KRAs)",
          "Strategic manpower supply and resource allocation"
        ]
      },
      {
        id: "industrial-relations",
        title: "Industrial Relations & Labour litigation",
        description: "Defending corporate interests in legal labour disputes and facilitating union negotiations.",
        bullets: [
          "Handling complex labour cases and demand notices in Labour Offices and Labour Courts",
          "Audits under various central & state Labour Laws",
          "Expert advisory in HR & Industrial Relation (IR) strategies including long-term settlements with unions",
          "Handling disciplinary proceedings and domestic enquiries",
          "Drafting contract labour agreements and customized appointment terms",
          "Facilitating government liaison for inspections (ESIC, Provident Fund, etc.)"
        ]
      },
      {
        id: "engineering-solutions",
        title: "Industrial Engineering & Automation",
        description: "Robust technical consulting through our incorporated engineering division (est. 2022).",
        bullets: [
          "Mechanical Maintenance: comprehensive machine repair, annual shutdowns, and custom fabrication",
          "Civil & Interior Solutions: civil constructions, warehouse layouts, road designs, and interior renewals",
          "Industrial Automation: IT infrastructure development, structural IT security audits, and engineering design",
          "Environmental Protection: Dual Fuel technology conversion in DG sets, OECMS, pollution device setup"
        ]
      },
      {
        id: "statutory-clearances",
        title: "Statutory Approvals & Clearances",
        description: "Streamlining complex administrative clearances for manufacturing units and facilities.",
        bullets: [
          "Approval of Factory Building Plans with State Directorates",
          "Drafting and state certification of Standing Orders",
          "Procurement and approval of Fire NOCs and structural safety schemes",
          "Environmental clearances and pollution control board liaisons"
        ]
      }
    ]
  },
  {
    id: "other-financial",
    title: "Other Financial & Corporate Services",
    iconName: "TrendingUp",
    description: "Advanced advisory services spanning cross-border expansion, project finance modeling, and business valuations.",
    services: [
      {
        id: "cross-border",
        title: "Liaison & Branch Setup",
        description: "Strategic entry support for multinational corporations expanding into India.",
        bullets: [
          "Opening and compliance monitoring of Liaison Offices",
          "Setting up Foreign Branch Offices and Project Offices",
          "Statutory registrations and RBI clearance coordination"
        ]
      },
      {
        id: "project-finance",
        title: "Project Financing & Credit Advisory",
        description: "Securing capital and modeling investments for infrastructure and expansion.",
        bullets: [
          "Detailed Project Feasibility Reports and valuation models",
          "Preparation of Credit Monitoring Arrangement (CMA) data",
          "Project Financing solutions (Cash Credit (CC), Overdraft (OD), Term Loans)",
          "Working Capital finance structuring and MSME Special Loans",
          "Review and analytical breakdowns of monthly management accounts"
        ]
      }
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "brahma-kumar-pathak",
    name: "Brahma Kumar Pathak",
    role: "Managing Partner (Legal & HR)",
    qualifications: "Postgraduate in Law (LL.M), MBA in Human Resource Management",
    experienceYears: 20,
    specialty: "Labour Laws, Industrial Relations & Clearances",
    email: "brahmp@tcvadvisors.org",
    phone: "+91 9810360054",
    bioLines: [
      "More than 20 years of rich executive experience driving Infrastructure Projects, Legal compliance frameworks, and progressive Manufacturing sector practices.",
      "Well-versed across the overall HR spectrum, having successfully headed Human Resources, Industrial Relations, and Administration for highly reputed Japanese MNCs and leading Indian conglomerates.",
      "Recognized expert in resolving complex union deadlocks, organizing factory clearances, handling labor court litigations, and state licensing.",
      "Active esteemed member of the Delhi High Court Bar Association and Dwarka Court Bar Association."
    ],
    associations: ["Japanese MNCs", "Large Indian Infrastructure Groups", "Delhi High Court Bar Association"]
  },
  {
    id: "ajay-kumar-gupta",
    name: "CA. Ajay Kumar Gupta",
    role: "Managing Partner (Finance & Taxation)",
    qualifications: "Chartered Accountant (FCA), Alumni of IIM Calcutta, MBA, DISA",
    experienceYears: 23,
    specialty: "Corporate Taxation, Industry Setup & ERP Systems",
    email: "ajayg@tcvadvisors.org",
    phone: "+91 9871325500",
    bioLines: [
      "Over 23 years of stellar experience leading corporate finance, banking coordination, and tax compliance structures.",
      "Expertise in establishing greenfield industrial installations in India, organizing statutory clearances, and holding high-level government liaisons.",
      "Specializes in conversion of standards into IFRS / IND-AS, developing internal controls over financial reporting (ICFR), and major enterprise resource planning (ERP) systems implementation.",
      "Empaneled with the Indian Institute of Corporate Affairs (IICA) for Independent Directors."
    ],
    associations: ["Japanese Multinationals", "PMSS & Co.", "Indian Institute of Corporate Affairs"]
  },
  {
    id: "pawan-kumar-garg",
    name: "CA. Pawan Kumar Garg",
    role: "Senior Financial Consultant",
    qualifications: "Chartered Accountant (ACA), Commerce Graduate",
    experienceYears: 8,
    specialty: "Treasury Management, Financial Planning & Global Reporting",
    email: "pawang@tcvadvisors.org",
    phone: "+91 9716142918",
    bioLines: [
      "Over 8 years of dedicated experience in corporate finance, financial planning & analysis (FP&A), and treasury management.",
      "Offers broad international perspective with 2 years of professional execution outside India.",
      "Expert in establishing meticulously designed process controls and tax compliances under Indian GAAP, US GAAP, and IFRS.",
      "Brings sharp analytics and methodical work ethic to complex financial modeling and multi-currency audits."
    ]
  },
  {
    id: "mukesh-kumar-sharma",
    name: "Mukesh Kumar Sharma",
    role: "Chief Advisor & Mentor (HR & IR)",
    qualifications: "Master's in Law (LL.M), MBA in Human Resource Management",
    experienceYears: 35,
    specialty: "Progressive Personnel Practices & Trade Union Negotiations",
    email: "mukesh70289@gmail.com",
    phone: "+91 9671884500",
    bioLines: [
      "Highly respected elder advisor with over three decades of core corporate human resource leadership.",
      "Retired in 2014 as the corporate Head of HR after leading personnel strategies for market giants including Xerox, Samtel, and Surya Roshni Ltd.",
      "Holds exceptionally rare expertise in handling and peacefully resolving complex trade union disputes and maintaining industrial harmony in major manufacturing hubs.",
      "Oversees progressive HR policy framework architectures, participative management models, and state compliance procedures across Northern and Central India."
    ],
    associations: ["Xerox", "Samtel", "Surya Roshni Ltd"]
  },
  {
    id: "balbir-singh",
    name: "Balbir Singh",
    role: "Senior Legal Advisor",
    qualifications: "Law Graduate (LL.B), Active Legal Practitioner",
    experienceYears: 22,
    specialty: "Labour Litigation & Dispute Resolution",
    email: "adv.balbirsingh@gmail.com",
    phone: "+91 9812005840",
    bioLines: [
      "Over 22 years of continuous practice advocating for corporate clients before Labour Offices, Labour Commissioners, and state Labour Courts.",
      "Serves as the Secretary of Laghu Udyog Bharti, Haryana, championing the legal and commercial interests of enterprises.",
      "Expert coordinator for the Bahadurgarh Chamber of Commerce and Industries (BCCI).",
      "Specializes in resolving critical strike actions, trade union arbitrations, and complex employee disputes."
    ],
    associations: ["Laghu Udyog Bharti, Haryana", "Bahadurgarh Chamber of Commerce (BCCI)"]
  },
  {
    id: "praveen-kaushik",
    name: "CA. Praveen Kaushik",
    role: "Audit & Transaction Advisory Consultant",
    qualifications: "FCA, Certified Fraud Auditor (FAFD), DISA, Registered Valuer (SFA - IBBI)",
    experienceYears: 18,
    specialty: "IPO Offerings, Valuations & Forensic Audit",
    email: "praveen.kaushik@tcvadvisors.org",
    bioLines: [
      "Seasoned Chartered Accountant and Registered Valuer with more than 18 years of specialized advisory practice.",
      "Recognized expert in guiding businesses through IPO offerings, private equity transactions, and comprehensive business valuations.",
      "Certified Fraud Auditor (FAFD) handling structural audits, corporate forensics, and enterprise risk mitigations.",
      "Registered under the Insolvency and Bankruptcy Board of India (IBBI) for security and financial asset valuation."
    ]
  },
  {
    id: "ramesh-dalal",
    name: "Ramesh Dalal",
    role: "Legal & Compliance Advisor",
    qualifications: "Law Graduate (LL.B), Legal Practitioner",
    experienceYears: 15,
    specialty: "Legal Drafting & Contract Labour Audits",
    email: "adv.rameshdalal@gmail.com",
    phone: "+91 9728985840",
    bioLines: [
      "Well-known legal practitioner based in the industrial corridor of Bahadurgarh.",
      "Over 15 years of focus in legal draftings, contract labor management, and statutory licensing.",
      "Translates complex labor legislations into clear, compliant operational guidelines for factory managements.",
      "Known for meticulous contract vetting, avoiding hidden liabilities, and securing employer protections."
    ]
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "manufacturing",
    name: "Manufacturing & Heavy Industries",
    iconName: "Settings",
    description: "Comprehensive machinery maintenance plans, worker union negotiations, factory layout planning, and complex tax compliance audits."
  },
  {
    id: "automotive",
    name: "Automotive & Ancillaries",
    iconName: "Car",
    description: "Streamlined operational clearance audits, contract labor administration, and custom direct/indirect tax strategy models."
  },
  {
    id: "textiles",
    name: "Textile & Apparel Sector",
    iconName: "Scissors",
    description: "Statutory inspections representation, global trade indirect taxation advisory, and custom HR structural development."
  },
  {
    id: "paints-chemical",
    name: "Paints, Chemicals & Agro",
    iconName: "FlaskConical",
    description: "High-level Environmental Protection technology clearances, pollution monitoring device filings, and strict safety compliances."
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    iconName: "Truck",
    description: "Specialized liaison compliance mapping, warehouse setup approvals, and cross-border customs optimization."
  },
  {
    id: "realestate-infra",
    name: "Infrastructure & Civil Construction",
    iconName: "Building2",
    description: "Comprehensive civil solutions, contractor payment audits, standing orders certification, and funding structures."
  },
  {
    id: "medical",
    name: "Medical Equipment & Biotech",
    iconName: "HeartPulse",
    description: "Rigorous quality compliance reviews, internal validation controls, and multinational accounting frameworks."
  },
  {
    id: "education",
    name: "Education & Non-Profit Trusts",
    iconName: "GraduationCap",
    description: "Tax filings under Section 12A/80G, society audit support, trust statutory records maintenance, and HR alignment."
  }
];

export const ORGANIZATIONAL_PARTNERS: PartnerAssociation[] = [
  { name: "Flyjac Logistics Pvt. Ltd.", group: "Hitachi Group" },
  { name: "Titan Company Limited" },
  { name: "Oppo Mobiles India Pvt. Ltd." },
  { name: "Continental Carbon India Ltd." },
  { name: "Yokohama" },
  { name: "Sora Haitsu Corporation India Pvt. Ltd." },
  { name: "Olympus Medical Systems Pvt. Ltd." },
  { name: "Meesan Logistics", group: "An RSA Global Company" },
  { name: "JLL" },
  { name: "Cushman & Wakefield" },
  { name: "N-Sunrise Constructions Pvt. Ltd." },
  { name: "Lavkush Construction Company" }
];

export const TESTIMONIALS_DATA = [
  {
    quote: "The Corporate Vashishtha transformed our industrial compliance management. Their unique combination of legal labor expertise and financial auditing has given our leadership team complete peace of mind.",
    author: "Head of Operations",
    company: "Flyjac Logistics (Hitachi Group)",
    rating: 5
  },
  {
    quote: "From complex GST litigation to structural environmental filings, TCV's partners provide the kind of comprehensive, fast-turnaround support that other corporate firms simply cannot match.",
    author: "Director of Finance",
    company: "Oppo Mobiles India",
    rating: 5
  },
  {
    quote: "Their team's deep roots in both industrial legal defense and chartered accountancy have optimized our tax planning and secured factory certifications with flawless accuracy.",
    author: "VP of Legal",
    company: "Titan Company Limited",
    rating: 5
  }
];
