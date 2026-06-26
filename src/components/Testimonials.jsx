import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../data/testimonials";

function Testimonials() {

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h2
        className="
        text-5xl
        font-bold
        mb-12
        "
      >
        Student Success Stories
      </h2>

      <div
        className="
        grid
        md:grid-cols-3
        gap-8
        "
      >

        {testimonials.map(
          (item, index) => (
            <TestimonialCard
              key={index}
              name={item.name}
              text={item.text}
            />
          )
        )}

      </div>

    </section>
  );
}

export default Testimonials;