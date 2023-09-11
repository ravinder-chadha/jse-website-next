// import React from 'react'

// function StoryLeft({direction}) {
//   return (

//     <div className="relative lg:w-1/2 lg:pr-6 lg:mr-auto">
//             <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:translate-x-6 lg:left-auto lg:right-0">
//               <div className="w-3 h-3 bg-red-500 rounded-full ring ring-red-100 ring-opacity-100 ring-offset-2 dark:bg-red-300 dark:ring-red-900 dark:ring-offset-gray-900" />
//             </div>
//             <div className="bg-gray-100 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4 dark:bg-gray-800 dark:hover:ring-gray-700 dark:ring-offset-gray-900">
//               <h4 className="font-semibold mb-2">
//                 3.0 update is now live!
//               </h4>
//               <p className="text-sm leading-relaxed">
//                 It's finally here are comes packed with many awesome features. Be sure to <a href="#" className="font-medium text-red-600 hover:text-red-400 dark:text-red-400 dark:hover:text-red-300">download it</a> and let us know
//                 <a href="#" className="font-medium text-red-600 hover:text-red-400 dark:text-red-400 dark:hover:text-red-300">what you think</a>!
//               </p>
//             </div>
//           </div>

//   )
// }

// export default Story


// <div className="relative lg:w-1/2 lg:pl-6 lg:ml-auto">
// <div className="w-10 md:w-12 absolute top-0 left-0 bottom-0 -translate-x-full flex justify-center mt-5 lg:-translate-x-6">
//   <div className="w-3 h-3 bg-red-500 rounded-full ring ring-red-100 ring-opacity-100 ring-offset-2 dark:bg-red-300 dark:ring-red-900 dark:ring-offset-gray-900" />
// </div>
// <div className="bg-gray-100 hover:ring hover:ring-gray-100 hover:ring-offset-2 rounded-xl p-4 dark:bg-gray-800 dark:hover:ring-gray-700 dark:ring-offset-gray-900">
//   <h4 className="font-semibold mb-2">
//     Maintenance notice
//   </h4>
//   <p className="text-sm leading-relaxed">
//     We are going to apply some security fixes next week. Please check out the <a href="#" className="font-medium text-red-600 hover:text-red-400 dark:text-red-400 dark:hover:text-red-300">schedule</a> for more information about any downtime.
//   </p>
// </div>
// </div>



export default function Story({ direction }) {
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
            It's finally here are comes packed with many awesome features. and let us know what you think
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
            We are going to apply some security fixes next week. Please check out the  for more information about any downtime.             <a href="#" className="font-medium text-red-600 hover:text-red-400 dark:text-red-400 dark:hover:text-red-300"></a>!

          </p>
        </div>
      </div>

    );
  }
} 











