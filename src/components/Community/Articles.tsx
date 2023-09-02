import Link from "next/link";

interface Props {
  imglink: string;
  heading: string;
  articleText: string;
}

const SundayArticles = ({ imglink, heading, articleText }: Props) => {
  return (
    <div className="flex flex-row w-full">
      <Link href="#" className="block relative group w-4/5 my-8 rounded-2xl">
        <div className="flex items-center rounded-2xl justify-center absolute inset-0 bg-jse-primary-400 bg-opacity-75 opacity-0 transition ease-out duration-150 group-hover:opacity-100">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white transform -rotate-45 hi-solid hi-arrow-right inline-block w-10 h-10"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <img
          src={imglink}
          alt="SomeNatureImage"
          className="rounded-2xl h-64 w-full object-cover"
        />
      </Link>

      <div className="flex flex-col justify-center items-start w-full mx-16">
        <Link
          href="#"
          className="text-2xl font-bold text-neutral-300 hover:text-white transition ease-out duration-150"
        >
          {heading}
        </Link>
        <p className="line-clamp-4 text-neutral-300 font-light my-4">
          {articleText}
        </p>
        <div className="w-full my-2">
          <button
            type="button"
            className="inline-flex justify-start items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-jse-primary-500 bg-jse-primary-500 text-white hover:text-white hover:bg-jse-primary-400 hover:border-jse-primary-300 focus:ring focus:ring-jse-primary-300 focus:ring-opacity-50 active:bg-jse-primary-400 active:border-jse-primary-300"
          >
            Read full Article
          </button>
        </div>
      </div>
    </div>
  );
};

export default SundayArticles;
