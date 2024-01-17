
interface props {
  direction: string;
  title: string;
  desc: string;
  date: string;
}

export default function Story({ direction, title, desc, date }: props) {
  if (direction === 'left') {
    return (
      <div className="relative lg:w-1/2 lg:pr-6 lg:mr-auto">
        <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:translate-x-6 lg:left-auto lg:right-0">
          <div className="w-4 h-4 bg-red-500 rounded-full ring ring-red-300  " />
        </div>
        <div className="  rounded-xl p-4 flex flex-col items-start  border border-red-500  ">
          <h4 className="font-semibold w-full flex justify-between mb-2">
            {title}
            <span className="font-normal ml-3">
              {date}
            </span>
          </h4>
          <p className="text-sm leading-relaxed text-left">
            {desc}
          </p>
        </div>
      </div>

    );
  }
  else {
    return (
      <div className="relative lg:w-1/2 lg:pl-6 lg:ml-auto">
        <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:-translate-x-6">
          <div className="w-4 h-4 bg-red-500 rounded-full ring ring-red-300 " />
        </div>
        <div className="  rounded-xl p-4 flex flex-col items-start  border border-red-500  ">
          <h4 className="font-semibold w-full flex justify-between  mb-2">
            {title}
            <span className="font-normal ml-5">
              {date}
            </span>
          </h4>
          <p className="text-sm leading-relaxed text-left">
            {desc}
          </p>
        </div>
      </div>

    );
  }
}











