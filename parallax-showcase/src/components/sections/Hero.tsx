"use client";

import logo1 from "@/assets/logos/logo_001.png";
import logo2 from "@/assets/logos/logo_002.png";
import logo3 from "@/assets/logos/logo_003.png";
import logo4 from "@/assets/logos/logo_004.png";
import logo5 from "@/assets/logos/logo_005.png";
import logo6 from "@/assets/logos/logo_006.png";
import logo7 from "@/assets/logos/logo_007.png";



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

    <div>
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

          {/* Logos Section */}
          <div className={"flex items-center justify-between mx-auto"}>
          <img src={logo1.src}  alt="logos" />
          <img src={logo2.src} alt="logos" />
          <img src={logo3.src} alt="logos" />
          <img src={logo4.src} alt="logos" />
          <img src={logo5.src} alt="logos" />
          <img src={logo6.src} alt="logos" />
          <img src={logo7.src}  alt="logos" />
        </div>
    </>;
}


export default Hero;