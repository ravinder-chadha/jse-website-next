import { useRouter } from 'next/router';
import MainLayout from '@/layout/MainLayout';
import CTA from '@/components/CTA';
import Image from 'next/image';
import HeadingTitle from '@/components/common/HeadingTitle';
import Link from 'next/link';
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../config/sanity"
import { useState, useEffect } from 'react';
import { getArticles } from '../../../../api/api';

const Article = () => {
  const router = useRouter();
  const { id } = router.query;

  const builder = imageUrlBuilder(client);
  const urlFor = (source: any) => {
    return builder.image(source);
  }

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getArticles()
      .then((res) => {
        setData(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const article = data && data.find((article: any) => article._id === id);

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <MainLayout headerTransition={false}>
      <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 lg:px-8 my-10 flex flex-col justify-center">
        <HeadingTitle title={article.title} subtitle={`Written By ${article.authorName}`} className="mx-auto text-center" />

        <Image src={urlFor(article.mainImage).url() as string} alt="Article Image" className="rounded-xl object-cover object-center h-[400px] w-full" width={500} height={500} />
        <div className="md:text-lg text-base"> {article.body[0].children[0].text} </div>
        <div className="flex items-center justify-between text-base text-jse-neutral-400">
          <span> Edited by: {article.authorName} </span>
          <span>Published on: {new Date(article.publishedOn).toDateString().slice(0, -5)}
          </span>
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
    </MainLayout>
  );
};

export default Article;
