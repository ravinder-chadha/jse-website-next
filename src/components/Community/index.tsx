import Image from "next/image";
import HeadingTitle from "../common/HeadingTitle";
import Podcast from "./Podcast";
import SubSectionHeader from "../common/SubSectionHeader";
import SundayArticles from "./Articles";
import articleText from "./articleText.json";


export default function Community() {
  return (
    <>
      {/* Community Section */}
      <>
        <div className="w-full my-10 flex flex-col justify-center bg-jse-neutral-500">
          <div className="relative">
          <img src="/lib/images/plantation1.avif" className="relative h-96 w-full object-cover"></img>
          <div className="absolute inset-0 bg-gradient-to-t from-jse-neutral-500 to-transparent opacity-100"></div>
          </div>
          <div className="container mx-auto px-16 py-4">
          <HeadingTitle title="Join the Soothing Community" className="text-white " subtitle="Checkout what’s on offer in our community"/>
          <SubSectionHeader title="Weekly Podcasts" />
          <div className="flex flex-row overflow-hidden">
            <Podcast />
            <Podcast />
            <Podcast />
            <Podcast />
          </div>
          <SubSectionHeader title="Sunday Articles" />
          <div className="flex flex-col">
            <SundayArticles imglink={articleText.article1.img} heading={articleText.article1.title} articleText={articleText.article1.content}/>
            <SundayArticles imglink={articleText.article2.img} heading={articleText.article2.title} articleText={articleText.article2.content}/>
          </div>
          </div>

        </div>
      </>
      {/* END Community Section */}
    </>
  );
}
