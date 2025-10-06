import { LucideIcon, Palette, Video, FlaskConical, Users } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface IconCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const cards: IconCard[] = [
  {
    icon: Palette,
    title: "Design",
    description: "Structured curriculum designed by IITians and top educators for conceptual mastery.",
  },
  {
    icon: Video,
    title: "Record",
    description: "Every lecture recorded and available 24/7 for revision and missed classes.",
  },
  {
    icon: FlaskConical,
    title: "Practice",
    description: "1000+ practice problems, mock tests, and previous year papers with solutions.",
  },
  {
    icon: Users,
    title: "Mentoring",
    description: "Personal mentorship, doubt clinics, and regular parent-teacher meetings.",
  },
];

const IconCardRow = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            What We Do
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We help students excel in chemistry through innovative teaching methods,
            personalized attention, and comprehensive test preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-soft p-6 text-center group hover:border-primary border border-transparent transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-sky flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-navy mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {card.description}
                </p>
                <button className="text-primary text-sm font-medium flex items-center gap-1 mx-auto hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IconCardRow;
