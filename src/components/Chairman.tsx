import React from "react";
import Image from "next/image";
import HeadingTitle from "./common/HeadingTitle";
import SubSectionHeader from "./common/SubSectionHeader";

const About = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 my-20 px-4">
        <div className="space-y-10 lg:pl-10">
          {/* Heading */}
          <div className="max-w-2xl">
            <HeadingTitle title="Message from Our Chairman" />
            <SubSectionHeader
              title="Kailashi Harsh Jhanji ॐ ADHIYOGI SHIVA ॐ"
              className="text-jse-neutral-900/80 bg-jse-neutral-100"
            />
            <h3 className="md:leading-relaxed text-jse-neutral-900/80">
              As God says, we are all one. There are indeed people with difficulties, hardships, and challenges; but it is a moral and ethical duty of a human being to be compassionate and kind to those. It is our social responsibility as humans to contribute to uplift society as a whole, and live a meaningful life to serve it.
              <br />Jolly&apos;s Soothing Era Foundation aims to accelerate the feeling of equality, compassion, kindness, and humanity in society. Our goal is to provide society with necessities, including but not limited to education services, health services, sporting facilities, sacred travels, financial help for widows, legal assistance, and building old-age homes, ashrams, and devalyas.
              <br />Our foundation also works for the welfare of animals with a special team of volunteers. We aim to build a healthy environment and donate plants every weekend for the cause. Social equality and the upliftment of underprivileged people in our society is our utmost priority.
              <br />Finally, I would like to thank the donors, volunteers, and members of the foundation who are regularly doing their best to help achieve the goal of a healthy and sound society. The family of these donors, volunteers, and regular members is what we are utmost proud of.
            </h3>
          </div>
        </div>
        <Image src="/lib/images/Chairman.jpg" alt="Chairman Image" className="rounded-xl relative mx-auto object-cover my-auto" width={564} height={564}></Image>
      </section>
    </>
  );
};

export default About;
