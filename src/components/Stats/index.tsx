type Props = {
  title1: string;
  title2: string;
  title3: string;
  subtitle1: string;
  subtitle2: string;
  subtitle3: string;
};


export default function Stats({ title1, title2, title3, subtitle1, subtitle2, subtitle3 }: Props) {
  return (

    <div className=" container xl:max-w-5xl mx-auto px-4 lg:px-8 my-10 flex flex-row items-center justify-between">

      <div className="flex flex-col items-center  justify-center">
        <span className="text-4xl font-serif font-bold mb-1 text-jse-primary-600">{title1}</span>
        {subtitle1}
      </div>

      <div className="flex flex-col items-center justify-center">
        <span className="text-4xl font-serif font-bold  mb-1 text-jse-primary-600">{title2}</span>
        {subtitle2}
      </div>

      <div className="flex flex-col items-center justify-center">
        <span className="text-4xl font-serif font-bold mb-1 text-jse-primary-600">{title3}</span>
        {subtitle3}

      </div>

    </div>
  )
}