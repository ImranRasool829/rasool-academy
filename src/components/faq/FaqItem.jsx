import { useState } from "react";

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="glass rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          text-left
          p-6
          flex
          justify-between
          items-center
          font-semibold
        "
      >
        {faq.question}

        <span className="text-purple-400 text-xl">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="px-6 pb-6 text-slate-400">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export default FaqItem;