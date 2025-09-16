/* eslint-disable react/no-unescaped-entities */
"use client";

import logo1 from "@/assets/logos/logo_001.png";
import logo2 from "@/assets/logos/logo_002.png";
import logo3 from "@/assets/logos/logo_003.png";
import logo4 from "@/assets/logos/logo_004.png";
import logo5 from "@/assets/logos/logo_005.png";
import logo6 from "@/assets/logos/logo_006.png";
import logo7 from "@/assets/logos/logo_007.png";
import mail from "@/assets/mail.png";
import phone from "@/assets/phone.png";




const Hero = () => {


    return <>
    
      {/* Top Badge */}
      <div>✨ Introducing AI Automation</div>

      {/* Heading */}
      <h1>
        from <span>CONCEPT</span> <br />
        to <span>REALITY</span>
      </h1>

      {/* Subheading */}
      <p>We Engineer your Software Success & Digital Transformation.</p>

{/* description */}
    <p>
        At Chromezy, we translate your ideas into market-ready solutions quickly
        and precisely. Leveraging the power of technology and prioritizing user
        needs, we deliver products that are both cutting-edge and user-centric.
      </p>

{/* stats */}
{
    // 
    // box1 
    // 200%

    // Revenue Growth
    // {/* box2 */}
    // 4X

    // Speed to Market
    // {/* box3 */}
    // 73%

    // New Orders
    // {/* box4 */}

    // 10K+

    // Active Users */
    // 
}

          <div className={"flex items-center justify-between mx-auto gap-24"}>
              <div>
              <h3>200%</h3>
              <p>Revenue Growth</p>
              </div>
              <div>
              <h3>4X</h3>
              <p>Speed to Market</p>
              </div>
              <div>
              <h3>73%</h3>
              <p>New Orders</p>
              </div>
              <div>
              <h3>10K+</h3>
              <p>Active Users</p>
              </div>
          </div>

          <hr className="h-px my-8 bg-gray-200 border-0 bg-white w-full" />

          {/* Logos Section */}
          <div className={"flex items-center justify-between mx-auto gap-24"}>
            <img src={logo1.src}  alt="logos" />
            <img src={logo2.src} alt="logos" />
            <img src={logo3.src} alt="logos" />
            <img src={logo4.src} alt="logos" />
            <img src={logo5.src} alt="logos" />
            <img src={logo6.src} alt="logos" />
            <img src={logo7.src}  alt="logos" />
          </div>

          <hr className="h-px my-8 bg-gray-200 border-0 bg-white  w-full" />

          <h1 className="">
            Product Engineering
          </h1>

          <p>
            {
              // eslint-disable-next-line react/no-unescaped-entities
            }
            Discover the impact of bespoke digital solutions tailored precisely to your business's distinct requirements. Our experienced team of professionals ensures you receive outstanding results that consistently exceed your expectations.
          </p>

          <div className={"flex items-center justify-between mx-auto gap-24"}>
            <div className="">
                <h1>MVP</h1>
                <p>
                  We specialize in custom MVP development, focusing on tailored prototyping services to meet diverse client needs and ensure rapid market launch.
                  Talk to a Product Expert
                </p>
                <button>Talk to a Product Expert</button>
              </div>
              <div className="">
                <h1>SaaS</h1>
                <p>
                Take your business to new heights with our all-inclusive SaaS development services, delivering seamless and digital experiences that are platform-agnostic and tailored to your customers' needs.
                Talk to a Product Expert
                </p>
                <button>Talk to a Product Expert</button>

              </div>
              <div className="">
                <h1>AI</h1>
                <p>
                We develop tailored AI solutions, leveraging machine learning, NLP, and computer vision to automate, optimize, and enhance decision-making processes
            Talk to a Product Expert
                </p>
                <button>Talk to a Product Expert</button>

              </div>
              <div className="">
                <h1>          B2B & B2C Commerce Transformation              </h1>
                <p>
                B2B & B2C Commerce Transformation
            We elevate B2B and B2C commerce, specializing in Shopify, Prestashop, Magento, and Woocommerce to boost online orders and enhance customer shopping experiences, keeping you competitive.
            Talk to a Ecommerce Expert
                </p>
                <button>Talk to a Product Expert</button>

              </div>
          </div>

          {/* divider */}

          <hr className="h-px my-8 bg-gray-200 border-0 bg-white w-full" />

          <div>
              <h1 className="text-4xl uppercase">Our Happy Clients</h1>
              <p>Dummy ipsum dolor sit amet, consectetur adipiscing elit
              </p>
<div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg flex flex-col">


</div>
            <div className={"flex items-center justify-between mx-auto gap-24"}>

              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg flex flex-col p-8">
                <p>
                  Dummy ipsum dolor sit amet, consectetur adipiscing elit
                  We are Campion Savings Club based in Zimbabwe, South Africa, UK, USA and Australia. Chromezy is very professional, efficient, and reliable.
                  Highly responsive with keen attention to detail. Assisted in building my e-commerce platform, mapping transformative areas, resulting in exceptional customer experience.
                </p>
                <div className="text-right">
                  <p className="font-bold">BRANDON LAU</p>
                  <p className="text-white text-xs opacity-76">(CEO), Campion Savings Club</p>
                </div>

                <hr className="h-px my-8 bg-gray-200 border-0 bg-white  w-full" />

                <div>
                  <div className="text-xs">
                    <p className="text-xs">Star Rating  - 5 / 5</p>
                    <p className="text-xs">Project - Custom CRM MVP Development</p>
                    <p className="text-xs">Country - Zimbabwe</p>
                  </div>
                  <div>
                    <img src={logo1.src} alt="" />
                  </div>
                </div>
              </div>
              <div>
                <p>
                  Dummy ipsum dolor sit amet, consectetur adipiscing elit
                  We are Campion Savings Club based in Zimbabwe, South Africa, UK, USA and Australia. Chromezy is very professional, efficient, and reliable.
                  Highly responsive with keen attention to detail. Assisted in building my e-commerce platform, mapping transformative areas, resulting in exceptional customer experience.
                </p>
                <p>BRANDON LAU</p>
                <p>(CEO), Campion Savings Club</p>
                <hr className="h-px my-8 bg-gray-200 border-0 bg-white  w-full" />

                <div>
                  <div>
                    <p>Star Rating  - 5 / 5</p>
                    <p>Project - Custom CRM MVP Development</p>
                    <p>Country - Zimbabwe</p>
                  </div>
                  <div>
                    <img src={logo1.src} alt="" />
                  </div>
                </div>
              </div>

              <div>
                <p>
                  Dummy ipsum dolor sit amet, consectetur adipiscing elit
                  We are Campion Savings Club based in Zimbabwe, South Africa, UK, USA and Australia. Chromezy is very professional, efficient, and reliable.
                  Highly responsive with keen attention to detail. Assisted in building my e-commerce platform, mapping transformative areas, resulting in exceptional customer experience.
                </p>
                <p>BRANDON LAU</p>
                <p>(CEO), Campion Savings Club</p>
                <hr className="h-px my-8 bg-gray-200 border-0 bg-white  w-full" />

                <div>
                  <div>
                    <p>Star Rating  - 5 / 5</p>
                    <p>Project - Custom CRM MVP Development</p>
                    <p>Country - Zimbabwe</p>
                  </div>
                  <div>
                    <img src="" alt="" />
                  </div>
                </div>
              </div>

              <div>
                <p>
                  Dummy ipsum dolor sit amet, consectetur adipiscing elit
                  We are Campion Savings Club based in Zimbabwe, South Africa, UK, USA and Australia. Chromezy is very professional, efficient, and reliable.
                  Highly responsive with keen attention to detail. Assisted in building my e-commerce platform, mapping transformative areas, resulting in exceptional customer experience.
                </p>
                <p>BRANDON LAU</p>
                <p>(CEO), Campion Savings Club</p>
                <hr className="h-px my-8 bg-gray-200 border-0 bg-white  w-full" />

                <div>
                  <div>
                    <p>Star Rating  - 5 / 5</p>
                    <p>Project - Custom CRM MVP Development</p>
                    <p>Country - Zimbabwe</p>
                  </div>
                  <div>
                    <img src="" alt="" />
                  </div>
                </div>
              </div>

              <div>
                <p>
                  Dummy ipsum dolor sit amet, consectetur adipiscing elit
                  We are Campion Savings Club based in Zimbabwe, South Africa, UK, USA and Australia. Chromezy is very professional, efficient, and reliable.
                  Highly responsive with keen attention to detail. Assisted in building my e-commerce platform, mapping transformative areas, resulting in exceptional customer experience.
                </p>
                <p>BRANDON LAU</p>
                <p>(CEO), Campion Savings Club</p>
                <hr className="h-px my-8 bg-gray-200 border-0 bg-white  w-full" />

                <div>
                  <div>
                    <p>Star Rating  - 5 / 5</p>
                    <p>Project - Custom CRM MVP Development</p>
                    <p>Country - Zimbabwe</p>
                  </div>
                  <div>
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <hr className="h-px my-8 bg-gray-200 border-0 bg-white w-full" />

          <div className="flex items-center justify-between mx-auto gap-24">

          </div>

          <div className="text-white py-16 px-6 w-full">
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
                  <img src="https://via.placeholder.com/400x250" alt="FinConnect" className="w-full" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">FinConnect</h3>
                    <p className="text-gray-400 text-sm">Customer Relationship Management (CRM)</p>
                  </div>
                </div>

                <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                  <span className="absolute top-3 left-3 bg-gray-700 text-xs px-3 py-1 rounded-full">Success Stories</span>
                  <img src="https://via.placeholder.com/400x250" alt="HealthSync" className="w-full" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">HealthSync</h3>
                    <p className="text-gray-400 text-sm">Health Tracking App for Patients and Doctors</p>
                  </div>
                </div>

                <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                  <span className="absolute top-3 left-3 bg-gray-700 text-xs px-3 py-1 rounded-full">Success Stories</span>
                  <img src="https://via.placeholder.com/400x250" alt="Commerce360" className="w-full" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">Commerce360</h3>
                    <p className="text-gray-400 text-sm">Online Store, Multivendor Marketplace & E-commerce Apps</p>
                  </div>
                </div>

                <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                  <span className="absolute top-3 left-3 bg-gray-700 text-xs px-3 py-1 rounded-full">Success Stories</span>
                  <img src="https://via.placeholder.com/400x250" alt="PrintwithAI" className="w-full" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">PrintwithAI</h3>
                    <p className="text-gray-400 text-sm">Web-to-Print Software / Online Design Tool / Product Designer Tool</p>
                  </div>
                </div>

                <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                  <span className="absolute top-3 left-3 bg-gray-700 text-xs px-3 py-1 rounded-full">Success Stories</span>
                  <img src="https://via.placeholder.com/400x250" alt="PM Insights" className="w-full" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">PM Insights</h3>
                    <p className="text-gray-400 text-sm">Project Management Tool (SaaS & Hosted)</p>
                  </div>
                </div>

              </div>
            </div>
          </div>


          <hr className="h-px my-8 bg-gray-200 border-0 bg-white w-full" />

          <div className="w-full text-white py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              
              <div className="bg-gray-800 rounded-3xl p-10 relative overflow-hidden">
                <h2 className="text-4xl font-bold uppercase leading-snug">Innovative Technologies<br/>Keeping Us Ahead</h2>
                <p className="mt-4 text-gray-400">
                  Discover the impact of bespoke digital solutions tailored precisely to your business's distinct requirements.
                </p>
                <div className="mt-10">
                  <img src="https://via.placeholder.com/400x250" alt="3D Shape" className="rounded-lg" />
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


          <div className="w-full text-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
              
              
              <div className="mb-12 text-center lg:text-left">
                <h2 className="text-4xl font-bold uppercase">Featured Insights</h2>
                <p className="mt-2 text-gray-400">
                  Were you looking to explore a specific topic? You’re in the right spot.
                </p>
              </div>

              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                
                <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <img src="https://via.placeholder.com/400x250" alt="MVP Launches" className="w-full h-52 object-cover" />
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
                  <img src="https://via.placeholder.com/400x250" alt="AI Product Development" className="w-full h-52 object-cover" />
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
                  <img src="https://via.placeholder.com/400x250" alt="E-commerce AI" className="w-full h-52 object-cover" />
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

          <div className="w-full py-16 px-6">
            <div className="max-w-6xl mx-auto bg-white/10 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
              
              
              <div className="bg-gradient-to-b from-blue-400 to-blue-600 text-white p-10 flex flex-col items-center justify-center relative">
                <div className="w-40 h-40 rounded-full bg-blue-200 flex items-center justify-center mb-6">
                  <img src="https://via.placeholder.com/150" alt="Character" className="w-28 h-28 object-contain" />

                </div>
                <h2 className="text-3xl font-bold uppercase text-center">Contact Us</h2>
                <p className="mt-3 text-center text-white/90">
                  Talk with us to know how we can make you a part of a thriving digital landscape
                </p>

                
                <div className="mt-8 space-y-4 w-full max-w-sm">
                  <div className="flex items-center gap-3 bg-green-600 px-5 py-3 rounded-xl justify-between">
                    <img src={phone.src}  alt="phone" className="h-5 w-5"/>
                    <span className="font-semibold">+1 315 308 0901</span>
                  </div>
                  <div className="flex items-center gap-3 bg-green-500 px-5 py-3 rounded-xl justify-between">
                    <img src={mail.src}  alt="mail" className="h-5 w-5"/>
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
          </div>




    </>;
}


export default Hero;