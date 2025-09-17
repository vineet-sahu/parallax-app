/* eslint-disable react/no-unescaped-entities */
"use client";
import { Client } from "./Clients";
import { ProductEnginering } from "./ProductEnginering";
import { HappyClients } from "./HappyClients";
import { SuccessStories } from "./SuccessStories";
import { Services } from "./Services";
import { Insights } from "./Insights";




const Hero = () => {


    return <>
    
    <div className="text-center mx-auto md:w-1/2">
      <h5>✨ Introducing AI Automation</h5> 
      <h1 className="text-5xl font-bold mb-4">
          from <span className="text-cyan-400">CONCEPT</span> <br />
          to <span className="text-blue-600">REALITY</span>
        </h1>
      <p className="text-lime-200 text-2xl">We Engineer your Software Success & Digital Transformation.</p>

        <p className="text-sm m-8 size-fit mx-auto ">
          At Chromezy, we translate your ideas into market-ready solutions quickly and precisely. Leveraging the power of technology and prioritizing user needs, we deliver products that are both cutting-edge and user-centric.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center mt-24">
          <div>
              <h3 className="text-blue-600 text-2xl font-bold">200%</h3>
              <p className="text-xs">Revenue Growth</p>
          </div>
          <div>
              <h3 className="text-blue-600 text-2xl font-bold">4X</h3>
              <p className="text-xs">Speed to Market</p>
          </div>
          <div>
              <h3 className="text-blue-600 text-2xl font-bold">73%</h3>
              <p className="text-xs">New Orders</p>
          </div>
          <div>
              <h3 className="text-blue-600 text-2xl font-bold">10K+</h3>
              <p className="text-xs">Active Users</p>
          </div>
      </div>
      </div>
    </>;
}


export default Hero;