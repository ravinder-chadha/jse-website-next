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
              Being a part of Supreme lord we all are one. Lets we all hand
              together for the development of humanity and uplift ourselves
              being one and the same as a part of supreme. Aim of foundation is
              to provide our society all the basic necessities regarding
              maintain health through yogic Knowledge , education, sports,
              sacred travels, financial help to widows, Legal Assistance, to
              build old age home, devalyas and development of our youth and
              empower them to live a dignified life. Our foundation also works
              for animals’ welfare for which special team of volunteers is
              working. Social equality and upliftment of underprivileged people
              of our society is our utmost priority. At last, I specially thanks
              to the members and volunteers of our foundation who are doing best
              efforts for working for the cause of humanity and all of them are
              very focused their energy in one way with unmatched commitment.
              They are backbone of the foundation even personally we all are
              family and moreover works for family as all the human beings are
              child of nature.
            </h3>
          </div>
        </div>
        <Image src="/lib/images/Chairman.jpg" alt="Chairman Image" className="rounded-xl relative mx-auto object-cover my-auto" width={564} height={564}></Image>
      </section>
    </>
  );
};

export default About;
