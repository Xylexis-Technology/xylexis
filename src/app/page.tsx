/**
 * Homepage — assembles all home-page sections in order.
 */

import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Xylexis — Software Engineering Agency",
  description:
    "We design and build websites, software, and AI automation that help businesses grow. Modern, fast, and conversion-focused.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <FeaturedWork />
      <ProcessSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
