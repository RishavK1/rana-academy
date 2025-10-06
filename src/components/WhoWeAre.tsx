import { Button } from '@/components/ui/button';
import { BookOpen, Award, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import whoWeAreImg from '@/assets/who-we-are.jpg';
import { motion } from 'framer-motion';

const WhoWeAre = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image with floating badges */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={whoWeAreImg}
                alt="Student learning chemistry at Rana Academy"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              
              {/* Floating Icon Badges */}
              <div className="absolute top-8 left-8 w-12 h-12 bg-warm-yellow rounded-xl flex items-center justify-center shadow-lg animate-float">
                <BookOpen className="w-6 h-6 text-navy" />
              </div>
              <div className="absolute top-1/2 right-8 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="absolute bottom-12 left-12 w-12 h-12 bg-sky border-2 border-primary rounded-xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <Users className="w-6 h-6 text-primary" />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Who We Are
            </h2>
            <p className="text-muted-foreground mb-6">
              Rana Academy of Chemistry is Karnal's most trusted name in chemistry education
              for the past 15 years. Founded by Dr. Rajesh Rana, an IIT alumnus and passionate
              educator, we've guided over 5,000 students to achieve their academic dreams.
            </p>
            <p className="text-muted-foreground mb-6">
              Our teaching philosophy combines deep conceptual understanding with extensive
              practice and personal mentorship. We don't just prepare students for exams;
              we instill a genuine love for chemistry that lasts a lifetime.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-heading font-bold text-2xl text-navy">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-heading font-bold text-2xl text-navy">5000+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
              </div>
            </div>

            <Link to="/about">
              <Button className="btn-hero">Learn More</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
