export interface Faculty {
  id: string;
  name: string;
  role: string;
  subjects: string[];
  expYears: number;
  badges: string[];
  bio: string;
  photo: string;
  qualifications: string[];
}

export const faculty: Faculty[] = [
  {
    id: "f1",
    name: "Dr. Rajesh Rana",
    role: "Director & Senior Faculty",
    subjects: ["Physical Chemistry", "Inorganic Chemistry"],
    expYears: 18,
    badges: ["JEE Expert", "Ph.D. Chemistry"],
    bio: "Dr. Rana brings 18 years of excellence in JEE coaching with a doctorate in Chemistry. His unique teaching methodology has produced hundreds of top rankers. He specializes in making complex physical chemistry concepts crystal clear.",
    photo: "/placeholder-faculty-1.jpg",
    qualifications: ["Ph.D. in Chemistry (IIT Delhi)", "M.Sc. Chemistry", "NET & GATE Qualified"]
  },
  {
    id: "f2",
    name: "Prof. Meera Kapoor",
    role: "Senior Faculty",
    subjects: ["Organic Chemistry"],
    expYears: 12,
    badges: ["Organic Chemistry Specialist", "Board Mentor"],
    bio: "Prof. Kapoor is renowned for her systematic approach to organic chemistry. Her students consistently score full marks in organic sections. She has authored multiple chemistry reference books.",
    photo: "/placeholder-faculty-2.jpg",
    qualifications: ["M.Sc. Organic Chemistry (DU)", "B.Ed.", "15+ years teaching experience"]
  },
  {
    id: "f3",
    name: "Er. Amit Chawla",
    role: "Faculty - Inorganic Chemistry",
    subjects: ["Inorganic Chemistry", "Chemical Bonding"],
    expYears: 10,
    badges: ["JEE Mentor", "Coordination Chemistry Expert"],
    bio: "Er. Chawla makes inorganic chemistry interesting with real-world applications and memory techniques. His coordination chemistry classes are highly popular among JEE aspirants.",
    photo: "/placeholder-faculty-3.jpg",
    qualifications: ["M.Sc. Inorganic Chemistry", "JEE Advanced AIR 567"]
  },
  {
    id: "f4",
    name: "Dr. Sunita Sharma",
    role: "Faculty - Physical Chemistry",
    subjects: ["Physical Chemistry", "Chemical Kinetics"],
    expYears: 14,
    badges: ["Thermodynamics Expert", "Board Mentor"],
    bio: "Dr. Sharma's numerical problem-solving sessions are legendary. She specializes in thermodynamics and kinetics, helping students master calculation-heavy chapters with ease.",
    photo: "/placeholder-faculty-4.jpg",
    qualifications: ["Ph.D. Physical Chemistry", "Gold Medalist M.Sc."]
  },
  {
    id: "f5",
    name: "Prof. Vikram Singh",
    role: "Doubt Resolution Specialist",
    subjects: ["All Chemistry Topics"],
    expYears: 8,
    badges: ["Doubt Clinics Expert", "Test Series Coordinator"],
    bio: "Prof. Singh heads our doubt clearing sessions and ensures no student's question goes unanswered. His patient teaching style helps students overcome their fear of chemistry.",
    photo: "/placeholder-faculty-5.jpg",
    qualifications: ["M.Sc. Chemistry", "B.Ed.", "Former IIT-JEE Ranker"]
  },
  {
    id: "f6",
    name: "Ms. Kavita Yadav",
    role: "CBSE Board Specialist",
    subjects: ["Class X-XII Chemistry"],
    expYears: 9,
    badges: ["Board Exam Expert", "NCERT Specialist"],
    bio: "Ms. Yadav specializes in CBSE board exam preparation with deep understanding of marking schemes and examiner expectations. Her students regularly achieve 95+ scores.",
    photo: "/placeholder-faculty-6.jpg",
    qualifications: ["M.Sc. Chemistry (Distinction)", "B.Ed.", "CTET Qualified"]
  }
];
