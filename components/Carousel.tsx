"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CarouselItem = {
  image: string;
  alt: string;
};

type CarouselProps = {
  items: CarouselItem[];
};

export default function Carousel({ items }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  const length = items.length;
  const hasMultipleImages = length > 1;

  const nextSlide = () => {
    setCurrent((previous) =>
      previous === length - 1 ? 0 : previous + 1
    );
  };

  const prevSlide = () => {
    setCurrent((previous) =>
      previous === 0 ? length - 1 : previous - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <div
      className="
        group
        relative
        aspect-[4/3]
        w-full
        overflow-hidden
        rounded-3xl
        bg-slate-950
        shadow-xl
        shadow-slate-900/10
        md:aspect-[16/9]
      "
      role="region"
      aria-label="Galerie d'images"
    >
      {/* =====================================================
          IMAGES
      ====================================================== */}
      {items.map((item, index) => {
        const isActive = index === current;

        return (
          <div
            key={`${item.image}-${index}`}
            className={`
              absolute
              inset-0
              transition-opacity
              duration-500
              ease-out
              ${
                isActive
                  ? "z-10 opacity-100"
                  : "pointer-events-none z-0 opacity-0"
              }
            `}
            aria-hidden={!isActive}
          >
            {isActive && (
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="select-none object-cover object-center"
              />
            )}
          </div>
        );
      })}

      {/* =====================================================
          LÉGER DÉGRADÉ POUR LES CONTRÔLES
      ====================================================== */}
      {hasMultipleImages && (
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-20
            h-28
            bg-gradient-to-t
            from-slate-950/50
            to-transparent
          "
          aria-hidden="true"
        />
      )}

      {/* =====================================================
          FLÈCHES
      ====================================================== */}
      {hasMultipleImages && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Afficher l'image précédente"
            className="
              absolute
              left-3
              top-1/2
              z-30
              flex
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-slate-950/60
              text-white
              shadow-lg
              backdrop-blur-md
              transition
              hover:bg-slate-950/85
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-orange-500
              focus-visible:ring-offset-2
              focus-visible:ring-offset-slate-950
              sm:left-4
              lg:opacity-0
              lg:group-hover:opacity-100
              lg:focus-visible:opacity-100
            "
          >
            <ChevronLeft size={23} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Afficher l'image suivante"
            className="
              absolute
              right-3
              top-1/2
              z-30
              flex
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-slate-950/60
              text-white
              shadow-lg
              backdrop-blur-md
              transition
              hover:bg-slate-950/85
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-orange-500
              focus-visible:ring-offset-2
              focus-visible:ring-offset-slate-950
              sm:right-4
              lg:opacity-0
              lg:group-hover:opacity-100
              lg:focus-visible:opacity-100
            "
          >
            <ChevronRight size={23} aria-hidden="true" />
          </button>
        </>
      )}

      {/* =====================================================
          COMPTEUR
      ====================================================== */}
      {hasMultipleImages && (
        <div
          className="
            absolute
            right-4
            top-4
            z-30
            rounded-full
            bg-slate-950/60
            px-3
            py-1.5
            text-xs
            font-extrabold
            text-white
            backdrop-blur-md
          "
          aria-live="polite"
        >
          {current + 1} / {length}
        </div>
      )}

      {/* =====================================================
          INDICATEURS
      ====================================================== */}
      {hasMultipleImages && (
        <div
          className="
            absolute
            bottom-4
            left-1/2
            z-30
            flex
            -translate-x-1/2
            items-center
            gap-2
            rounded-full
            bg-slate-950/55
            px-3
            py-2
            backdrop-blur-md
          "
          aria-label="Choisir une image"
        >
          {items.map((item, index) => {
            const isActive = index === current;

            return (
              <button
                key={`${item.image}-indicator-${index}`}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Afficher l'image ${index + 1} sur ${length}`}
                aria-current={isActive ? "true" : undefined}
                className={`
                  h-2.5
                  rounded-full
                  transition-all
                  duration-300
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-orange-400
                  ${
                    isActive
                      ? "w-6 bg-orange-500"
                      : "w-2.5 bg-white/60 hover:bg-white"
                  }
                `}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}