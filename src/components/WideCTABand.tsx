import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';
import ctaPersonImg from '@/assets/cta-person.jpg';
import { instituteData } from '@/data/institute';
import { motion } from 'framer-motion';

const WideCTABand = () => {
  const handleCall = () => {
    window.location.href = `tel:${instituteData.contact.phones[0]}`;
  };

  return (
    <section className="py-16 bg-gradient-to-r from-warm-yellow to-accent">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              <img
                src={ctaPersonImg}
                alt="Join Rana Academy for chemistry excellence"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
              Want a Free Demo Class?
            </h2>
            <p className="text-lg text-navy/80 mb-8">
              Book a complimentary counselling call and sit in a trial session. Experience our
              teaching methodology firsthand and make an informed decision about your chemistry journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-cta group">
                Claim Your Spot
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={handleCall}
                variant="outline"
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-8 py-3 rounded-xl transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>

            <p className="text-sm text-navy/70 mt-6">
              ✓ No obligation • ✓ Free study material • ✓ Expert guidance
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WideCTABand;
