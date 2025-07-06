'use client';

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { JSX } from "react";
import AIPrediction from "@/components/AIPrediction";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home(): JSX.Element {
  return (
    <>
      <Navbar />
      <Hero />
      <AIPrediction />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTASection />
      <Footer />
    </>
  );
}
