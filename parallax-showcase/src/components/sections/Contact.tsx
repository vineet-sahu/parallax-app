"use client";

import { memo, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import mail from "@/assets/mail.png";
import phone from "@/assets/phone.png";
import { useAppContext } from "@/context/ParallaxContext";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { ContactFormSection } from "@/types/Contact";
import { Media } from "@/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import lineMdEmail from "@/assets/lineMdEmail.png";

const Contact = () => {
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const {
    contactForm: { isLoading, error, data },
  } = useAppContext();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineMdEmailRightPosition = useTransform(scrollYProgress, [0, 0.4], [-50, -100]);

  const lineMdEmailTopPosition = useTransform(scrollYProgress, [0, 0.2, 0.4], [-120, -50, -75]);

  const overflowHidden = useTransform(scrollYProgress, [0, 0.3], ["visible", "hidden"]);

  const paddingY = useTransform(scrollYProgress, [0, 0.2], [0, 40]);

  const lineMdEmailRightScale = useTransform(scrollYProgress, [0, 0.2, 0.4], [0.8, 0.8, 0.5]);

  const contactFormData: ContactFormSection | undefined = useMemo(
    () => data?.data?.sections?.[0],
    [data],
  );

  const iconScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.4, 0.5],
    [0.01, 0.1, 0.2, 0.6, 1],
  );

  const iconOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4, 0.5], [0, 0.1, 0.5, 0.7, 1]);

  if (!isMounted) {
    return (
      <div
        ref={sectionRef}
        className="flex justify-center items-center py-10 animate-pulse text-gray-400"
      >
        Loading Contact...
      </div>
    );
  }

  if (isLoading) return <div className="text-gray-500"></div>;
  if (error) return <div className="text-red-500">Error loading contact info</div>;
  if (!contactFormData) return null;

  const bgUrl = getStrapiMediaUrl(contactFormData.contactUsBG as Media);
  const iconUrl = getStrapiMediaUrl(contactFormData.icon as Media);

  return (
    <section
      ref={sectionRef}
      id={contactFormData.sectionId ?? "contact"}
      className="relative h-full bg-white/10  my-20 max-md:rounded-[100px] rounded-[80px] flex max-md:flex-col w-full"
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
            <motion.div
              className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-blue-200 flex items-center justify-center mb-6 overflow-hidden"
              style={{
                scale: iconScale,
                opacity: iconOpacity,
              }}
            >
              <Image
                src={iconUrl}
                alt={contactFormData.heading || "Contact"}
                width={contactFormData.icon?.width || 160}
                height={contactFormData.icon?.height || 160}
                loading="lazy"
                className="object-contain"
                quality={70}
              />
            </motion.div>
          )}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold">{contactFormData.heading}</h2>
            {contactFormData.subheading && (
              <p className="mt-3 text-white/90 text-sm md:text-base">
                {contactFormData.subheading}
              </p>
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
        </div>
      </aside>

      <motion.article
        className="bg-[#aacffe] flex flex-col justify-center flex-1 pr-10"
        style={{
          paddingTop: paddingY,
          paddingBottom: paddingY,
        }}
      >
        <motion.div
          className="p-6 md:p-10 bg-[#dbebff] rounded-3xl shadow-lg w-full relative"
          style={{
            overflow: overflowHidden,
          }}
        >
          <motion.div
            className="absolute z-[10]"
            style={{
              top: lineMdEmailTopPosition,
              right: lineMdEmailRightPosition,
              scale: lineMdEmailRightScale,
            }}
          >
            <Image
              alt="lineMdEmail"
              src={lineMdEmail.src}
              width={lineMdEmail.width}
              height={lineMdEmail.height}
            />
          </motion.div>
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
        </motion.div>
      </motion.article>
    </section>
  );
};

export default memo(Contact);
