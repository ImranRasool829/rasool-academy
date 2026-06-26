import FaqItem from "./FaqItem";
import { faqs } from "../../data/faqs";

function FaqSection() {
  return (
    <section className="py-24">
      <div className="section-container">

        <div className="text-center mb-16">

          <span
            className="
            text-purple-400
            uppercase
            tracking-widest
            text-sm
            "
          >
            Frequently Asked Questions
          </span>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-black
            mt-4
            "
          >
            Got Questions?
          </h2>

          <p
            className="
            text-slate-400
            mt-4
            max-w-2xl
            mx-auto
            "
          >
            Everything you need to know about
            learning with Rasool Academy.
          </p>

        </div>

        <div className="max-w-4xl mx-auto space-y-4">

          {faqs.map((faq) => (
            <FaqItem
              key={faq.id}
              faq={faq}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default FaqSection;