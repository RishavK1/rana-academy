export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export const gallery: GalleryImage[] = [
  { id: "g1", src: "/placeholder-gallery-1.jpg", alt: "Chemistry lab practical session", category: "Labs" },
  { id: "g2", src: "/placeholder-gallery-2.jpg", alt: "Interactive classroom teaching", category: "Classes" },
  { id: "g3", src: "/placeholder-gallery-3.jpg", alt: "Students during doubt clearing session", category: "Classes" },
  { id: "g4", src: "/placeholder-gallery-4.jpg", alt: "JEE toppers celebration", category: "Events" },
  { id: "g5", src: "/placeholder-gallery-5.jpg", alt: "Mock test in progress", category: "Exams" },
  { id: "g6", src: "/placeholder-gallery-6.jpg", alt: "Faculty team meeting", category: "Faculty" },
  { id: "g7", src: "/placeholder-gallery-7.jpg", alt: "Student seminar", category: "Events" },
  { id: "g8", src: "/placeholder-gallery-8.jpg", alt: "Chemistry models exhibition", category: "Events" },
  { id: "g9", src: "/placeholder-gallery-9.jpg", alt: "Online class setup", category: "Classes" },
  { id: "g10", src: "/placeholder-gallery-10.jpg", alt: "Award ceremony", category: "Events" }
];
