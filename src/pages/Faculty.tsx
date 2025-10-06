import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingDock from '@/components/FloatingDock';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { GraduationCap, Award } from 'lucide-react';
import { faculty, Faculty as FacultyType } from '@/data/faculty';
import { motion } from 'framer-motion';

const Faculty = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyType | null>(null);

  return (
    <>
      <Helmet>
        <title>Our Faculty - Rana Academy of Chemistry</title>
        <meta name="description" content="Meet our expert chemistry faculty. IIT/NIT alumni with 10+ years of teaching experience. JEE specialists and board exam mentors." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero */}
          <section className="py-16 bg-gradient-to-br from-secondary to-background">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <GraduationCap className="w-10 h-10 text-white" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4"
              >
                Meet Our Expert Faculty
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                Learn from the best—our team of passionate educators with decades of combined experience
              </motion.p>
            </div>
          </section>

          {/* Faculty Grid */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {faculty.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="card-soft overflow-hidden group cursor-pointer"
                    onClick={() => setSelectedFaculty(member)}
                  >
                    <div className="aspect-square bg-sky flex items-center justify-center text-6xl font-heading font-bold text-primary">
                      {member.name.charAt(0)}{member.name.split(' ')[1]?.charAt(0)}
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading font-semibold text-xl text-navy mb-1 group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Award className="w-4 h-4 text-primary" />
                          <span>{member.expYears}+ years experience</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <strong>Specialization:</strong> {member.subjects.join(', ')}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.badges.map((badge, idx) => (
                          <span
                            key={idx}
                            className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                        {member.bio}
                      </p>

                      <Button className="btn-hero w-full group-hover:shadow-lg">
                        View Profile
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Experience World-Class Teaching
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a free demo class and interact with our expert faculty
              </p>
              <Button className="btn-hero">Book Free Demo Class</Button>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingDock />

        {/* Faculty Detail Modal */}
        <Dialog open={selectedFaculty !== null} onOpenChange={() => setSelectedFaculty(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedFaculty && (
              <>
                <DialogHeader>
                  <DialogTitle className="font-heading text-2xl text-navy">
                    {selectedFaculty.name}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="aspect-square w-32 h-32 bg-sky rounded-full flex items-center justify-center text-4xl font-heading font-bold text-primary mx-auto">
                    {selectedFaculty.name.charAt(0)}{selectedFaculty.name.split(' ')[1]?.charAt(0)}
                  </div>
                  
                  <div className="text-center">
                    <p className="text-primary font-semibold mb-2">{selectedFaculty.role}</p>
                    <p className="text-sm text-muted-foreground">{selectedFaculty.expYears}+ years of teaching experience</p>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {selectedFaculty.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <div>
                    <h4 className="font-semibold text-navy mb-2">About</h4>
                    <p className="text-muted-foreground">{selectedFaculty.bio}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-navy mb-2">Specialization</h4>
                    <p className="text-muted-foreground">{selectedFaculty.subjects.join(', ')}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-navy mb-2">Qualifications</h4>
                    <ul className="space-y-1">
                      {selectedFaculty.qualifications.map((qual, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-primary">•</span>
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Faculty;
