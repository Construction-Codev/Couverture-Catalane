import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "Quels travaux de toiture réalisez-vous à Perpignan ?",
    answer:
      "Couverture Catalane intervient pour les travaux de couverture, les réparations de toiture, la recherche et la réparation de fuites, la zinguerie, le nettoyage de toiture et les travaux de charpente.",
  },
  {
    question: "Intervenez-vous en dehors de Perpignan ?",
    answer:
      "Oui. Couverture Catalane est basée à Pia et intervient à Perpignan ainsi que dans les Pyrénées-Orientales selon la nature et la localisation des travaux.",
  },
  {
    question: "Que faire en cas de fuite ou d'infiltration de toiture ?",
    answer:
      "Une infiltration peut avoir plusieurs origines : tuile déplacée ou endommagée, défaut d'étanchéité, zinguerie ou évacuation des eaux pluviales. Il est important d'identifier l'origine du problème avant d'effectuer la réparation adaptée.",
  },
  {
    question: "Comment demander un devis pour des travaux de toiture ?",
    answer:
      "Vous pouvez présenter votre projet via le formulaire de contact de Couverture Catalane ou appeler directement le 06 62 12 56 11.",
  },
];

export default function HomeFAQ() {
  return (
    <section
      aria-labelledby="faq-title"
      className="bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
            Questions fréquentes
          </p>

          <h2
            id="faq-title"
            className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Vos questions sur les travaux de toiture
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            Quelques réponses utiles avant de contacter Couverture Catalane
            pour votre toiture à Perpignan ou dans les Pyrénées-Orientales.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-slate-200 bg-white px-6 shadow-sm"
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

        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-orange-600 px-7 py-4 font-extrabold text-white transition hover:bg-orange-500"
          >
            Parler de mon projet
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}