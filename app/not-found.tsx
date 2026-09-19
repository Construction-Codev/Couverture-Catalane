import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-white flex items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-500">
          Erreur 404
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Cette page est introuvable
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
          La page que vous recherchez n’existe pas ou a peut-être été déplacée.
          Retrouvez les services de Couverture Catalane ou contactez-nous pour
          votre projet de toiture.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Retour à l’accueil
          </Link>

          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 py-3 font-semibold text-zinc-900 transition hover:bg-zinc-50"
          >
            Nous contacter
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm font-medium text-zinc-600">
          <Link href="/couverture" className="hover:text-orange-500">
            Couverture
          </Link>
          <Link href="/reparations" className="hover:text-orange-500">
            Réparations
          </Link>
          <Link href="/fuites" className="hover:text-orange-500">
            Fuites
          </Link>
          <Link href="/zinguerie" className="hover:text-orange-500">
            Zinguerie
          </Link>
          <Link href="/nettoyage" className="hover:text-orange-500">
            Nettoyage
          </Link>
          <Link href="/charpente" className="hover:text-orange-500">
            Charpente
          </Link>
        </div>
      </div>
    </main>
  );
}