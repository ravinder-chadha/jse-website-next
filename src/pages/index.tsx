import About from "@/components/About";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import UpcomingEvents from "@/components/UpcomingEvents";
import Footer from "@/components/Footer";
import YoutubeVideos from "@/components/YoutubeVideos";
import DonateForLife from "@/components/DonateForLife";
import WhatWeDo from "@/components/WhatWeDo";
import Community from "@/components/Community";
import Header from "@/components/Header";
import MaskImage from "@/components/common/MaskImage";
import Chairman from "@/components/Chairman";
import MainLayout from "@/layout/MainLayout";
export default function Home() {
  return (
    <main className="grid">
      <MainLayout>
        <Hero />
        <CTA />
        <About />
        <Chairman />
        <UpcomingEvents />
        <YoutubeVideos />
        <DonateForLife />
        <WhatWeDo />
        <Community />
      </MainLayout>
    </main>
  );
}
