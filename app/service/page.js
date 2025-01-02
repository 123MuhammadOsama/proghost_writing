import BookSlider from '@/components/ServiceComponents/Servicewipper';
import Hero from '@/components/ServiceComponents/Hero';
import React from 'react';
import Serviceswipper from '@/components/ServiceComponents/Servicewipper';
import GhostWriting from '@/components/ServiceComponents/GhostWriting';
import Situation from '@/components/ServiceComponents/Situation';
import Comprehensive from '@/components/ServiceComponents/Comprehensive';
import Expect from '@/components/ServiceComponents/Expect';
import Process from '@/components/ServiceComponents/Process';
import Thought from '@/components/ServiceComponents/Thought';
import Testimonials from '@/components/Testimonials';
import Faqs from '@/components/ServiceComponents/Faqs';

export const metadata = {
  title: 'Affordable Ghostwriting Services - Services',
  description:
    'Need more information about ghostwriting services? Contact us at +1 206-746-7149 regarding any queries & complaints. Check out our complete website for further assistance!',
  openGraph: {
    title: 'About - Pro Ghostwriting Services',
    description:
      'Pro ghostwriting services focus on delivering high-quality ghostwriting services. Read more about us by clicking this page',
    images: [
      {
        // url: "https://proghostwritingservices.com/logo",
        url: 'https://proghostwritingservices.com/_next/image?url=%2Fabout-us-hero.png&w=640&q=75',
        width: 1200,
        height: 628,
        type: 'image/jpeg',
      },
    ],
    siteName: 'Pro GhostWriters',
    locale: 'en_US',
    type: 'article',
    url: 'https://proghostwritingservices.com/servics',
  },
  alternates: {
    canonical: 'https://proghostwritingservices.com/servics',
    last_updated: '10/15/2024',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pro Ghost Writing Services',
    description:
      'Searching for ghostwriters to create your books, speeches, memoirs and articles? Hire our pro ghostwriting services and get content written at low prices',
    creator: '@Proghost_writer',
    site: 'x.com/Proghost_writer',
    images: [''],
  },
};

const page = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Serviceswipper />
      <GhostWriting />
      <Situation />
      <Comprehensive />
      <Expect />
      <Process />
      <Thought />
      <Testimonials />
      <Faqs />
    </div>
  );
};

export default page;
