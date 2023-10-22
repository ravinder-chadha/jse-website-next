import Image from "next/image";
import HeadingTitle from "../common/HeadingTitle";
import Podcast from "./Podcast";
import SubSectionHeader from "../common/SubSectionHeader";
import SundayArticles from "./Articles";
import articleText from "./articleText.json";
<<<<<<< Updated upstream
import Link from "next/link";
=======
import { getPodcastLinks, getArticles } from "../../../api/api";
import { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../config/sanity";
>>>>>>> Stashed changes

export default function Community() {
  const [podcast, setPodcast] = useState<any>(null);
  const [articles, setarticles] = useState<any>([]);

  const builder = imageUrlBuilder(client);

  function urlFor(source: any) {
    return builder.image(source);
  }

  useEffect(() => {
    getPodcastLinks()
      .then((res) => {
        console.log("podcast--->", res);
        setPodcast(res);
      })
      .catch((e) => {
        console.log(e);
      });

    getArticles()
      .then((res) => {
        console.log("articles--->", res);
        setarticles(res);
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
            <Image
              src="/lib/images/plantation1.avif"
              className="h-64 md:h-96 w-full object-cover"
              width={1920}
              height={1080}
              alt="Community Banner"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-jse-neutral-500 to-transparent opacity-100"></div>
          </div>
          <div className="container mx-auto px-4 md:px-16 py-4">
            <HeadingTitle
              title="Join the Soothing Community"
              className="text-white"
              subtitle="Checkout what’s on offer in our community"
            />
            <SubSectionHeader title="Weekly Podcasts" />
<<<<<<< Updated upstream
            <div className="flex flex-col justify-start md:flex-row mt-4">
=======
            <div className="flex flex-col justify-start md:flex-row my-4">
>>>>>>> Stashed changes
              <Podcast />
              <Podcast />
              <Podcast />
              <Podcast />
<<<<<<< Updated upstream
            </div>
            <div className=" flex items-center justify-center mb-8">
            <button
              type='button'
              className=' border font-semibold rounded-lg py-2 leading-6 px-4 hover:border-jse-primary-500 text-white hover:bg-jse-primary-500'>
              Explore More
            </button>
            </div>
            <SubSectionHeader title="Sunday Articles" />
            <div className="flex flex-col gap-4 ">
              <Link href="/community/article"> <SundayArticles imglink={articleText.article1.img} heading={articleText.article1.title} articleText={articleText.article1.content} /></Link>
              <Link href="/community/article"><SundayArticles imglink={articleText.article2.img} heading={articleText.article2.title} articleText={articleText.article2.content} /></Link>
=======
            </div>
            <SubSectionHeader title="Sunday Articles" />
            <div className="flex flex-col gap-4 ">
              {articles.map((item: any, index: any) => {
                if (index <= 2) {
                  return (
                    <SundayArticles
                      imglink={urlFor(item.mainImage).url()}
                      heading={item.title}
                      articleText={item.body}
                      id={item._id}
                    />
                  );
                }
              })}
>>>>>>> Stashed changes
            </div>
          </div>
        </div>
      </div>
      {/* END Community Section */}
    </>
  );
}
