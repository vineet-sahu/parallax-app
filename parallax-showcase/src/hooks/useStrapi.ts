/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useQuery } from '@tanstack/react-query';
import StrapiAPI from '../lib/strapi';
import { ClientsResponse, NavbarResponse } from '@/types';

const useNavbar = () => {

    return useQuery<NavbarResponse | null >({
        queryKey: ['strapiData'],
        queryFn: StrapiAPI.fetchNavbar,
        staleTime: 1000 * 60 * 5,
    });
}


const useClients = () => {
    return useQuery<ClientsResponse | null>({
        queryKey: ['clientsData'],
        queryFn: StrapiAPI.fetchClients,
        staleTime: 1000 * 60 * 5,
    });
}

const useFooter = () => {  
    return useQuery({
        queryKey: ['footerData'],
        queryFn: StrapiAPI.fetchFooter,
        staleTime: 1000 * 60 * 5,
    });
}

const useGlobalSettings = () => {
    return useQuery({
        queryKey: ['globalSettings'],
        queryFn: StrapiAPI.fetchGlobalSettings,
        staleTime: 1000 * 60 * 5,
    });
};


// eslint-disable-next-line import/no-anonymous-default-export
export default { useNavbar, useFooter, useGlobalSettings, useClients };