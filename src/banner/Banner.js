// import React from "react"

// export default function Banner() {
//     return (
//         <div className="bg-white">
//             <div className="relative isolate ">
//                 <div
//                     aria-hidden="true"
//                     className="absolute inset-x-0   transform-gpu overflow-hidden blur-3xl sm:-top-80"
//                 >
//                     <div
//                         style={{
//                             clipPath:
//                                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//                         }}
//                         className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//                     />
//                 </div>
//                 <div className="mx-auto max-w-2xl py-16 sm:py-48 ">

//                     <div className="text-center">
//                         <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
//                             Data to enrich your online business
//                         </h1>
//                         <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
//                             Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
//                             fugiat veniam occaecat.
//                         </p>
//                         <div className="mt-10 flex items-center justify-center gap-x-6 sm:px-46">
//                             <a
//                                 href="#"
//                                 className="rounded-md bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                             >
//                                 Get started
//                             </a>
//                             <a href="#" className="text-sm/6 font-semibold text-gray-900">
//                                 Learn more <span aria-hidden="true">→</span>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//                 <div
//                     aria-hidden="true"
//                     className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//                 >
//                     <div
//                         style={{
//                             clipPath:
//                                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//                         }}
//                         className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

import React from "react";

const GradientBackground = ({ className, style }) => (
  <div
    aria-hidden="true"
    className={`absolute inset-x-0 transform-gpu overflow-hidden blur-3xl ${className}`}
  >
    <div
      style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        ...style,
      }}
      className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72.1875rem]"
    />
  </div>
);

const Banner = () => {
  return (
    <div className="">
      <div className="relative isolate">      
        <GradientBackground className="sm:-top-80" style={{ rotate: "30deg", left: "calc(50%-11rem)" }} />
        <div className="mx-auto max-w-2xl py-16 sm:py-48 text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Data to enrich your online business
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>        
        <GradientBackground className="top-[calc(100%-13rem)] sm:top-[calc(100%-30rem)]" style={{ left: "calc(50%+3rem)" }} />
      </div>
    </div>
  );
};

export default Banner;
