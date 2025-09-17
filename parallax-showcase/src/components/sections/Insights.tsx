

import fi1 from "@/assets/features/fi_001.png";
import fi2 from "@/assets/features/fi_002.png";
import fi3 from "@/assets/features/fi_003.png";
export  const Insights = ()=>{
    return <>  
    
    <div className="w-full text-white md:py-16 md:px-6">
      <div className="max-w-7xl mx-auto">


          <div className="mb-12 text-center lg:text-left">
              <h2 className="text-4xl font-bold uppercase">Featured Insights</h2>
              <p className="mt-2 text-gray-400">
                  Were you looking to explore a specific topic? You’re in the right spot.
              </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <img src={fi1.src} alt="MVP Launches" className="w-full h-52 object-cover" />
                  <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-semibold">
                        Successful MVP Launches That Changed the Game.
                      </h3>
                      <p className="text-gray-400 text-sm mt-3 flex-1">
                          Discover the secrets behind game-changing MVP launches! From lean startups to industry giants, explore how these innovative launches disrupted markets and paved the way for success. Click to uncover the strategies that revolutionized product development.
                      </p>
                      <div className="mt-4">
                          <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black hover:bg-gray-700 transition">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3h7m0 0v7m0-7L10 14" />
                              </svg>
                          </a>
                      </div>
                  </div>
              </div>


              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <img src={fi2.src} alt="AI Product Development" className="w-full h-52 object-cover" />
                  <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-semibold">
                        How Our AI Product Development Company is Pioneering Innovation?
                      </h3>
                      <p className="text-gray-400 text-sm mt-3 flex-1">
                          Discover how our product development company pioneers innovation. From groundbreaking technologies to creative strategies, we’re shaping the future. Click to explore our journey and join us in revolutionizing industries.
                      </p>
                      <div className="mt-4">
                          <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black hover:bg-gray-700 transition">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3h7m0 0v7m0-7L10 14" />
                              </svg>
                          </a>
                      </div>
                  </div>
              </div>


              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <img src={fi3.src} alt="E-commerce AI" className="w-full h-52 object-cover" />
                  <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-semibold">
                        Optimizing E-commerce Sales with AI-Driven Product Recommendations.
                      </h3>
                      <p className="text-gray-400 text-sm mt-3 flex-1">
                          Boost your e-commerce sales with AI-powered product recommendations. Learn how smart algorithms can enhance customer experience and drive conversions. Read our blog for actionable insights!
                      </p>
                      <div className="mt-4">
                          <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black hover:bg-gray-700 transition">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3h7m0 0v7m0-7L10 14" />
                              </svg>
                          </a>
                      </div>
                  </div>
              </div>

          </div>
      </div>
      </div>
     </>;
}