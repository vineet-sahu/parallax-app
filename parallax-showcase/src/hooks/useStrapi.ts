/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useQuery } from '@tanstack/react-query';
import { ClientsResponse, ContactFormResponse, HeroContentSectionResponse, InsightSectionResponse, NavbarResponse, ServicesResponse, SuccessStoriesResponse, TechnologyStackResponse, TestimonialResponse } from '@/types';
import { fetchClients, fetchContactForm, fetchHeroContent, fetchHome, fetchInsights, fetchNavbar, fetchServices, fetchSuccessStories, fetchTechnologyStack, fetchTestimonial } from '@/lib/strapi';

const useNavbar = () => {
    return useQuery<NavbarResponse | null >({
        queryKey: ['navbarData'],
        queryFn: fetchNavbar,
        staleTime: 1000 * 60 * 5,
    });
}


const useClients = () => {
    return useQuery<ClientsResponse | null>({
        queryKey: ['clientsData'],
        queryFn: fetchClients,
        staleTime: 1000 * 60 * 5,
    });
}

const useHome = () => {
    return useQuery<any | null>({
        queryKey: ['Home'],
        queryFn: fetchHome,
        staleTime: 1000 * 60 * 5,
    });
}


const useServices = () => {
    return useQuery<ServicesResponse | null>({
        queryKey: ['servicesData'],
        queryFn: fetchServices,
        staleTime: 1000 * 60 * 5,
    });
}


const useContactForm = () => {
    return useQuery<ContactFormResponse | null>({
        queryKey: ['contactFormData'],
        queryFn: fetchContactForm,
        staleTime: 1000 * 60 * 5,
    });
}


const useInsights = () => {
    return useQuery<InsightSectionResponse | null>({
        queryKey: ['insightsData'],
        queryFn: fetchInsights,
        staleTime: 1000 * 60 * 5,
    });
}

const useTechnologyStack = () => {
    return useQuery<TechnologyStackResponse | null>({
        queryKey: ['technologyStackData'],
        queryFn: fetchTechnologyStack,
        staleTime: 1000 * 60 * 5,
    });
}


const useSuccessStory = () => {
    return useQuery<SuccessStoriesResponse | null>({
        queryKey: ['successStoryData'],
        queryFn: fetchSuccessStories,
        staleTime: 1000 * 60 * 5,
    });
}

const useTestimonial = () => {
    return useQuery<TestimonialResponse | null>({
        queryKey: ['testimonialData'],
        queryFn: fetchTestimonial,
        staleTime: 1000 * 60 * 5,
    });
}

const useHeroContent = () => {
    return useQuery<HeroContentSectionResponse | null>({
        queryKey: ['heroContentData'],
        queryFn: fetchHeroContent,
        staleTime: 1000 * 60 * 5,
    });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { useNavbar, useClients , useServices, useHome, useContactForm, useInsights, useTechnologyStack, useSuccessStory, useTestimonial, useHeroContent };