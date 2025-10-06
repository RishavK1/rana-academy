import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingDock from '@/components/FloatingDock';
import { Button } from '@/components/ui/button';
import { Clock, Video, CheckCircle } from 'lucide-react';
import { courses } from '@/data/courses';
import courseLabImg from '@/assets/course-lab.jpg';
import { motion } from 'framer-motion';

const Courses = () => {
  const [filter, setFilter] = useState<string>('All');
  
  const filters = ['All', 'CBSE', 'JEE', 'Foundation', 'Crash'];
  
  const filteredCourses = filter === 'All'
    ? courses
    : courses.filter(c => c.category === filter);

  return (
    <>
      <Helmet>
        <title>Courses - Rana Academy of Chemistry</title>
        <meta name="description" content="Comprehensive chemistry courses for CBSE Class X-XII, JEE Main & Advanced, Foundation, and Crash programs. Expert faculty, proven results." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Page Header */}
          <section className="py-12 bg-secondary">
            <div className="container mx-auto px-4 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4"
              >
                Our Courses
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                Choose from our comprehensive range of chemistry programs designed for success
              </motion.p>
            </div>
          </section>

          {/* Filters */}
          <section className="py-8 bg-background border-b">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-2">
                {filters.map((filterName) => (
                  <button
                    key={filterName}
                    onClick={() => setFilter(filterName)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      filter === filterName
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-secondary text-slate hover:bg-primary/10'
                    }`}
                  >
                    {filterName}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Courses Grid */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="card-soft overflow-hidden flex flex-col"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={courseLabImg}
                        alt={course.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3 self-start">
                        {course.category}
                      </div>
                      <h3 className="font-heading font-semibold text-2xl text-navy mb-2">
                        {course.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-1">
                        {course.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-slate">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate">
                          <Video className="w-4 h-4 text-primary" />
                          <span>{course.mode}</span>
                        </div>
                      </div>

                      <div className="mb-4 space-y-1">
                        {course.highlights.slice(0, 3).map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t mt-auto">
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-heading font-bold text-xl text-navy">
                            {course.price}
                          </span>
                        </div>
                        <Link to={`/courses/${course.slug}`}>
                          <Button className="btn-hero w-full">View Details</Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Not Sure Which Course to Choose?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a free counselling session with our expert advisors
              </p>
              <Link to="/contact">
                <Button className="btn-hero">Book Free Counselling</Button>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingDock />
      </div>
    </>
  );
};

export default Courses;
