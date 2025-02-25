export interface IPost {
  title: string;
  slug: string;
  date: string;
  category: string;
  thumbnail: string;
}

export const posts: IPost[] = [
  {
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    date: "02-24",
    category: "Web Development",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop", // 代码编辑器
  },
  {
    title: "Understanding TypeScript",
    slug: "understanding-typescript",
    date: "02-23",
    category: "Programming",
    thumbnail: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=600&fit=crop", // TypeScript代码
  },
  {
    title: "Modern Web Design Trends",
    slug: "modern-web-design-trends",
    date: "02-22",
    category: "Design",
    thumbnail: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop", // 设计工作台
  },
  {
    title: "React Best Practices",
    slug: "react-best-practices",
    date: "02-21",
    category: "React",
    thumbnail: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=600&fit=crop", // React相关
  },
  {
    title: "The Future of AI",
    slug: "the-future-of-ai",
    date: "02-20",
    category: "Technology",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop", // AI图形
  },
  {
    title: "Mastering CSS Grid",
    slug: "mastering-css-grid",
    date: "02-19",
    category: "CSS",
    thumbnail: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop", // 网格布局
  },
  {
    title: "JavaScript Tips and Tricks",
    slug: "javascript-tips-and-tricks",
    date: "02-18",
    category: "JavaScript",
    thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=600&fit=crop", // JavaScript代码
  },
  {
    title: "Building Responsive Layouts",
    slug: "building-responsive-layouts",
    date: "02-17",
    category: "Web Development",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop", // 响应式设计
  },
  {
    title: "Git Version Control",
    slug: "git-version-control",
    date: "02-16",
    category: "Development Tools",
    thumbnail: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop", // 版本控制
  },
  {
    title: "Web Performance Optimization",
    slug: "web-performance-optimization",
    date: "02-15",
    category: "Performance",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", // 性能优化
  },
];
