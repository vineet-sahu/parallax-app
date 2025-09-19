/* eslint-disable @typescript-eslint/no-explicit-any */
import logo1 from "@/assets/logos/logo_001.png";
import logo2 from "@/assets/logos/logo_002.png";
import logo3 from "@/assets/logos/logo_003.png";
import logo4 from "@/assets/logos/logo_004.png";
import logo5 from "@/assets/logos/logo_005.png";
import logo6 from "@/assets/logos/logo_006.png";
import logo7 from "@/assets/logos/logo_007.png";
import { useAppContext } from "@/context/ParallaxContext";

export const Client = ()=>{

  const { clientSection: {isLoading, error, data} } = useAppContext();


console.log("allData===========", data);

 // Loading state
 if (isLoading) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 w-full">
      <div className="animate-pulse">Loading clients...</div>
    </div>
  );
}

// Error state
if (error) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 w-full">
      <div className="text-red-500">Error loading clients</div>
    </div>
  );
}


const clients = (data?.data?.sections || [])[0]?.Client || [];

// No clients found
if (!clients || clients.length === 0) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 w-full">
      <div>No clients found</div>
    </div>
  );
}


const getFullImageUrl = (logoUrl: string): string => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
  return baseUrl + logoUrl;
};

  // Extract and render clients
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 w-full">
      {clients.map((client: any) => (
        <div key={client.id} className="flex items-center justify-center">
          {client.logo && client.logo.length > 0 ? (
            <img 
              className="max-h-16 w-auto object-contain" 
              src={getFullImageUrl(client.logo[0].url)} 
              alt={client.logo[0].alternativeText || client.name}
              title={client.name}
            />
          ) : (
            <div className="flex items-center justify-center h-16 px-4 bg-gray-100 rounded">
              <span className="text-gray-600 text-sm">{client.name}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
// return  <div className={ "flex flex-wrap items-center justify-center gap-6 md:gap-12 w-full"}>
//         <img className="" src={logo1.src} alt="logos" />
//         <img className="" src={logo2.src} alt="logos" />
//         <img className="" src={logo3.src} alt="logos" />
//         <img className="" src={logo4.src} alt="logos" />
//         <img className="" src={logo5.src} alt="logos" />
//         <img className="" src={logo6.src} alt="logos" />
//         <img className="" src={logo7.src} alt="logos" />
//       </div>
}