import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingDock from '@/components/FloatingDock';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Clock, Video, CheckCircle, Calendar, ArrowRight, Phone } from 'lucide-react';
import { courses } from '@/data/courses';
import courseLabImg from '@/assets/course-lab.jpg';
import { toast } from '@/hooks/use-toast';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { instituteData } from '@/data/institute';

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = courses.find(c => c.slug === slug);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-heading font-bold text-navy mb-4">Course Not Found</h1>
            <p className="text-muted-foreground mb-8">The course you're looking for doesn't exist.</p>
            <Link to="/courses">
              <Button className="btn-hero">View All Courses</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedCourses = courses.filter(c => c.category === course.category && c.id !== course.id).slice(0, 3);

  const handleEnquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 500));
    
    toast({
      title: "Enquiry submitted!",
      description: "Our team will contact you within 24 hours.",
    });
    
    setFormData({ name: '', phone: '', email: '' });
  };

  const handleCall = () => {
    window.location.href = `tel:${instituteData.contact.phones[0]}`;
  };

  return (
    <>
      <Helmet>
        <title>{course.title} - Rana Academy of Chemistry</title>
        <meta name="description" content={course.description} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Banner */}
          <section className="relative py-16 bg-gradient-to-br from-secondary to-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                    {course.category}
                  </div>
                  <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4">
                    {course.title}
                  </h1>
                  <p className="text-lg text-muted-foreground mb-6">
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-slate">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate">
                      <Video className="w-5 h-5 text-primary" />
                      <span className="font-medium">{course.mode}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-medium">{course.schedule.split(':')[0]}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-heading font-bold text-3xl text-navy">
                      {course.price}
                    </span>
                    <Button className="btn-hero">Enroll Now</Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="card-soft overflow-hidden"
                >
                  <img
                    src={courseLabImg}
                    alt={course.title}
                    className="w-full aspect-video object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Course Details */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Course Highlights */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="card-soft p-8"
                  >
                    <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                      Course Highlights
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {course.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Syllabus */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="card-soft p-8"
                  >
                    <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                      Detailed Syllabus
                    </h2>
                    <Accordion type="single" collapsible className="w-full">
                      {course.syllabus.map((topic, idx) => (
                        <AccordionItem key={idx} value={`item-${idx}`}>
                          <AccordionTrigger className="font-semibold text-navy hover:text-primary">
                            {topic.topic}
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 pl-4">
                              {topic.subtopics.map((subtopic, subIdx) => (
                                <li key={subIdx} className="text-muted-foreground flex items-start gap-2">
                                  <span className="text-primary">•</span>
                                  {subtopic}
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </motion.div>

                  {/* Schedule */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="card-soft p-8"
                  >
                    <h2 className="font-heading text-2xl font-bold text-navy mb-4">
                      Class Schedule
                    </h2>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-muted-foreground">{course.schedule}</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          * Schedule can be customized based on batch availability
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Fee Structure */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="card-soft p-8"
                  >
                    <h2 className="font-heading text-2xl font-bold text-navy mb-4">
                      Fee Structure
                    </h2>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="font-heading font-bold text-4xl text-navy">
                        {course.price}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>✓ Includes all study material</p>
                      <p>✓ Access to recorded lectures</p>
                      <p>✓ Mock tests and assessments</p>
                      <p>✓ Doubt clearing sessions</p>
                      <p className="text-primary font-medium mt-3">EMI options available</p>
                    </div>
                  </motion.div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Enquiry Form */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="card-soft p-6 sticky top-24"
                  >
                    <h3 className="font-heading text-xl font-bold text-navy mb-4">
                      Enquire Now
                    </h3>
                    <form onSubmit={handleEnquiry} className="space-y-4">
                      <div>
                        <Input
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Input
                          type="tel"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                      <Button type="submit" className="btn-hero w-full">
                        Submit Enquiry
                      </Button>
                    </form>

                    <div className="mt-4 pt-4 border-t">
                      <Button onClick={handleCall} variant="outline" className="w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </div>

                    <div className="mt-4 text-xs text-muted-foreground text-center">
                      Our team will contact you within 24 hours
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Courses */}
          {relatedCourses.length > 0 && (
            <section className="py-16 bg-secondary">
              <div className="container mx-auto px-4">
                <h2 className="font-heading text-3xl font-bold text-navy mb-8 text-center">
                  Related Courses
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedCourses.map((relatedCourse, idx) => (
                    <motion.div
                      key={relatedCourse.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="card-soft overflow-hidden"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={courseLabImg}
                          alt={relatedCourse.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                          {relatedCourse.category}
                        </div>
                        <h3 className="font-heading font-semibold text-xl text-navy mb-2">
                          {relatedCourse.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {relatedCourse.description}
                        </p>
                        <Link to={`/courses/${relatedCourse.slug}`}>
                          <Button className="btn-hero w-full group">
                            View Details
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>

        <Footer />
        <FloatingDock />
      </div>
    </>
  );
};

export default CourseDetail;
