import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Keyboard } from 'swiper/modules';
import { Clock, Video, CheckCircle } from 'lucide-react';
import { courses } from '@/data/courses';
import courseLabImg from '@/assets/course-lab.jpg';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CourseCarousel = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Our Courses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive chemistry programs tailored for CBSE, JEE, and competitive exams
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination, Keyboard]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="course-swiper"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="card-soft overflow-hidden h-full flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={courseLabImg}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3 self-start">
                    {course.category}
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-navy mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {course.description.slice(0, 100)}...
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

                  <div className="mb-4">
                    {course.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground mb-1">
                        <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={`/courses/${course.slug}`}>
                    <Button className="btn-hero w-full">View Details</Button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .course-swiper {
          padding-bottom: 50px;
        }
        .course-swiper .swiper-pagination-bullet {
          background: hsl(var(--primary));
        }
        .course-swiper .swiper-button-next,
        .course-swiper .swiper-button-prev {
          color: hsl(var(--primary));
        }
      `}</style>
    </section>
  );
};

export default CourseCarousel;
