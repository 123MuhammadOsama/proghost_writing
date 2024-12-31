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
