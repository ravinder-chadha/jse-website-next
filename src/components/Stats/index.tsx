type Props = {
  title1: string;
  title2: string;
  title3: string;
  subtitle1: string;
  subtitle2: string;
  subtitle3: string;
};

export default function Stats({
  title1,
  title2,
  title3,
  subtitle1,
  subtitle2,
  subtitle3,
}: Props) {
  return (
    <div className="container xl:max-w-5xl mx-auto px-4 lg:px-8 my-10 flex flex-col lg:flex-row items-center justify-between">
      <div className="mb-8 lg:mb-0">
        <span className="text-3xl block text-center lg:text-4xl font-serif font-bold mb-1 text-jse-primary-600">
          {title1}
        </span>
        {subtitle1}
      </div>

      <div className="mb-8 lg:mb-0">
        <span className="text-3xl block text-center lg:text-4xl font-serif font-bold mb-1 text-jse-primary-600">
          {title2}
        </span>
        {subtitle2}
      </div>

      <div>
        <span className="text-3xl block text-center lg:text-4xl font-serif font-bold mb-1 text-jse-primary-600">
          {title3}
        </span>
        {subtitle3}
      </div>
    </div>
  );
}
