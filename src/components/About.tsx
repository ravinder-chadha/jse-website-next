import React from "react";
import HeadingTitle from "./common/HeadingTitle";
import VissonMission from "./common/VissonMission";

const About = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 my-20 px-4">
        <img
          src="/lib/images/Temp_Image.avif"
          alt="Hero Image"
          className="rounded-xl relative mx-auto h-[564px] w-full"
        />
        <div className="space-y-10 lg:pr-10">
          {/* Heading */}
          <div className="max-w-2xl">
            <HeadingTitle title="What is Jolly Soothing Era?" />
            <img src="/logo-black.png" className="h-40" alt="" />
            <h3 className="md:leading-relaxed text-jse-neutral-900/80">
              Welcome to Jolly&apos;s Soothing Era, a place of boundless compassion
              and transformative impact. Inspired by the incredible life and
              philanthropy of Jolly Jhanji Ji, who left behind a remarkable
              legacy of assisting the underprivileged, we are dedicated to
              uplifting lives and fostering unity. As part of the Supreme Master
              community, we believe in the inherent unity of all beings and
              strive towards creating a world where no one is left behind.
              Through our relentless efforts, we provide essential necessities,
              empower through education, offer sacred journeys, extend financial
              aid, and ensure the well-being of both humans and animals. By
              joining hands with us, you become a catalyst for change,
              contributing to a society where love, equality, and harmony reign.
              Together, let us weave a tapestry of hope, compassion, and
              dignity, making a profound difference in the lives of those in
              need.
            </h3>
          </div>
        </div>
        <VissonMission />
      </section>
    </>
  );
};

export default About;
