/* eslint-disable @typescript-eslint/no-explicit-any */
import { ClientsResponse, NavbarResponse } from "@/types";


const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "";
const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || "";

export const fetchNavbar = async (): Promise<NavbarResponse | null> => {
    try {
      const res = await fetch(`${STRAPI_URL}/api/navbar?populate=*`, {
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        }
      });
  
      if (!res.ok) {
        console.error("Failed to fetch navbar items:", res.statusText);
        return null;
      }
  
      const data: NavbarResponse = await res.json();
      console.log(data);
      
      return data;
    } catch (error) {
      console.error("Error fetching navbar:", error);
      return null;
    }
};


export const fetchClients = async (): Promise<ClientsResponse | null> => {
    console.log("token", process.env.NEXT_PUBLIC_STRAPI_API_TOKEN);

    // /api/homepage?populate=*
    // homepage?populate[sections][populate]=*
    // /api/homepage?populate[sections][on][client.sections-clients][populate][Client][populate]=logo
    try {
        const res = await fetch(`${STRAPI_URL}/api/homepage?populate[sections][on][client.sections-clients][populate][Client][populate]=logo`, {
          headers: {
            Authorization: `Bearer ${STRAPI_API_TOKEN}`,
          }
        });
    
        if (!res.ok) {
          console.error("Failed to fetch fetchClients:", res.statusText);
          return null;
        }
    
        const data = await res.json();
        console.log("sasasasasasa===========", data);
        
        return data;
      } catch (error) {
        console.error("Error fetching fetchClients:", error);
        return null;
      }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getStrapiMediaUrl(media: any) {
    if (!media) return null;
    
    const { url } = media.data?.attributes || media;
    
    if (url?.startsWith('/')) {
      return `${STRAPI_URL}${url}`;
    }
    
    return url;
  }


  const fetchFooter = async() => {
    const response = await fetch(`${STRAPI_URL}/api/footer?populate=*`, {
      headers: {
        'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch footer data');
    }

    const data = await response.json();
    return data.data;
  };


const fetchGlobalSettings = async () => {
    const response = await fetch(`${STRAPI_URL}/api/global-setting?populate=*`, {
      headers: {
        'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch global settings');
    }

    const data = await response.json();
    return data.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchNavbar, fetchFooter, fetchGlobalSettings, getStrapiMediaUrl, fetchClients };