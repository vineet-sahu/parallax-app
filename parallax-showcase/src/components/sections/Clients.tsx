import logo1 from "@/assets/logos/logo_001.png";
import logo2 from "@/assets/logos/logo_002.png";
import logo3 from "@/assets/logos/logo_003.png";
import logo4 from "@/assets/logos/logo_004.png";
import logo5 from "@/assets/logos/logo_005.png";
import logo6 from "@/assets/logos/logo_006.png";
import logo7 from "@/assets/logos/logo_007.png";

export const Client = ()=>{

    return  <div className={ "flex flex-wrap items-center justify-center gap-6 md:gap-12 w-full"}>
        <img className="" src={logo1.src} alt="logos" />
        <img className="" src={logo2.src} alt="logos" />
        <img className="" src={logo3.src} alt="logos" />
        <img className="" src={logo4.src} alt="logos" />
        <img className="" src={logo5.src} alt="logos" />
        <img className="" src={logo6.src} alt="logos" />
        <img className="" src={logo7.src} alt="logos" />
      </div>
}