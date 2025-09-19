/* eslint-disable @typescript-eslint/no-explicit-any */
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

  export interface ClientSectionFields {
    sections: Section[];
 }

  export type NavbarResponse = StrapiSingleResponse<NavbarFields>;
  export type ClientsResponse = StrapiSingleResponse<ClientSectionFields>;

  export interface Client {
    id: number;
    name: string;
    url: string | null;
    logo: Logo[];
  }
  
  export interface Section {
    __component: string;
    id: number;
    heading: string;
    Client: Client[];
  }

//   {
//     "data": {
//         "id": 3,
//         "documentId": "udrj9fnwt0s84qfl1q2ftjaj",
//         "createdAt": "2025-09-19T02:48:17.036Z",
//         "updatedAt": "2025-09-19T04:15:11.250Z",
//         "publishedAt": "2025-09-19T04:15:11.260Z",
//         "sections": [
//             {
//                 "__component": "client.sections-clients",
//                 "id": 2,
//                 "heading": "Clients list",
//                 "Client": [
//                     {
//                         "id": 4,
//                         "name": "master study",
//                         "url": null,
//                         "logo": [
//                             {
//                                 "id": 9,
//                                 "documentId": "q1pi8vmpy3jxrtz5i6lsjxsj",
//                                 "name": "logo_001.png",
//                                 "alternativeText": null,
//                                 "caption": null,
//                                 "width": 150,
//                                 "height": 72,
//                                 "formats": null,
//                                 "hash": "logo_001_f7848ee8a6",
//                                 "ext": ".png",
//                                 "mime": "image/png",
//                                 "size": 0.86,
//                                 "url": "/uploads/logo_001_f7848ee8a6.png",
//                                 "previewUrl": null,
//                                 "provider": "local",
//                                 "provider_metadata": null,
//                                 "createdAt": "2025-09-19T02:47:15.927Z",
//                                 "updatedAt": "2025-09-19T02:47:15.927Z",
//                                 "publishedAt": "2025-09-19T02:47:15.927Z"
//                             }
//                         ]
//                     },
//                     {
//                         "id": 5,
//                         "name": "orofil",
//                         "url": null,
//                         "logo": [
//                             {
//                                 "id": 8,
//                                 "documentId": "g7wh9yytznhy09epx6iun2eg",
//                                 "name": "logo_002.png",
//                                 "alternativeText": null,
//                                 "caption": null,
//                                 "width": 150,
//                                 "height": 72,
//                                 "formats": null,
//                                 "hash": "logo_002_1bcd217be5",
//                                 "ext": ".png",
//                                 "mime": "image/png",
//                                 "size": 0.71,
//                                 "url": "/uploads/logo_002_1bcd217be5.png",
//                                 "previewUrl": null,
//                                 "provider": "local",
//                                 "provider_metadata": null,
//                                 "createdAt": "2025-09-19T02:47:15.913Z",
//                                 "updatedAt": "2025-09-19T02:47:15.913Z",
//                                 "publishedAt": "2025-09-19T02:47:15.913Z"
//                             }
//                         ]
//                     },
//                     {
//                         "id": 6,
//                         "name": "fonnia",
//                         "url": null,
//                         "logo": [
//                             {
//                                 "id": 7,
//                                 "documentId": "ndkq5b2rlstex1ew1u9ml2nd",
//                                 "name": "logo_004.png",
//                                 "alternativeText": null,
//                                 "caption": null,
//                                 "width": 150,
//                                 "height": 72,
//                                 "formats": null,
//                                 "hash": "logo_004_7bdcf1acde",
//                                 "ext": ".png",
//                                 "mime": "image/png",
//                                 "size": 1.04,
//                                 "url": "/uploads/logo_004_7bdcf1acde.png",
//                                 "previewUrl": null,
//                                 "provider": "local",
//                                 "provider_metadata": null,
//                                 "createdAt": "2025-09-19T02:47:15.880Z",
//                                 "updatedAt": "2025-09-19T02:47:15.880Z",
//                                 "publishedAt": "2025-09-19T02:47:15.880Z"
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     },
//     "meta": {}
// }