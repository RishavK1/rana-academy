import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingDock from '@/components/FloatingDock';
import { Button } from '@/components/ui/button';
import { Award, Users, TrendingUp, Target, Heart, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { instituteData } from '@/data/institute';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Rana Academy of Chemistry</title>
        <meta name="description" content="Learn about Rana Academy's 15+ years of excellence in chemistry education. Founded by Dr. Rajesh Rana, IIT alumnus." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero */}
          <section className="py-16 bg-gradient-to-br from-secondary to-background">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto text-center"
              >
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-6">
                  About Rana Academy
                </h1>
                <p className="text-lg text-muted-foreground">
                  Transforming chemistry education in Karnal since 2009 with passion, dedication, and proven results
                </p>
              </motion.div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Award, label: 'Years of Excellence', value: instituteData.stats.yearsExperience },
                  { icon: Users, label: 'Students Enrolled', value: instituteData.stats.studentsEnrolled },
                  { icon: TrendingUp, label: 'Success Rate', value: instituteData.stats.successRate },
                  { icon: Target, label: 'JEE Selections', value: instituteData.stats.jeeSelections }
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="card-soft p-6 text-center"
                    >
                      <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                      <div className="font-heading font-bold text-3xl text-navy mb-1">
                        {stat.value}
                      </div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6 text-center">
                    Our Story
                  </h2>
                  <div className="space-y-6 text-muted-foreground">
                    <p>
                      Rana Academy of Chemistry was founded in 2009 by Dr. Rajesh Rana, an IIT Delhi alumnus with a
                      Ph.D. in Chemistry and a passion for teaching. What started as a small coaching center with just
                      15 students has grown into Karnal's most trusted name in chemistry education, serving over 5,000
                      students to date.
                    </p>
                    <p>
                      Dr. Rana's vision was simple yet powerful: to make chemistry accessible, interesting, and
                      achievable for every student. He believed that with the right guidance, conceptual clarity, and
                      consistent practice, any student could excel in chemistry—whether for board exams or competitive
                      tests like JEE.
                    </p>
                    <p>
                      Over the years, we've built a team of highly qualified and passionate educators who share this
                      vision. Our faculty members bring decades of combined experience and have themselves been
                      achievers in their academic careers. Many are IIT/NIT alumni, and all are dedicated to student
                      success.
                    </p>
                    <p>
                      Today, Rana Academy is not just a coaching institute—it's a community of learners, achievers,
                      and mentors. Our success is measured not just in ranks and percentiles, but in the confidence and
                      love for chemistry we instill in our students.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-heading text-3xl md:text-4xl font-bold text-navy mb-12 text-center"
              >
                Our Core Values
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  {
                    icon: Heart,
                    title: 'Student-First Approach',
                    description: 'Every decision we make is centered around student success and well-being. We treat each student as unique and provide personalized attention.'
                  },
                  {
                    icon: Target,
                    title: 'Result-Oriented',
                    description: 'We are committed to delivering results through systematic planning, regular assessments, and data-driven teaching methods.'
                  },
                  {
                    icon: BookOpen,
                    title: 'Conceptual Clarity',
                    description: 'We believe in building strong fundamentals rather than rote learning. Our teaching focuses on deep understanding and application.'
                  }
                ].map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="card-soft p-6 text-center"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-sky flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-heading font-semibold text-xl text-navy mb-3">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Our Pedagogy */}
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6 text-center">
                    Our Teaching Methodology
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      'Concept-based learning with real-world applications',
                      'Small batch sizes for personalized attention (max 25 students)',
                      'Regular doubt clearing sessions and one-on-one mentoring',
                      'Weekly tests and monthly comprehensive assessments',
                      'Integration of NCERT with JEE-level problem solving',
                      'Focus on exam strategy, time management, and accuracy',
                      'Recorded lectures available 24/7 for revision',
                      'Parent-teacher meetings for progress tracking'
                    ].map((point, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                        <p className="text-muted-foreground">{point}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-gradient-to-r from-primary to-royal-blue text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Join thousands of successful students who trusted Rana Academy for their chemistry preparation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-warm-yellow hover:bg-warm-yellow/90 text-navy font-semibold px-8 py-3 rounded-xl">
                    Book Free Demo
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button className="bg-white/10 hover:bg-white/20 text-white border border-white font-semibold px-8 py-3 rounded-xl">
                    View Courses
                  </Button>
                </Link>
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

export default About;
