"use client";

import { memo, useMemo } from "react";
import Image from "next/image";
import mail from "@/assets/mail.png";
import phone from "@/assets/phone.png";
import { useAppContext } from "@/context/ParallaxContext";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { ContactFormSection } from "@/types/Contact";
import { Media } from "@/utils";

const Contact = () => {
  const {
    contactForm: { isLoading, error, data },
  } = useAppContext();

  const contactFormData: ContactFormSection | undefined = useMemo(
    () => data?.data?.sections?.[0],
    [data],
  );

  if (isLoading) return <div className="text-gray-500">Loading...</div>;
  if (error) return <div className="text-red-500">Error loading contact info</div>;
  if (!contactFormData) return null;

  const bgUrl = getStrapiMediaUrl(contactFormData.contactUsBG as Media);
  const iconUrl = getStrapiMediaUrl(contactFormData.icon as Media);

  return (
    <section
      id={contactFormData.sectionId ?? "contact"}
      className="mr-auto bg-white/10 my-20 rounded-3xl overflow-hidden flex flex-col md:flex-row w-full justify-between"
      style={{ scrollMarginTop: "72px", padding: 0, marginTop: "72px" }}
    >
      <aside
        className="flex-2 relative flex flex-col items-center justify-center p-6 md:p-10 text-white bg-gradient-to-b from-blue-400 to-blue-600"
        style={{
          backgroundImage: bgUrl ? `url(${bgUrl})` : undefined,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 flex flex-col items-center text-center">
          {iconUrl && (
            <div className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-blue-200 flex items-center justify-center mb-6 overflow-hidden">
              <Image
                src={iconUrl}
                alt={contactFormData.heading || "Contact"}
                width={contactFormData.icon?.width || 160}
                height={contactFormData.icon?.height || 160}
                loading="lazy"
                className="object-contain"
                quality={70}
              />
            </div>
          )}
          <h2 className="text-2xl md:text-3xl font-bold">{contactFormData.heading}</h2>
          {contactFormData.subheading && (
            <p className="mt-3 text-white/90 text-sm md:text-base">{contactFormData.subheading}</p>
          )}

          <div className="mt-6 md:mt-8 space-y-4 w-full max-w-sm">
            {contactFormData.phone && (
              <div className="flex items-center gap-3 bg-green-600 px-4 py-3 rounded-xl justify-center text-sm md:text-base">
                <Image
                  src={phone.src}
                  alt="phone"
                  width={20}
                  height={20}
                  loading="lazy"
                  className="h-5 w-5 object-contain"
                />
                <span className="font-semibold tracking-wide">{contactFormData.phone}</span>
              </div>
            )}
            {contactFormData.email && (
              <div className="flex items-center gap-3 bg-green-500 px-4 py-3 rounded-xl justify-center text-sm md:text-base">
                <Image
                  src={mail.src}
                  alt="mail"
                  width={20}
                  height={20}
                  loading="lazy"
                  className="h-5 w-5 object-contain"
                />
                <span className="font-semibold tracking-wide">{contactFormData.email}</span>
              </div>
            )}
          </div>
        </div>
      </aside>

      <article className="bg-[#aacffe] flex flex-col justify-center flex-1 py-8 md:py-10">
        <div className="p-6 md:p-10 bg-[#dbebff] rounded-3xl shadow-lg w-full">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-stone-950">
            {contactFormData.form_title || "Let’s Talk!"}
          </h3>

          <form className="space-y-4">
            {contactFormData.formfields.map((field) => (
              <div key={field.id}>
                <label className="block text-black mb-2 font-medium text-sm md:text-base">
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    rows={4}
                    className="w-full text-stone-950 bg-white px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    required={!!field.required}
                  />
                ) : (
                  <input
                    type={field.type}
                    className="w-full text-stone-950 bg-white px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    required={!!field.required}
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition"
            >
              {contactFormData.buttonText || "Send Request"}
            </button>
          </form>
        </div>
      </article>
    </section>
  );
};

export default memo(Contact);
