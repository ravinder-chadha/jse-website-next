export default function Story({ direction }:any) {
  if (direction === 'left') {
    return (
      <div className="relative lg:w-1/2 lg:pr-6 lg:mr-auto">
        <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:translate-x-6 lg:left-auto lg:right-0">
          <div className="w-4 h-4 bg-red-500 rounded-full ring ring-red-300  " />
        </div>
        <div className="  rounded-xl p-4 flex flex-col items-start  border border-red-500  ">
          <h4 className="font-semibold mb-2">
            3.0 update is now live!
          </h4>
          <p className="text-sm leading-relaxed text-left">
            Its finally here are comes packed with many awesome features. and let us know what you think
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
          <h4 className="font-semibold mb-2">
            Maintenance notice
          </h4>
          <p className="text-sm leading-relaxed text-left">
            We are going to apply some security fixes next week. Please check out the  for more information about any downtime.

          </p>
        </div>
      </div>

    );
  }
}











