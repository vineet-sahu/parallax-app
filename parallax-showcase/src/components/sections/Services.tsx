import img12 from "@/assets/image12.png";



export const Services = ()=>{
    return  <>
    <div className="w-full text-white md:py-16 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-800 rounded-3xl p-10 relative overflow-hidden">
              <h2 className="text-4xl font-bold uppercase leading-snug">Innovative Technologies<br/>Keeping Us Ahead</h2>
              <p className="mt-4 text-gray-400">
                  Discover the impact of bespoke digital solutions tailored precisely to your business's distinct requirements.
              </p>
              <div className="mt-10">
                  <img src={img12.src} alt="3D Shape" className="rounded-lg" />
              </div>
          </div>
          <div className="space-y-10">
              <div>
                  <div className="flex items-center gap-3">
                      <span className="text-gray-600 text-2xl font-bold">01</span>
                      <h3 className="text-xl font-semibold">Web App Development</h3>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-3">
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">React</span>
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">Node</span>
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">Angular</span>
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">Vue</span>
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">ExpressJS</span>
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">AdobeXD</span>
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">Figma</span>
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">Whimsical</span>
                  </div>
              </div>
              <div>
                  <div className="flex items-center gap-3">
                      <span className="text-gray-600 text-2xl font-bold">02</span>
                      <h3 className="text-xl font-semibold">Mobile App Development</h3>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-3">
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">Flutter</span>
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">Kotlin</span>
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">Swift</span>
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">React Native</span>
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">AdobeXD</span>
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">Figma</span>
                  </div>
              </div>
              <div>
                  <div className="flex items-center gap-3">
                      <span className="text-gray-600 text-2xl font-bold">03</span>
                      <h3 className="text-xl font-semibold">E-commerce</h3>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-3">
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">Shopify</span>
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">WooCommerce</span>
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">Prestashop</span>
                  </div>
              </div>
              <div>
                  <div className="flex items-center gap-3">
                      <span className="text-gray-600 text-2xl font-bold">04</span>
                      <h3 className="text-xl font-semibold">Analytics</h3>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-3">
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">Python</span>
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">PowerBI</span>
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">Tableau</span>
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">Amazon QuickSight</span>
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">Apache Spark</span>
                  </div>
              </div>
              <div>
                  <div className="flex items-center gap-3">
                      <span className="text-gray-600 text-2xl font-bold">05</span>
                      <h3 className="text-xl font-semibold">Data & Cloud</h3>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-3">
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">Azure</span>
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">AWS</span>
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">Docker</span>
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">Kubernetes</span>
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">Google Cloud</span>
                      <span className="bg-gray-800 px-3 py-1 rounded-lg">Ola Krutrim</span>
                  </div>
              </div>

          </div>
      </div>
      </div>
    </>;
}