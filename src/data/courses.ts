export interface Course {
  id: string;
  title: string;
  slug: string;
  category: 'CBSE' | 'JEE' | 'Foundation' | 'Crash';
  duration: string;
  mode: string;
  price: string;
  highlights: string[];
  syllabus: { topic: string; subtopics: string[] }[];
  schedule: string;
  thumb: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: "class-xii-chem",
    title: "Class XII Chemistry",
    slug: "class-xii-chemistry",
    category: "CBSE",
    duration: "12 Months",
    mode: "Online + Offline",
    price: "₹45,000/year",
    highlights: [
      "Complete NCERT coverage",
      "Weekly mock tests",
      "Board exam pattern practice",
      "Doubt clearing sessions",
      "Study material included"
    ],
    syllabus: [
      {
        topic: "Solutions",
        subtopics: ["Types of solutions", "Concentration terms", "Raoult's law", "Colligative properties"]
      },
      {
        topic: "Electrochemistry",
        subtopics: ["Redox reactions", "Conductance", "Electrochemical cells", "Nernst equation"]
      },
      {
        topic: "Chemical Kinetics",
        subtopics: ["Rate of reaction", "Order and molecularity", "Arrhenius equation"]
      },
      {
        topic: "d and f Block Elements",
        subtopics: ["Transition elements", "Inner transition elements", "Coordination compounds"]
      }
    ],
    schedule: "Mon-Fri: 5:00 PM - 7:00 PM, Sat: 9:00 AM - 12:00 PM",
    thumb: "/placeholder-course-xii.jpg",
    description: "Comprehensive CBSE Class XII Chemistry course designed for board exam excellence with conceptual clarity and extensive practice."
  },
  {
    id: "class-x-chem",
    title: "Class X Chemistry",
    slug: "class-x-chemistry",
    category: "CBSE",
    duration: "12 Months",
    mode: "Online + Offline",
    price: "₹35,000/year",
    highlights: [
      "NCERT-based teaching",
      "Monthly assessments",
      "Interactive classes",
      "Practical lab sessions",
      "Revision modules"
    ],
    syllabus: [
      {
        topic: "Chemical Reactions and Equations",
        subtopics: ["Types of reactions", "Balancing equations", "Oxidation-reduction"]
      },
      {
        topic: "Acids, Bases and Salts",
        subtopics: ["pH scale", "Indicators", "Common acids and bases", "Neutralization"]
      },
      {
        topic: "Metals and Non-metals",
        subtopics: ["Properties", "Reactivity series", "Extraction of metals", "Corrosion"]
      },
      {
        topic: "Carbon and its Compounds",
        subtopics: ["Covalent bonding", "Nomenclature", "Functional groups", "Homologous series"]
      }
    ],
    schedule: "Mon-Fri: 3:00 PM - 5:00 PM",
    thumb: "/placeholder-course-x.jpg",
    description: "Strong foundation building course for Class X students focusing on conceptual understanding and board exam preparation."
  },
  {
    id: "jee-chem",
    title: "JEE Chemistry",
    slug: "jee-chemistry",
    category: "JEE",
    duration: "24 Months",
    mode: "Online + Offline",
    price: "₹75,000/year",
    highlights: [
      "Complete JEE Main & Advanced syllabus",
      "Daily practice problems",
      "Weekly full-length tests",
      "Previous year paper analysis",
      "Personal mentoring",
      "All India test series"
    ],
    syllabus: [
      {
        topic: "Physical Chemistry",
        subtopics: ["Atomic structure", "Thermodynamics", "Equilibrium", "Electrochemistry", "Chemical kinetics"]
      },
      {
        topic: "Organic Chemistry",
        subtopics: ["Nomenclature", "Isomerism", "GOC", "Reaction mechanisms", "Name reactions"]
      },
      {
        topic: "Inorganic Chemistry",
        subtopics: ["Periodic table", "Chemical bonding", "Coordination chemistry", "Qualitative analysis"]
      }
    ],
    schedule: "Mon-Sat: 6:00 AM - 9:00 AM OR 6:00 PM - 9:00 PM",
    thumb: "/placeholder-course-jee.jpg",
    description: "Intensive JEE preparation program with focus on conceptual depth, problem-solving skills, and exam strategy for top ranks."
  },
  {
    id: "foundation-ix-x",
    title: "Foundation (IX-X)",
    slug: "foundation-chemistry",
    category: "Foundation",
    duration: "24 Months",
    mode: "Online + Offline",
    price: "₹40,000/year",
    highlights: [
      "Early JEE preparation",
      "School board integration",
      "Concept building focus",
      "Olympiad preparation",
      "Critical thinking development"
    ],
    syllabus: [
      {
        topic: "Basic Concepts",
        subtopics: ["Matter", "Atoms and molecules", "Structure of atom", "Classification"]
      },
      {
        topic: "Chemical Bonding",
        subtopics: ["Ionic bonding", "Covalent bonding", "Lewis structures", "VSEPR theory"]
      },
      {
        topic: "States of Matter",
        subtopics: ["Gases", "Liquids", "Solids", "Phase transitions"]
      }
    ],
    schedule: "Mon-Fri: 4:00 PM - 6:00 PM",
    thumb: "/placeholder-course-foundation.jpg",
    description: "Early foundation program for Classes IX-X integrating school syllabus with JEE preparation for a strong base."
  },
  {
    id: "crash-course",
    title: "JEE Crash Course",
    slug: "jee-crash-course",
    category: "Crash",
    duration: "3-6 Months",
    mode: "Online + Offline",
    price: "₹30,000",
    highlights: [
      "Rapid revision",
      "Important topics focus",
      "Formula sheets",
      "Shortcut techniques",
      "20+ full-length tests",
      "Exam strategy sessions"
    ],
    syllabus: [
      {
        topic: "High-Weightage Topics",
        subtopics: ["Mole concept", "Equilibrium", "Electrochemistry", "GOC", "Coordination chemistry"]
      },
      {
        topic: "Quick Revision Modules",
        subtopics: ["All important reactions", "Name reactions", "Formulas", "Exceptions"]
      }
    ],
    schedule: "Daily: 6 hours (Flexible timings)",
    thumb: "/placeholder-course-crash.jpg",
    description: "Intensive crash course for last-minute JEE preparation covering high-weightage topics with extensive test practice."
  },
  {
    id: "test-series",
    title: "JEE Test Series",
    slug: "jee-test-series",
    category: "Crash",
    duration: "6 Months",
    mode: "Online",
    price: "₹15,000",
    highlights: [
      "30+ full-length mocks",
      "Chapter-wise tests",
      "All India ranking",
      "Detailed solutions",
      "Performance analytics",
      "Video explanations"
    ],
    syllabus: [
      {
        topic: "Mock Tests",
        subtopics: ["JEE Main pattern", "JEE Advanced pattern", "Mixed difficulty levels"]
      }
    ],
    schedule: "Online - Flexible",
    thumb: "/placeholder-course-test.jpg",
    description: "Comprehensive test series with detailed analysis to track progress and improve exam temperament for JEE."
  }
];
