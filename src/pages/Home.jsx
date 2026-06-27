import FeaturedCourses from "../components/FeaturedCourses";
import StatsSection from "../components/StatsSection";
import YoutubeSection from "../components/YoutubeSection";
import Testimonials from "../components/Testimonials";
import TrustSection from "../components/stats/TrustSection";
import RoadmapSection from "../components/roadmap/RoadmapSection";
import MyWorkSection from "../components/work/MyWorkSection";
import InstructorSection from "../components/instructor/InstructorSection";
import FaqSection from "../components/faq/FaqSection";
import ChannelsSection from "../components/channels/ChannelsSection";
import CTASection from "../components/cta/CTASection";
import Hero from "../components/home/hero/Hero";

function Home() {
  return (
    <>

      <Hero />
      <TrustSection />
      <FeaturedCourses />
      <RoadmapSection />
      <MyWorkSection />
      <InstructorSection />
      <StatsSection />
      <YoutubeSection />
      <Testimonials />
      <FaqSection />
      <ChannelsSection />
      <CTASection />

    
    </>
  );
}

export default Home;