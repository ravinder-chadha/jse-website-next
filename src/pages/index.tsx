import React, {useState} from "react";
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
import UnderProgressPopup from "@/components/common/UnderProgessPopup";
import Gallery from "@/components/gallery";
import ChairmanMessage from "@/components/ChairmanMessage";
export default function Home() {
  const [showPopup, setShowPopup] = useState(true);
  return (
    <main className="grid">
      {/* <UnderProgressPopup showPopup={showPopup} setShowPopup={setShowPopup} /> */}
      <MainLayout>
        <Hero />
        <CTA />
        <About />
        <Chairman />
        <ChairmanMessage/>
        <UpcomingEvents />
        <YoutubeVideos />
        <DonateForLife />
        <Gallery/>
        <WhatWeDo />
        <Community />
      </MainLayout>
    </main>
  );
}
