export const personalInfo = {
  name: "Ayush Das",
  role: "Data Analyst",
  headline: "I turn raw data into decisions.",
  subheading: "Ayush Das — Data Analyst",
  bioHeadline: "Final-year B.Tech CS & Business Systems student building practical analytics solutions with Excel, SQL, Power BI, Python, and Tableau.",
  fullBio: "I'm Ayush Das, a final-year B.Tech Computer Science & Business Systems student with a strong interest in data analytics and business intelligence. I enjoy transforming raw data into clean insights, interactive dashboards, and actionable recommendations. My toolkit includes Python, SQL, Excel, Power BI, Tableau, and data visualization libraries, supported by fundamentals in DSA, OOP, and Operating Systems.",
  email: "ayushdas599464@gmail.com",
  phone: "+91 8927557626",
  location: "Kolkata, West Bengal, India",
  socialLinks: {
    github: "https://github.com/ayushdas-tech",
    linkedin: "https://www.linkedin.com/in/ayush-das-analyst/", // placeholder / recruiter link
    linkedinPlaceholder: "LINKEDIN_LINK_TO_BE_ADDED",
    email: "mailto:ayushdas599464@gmail.com",
    phone: "tel:+918927557626"
  },
  resumeUrl: "/resume.pdf"
};

export const educationList = [
  {
    institution: "Techno Main Salt Lake",
    degree: "B.Tech — Computer Science & Business Systems (CSBS)",
    period: "2023 – 2027",
    score: "CGPA: 6.85",
    type: "Undergraduate Degree",
    status: "Final Year",
    highlights: [
      "Specialized curriculum combining core Computer Science with Business Analytics & Enterprise Strategy",
      "Coursework in Data Structures, Database Systems (SQL), Operating Systems, and Statistical Modeling",
      "Hands-on analytical projects translating complex multi-table datasets into executive dashboards"
    ],
    badge: "B.Tech (Current)"
  },
  {
    institution: "Alipurduar Mc William High School",
    degree: "Higher Secondary (Class XII) — Science",
    period: "Completed",
    score: "Score: 94%",
    type: "High School",
    status: "Top Tier Merit",
    highlights: [
      "Rigorous foundation in Mathematics, Physics, and analytical problem-solving",
      "Graduated with distinction scoring 94% aggregate marks"
    ],
    badge: "94% Academic Score"
  }
];

export const skillCategories = [
  {
    title: "Analytics & BI",
    description: "Business intelligence tools for decision modeling, KPI tracking, and executive dashboards.",
    icon: "BarChart3",
    color: "cyan",
    skills: [
      { name: "Excel", level: "Advanced", detail: "VLOOKUP, XLOOKUP, Pivot Tables, Power Query, Financial Models" },
      { name: "Power BI", level: "Proficient", detail: "DAX formulas, Data Modeling, Interactive KPI Dashboards, Drill-downs" },
      { name: "Tableau", level: "Proficient", detail: "Calculated Fields, Visual Storytelling, Parameter Controls" }
    ]
  },
  {
    title: "Programming Languages",
    description: "Scripting and query languages for data extraction, manipulation, and computation.",
    icon: "Code2",
    color: "sky",
    skills: [
      { name: "Python", level: "Core Stack", detail: "Scripting, Automation, ETL pipelines, Statistical Analysis" },
      { name: "SQL", level: "Core Stack", detail: "Complex Joins, Window Functions, CTEs, Aggregations, Optimization" },
      { name: "C++", level: "Foundational", detail: "Algorithm optimization, Memory efficiency, Problem solving" }
    ]
  },
  {
    title: "Python Data Libraries",
    description: "Specialized ecosystem for data wrangling, scientific computing, and visualization.",
    icon: "Boxes",
    color: "indigo",
    skills: [
      { name: "Pandas", level: "Extensive", detail: "DataFrames, Cleansing, Merging, GroupBy, Time Series" },
      { name: "NumPy", level: "Extensive", detail: "Vectorized Operations, Linear Algebra, Multidimensional Arrays" },
      { name: "Matplotlib", level: "Visuals", detail: "Custom Plots, Multi-axis figures, Publication charts" },
      { name: "Seaborn", level: "Statistical", detail: "Distribution plots, Heatmaps, Correlation matrices" }
    ]
  },
  {
    title: "Databases & Storage",
    description: "Relational database systems for structured transaction and warehouse querying.",
    icon: "Database",
    color: "emerald",
    skills: [
      { name: "MySQL", level: "Relational", detail: "Schema design, Indexing, CRUD, Complex query execution" }
    ]
  },
  {
    title: "CS Fundamentals",
    description: "Core computer science principles ensuring optimized code, logic, and systems.",
    icon: "Cpu",
    color: "amber",
    skills: [
      { name: "DSA", level: "Problem Solving", detail: "Arrays, Hash Maps, Trees, Graphs, Sorting & Searching" },
      { name: "OOP", level: "Object Oriented", detail: "Encapsulation, Inheritance, Polymorphism, Clean Architecture" },
      { name: "Operating Systems", level: "Core Concepts", detail: "Processes, Threads, Memory Management, Concurrency" }
    ]
  },
  {
    title: "Tools & Version Control",
    description: "Workflow tools for reproducible analysis and collaborative versioning.",
    icon: "GitBranch",
    color: "rose",
    skills: [
      { name: "Git", level: "Daily Use", detail: "Branching, Merging, Commit hygiene, Conflict resolution" },
      { name: "GitHub", level: "Daily Use", detail: "Repository hosting, Open-source workflows, Documentation" }
    ]
  }
];

export const projects = [
  {
    id: "sales-revenue-analytics",
    title: "Sales & Revenue Analytics Dashboard",
    featured: true,
    tagline: "End-to-end commercial performance & transaction analytics engine",
    techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "Chart.js", "Analytics KPIs"],
    description: "Interactive sales analytics dashboard designed to analyze revenue, profit, orders, customers, products, categories, and regional performance through KPI cards, filters, search, and transaction-level analysis.",
    highlights: [
      "Revenue & Profit Margin tracking across multi-channel sales pipelines",
      "Dynamic Order trend forecasting with customizable date-range filtering",
      "Customer segment behavior & Lifetime Value (LTV) cohort analysis",
      "Granular Product & Category breakdown to identify top performers and margin-bleeders",
      "Regional performance heatmap mapping revenue distribution across territories",
      "Live interactive transaction search and instant multi-metric filtering engine"
    ],
    kpis: [
      { label: "Total Revenue Analyzed", value: "$482,500+", change: "+18.4% YoY", trend: "up" },
      { label: "Processed Orders", value: "12,840", change: "+14.2% MoM", trend: "up" },
      { label: "Average Profit Margin", value: "24.6%", change: "+3.1% Target", trend: "up" },
      { label: "Customer Retention", value: "68.2%", change: "+5.4%", trend: "up" }
    ],
    githubUrl: "https://github.com/ayushdas-tech/sales-revenue-analytics-dashboard",
    liveDemoUrl: "https://sales-revenue-analytics-dashboard.netlify.app/",
    hasRealLinks: true,
    category: "Business Intelligence & Dashboarding",
    accentColor: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderColor: "border-cyan-500/30",
    glowColor: "shadow-glow-cyan"
  },
  {
    id: "retail-sales-health-check",
    title: "Retail Sales Health Check",
    featured: true,
    tagline: "SQL-driven profitability diagnostics & discount erosion modeling",
    techStack: ["SQL (MySQL)", "HTML5", "CSS3", "JavaScript", "Chart.js", "Data Modeling"],
    description: "SQL-driven retail analysis focused on identifying profitable categories and regions while accounting for the impact of discounts. The findings are presented through a responsive web report with data visualizations and business recommendations.",
    highlights: [
      "Multi-level SQL aggregation diagnosing where heavy discounting cannibalizes net gross margin",
      "Region-by-Region profitability index identifying underperforming sales hubs",
      "Product category matrix ranking items by net operating profit vs gross volume",
      "Actionable business recommendations proposing calibrated discount ceilings",
      "Interactive sensitivity charts modeling revenue recovery under revised discount policies"
    ],
    kpis: [
      { label: "Discount Bleed Detected", value: "-$34,200", change: "Recoverable Margin", trend: "neutral" },
      { label: "High-Margin Categories", value: "4 of 7", change: "Expansion Focus", trend: "up" },
      { label: "Recommended Price Tiers", value: "3 Tiers", change: "+8.2% Proj. Gain", trend: "up" },
      { label: "SQL Queries Analyzed", value: "25+ Complex", change: "CTEs & Windows", trend: "up" }
    ],
    githubUrl: "GITHUB_LINK_TO_BE_ADDED",
    liveDemoUrl: "LIVE_DEMO_LINK_TO_BE_ADDED",
    hasRealLinks: false,
    category: "SQL Data Analysis & Commercial Strategy",
    accentColor: "from-indigo-500/20 via-purple-500/10 to-transparent",
    borderColor: "border-indigo-500/30",
    glowColor: "shadow-glow-blue"
  }
];

export const certifications = [
  {
    title: "Data Structures & Algorithms",
    issuer: "Coder Army",
    badge: "DSA & Problem Solving",
    date: "Certified",
    description: "Rigorous training in computational problem solving, array manipulations, time/space complexity analysis, recursion, and core data structures.",
    skillsCovered: ["Data Structures", "Algorithms", "C++", "Complexity Analysis", "Logic Building"],
    icon: "Binary",
    verified: true
  },
  {
    title: "Data Analytics",
    issuer: "CodeWithHarry",
    badge: "Analytics & Python Stack",
    date: "Certified",
    description: "Practical end-to-end data analytics workflow covering exploratory data analysis (EDA), Pandas data cleaning, SQL query writing, and visualization techniques.",
    skillsCovered: ["Python for Analytics", "Pandas", "NumPy", "SQL Joins & Grouping", "Data Visualization"],
    icon: "PieChart",
    verified: true
  }
];

export const quickStats = [
  { label: "Analytical Toolkit", value: "Python · SQL · BI" },
  { label: "Education", value: "B.Tech CSBS (2027)" },
  { label: "Projects Completed", value: "2 End-to-End Case Studies" },
  { label: "Core Focus", value: "Turning Data into Decisions" }
];
