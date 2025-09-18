import { NavbarResponse } from "@/types";


const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || "139c48afa74046a18b57335506c569997724e21ca2be4b8ce7dace1bdce7dc06107cf65ed20140684ebab065dd657a3b6c43c2f1c0631247b8e8fecc5cb3ac4daba4478ac0c0c5eeb3d183b2bc8e33b8b6ad92a0be9f479708ebadff4f0fd6458e906dfeeaae982adf5953ba6f0ccbd9a474aaabf34d2ec157dd2b5fea173742";

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
export default { fetchNavbar, fetchFooter, fetchGlobalSettings, getStrapiMediaUrl };