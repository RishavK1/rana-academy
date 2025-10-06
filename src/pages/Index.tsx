import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingDock from '@/components/FloatingDock';
import SplitHero from '@/components/SplitHero';
import WaveDivider from '@/components/WaveDivider';
import WhoWeAre from '@/components/WhoWeAre';
import IconCardRow from '@/components/IconCardRow';
import CourseCarousel from '@/components/CourseCarousel';
import BlogCardRow from '@/components/BlogCardRow';
import WideCTABand from '@/components/WideCTABand';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import TopperCarousel from '@/components/TopperCarousel';
import { Helmet } from 'react-helmet';
import { instituteData } from '@/data/institute';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{instituteData.name} - {instituteData.tagline}</title>
        <meta name="description" content={`${instituteData.description}. ${instituteData.subtitle}`} />
        <meta property="og:title" content={`${instituteData.name} - ${instituteData.tagline}`} />
        <meta property="og:description" content={instituteData.description} />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section with Wave Divider */}
          <SplitHero />
          <WaveDivider />

          {/* Who We Are */}
          <WhoWeAre />

          {/* What We Do - Icon Cards */}
          <IconCardRow />

          {/* Our Courses - Carousel */}
          <CourseCarousel />
          <WaveDivider flip />

          {/* Toppers */}
          <TopperCarousel />
          <WaveDivider />

          {/* Latest Blogs */}
          <BlogCardRow />

          {/* Wide CTA Band */}
          <WideCTABand />

          {/* Testimonials */}
          <TestimonialCarousel />
        </main>

        <Footer />
        <FloatingDock />
      </div>
    </>
  );
};

export default Index;
