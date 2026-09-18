"use client";

import { track } from "@vercel/analytics";

import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import {
  ChangeEvent,
  FormEvent,
  useState,
} from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ApiResponse = {
  message?: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (error) {
      setError("");
    }

    if (success) {
      setSuccess(false);
    }
  };

  const validate = (): string | null => {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const message = formData.message.trim();

    if (!name || !email || !phone || !message) {
      return "Tous les champs sont requis.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return "Veuillez saisir une adresse e-mail valide.";
    }

    const phoneRegex = /^[0-9+\s().-]{7,20}$/;

    if (!phoneRegex.test(phone)) {
      return "Veuillez saisir un numéro de téléphone valide.";
    }

    if (message.length < 10) {
      return "Merci de préciser un peu plus votre demande.";
    }

    return null;
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");
    setSuccess(false);

    const validationError = validate();

    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        }),
      });

      let data: ApiResponse = {};

      try {
        data = (await response.json()) as ApiResponse;
      } catch {
        data = {};
      }

      if (!response.ok) {
        setError(
          data.message ||
            "Une erreur est survenue pendant l'envoi. Vous pouvez également nous contacter par téléphone."
        );
        return;
      }

      setSuccess(true);

      track("devis_envoye", {
        source: "contact",
      });

setFormData(initialFormData);
    } catch {
      setError(
        "Impossible d'envoyer votre demande pour le moment. Vous pouvez nous appeler au 06 62 12 56 11."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* =====================================================
            INTRO
        ====================================================== */}
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
            Contact & devis
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Parlez-nous de votre projet de toiture
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Couverture, réparation, fuite, zinguerie, nettoyage,
            hydrofuge ou charpente : présentez-nous votre besoin à
            Perpignan ou dans les Pyrénées-Orientales.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 xl:gap-16">
          {/* =====================================================
              CONTACT DIRECT
          ====================================================== */}
          <div>
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-orange-600">
                Contact direct
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Une question avant votre demande ?
              </h2>

              <p className="mt-5 leading-relaxed text-slate-600">
                Vous pouvez également contacter directement Couverture
                Catalane par téléphone ou par e-mail.
              </p>

              <div className="mt-8 space-y-4">
                {/* TÉLÉPHONE */}
                <a
                  href="tel:+33662125611"
                  aria-label="Appeler Couverture Catalane au 06 62 12 56 11"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-orange-200 hover:shadow-md"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition group-hover:bg-orange-600 group-hover:text-white">
                    <Phone size={21} aria-hidden="true" />
                  </span>

                  <span>
                    <span className="block text-xs font-black uppercase tracking-[0.12em] text-slate-400">
                      Téléphone
                    </span>

                    <span className="mt-1 block text-lg font-black text-slate-950 transition group-hover:text-orange-600">
                      06 62 12 56 11
                    </span>
                  </span>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:contact@couverture-catalane.fr"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-orange-200 hover:shadow-md"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition group-hover:bg-orange-600 group-hover:text-white">
                    <Mail size={21} aria-hidden="true" />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-xs font-black uppercase tracking-[0.12em] text-slate-400">
                      E-mail
                    </span>

                    <span className="mt-1 block break-all font-bold text-slate-950 transition group-hover:text-orange-600">
                      contact@couverture-catalane.fr
                    </span>
                  </span>
                </a>

                {/* ZONE */}
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <MapPin size={21} aria-hidden="true" />
                  </span>

                  <span>
                    <span className="block text-xs font-black uppercase tracking-[0.12em] text-slate-400">
                      Zone d&apos;intervention
                    </span>

                    <span className="mt-1 block font-bold leading-relaxed text-slate-950">
                      Perpignan &amp; Pyrénées-Orientales
                    </span>
                  </span>
                </div>
              </div>

              {/* PETIT BLOC DE RÉASSURANCE */}
              <div className="mt-6 rounded-2xl bg-slate-950 p-6 text-white">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-400">
                  Votre demande
                </p>

                <p className="mt-3 font-bold leading-relaxed text-slate-200">
                  Décrivez simplement les travaux envisagés ou le
                  problème rencontré sur votre toiture.
                </p>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Plus votre message contient d&apos;informations utiles,
                  plus votre besoin sera facile à comprendre.
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              FORMULAIRE
          ====================================================== */}
          <div
            id="formulaire-devis"
            className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10"
          >
            <div className="mb-8">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-orange-600">
                Demande de devis
              </p>

              <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Décrivez votre besoin
              </h2>

              <p className="mt-3 leading-relaxed text-slate-600">
                Remplissez les informations ci-dessous pour envoyer votre
                demande à Couverture Catalane.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              noValidate
            >
              {/* NOM + TÉLÉPHONE */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-extrabold text-slate-800"
                  >
                    Nom et prénom
                    <span
                      className="ml-1 text-orange-600"
                      aria-hidden="true"
                    >
                      *
                    </span>
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    autoComplete="name"
                    required
                    disabled={loading}
                    className="min-h-14 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 text-base font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-sm font-extrabold text-slate-800"
                  >
                    Téléphone
                    <span
                      className="ml-1 text-orange-600"
                      aria-hidden="true"
                    >
                      *
                    </span>
                  </label>

                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="06 00 00 00 00"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    disabled={loading}
                    className="min-h-14 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 text-base font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-extrabold text-slate-800"
                >
                  Adresse e-mail
                  <span
                    className="ml-1 text-orange-600"
                    aria-hidden="true"
                  >
                    *
                  </span>
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.fr"
                  autoComplete="email"
                  inputMode="email"
                  required
                  disabled={loading}
                  className="min-h-14 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 text-base font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <div className="mb-2 flex items-end justify-between gap-4">
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-extrabold text-slate-800"
                  >
                    Votre demande
                    <span
                      className="ml-1 text-orange-600"
                      aria-hidden="true"
                    >
                      *
                    </span>
                  </label>

                  <span className="text-xs font-semibold text-slate-400">
                    {formData.message.length} caractères
                  </span>
                </div>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Exemple : j'ai plusieurs tuiles endommagées sur ma toiture à Perpignan et je souhaite faire vérifier la zone..."
                  rows={7}
                  required
                  disabled={loading}
                  className="w-full resize-y rounded-xl border border-slate-300 bg-slate-50 px-4 py-4 text-base font-medium leading-relaxed text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                />

                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  Vous pouvez préciser le type de travaux, la commune et
                  les éléments que vous avez constatés.
                </p>
              </div>

              {/* ERREUR */}
              {error && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
                >
                  <AlertCircle
                    size={20}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-red-600"
                  />

                  <p className="font-semibold leading-relaxed">
                    {error}
                  </p>
                </div>
              )}

              {/* SUCCÈS */}
              {success && (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"
                >
                  <CheckCircle2
                    size={21}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-emerald-600"
                  />

                  <div>
                    <p className="font-black text-emerald-950">
                      Votre demande a bien été envoyée.
                    </p>

                    <p className="mt-1 font-medium leading-relaxed text-emerald-800">
                      Couverture Catalane a reçu les informations
                      transmises via le formulaire.
                    </p>
                  </div>
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="inline-flex min-h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-4 text-base font-black text-white shadow-lg shadow-orange-600/15 transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
              >
                {loading ? (
                  <>
                    <Loader2
                      size={19}
                      aria-hidden="true"
                      className="animate-spin"
                    />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={18} aria-hidden="true" />
                    Envoyer ma demande
                  </>
                )}
              </button>

              <p className="text-center text-xs leading-relaxed text-slate-500">
                Les informations saisies sont utilisées pour traiter votre
                demande de contact. Consultez notre{" "}
                <a
                  href="/confidentialite"
                  className="font-bold text-slate-700 underline decoration-slate-300 underline-offset-2 transition hover:text-orange-600"
                >
                  politique de confidentialité
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}