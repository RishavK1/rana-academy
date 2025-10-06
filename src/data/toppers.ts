export interface Topper {
  id: string;
  name: string;
  exam: string;
  rank?: string;
  percentile?: string;
  score?: string;
  year: number;
  photo: string;
  testimonial?: string;
}

export const toppers: Topper[] = [
  {
    id: "t1",
    name: "Aryan Sharma",
    exam: "JEE Advanced",
    rank: "AIR 127",
    year: 2024,
    photo: "/placeholder-topper-1.jpg",
    testimonial: "Rana Academy's structured approach and personal attention helped me achieve my dream rank!"
  },
  {
    id: "t2",
    name: "Priya Verma",
    exam: "JEE Main",
    percentile: "99.8%",
    year: 2024,
    photo: "/placeholder-topper-2.jpg",
    testimonial: "The test series and doubt sessions were invaluable for my preparation."
  },
  {
    id: "t3",
    name: "Rohit Kumar",
    exam: "CBSE Class XII",
    score: "98/100",
    year: 2024,
    photo: "/placeholder-topper-3.jpg",
    testimonial: "Perfect coaching for board exams with excellent study material."
  },
  {
    id: "t4",
    name: "Sneha Gupta",
    exam: "JEE Advanced",
    rank: "AIR 245",
    year: 2024,
    photo: "/placeholder-topper-4.jpg"
  },
  {
    id: "t5",
    name: "Vikas Singh",
    exam: "JEE Main",
    percentile: "99.6%",
    year: 2024,
    photo: "/placeholder-topper-5.jpg"
  },
  {
    id: "t6",
    name: "Anjali Rao",
    exam: "CBSE Class XII",
    score: "96/100",
    year: 2024,
    photo: "/placeholder-topper-6.jpg"
  },
  {
    id: "t7",
    name: "Karan Malhotra",
    exam: "JEE Advanced",
    rank: "AIR 389",
    year: 2023,
    photo: "/placeholder-topper-7.jpg"
  },
  {
    id: "t8",
    name: "Divya Patel",
    exam: "JEE Main",
    percentile: "99.7%",
    year: 2023,
    photo: "/placeholder-topper-8.jpg"
  }
];
