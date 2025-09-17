import logo1 from "@/assets/logos/logo_001.png";
import logo2 from "@/assets/logos/logo_002.png";
import logo3 from "@/assets/logos/logo_003.png";
import logo4 from "@/assets/logos/logo_004.png";
import logo5 from "@/assets/logos/logo_005.png";
import logo6 from "@/assets/logos/logo_006.png";
import logo7 from "@/assets/logos/logo_007.png";

export const HappyClients = ()=>{   


    return  <>
    
    <section className="text-white md:py-16 md:px-6 md:px-16 w-full">
      <div className="md:text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">OUR HAPPY CLIENTS</h2>
          <p className="mt-4 text-gray-300">
              Dummy ipsum dolor sit amet, consectetur adipiscing elit
          </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#141827] rounded-xl p-6 shadow-lg relative">
              <span className="text-4xl text-teal-400 font-serif">“</span>
              <p className="mt-4 text-gray-200 text-sm leading-relaxed">
                  Highly responsive with keen attention to detail. Assisted in building my e-commerce platform, mapping transformative areas, resulting in exceptional customer experience.
              </p>
              <div className="mt-6">
                  <h4 className="font-bold">BRANDON LAU</h4>
                  <p className="text-gray-400 text-sm">(CEO, KIRI Journey)</p>
              </div>
              <hr className="my-6 bg-gray-400 opacity-10" />
              <div className="text-xs text-gray-400">
                  <p>Star Rating - 5 / 5</p>
                  <p>Project - E-commerce Development</p>
                  <p>Country - HongKong</p>
              </div>
              <div className="absolute bottom-4 right-6">
                  <img src={logo1.src} alt="Kiri" />
              </div>
          </div>
          <div className="bg-[#141827] rounded-xl p-6 shadow-lg relative">
              <span className="text-4xl text-teal-400 font-serif">“</span>
              <p className="mt-4 text-gray-200 text-sm leading-relaxed">
                  They are swift to respond and implement faster. Thanks to Chromezy for providing expert developers and on-time delivery to help scale our Cloud-based ERP SaaS solution that helped us automate workflows, and get an analytics dashboard for swift decision-making.
              </p>
              <div className="mt-6">
                  <h4 className="font-bold">MARC DOLLON</h4>
                  <p className="text-gray-400 text-sm">CTO, MasterStudy</p>
              </div>
              <hr className="my-6 bg-gray-400 opacity-10" />
              <div className="text-xs text-gray-400">
                  <p>Star Rating – 5 / 5</p>
                  <p>Project - SaaS-Based Cloud ERP</p>
                  <p>Country - United States</p>
              </div>
              <div className="absolute bottom-4 right-6">
                  <img src={logo2.src} alt="MS MASTERSTUDY" />
              </div>
          </div>

          <div className="bg-[#141827] rounded-xl p-6 shadow-lg relative">
              <span className="text-4xl text-teal-400 font-serif">“</span>
              <p className="mt-4 text-gray-200 text-sm leading-relaxed">
                  I'm thrilled with Chromezy's work. They developed inventory management, AI-powered demand forecasting, and smart route optimization on time and affordably. Onwards and upwards with Chromezy!
              </p>
              <div className="mt-6">
                  <h4 className="font-bold">JEET OBERAI</h4>
                  <p className="text-gray-400 text-sm">(Entrepreneur, PayLoan)</p>
              </div>
              <hr className="my-6 bg-gray-400 opacity-10" />
              <div className="text-xs text-gray-400">
                  <p>Star Rating - 4.8 / 5</p>
                  <p>Project - Product Development</p>
                  <p>Country - Singapore</p>
              </div>
              <div className="absolute bottom-4 right-6">
                  <img src={logo3.src} alt="MS MASTERSTUDY" />
              </div>
          </div>
      </div>

      <div className="flex justify-end gap-4 mt-8">
          <button className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center">
              ←
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center">
              →
          </button>
      </div>
      </section>
    </>;
}