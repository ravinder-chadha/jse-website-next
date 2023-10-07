import Image from "next/image";
import HeadingTitle from "../common/HeadingTitle";
import Podcast from "./Podcast";
import SubSectionHeader from "../common/SubSectionHeader";
import SundayArticles from "./Articles";
import articleText from "./articleText.json";
import Link from "next/link";

export default function Community() {
  return (
    <>
      {/* Community Section */}
      <div className="my-6 md:my-10">
        <div className="w-full bg-jse-neutral-500">
          <div className="relative">
            <Image src="/lib/images/plantation1.avif" className="h-64 md:h-96 w-full object-cover" width={1920} height={1080} alt="Community Banner" />
            <div className="absolute inset-0 bg-gradient-to-t from-jse-neutral-500 to-transparent opacity-100"></div>
          </div>
          <div className="container mx-auto px-4 md:px-16 py-4">
            <HeadingTitle title="Join the Soothing Community" className="text-white" subtitle="Checkout what’s on offer in our community" />
            <SubSectionHeader title="Weekly Podcasts" />
            <div className="flex flex-col justify-start md:flex-row my-4">
              <Podcast />
              <Podcast />
              <Podcast />
              <Podcast />
            </div>
            <SubSectionHeader title="Sunday Articles" />
            <div className="flex flex-col gap-4 ">
              <Link href="/community/article"> <SundayArticles imglink={articleText.article1.img} heading={articleText.article1.title} articleText={articleText.article1.content} /></Link>
              <Link href="/community/article"><SundayArticles imglink={articleText.article2.img} heading={articleText.article2.title} articleText={articleText.article2.content} /></Link>
            </div>
          </div>
        </div>
      </div>
      {/* END Community Section */}
    </>
  );
}
