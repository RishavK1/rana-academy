import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingDock from '@/components/FloatingDock';
import { Button } from '@/components/ui/button';
import { Trophy, Award } from 'lucide-react';
import { toppers } from '@/data/toppers';
import { motion } from 'framer-motion';

const Results = () => {
  const [filter, setFilter] = useState<string>('All');
  const [yearFilter, setYearFilter] = useState<number | 'All'>('All');
  
  const examFilters = ['All', 'JEE Advanced', 'JEE Main', 'CBSE'];
  const years: (number | 'All')[] = ['All', 2024, 2023];
  
  const filteredToppers = toppers.filter(t => {
    const examMatch = filter === 'All' || t.exam.includes(filter);
    const yearMatch = yearFilter === 'All' || t.year === yearFilter;
    return examMatch && yearMatch;
  });

  return (
    <>
      <Helmet>
        <title>Results & Toppers - Rana Academy of Chemistry</title>
        <meta name="description" content="Our proud toppers who excelled in JEE and CBSE board exams. 95% success rate with 500+ JEE selections." />
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
                className="w-20 h-20 bg-warm-yellow rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Trophy className="w-10 h-10 text-navy" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4"
              >
                Our Toppers
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                Celebrating excellence and academic achievements of our brilliant students
              </motion.p>
            </div>
          </section>

          {/* Filters */}
          <section className="py-8 bg-background border-b">
            <div className="container mx-auto px-4">
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">Filter by Exam:</p>
                <div className="flex flex-wrap gap-2">
                  {examFilters.map((filterName) => (
                    <button
                      key={filterName}
                      onClick={() => setFilter(filterName)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
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
              <div>
                <p className="text-sm text-muted-foreground mb-2">Filter by Year:</p>
                <div className="flex flex-wrap gap-2">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => setYearFilter(year)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        yearFilter === year
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-secondary text-slate hover:bg-primary/10'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Results Grid */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredToppers.map((topper, index) => (
                  <motion.div
                    key={topper.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="card-soft p-6 text-center"
                  >
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <div className="w-full h-full rounded-full bg-sky flex items-center justify-center font-heading font-bold text-3xl text-primary">
                        {topper.name.charAt(0)}
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-warm-yellow flex items-center justify-center">
                        <Trophy className="w-5 h-5 text-navy" />
                      </div>
                    </div>

                    <h3 className="font-heading font-semibold text-lg text-navy mb-1">
                      {topper.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-2">{topper.exam}</p>
                    
                    <div className="flex items-center justify-center gap-2 mb-3 p-3 bg-secondary rounded-lg">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="font-bold text-navy text-lg">
                        {topper.rank || topper.percentile || topper.score}
                      </span>
                    </div>

                    <p className="text-xs text-muted-foreground">Year: {topper.year}</p>

                    {topper.testimonial && (
                      <p className="text-xs text-muted-foreground mt-3 italic line-clamp-3">
                        "{topper.testimonial}"
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-gradient-to-r from-primary to-royal-blue text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Be Our Next Success Story
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Join Rana Academy and write your own success story with expert guidance
              </p>
              <Button className="bg-warm-yellow hover:bg-warm-yellow/90 text-navy font-semibold px-8 py-3 rounded-xl">
                Enroll Now
              </Button>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingDock />
      </div>
    </>
  );
};

export default Results;
