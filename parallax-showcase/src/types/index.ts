/* eslint-disable @typescript-eslint/no-explicit-any */
// {
//     "id": 2,
//     "documentId": "v6gdex3h02uqy2eg1ropzzt2",
//     "createdAt": "2025-09-17T08:32:51.502Z",
//     "updatedAt": "2025-09-18T08:34:41.703Z",
//     "publishedAt": "2025-09-18T08:34:41.712Z",
//     "buttonLink": null,
//     "buttonText": null,
//     "menuItems": [
//         {
//             "id": 6,
//             "label": "Explore AI",
//             "url": "/explore_aI",
//             "isExternal": null
//         },
//         {
//             "id": 7,
//             "label": "Services",
//             "url": "/services",
//             "isExternal": null
//         },
//         {
//             "id": 8,
//             "label": "E-commerce",
//             "url": "/e-commerce",
//             "isExternal": null
//         },
//         {
//             "id": 9,
//             "label": "Products",
//             "url": "/products",
//             "isExternal": null
//         },
//         {
//             "id": 10,
//             "label": "Blogs",
//             "url": "blogs",
//             "isExternal": null
//         }
//     ],
//     "logo": [
//         {
//             "id": 1,
//             "documentId": "ylvf8cozubr4nqu6gpb0pqf1",
//             "name": "chromezy.png",
//             "alternativeText": null,
//             "caption": null,
//             "width": 128,
//             "height": 27,
//             "formats": null,
//             "hash": "chromezy_660295d19c",
//             "ext": ".png",
//             "mime": "image/png",
//             "size": 0.94,
//             "url": "/uploads/chromezy_660295d19c.png",
//             "previewUrl": null,
//             "provider": "local",
//             "provider_metadata": null,
//             "createdAt": "2025-09-17T08:27:14.875Z",
//             "updatedAt": "2025-09-17T08:28:23.640Z",
//             "publishedAt": "2025-09-17T08:27:14.876Z"
//         }
//     ]
// }

export interface MenuItem {
    id: number;
    label: string;
    url: string;
    isExternal: boolean | null;
  }
  
  export interface Logo {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: any | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }
  
  export interface NavbarFields {
    buttonLink: string | null;
    buttonText: string | null;
    menuItems: MenuItem[];
    logo: Logo[];
  }
  
  export interface MenuItem {
    id: number;
    label: string;
    url: string;
    isExternal: boolean | null;
  }
  
  export interface Logo {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: any | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }

  export interface CommonStrapiFields {
    id: number;
    documentId?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
  }

  export interface StrapiSingleResponse<T> {
    data: T & CommonStrapiFields;
    meta: any;
  }

  export type NavbarResponse = StrapiSingleResponse<NavbarFields>;
  