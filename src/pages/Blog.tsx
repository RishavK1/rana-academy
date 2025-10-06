import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingDock from '@/components/FloatingDock';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import blogStudyImg from '@/assets/blog-study.jpg';
import blogTeachingImg from '@/assets/blog-teaching.jpg';
import { motion } from 'framer-motion';

const Blog = () => {
  const getImage = (index: number) => {
    return index % 2 === 0 ? blogStudyImg : blogTeachingImg;
  };

  return (
    <>
      <Helmet>
        <title>Blog - Rana Academy of Chemistry</title>
        <meta name="description" content="Expert chemistry tips, study techniques, JEE preparation strategies, and board exam guidance from Rana Academy faculty." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero */}
          <section className="py-16 bg-gradient-to-br from-secondary to-background">
            <div className="container mx-auto px-4 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4"
              >
                Chemistry Insights & Tips
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                Expert advice, study strategies, and chemistry knowledge from our experienced faculty
              </motion.p>
            </div>
          </section>

          {/* Blog Grid */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="card-soft overflow-hidden group"
                  >
                    <Link to={`/blog/${post.slug}`}>
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={getImage(index)}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                          {post.category}
                        </div>
                        
                        <h2 className="font-heading font-semibold text-xl text-navy mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString('en-US', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <button className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get the latest chemistry tips, study strategies, and exam updates delivered to your inbox
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="btn-hero whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingDock />
      </div>
    </>
  );
};

export default Blog;
