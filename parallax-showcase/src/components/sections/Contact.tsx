
import contact from "@/assets/contact.png";
import mail from "@/assets/mail.png";
import phone from "@/assets/phone.png";

export const Contact = ()=>{
    return  <>
      <div className="mx-auto bg-white/10 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-gradient-to-b from-blue-400 to-blue-600 text-white p-10 flex flex-col items-center justify-center relative">
              <div className="w-40 h-40 rounded-full bg-blue-200 flex items-center justify-center mb-6">
                  <img src={contact.src} alt="Character" className="object-contain" />

              </div>
              <h2 className="text-3xl font-bold uppercase text-center">Contact Us</h2>
              <p className="mt-3 text-center text-white/90">
                  Talk with us to know how we can make you a part of a thriving digital landscape
              </p>


              <div className="mt-8 space-y-4 w-full max-w-sm">
                  <div className="flex items-center gap-3 bg-green-600 px-5 py-3 rounded-xl justify-between">
                      <img src={phone.src} alt="phone" className="h-5 w-5" />
                      <span className="font-semibold">+1 315 308 0901</span>
                  </div>
                  <div className="flex items-center gap-3 bg-green-500 px-5 py-3 rounded-xl justify-between">
                      <img src={mail.src} alt="mail" className="h-5 w-5" />
                      <span className="font-semibold">sales@chromezy.com</span>
                  </div>
              </div>
          </div>

          <div className="bg-blue-100 p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6 text-stone-950">Let’s Talk!</h3>
              <form className="space-y-4">
                  <input type="text" placeholder="What’s your name?" className="w-full text-stone-950 bg-white px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
                  <input type="email" placeholder="What’s your email address?" className="w-full text-stone-950 bg-white px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
                  <input type="text" placeholder="What’s your phone number?" className="w-full text-stone-950 bg-white px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
                  <input type="text" placeholder="What are you looking for?" className="w-full text-stone-950 bg-white px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
                  <textarea placeholder="How can we help you?" rows={4} className="w-full text-stone-950 bg-white px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
                  <button type="submit" className="w-full text-stone-950 bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition">
                      Send Request
                  </button>
              </form>
          </div>

      </div>
    
    </>;
}