import React from "react";
import HeadingTitle from "./common/HeadingTitle";

const About = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 my-20 px-4">
        <img
          src="https://cdn.tailkit.com/media/placeholders/photo-C6T6vr1sQI0-1200x900.jpg"
          alt="Hero Image"
          className="rounded-xl relative mx-auto"
        />
        <div className="space-y-10 lg:pr-10">
          {/* Heading */}
          <div className="max-w-2xl">
            <HeadingTitle title="What is Jolly Soothing Era?" />
            <img src="/logo-black.png" className="h-40" alt="" />
            <h3 className="md:leading-relaxed text-jse-neutral-900/80">
              Welcome to Jolly's Soothing Era, a place of boundless compassion
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
        <div>
          <HeadingTitle title="Our Mission" h3 />
          <p>
            Our mission is to ensure that our society receives essential
            necessities such as holistic healthcare through yogic knowledge,
            education, sports, sacred journeys, financial assistance for widows,
            legal aid, the establishment of senior homes, temples, and the
            development of our youth, enabling them to lead honorable lives.
            With a dedicated team of volunteers, we strive to create a nurturing
            environment where individuals can thrive and unlock their true
            potential. Through our comprehensive approach, we aim to build a
            strong foundation for the betterment of our community, fostering
            resilience, empowerment, and a brighter future for all.
          </p>
        </div>
        <div>
          <HeadingTitle title="Our Vision" h3 />

          <p>
            Our vision is to create a society where every individual, regardless
            of their background, has access to essential needs, knowledge, and
            opportunities for personal growth. We strive to foster a culture of
            compassion, equality, and harmony, where social justice prevails and
            the marginalized are uplifted. Through our efforts, we aim to
            inspire and empower individuals to lead meaningful lives, promoting
            holistic well-being, providing quality education, and facilitating
            sustainable development. We envision a future where humans and
            animals coexist in harmony, nurturing a world of empathy and respect
            for all living beings.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
