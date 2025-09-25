import contact from "@/assets/contact.png";
import mail from "@/assets/mail.png";
import phone from "@/assets/phone.png";
import { useAppContext } from "@/context/ParallaxContext";
import { ContactFormSection } from "@/types/Contact";
/* eslint-disable @next/next/no-img-element */


export const Contact = () => {
  const { contactForm: {isLoading, error, data} } = useAppContext();

  const contactFormData: ContactFormSection | undefined = data?.data.sections[0];

  if(isLoading) {
    return <div>Loading...</div>;
  }

  if (error) return <div>Error loading insights</div>;
  if (!contactFormData) return null;

  return (
    <div className="mx-auto bg-white/10 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
      
      
      <div className="bg-gradient-to-b from-blue-400 to-blue-600 text-white p-10 flex flex-col items-center justify-center relative">
        <div className="w-40 h-40 rounded-full bg-blue-200 flex items-center justify-center mb-6">
          <img src={contact.src} alt="Character" className="object-contain" />
        </div>

        <h2 className="text-3xl font-bold uppercase text-center">{contactFormData.heading}</h2>
        <p className="mt-3 text-center text-white/90">{contactFormData.subheading}</p>

        <div className="mt-8 space-y-4 w-full max-w-sm">
          {contactFormData.phone && (
            <div className="flex items-center gap-3 bg-green-600 px-5 py-3 rounded-xl justify-between">
              <img src={phone.src} alt="phone" className="h-5 w-5" />
              <span className="font-semibold">{contactFormData.phone}</span>
            </div>
          )}
          {contactFormData.email && (
            <div className="flex items-center gap-3 bg-green-500 px-5 py-3 rounded-xl justify-between">
              <img src={mail.src} alt="mail" className="h-5 w-5" />
              <span className="font-semibold">{contactFormData.email}</span>
            </div>
          )}
        </div>
      </div>

      
      <div className="bg-blue-100 p-10 flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-6 text-stone-950">{contactFormData.form_title || "Let’s Talk!"}</h3>
        <form className="space-y-4" >
          {contactFormData.formfields.map((field) => {
            
            if (field.type === "textarea") {
              return (
                <>
                <div className="label text-black">{field.label}</div>
                <textarea
                  key={field.id}
                  rows={4}
                  className="w-full text-stone-950 bg-white px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                  required={field.required || false}
                ></textarea>
                </>
              );
            } else {
              return (
                <>
                  <div className="label text-black">{field.label}</div>                
                  <input
                    key={field.id}
                    type={field.type}
                    className="w-full text-stone-950 bg-white px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    required={field.required || false}
                  />
                </>
              );
            }
          })}
          <button
            type="submit"
            className="w-full text-stone-950 bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition"
          >
            {contactFormData.buttonText || "Send Request"}
          </button>
        </form>
      </div>
    </div>
  );
};
