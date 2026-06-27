import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroTechGrid from "./HeroTechGrid";

function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">

      <HeroBackground />

      <div className="section-container">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <HeroContent />

          {/* Right */}
          <HeroTechGrid />

        </div>

      </div>

    </section>
  );
}

export default Hero;