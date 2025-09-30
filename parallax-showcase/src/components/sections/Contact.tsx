import contact from "@/assets/contact.png";
import mail from "@/assets/mail.png";
import phone from "@/assets/phone.png";
import { useAppContext } from "@/context/ParallaxContext";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { ContactFormSection } from "@/types/Contact";
import { Media } from "@/utils";
/* eslint-disable @next/next/no-img-element */


export const Contact = () => {
  const {
    contactForm: { isLoading, error, data },
  } = useAppContext();

  const contactFormData: ContactFormSection | undefined =
    data?.data.sections[0];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) return <div>Error loading insights</div>;
  if (!contactFormData) return null;

  return (
    <div
      className="mr-auto bg-white/10 rounded-3xl overflow-hidden flex flex-col md:flex-row w-full justify-between"
      style={{ scrollMarginTop: "72px" }}
      id={(data?.data?.sections || [])[0]?.sectionId}
    >
      {/* Left Side (Info / Icon / Contact Details) */}
      <div
        className="flex-2 bg-gradient-to-b from-blue-400 to-blue-600 text-white p-6 md:p-10 flex flex-col items-center justify-center relative"
        style={{
          backgroundImage: `url(${
            getStrapiMediaUrl(contactFormData.contactUsBG as Media) as string
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-[2] w-full flex flex-col items-center justify-center text-center">
          <div className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-blue-200 flex items-center justify-center mb-6">
            <img
              src={getStrapiMediaUrl(contactFormData.icon as Media) as string}
              alt="Character"
              className="object-contain w-20 h-20 w-full h-full"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">
            {contactFormData.heading}
          </h2>
          <p className="mt-3 text-white/90">{contactFormData.subheading}</p>

          <div className="mt-6 md:mt-8 space-y-4 w-full max-w-sm">
            {contactFormData.phone && (
              <div className="flex items-center gap-3 bg-green-600 px-4 py-3 rounded-xl justify-between text-sm md:text-base">
                <img src={phone.src} alt="phone" className="h-5 w-5" />
                <span className="font-semibold">{contactFormData.phone}</span>
              </div>
            )}
            {contactFormData.email && (
              <div className="flex items-center gap-3 bg-green-500 px-4 py-3 rounded-xl justify-between text-sm md:text-base">
                <img src={mail.src} alt="mail" className="h-5 w-5" />
                <span className="font-semibold">{contactFormData.email}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="bg-[#aacffe] flex flex-col justify-center flex-1 py-8 md:py-10">
        <div className="p-6 md:p-10 relative bg-[#dbebff] rounded-3xl shadow-lg w-full">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-stone-950">
            {contactFormData.form_title || "Let’s Talk!"}
          </h3>
          <form className="space-y-4">
            {contactFormData.formfields.map((field) => {
              if (field.type === "textarea") {
                return (
                  <div key={field.id}>
                    <div className="label text-black mb-2">{field.label}</div>
                    <textarea
                      rows={4}
                      className="w-full text-stone-950 bg-white px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                      required={field.required || false}
                    ></textarea>
                  </div>
                );
              } else {
                return (
                  <div key={field.id}>
                    <div className="label text-black mb-2">{field.label}</div>
                    <input
                      type={field.type}
                      className="w-full text-stone-950 bg-white px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                      required={field.required || false}
                    />
                  </div>
                );
              }
            })}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition"
            >
              {contactFormData.buttonText || "Send Request"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
