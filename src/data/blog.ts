export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  cover: string;
  content: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "Top 10 Tips for JEE Chemistry Preparation",
    slug: "top-10-tips-jee-chemistry",
    date: "2024-09-15",
    author: "Dr. Rajesh Rana",
    excerpt: "Master JEE Chemistry with these proven strategies from our 15+ years of coaching experience. Learn how to balance all three sections effectively.",
    cover: "/placeholder-blog-1.jpg",
    content: "Full article content here...",
    category: "JEE Preparation",
    readTime: "5 min read"
  },
  {
    id: "b2",
    title: "Organic Chemistry: How to Remember Name Reactions",
    slug: "organic-chemistry-name-reactions",
    date: "2024-09-10",
    author: "Prof. Meera Kapoor",
    excerpt: "Struggling with organic name reactions? Discover memory techniques and mnemonics that make remembering 50+ reactions effortless.",
    cover: "/placeholder-blog-2.jpg",
    content: "Full article content here...",
    category: "Study Tips",
    readTime: "7 min read"
  },
  {
    id: "b3",
    title: "CBSE Class XII Chemistry Board Exam Pattern 2025",
    slug: "cbse-xii-chemistry-pattern-2025",
    date: "2024-09-05",
    author: "Ms. Kavita Yadav",
    excerpt: "Complete analysis of the new CBSE Class XII Chemistry exam pattern with marking scheme, important topics, and preparation strategy.",
    cover: "/placeholder-blog-3.jpg",
    content: "Full article content here...",
    category: "Board Exams",
    readTime: "6 min read"
  },
  {
    id: "b4",
    title: "Physical Chemistry: Mastering Numerical Problems",
    slug: "physical-chemistry-numericals",
    date: "2024-08-28",
    author: "Dr. Sunita Sharma",
    excerpt: "Step-by-step approach to solve physical chemistry numericals faster and accurately. Includes practice problems and shortcuts.",
    cover: "/placeholder-blog-4.jpg",
    content: "Full article content here...",
    category: "Study Tips",
    readTime: "8 min read"
  },
  {
    id: "b5",
    title: "JEE Main vs JEE Advanced Chemistry: Key Differences",
    slug: "jee-main-vs-advanced-chemistry",
    date: "2024-08-20",
    author: "Er. Amit Chawla",
    excerpt: "Understand the crucial differences between JEE Main and Advanced chemistry papers to prepare strategically for both exams.",
    cover: "/placeholder-blog-5.jpg",
    content: "Full article content here...",
    category: "JEE Preparation",
    readTime: "6 min read"
  },
  {
    id: "b6",
    title: "Inorganic Chemistry: Color Memory Techniques",
    slug: "inorganic-chemistry-colors",
    date: "2024-08-15",
    author: "Er. Amit Chawla",
    excerpt: "Never forget coordination compound colors again! Learn visual memory techniques for inorganic chemistry.",
    cover: "/placeholder-blog-6.jpg",
    content: "Full article content here...",
    category: "Study Tips",
    readTime: "5 min read"
  }
];
