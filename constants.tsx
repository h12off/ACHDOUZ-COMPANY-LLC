import React from 'react';
import type { Service } from './types';

const PaintBrushIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" />
  </svg>
);

const FilmIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
  </svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const MegaphoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
    </svg>
);

export const SERVICES_DATA: Service[] = [
  {
    icon: <PaintBrushIcon />,
    title: 'Graphic Design & Branding',
    items: [
      { name: 'Logo Design & Branding Bundles', price: '$150+' },
      { name: 'Artwork Design (EP & Album Covers, Posters)', price: '$100+' },
      { name: 'Social Media Branding & Content Design', price: '$200+' },
      { name: 'Groundwork Essentials (Starter Packages)', price: '$450+' },
      { name: 'EPK / Press Kits', price: '$150+' },
    ],
  },
  {
    icon: <FilmIcon />,
    title: 'Film & Series Distribution',
    items: [
      { name: 'Global distribution for indie filmmakers', price: '$2500+' },
      { name: 'Placement on all major streaming platforms', price: '$1500+' },
      { name: 'End-to-end content promotion support', price: 'Custom' },
      { name: 'Strategy for movies & series rollout', price: '$1000+' },
      { name: 'Monetization consulting', price: '$500+' },
    ],
  },
  {
    icon: <CodeIcon />,
    title: 'Web & App Development',
    items: [
      { name: 'Custom Website Design & Development', price: '$800+' },
      { name: 'Mobile App Development (iOS & Android)', price: '$2000+' },
      { name: 'Full-stack solutions for business goals', price: 'Custom' },
      { name: 'E-commerce & Platform builds', price: '$1500+' },
      { name: 'Maintenance & Support', price: '$100/mo+' },
    ],
  },
  {
    icon: <MegaphoneIcon />,
    title: 'Promotion & Media Exposure',
    items: [
      { name: 'Social Media Boosting (Instagram, YouTube)', price: '$300+/mo' },
      { name: 'Spotify Plays & Streaming Growth', price: '$200+' },
      { name: 'Feature placements in top publications', price: '$750+' },
      { name: 'New York Times Square Billboard', price: '$5000+' },
      { name: 'Press Release distribution to 200+ platforms', price: '$400+' },
      { name: 'Digital PR & Influencer Outreach', price: '$1000+' },
    ],
  },
];