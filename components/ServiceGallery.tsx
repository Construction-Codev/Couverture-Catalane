import Carousel from "@/components/Carousel";

type GalleryImage = {
  image: string;
  alt: string;
};

type ServiceGalleryProps = {
  title: string;
  description?: string;
  images: GalleryImage[];
};

export default function ServiceGallery({
  title,
  description,
  images,
}: ServiceGalleryProps) {
  return (
    <section
      aria-labelledby="service-gallery-title"
      className="bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
            Travaux de toiture
          </p>

          <h2
            id="service-gallery-title"
            className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
          >
            {title}
          </h2>

          {description && (
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              {description}
            </p>
          )}
        </div>

        <div className="overflow-hidden rounded-3xl shadow-xl">
          <Carousel items={images} />
        </div>
      </div>
    </section>
  );
}