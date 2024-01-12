import React from "react";
import Image from "next/image";

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

const FlagBearer = ({name, title, src = '/lib/images/person_icon.png', className, textSize}: Props) => {
  return (
    <div className="relative h-full w-full">
      <Image src={src} alt="Chairman Image" className="rounded-xl relative object-cover h-full w-full" width={564} height={564}></Image>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
      <div className="absolute flex flex-col bottom-0 left-0 text-white p-4">
        <div className={classNames("font-bold",textSize ? textSize : 'text-xl')}>{name}</div>
        <div className="text-md">{title}</div>
      </div>
    </div>
  );
};

export default FlagBearer;
