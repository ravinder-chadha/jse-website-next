import Image from "next/image";
import HeadingTitle from "../common/HeadingTitle";
import Podcast from "./Podcast";
import SubSectionHeader from "../common/SubSectionHeader";
import SundayArticles from "./Articles";
import Link from "next/link";
import { getArticles, getPodcastLinks } from "../../../api/api";
import { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../config/sanity"


export default function Community() {

  const builder = imageUrlBuilder(client);
  const urlFor = (source: any) => {

    return builder.image(source);
  }

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getArticles()
      .then((res) => {
        console.log("articles data", res);
        setData(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);


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
            <div className="flex flex-col justify-start md:flex-row mt-4">
              <Podcast />
              <Podcast />
              <Podcast />
              <Podcast />
            </div>
            <div className=" flex items-center justify-center mb-8">
              <Link href="/community">
                <button
                  type='button'
                  className=' border font-semibold rounded-lg py-2 leading-6 px-4 hover:border-jse-primary-500 text-white hover:bg-jse-primary-500'>
                  Explore More
                </button>
              </Link>
            </div>
            <SubSectionHeader title="Sunday Articles" />
            <div className="flex flex-col gap-4 ">
              {
               data && data.map((article: any) => {
                  return (
                    <Link href={`/community/article`} key={article._id}>
                        <SundayArticles imglink={urlFor(article.mainImage).url() as string} heading={article.title} articleText={article.body} id={article._id} />
                    </Link>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      {/* END Community Section */}
    </>
  );
}
