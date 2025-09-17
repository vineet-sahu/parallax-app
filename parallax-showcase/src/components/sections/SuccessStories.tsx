import ss1 from "@/assets/services/ss_001.png";
import ss2 from "@/assets/services/ss_002.png";
import ss3 from "@/assets/services/ss_003.png";
import ss4 from "@/assets/services/ss_004.png";
import ss5 from "@/assets/services/ss_005.png";

export const SuccessStories = ()=>{

return <>   
<div className="text-white md:py-16 md:px-6 w-full">
      <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="mb-12">
                  <h2 className="text-4xl font-bold uppercase">Success Stories</h2>
                  <p className="mt-4 text-gray-400 max-w-2xl">
                      Dummy ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                  </p>
              </div>
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                  <span className="absolute top-3 left-3 bg-gray-700 text-xs px-3 py-1 rounded-full">Success Stories</span>
                  <img src={ss1.src} alt="FinConnect" className="w-full" />
                  <div className="p-4">
                      <h3 className="text-xl font-semibold">FinConnect</h3>
                      <p className="text-gray-400 text-sm">Customer Relationship Management (CRM)</p>
                  </div>
              </div>
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                  <span className="absolute top-3 left-3 bg-gray-700 text-xs px-3 py-1 rounded-full">Success Stories</span>
                  <img src={ss2.src} alt="HealthSync" className="w-full" />
                  <div className="p-4">
                      <h3 className="text-xl font-semibold">HealthSync</h3>
                      <p className="text-gray-400 text-sm">Health Tracking App for Patients and Doctors</p>
                  </div>
              </div>
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                  <span className="absolute top-3 left-3 bg-gray-700 text-xs px-3 py-1 rounded-full">Success Stories</span>
                  <img src={ss3.src} alt="Commerce360" className="w-full" />
                  <div className="p-4">
                      <h3 className="text-xl font-semibold">Commerce360</h3>
                      <p className="text-gray-400 text-sm">Online Store, Multivendor Marketplace & E-commerce Apps</p>
                  </div>
              </div>
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                  <span className="absolute top-3 left-3 bg-gray-700 text-xs px-3 py-1 rounded-full">Success Stories</span>
                  <img src={ss4.src} alt="PrintwithAI" className="w-full" />
                  <div className="p-4">
                      <h3 className="text-xl font-semibold">PrintwithAI</h3>
                      <p className="text-gray-400 text-sm">Web-to-Print Software / Online Design Tool / Product Designer Tool</p>
                  </div>
              </div>
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                  <span className="absolute top-3 left-3 bg-gray-700 text-xs px-3 py-1 rounded-full">Success Stories</span>
                  <img src={ss5.src} alt="PM Insights" className="w-full" />
                  <div className="p-4">
                      <h3 className="text-xl font-semibold">PM Insights</h3>
                      <p className="text-gray-400 text-sm">Project Management Tool (SaaS & Hosted)</p>
                  </div>
              </div>
          </div>
      </div>
      </div>
</>;
}