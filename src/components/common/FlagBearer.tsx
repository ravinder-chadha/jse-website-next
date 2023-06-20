import React from "react";

type Props = {
  name?: string;
  title?: string;
  src?: string;
  className?: string;
  textSize?: string;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const FlagBearer = ({name, title, src, className, textSize}: Props) => {
  return (
    <div className="relative h-full w-full">
      <img
        src="/lib/images/chairman.jpg"
        alt="Hero Image"
        className="relative rounded-xl relative object-cover h-full w-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
      <div className="absolute flex flex-col bottom-0 left-0 text-white p-4">
        <div className={classNames("font-bold",textSize ? textSize : 'text-xl')}>{name}</div>
        <div className="text-md">{title}</div>
      </div>
    </div>
  );
};

export default FlagBearer;
