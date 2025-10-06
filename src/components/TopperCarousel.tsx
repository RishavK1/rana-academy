import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Keyboard } from 'swiper/modules';
import { Trophy, Award } from 'lucide-react';
import { toppers } from '@/data/toppers';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TopperCarousel = () => {
  const [filter, setFilter] = useState<string>('All');
  
  const filters = ['All', 'JEE Advanced', 'JEE Main', 'CBSE'];
  
  const filteredToppers = filter === 'All' 
    ? toppers 
    : toppers.filter(t => t.exam.includes(filter));

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Our Toppers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Celebrating excellence—our students' success stories
          </p>

          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filterName) => (
              <button
                key={filterName}
                onClick={() => setFilter(filterName)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === filterName
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-background text-slate hover:bg-primary/10'
                }`}
              >
                {filterName}
              </button>
            ))}
          </div>
        </motion.div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination, Keyboard]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="topper-swiper"
        >
          {filteredToppers.map((topper) => (
            <SwiperSlide key={topper.id}>
              <div className="card-soft p-6 text-center h-full flex flex-col">
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
                
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="font-bold text-navy">
                    {topper.rank || topper.percentile || topper.score}
                  </span>
                </div>

                <p className="text-xs text-muted-foreground">Year: {topper.year}</p>

                {topper.testimonial && (
                  <p className="text-xs text-muted-foreground mt-3 italic line-clamp-2">
                    "{topper.testimonial}"
                  </p>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .topper-swiper {
          padding-bottom: 50px;
        }
        .topper-swiper .swiper-pagination-bullet {
          background: hsl(var(--primary));
        }
        .topper-swiper .swiper-button-next,
        .topper-swiper .swiper-button-prev {
          color: hsl(var(--primary));
        }
      `}</style>
    </section>
  );
};

export default TopperCarousel;
