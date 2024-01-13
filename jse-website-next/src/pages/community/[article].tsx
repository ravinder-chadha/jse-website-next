import MainLayout from "@/layout/MainLayout";
import Link from "next/link";
import CTA from "@/components/CTA";
import Image from "next/image";
import articleText from "../../components/Community/articleText.json";

import HeadingTitle from "@/components/common/HeadingTitle";
const Article = () => {
  return (
    <MainLayout headerTransition={false}>
        <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 lg:px-8 my-10 flex flex-col justify-center">
          <HeadingTitle title="राजा मोरध्वज की कथा" subtitle="Written By Harsh Jhanji" className="mx-auto text-center" />

          <Image src={articleText.article1.img} alt="Article Image" className="rounded-xl object-cover object-top h-[400px] w-full" width={500} height={500} />
          <div className="md:text-lg text-base">
            {articleText.article1.content}
          </div>
          <div className="flex items-center justify-between text-base text-jse-neutral-400">
            <span> Edited by: Harsh Jhanji </span>
            <span>Published on: Oct 6, 2023 </span>
          </div>
          {/* Load More Button */}
          <div className="flex justify-center">
          <Link href="/community">
            <button
              type="button"
              className="inline-flex justify-around items-center space-x-2 text-sm border-2 font-bold rounded-lg px-6 py-3 leading-6 border-jse-primary-500 bg-white hover:text-white hover:bg-jse-primary-400 hover:border-jse-primary-300 focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 text-jse-primary-500 active:bg-jse-primary-400 active:border-jse-primary-300 hover-white"
            >
              Back to Community
            </button>
            </Link>
          </div>
          {/* Load More Button */}
          <CTA />
        </div>
    </MainLayout >
  );
};


export default Article