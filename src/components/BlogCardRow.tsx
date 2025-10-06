import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import blogStudyImg from '@/assets/blog-study.jpg';
import blogTeachingImg from '@/assets/blog-teaching.jpg';
import { motion } from 'framer-motion';

const BlogCardRow = () => {
  const featuredBlogs = blogPosts.slice(0, 3);
  
  const getImage = (index: number) => {
    return index % 2 === 0 ? blogStudyImg : blogTeachingImg;
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-2">
              Our Latest Blogs
            </h2>
            <p className="text-muted-foreground">
              Expert tips, study techniques, and chemistry insights
            </p>
          </div>
          <Link to="/blog">
            <Button className="btn-hero hidden md:flex">
              View All
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBlogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-soft overflow-hidden group"
            >
              <Link to={`/blog/${blog.slug}`}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={getImage(index)}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(blog.date).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {blog.author}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-navy mb-2 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <button className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/blog">
            <Button className="btn-hero">View All Blogs</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogCardRow;
