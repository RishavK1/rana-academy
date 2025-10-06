export interface Testimonial {
  id: string;
  name: string;
  class: string;
  text: string;
  rating: number;
  photo: string;
  course: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "test1",
    name: "Ankit Verma",
    class: "JEE 2024",
    text: "Best decision of my life! The faculty here don't just teach, they mentor. Dr. Rana's physical chemistry classes were phenomenal. Highly recommend for serious JEE aspirants.",
    rating: 5,
    photo: "/placeholder-student-1.jpg",
    course: "JEE Chemistry"
  },
  {
    id: "test2",
    name: "Shreya Malhotra",
    class: "Class XII 2024",
    text: "I was weak in organic chemistry, but Prof. Kapoor's teaching changed everything. Scored 96 in boards! The study material is excellent and well-organized.",
    rating: 5,
    photo: "/placeholder-student-2.jpg",
    course: "Class XII Chemistry"
  },
  {
    id: "test3",
    name: "Rahul Jain",
    class: "JEE 2024",
    text: "The test series here is comparable to FIITJEE and Allen. Regular mocks helped me improve my speed and accuracy. Got 99.5 percentile in JEE Main!",
    rating: 5,
    photo: "/placeholder-student-3.jpg",
    course: "JEE Test Series"
  },
  {
    id: "test4",
    name: "Pooja Kumari",
    class: "Class X 2024",
    text: "Very supportive teachers who clear even the smallest doubts. The environment is student-friendly. My chemistry improved from 65% to 92%!",
    rating: 5,
    photo: "/placeholder-student-4.jpg",
    course: "Class X Chemistry"
  },
  {
    id: "test5",
    name: "Siddharth Sharma",
    class: "JEE 2023",
    text: "Foundation course here gave me a head start. When I reached Class XI, I was already ahead of my peers. Now studying at IIT Bombay thanks to Rana Academy!",
    rating: 5,
    photo: "/placeholder-student-5.jpg",
    course: "Foundation Program"
  },
  {
    id: "test6",
    name: "Nisha Gupta",
    class: "JEE 2024",
    text: "The crash course was intense but totally worth it. Covered all important topics in 3 months with 25 full tests. Improved my score by 40 marks!",
    rating: 5,
    photo: "/placeholder-student-6.jpg",
    course: "JEE Crash Course"
  }
];
