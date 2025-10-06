import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Play } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { instituteData } from '@/data/institute';
import heroVideoThumb from '@/assets/hero-video-thumb.jpg';
import { motion } from 'framer-motion';

const SplitHero = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({ title: "Please enter your email", variant: "destructive" });
      return;
    }

    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    toast({
      title: "Success!",
      description: "We'll contact you soon for your free demo class.",
    });
    setEmail('');
  };

  return (
    <section className="relative bg-gradient-to-br from-sky via-white to-secondary/30 py-16 lg:py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-royal-blue rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text + Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-primary/20 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-navy">Karnal's Premier Chemistry Institute</span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-navy via-royal-blue to-primary bg-clip-text text-transparent">
                {instituteData.tagline}
              </span>
            </h1>
            
            <p className="text-xl text-slate mb-4 font-medium">
              {instituteData.subtitle}
            </p>
            
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Join thousands of successful students at Karnal's premier chemistry coaching institute. 
              Expert faculty, proven methods, guaranteed results.
            </p>
            
            {/* Enhanced Form */}
            <motion.form 
              onSubmit={handleSubmit} 
              className="relative max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative p-1 bg-gradient-to-r from-primary via-royal-blue to-accent rounded-2xl shadow-lg">
                <div className="bg-white rounded-[14px] p-2 flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
                  />
                  <Button type="submit" className="btn-hero whitespace-nowrap shadow-lg hover:shadow-xl">
                    Get Free e-Book
                  </Button>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3 ml-1">
                🎯 Join 5,000+ students who've cracked their chemistry exams
              </p>
            </motion.form>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div>
                <div className="text-3xl font-bold text-primary font-heading">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary font-heading">15+</div>
                <div className="text-sm text-muted-foreground">Years Exp.</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary font-heading">5000+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Enhanced Video Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Floating decoration */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-3xl -z-10 opacity-50"
              animate={{ rotate: [0, 10, 0], y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-3xl -z-10"
              animate={{ rotate: [0, -10, 0], y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            />

            <div className="relative bg-white rounded-3xl p-3 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.3)] transition-all duration-500 group">
              <div className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={heroVideoThumb}
                  alt="Rana Academy chemistry class preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/50 via-primary/30 to-transparent group-hover:from-navy/60 transition-all duration-500" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl">
                      <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                    </div>
                  </motion.div>
                </div>

                {/* Video Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="flex items-center gap-3 text-white text-sm font-medium">
                    <span>02:34</span>
                    <div className="flex-1 h-1.5 bg-white/20 rounded-full backdrop-blur-sm overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-accent to-warm-yellow rounded-full shadow-lg"
                        initial={{ width: "0%" }}
                        animate={{ width: "33%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                    <span>04:20</span>
                  </div>
                </div>

                {/* Floating label */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-navy shadow-lg">
                  ▶️ Watch Our Success Story
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SplitHero;
