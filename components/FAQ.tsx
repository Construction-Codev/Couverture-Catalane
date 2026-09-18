import { ChevronDown } from "lucide-react";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  items: FAQItem[];
};

export default function FAQ({
  eyebrow = "Questions fréquentes",
  title,
  intro,
  items,
}: FAQProps) {
  return (
    <section
      aria-labelledby="faq-title"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
            {eyebrow}
          </p>

          <h2
            id="faq-title"
            className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
          >
            {title}
          </h2>

          {intro && (
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              {intro}
            </p>
          )}
        </div>

        <div className="mt-12 space-y-4">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-slate-200 bg-slate-50 px-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-left text-lg font-extrabold text-slate-950">
                {item.question}

                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className="shrink-0 text-orange-600 transition-transform group-open:rotate-180"
                />
              </summary>

              <p className="max-w-3xl pb-6 leading-relaxed text-slate-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}