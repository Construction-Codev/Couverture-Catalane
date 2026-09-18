import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

type Service = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
};

const servicesData: Service[] = [
  {
    title: "Couverture",
    description:
      "Travaux de toiture, rénovation et intervention sur votre couverture à Perpignan et dans les Pyrénées-Orientales.",
    image: "/couverture.png",
    imageAlt: "Travaux de couverture de toiture dans les Pyrénées-Orientales",
    link: "/couverture",
  },
  {
    title: "Réparation de toiture",
    description:
      "Réparation de tuiles et éléments de toiture endommagés pour préserver l'étanchéité de votre habitation.",
    image: "/reparations.png",
    imageAlt: "Réparation d'une toiture à Perpignan",
    link: "/reparations",
  },
  {
    title: "Fuites & infiltrations",
    description:
      "Recherche de l'origine des infiltrations et réparation des fuites de toiture à Perpignan et dans le 66.",
    image: "/fuites.png",
    imageAlt: "Recherche et réparation d'une fuite de toiture",
    link: "/fuites",
  },
  {
    title: "Zinguerie",
    description:
      "Travaux de zinguerie et évacuation des eaux pluviales pour contribuer à l'étanchéité de votre toiture.",
    image: "/zinguerie.png",
    imageAlt: "Travaux de zinguerie sur une toiture",
    link: "/zinguerie",
  },
  {
    title: "Nettoyage de toiture",
    description:
      "Entretien et nettoyage de toiture pour retirer les salissures et préserver l'état de votre couverture.",
    image: "/nettoyage.png",
    imageAlt: "Nettoyage et entretien d'une toiture",
    link: "/nettoyage",
  },
  {
    title: "Charpente",
    description:
      "Travaux de charpente liés à la structure et à la rénovation de votre toiture dans les Pyrénées-Orientales.",
    image: "/charpente3.png",
    imageAlt: "Travaux de charpente dans les Pyrénées-Orientales",
    link: "/charpente",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Introduction */}
        <div className="mb-12 max-w-3xl sm:mb-16">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-orange-600">
            Nos métiers
          </p>

          <h2
            id="services-title"
            className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Travaux de toiture à Perpignan et dans les Pyrénées-Orientales
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            Couverture Catalane intervient pour vos travaux de couverture,
            réparation de toiture, recherche de fuite, zinguerie, nettoyage
            et charpente à Perpignan et dans le département.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <article
              key={service.link}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Link
                href={service.link}
                className="flex h-full flex-col"
                aria-label={`Découvrir le service ${service.title}`}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent"
                    aria-hidden="true"
                  />
                </div>

                {/* Contenu */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-2xl font-black tracking-tight text-slate-950 transition-colors group-hover:text-orange-600">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 font-extrabold text-orange-600">
                    En savoir plus
                    <ArrowRight
                      size={18}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 overflow-hidden rounded-3xl bg-slate-950 px-6 py-9 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Un projet de toiture ou un problème à faire vérifier ?
            </h2>

            <p className="mt-3 leading-relaxed text-slate-300">
              Présentez votre besoin à Couverture Catalane pour vos travaux à
              Perpignan ou dans les Pyrénées-Orientales.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-shrink-0">
            <a
              href="tel:+33662125611"
              aria-label="Appeler Couverture Catalane au 06 62 12 56 11"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 py-4 font-extrabold text-white transition hover:bg-orange-500"
            >
              <Phone size={19} aria-hidden="true" />
              06 62 12 56 11
            </a>

            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 font-extrabold text-white transition hover:bg-white/20"
            >
              Demander un devis
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}