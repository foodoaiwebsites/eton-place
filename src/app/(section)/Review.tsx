// // "use client";
// // import { Icons } from "@/components/Icon";
// // import {
// //   Carousel,
// //   CarouselContent,
// //   CarouselItem,
// //   CarouselNext,
// //   CarouselPrevious,
// // } from "@/components/ui/carousel";
// // import { useRestaurant } from "@/context/RestaurantContext";
// // import { motion } from "framer-motion";
// // import Image from "next/image";
// // import { useState } from "react";

// // const Reviews = ({}) => {
// //   const { reviews } = useRestaurant();
// //   return (
// //     <section className="relative flex h-full w-full justify-center bg-[#000] pb-8 md:px-0 lg:pb-0">
// //       {/* <div className="absolute inset-0 z-0 flex items-center justify-center">
// //         <Image
// //           src={"/images/home/story/bg2.png"}
// //           width={281}
// //           height={74}
// //           alt="logo"
// //           className="h-full w-full object-cover"
// //         />
// //       </div> */}
// //       <div className="flex h-full w-full flex-col items-start justify-center gap-4 py-12 md:gap-8 md:py-44 md:pt-24">
// //         <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-4">
// //           <div className="flex flex-col items-center justify-center gap-2">
// //             <motion.h5
// //               className="text-center font-oswald text-4xl font-[400] uppercase md:text-6xl"
// //               initial={{ opacity: 0, y: 50 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: false }}
// //               transition={{ duration: 1.5, ease: "easeOut" }}
// //               style={{
// //                 background:
// //                   "linear-gradient(180deg, #FFCC6B 29.5%, #35322D 100%)",
// //                 WebkitBackgroundClip: "text",
// //                 WebkitTextFillColor: "transparent",
// //               }}
// //             >
// //               REVIEWS
// //             </motion.h5>
// //           </div>
// //         </div>
// //         <div className="relative w-full">
// //           {reviews && (
// //             <Carousel className="w-full px-4">
// //               <CarouselContent>
// //                 {reviews
// //                   .filter((review) => review.rating >= 4)
// //                   .map((review, index) => {
// //                     const [isExpanded, setIsExpanded] = useState(false);

// //                     return (
// //                       <CarouselItem
// //                         key={index}
// //                         className={`ml-4 w-full basis-full gap-6 rounded-none p-4 md:ml-0 md:basis-1/3 md:p-8 ${
// //                           index % 2 === 0 ? "bg-[#000]" : "bg-[#000]"
// //                         }`}
// //                       >
// //                         <div
// //                           className={`flex h-auto flex-col gap-6 border px-6 py-8 ${
// //                             index % 2 === 0
// //                               ? "border-[#CDAE64]"
// //                               : "border-[#CDAE64]"
// //                           }`}
// //                         >
// //                           <div className="mt-8 flex w-full justify-center">
// //                             {Array.from({ length: review.rating }).map(
// //                               (_, idx) => (
// //                                 <Icons.star
// //                                   key={idx}
// //                                   className="text-[#CDAE64]"
// //                                 />
// //                               ),
// //                             )}
// //                           </div>

// //                           <div className="flex flex-col gap-4">
// //                             <p
// //                               className={`font-cormorant text-center text-sm font-[500] md:px-4 lg:leading-[120%] ${
// //                                 index % 2 === 0
// //                                   ? "text-[#CDAE64]"
// //                                   : "text-[#CDAE64]"
// //                               } ${!isExpanded ? "line-clamp-6" : ""}`}
// //                             >
// //                               {review.text.text}
// //                             </p>

// //                             {review.text.text.length > 200 && (
// //                               <button
// //                                 className="text-center text-xs font-semibold text-[#CDAE64] underline hover:text-[#e9c66d]"
// //                                 onClick={() => setIsExpanded(!isExpanded)}
// //                               >
// //                                 {isExpanded ? "Show less" : "Read more"}
// //                               </button>
// //                             )}
// //                             <div className="flex justify-center">
// //                               <Image
// //                                 src={review.authorAttribution.photoUri}
// //                                 alt="profile pic"
// //                                 width={50}
// //                                 height={50}
// //                                 className="flex justify-center"
// //                               />
// //                             </div>
// //                             <p
// //                               className={`font-cormorant text-center text-sm font-[500] uppercase leading-[120%] md:mt-4 ${
// //                                 index % 2 === 0
// //                                   ? "text-[#CDAE64]"
// //                                   : "text-[#CDAE64]"
// //                               }`}
// //                             >
// //                               {review.authorAttribution.displayName}
// //                             </p>
// //                             <p
// //                               className={`font-cormorant text-center text-xs font-[500] uppercase leading-[120%] ${
// //                                 index % 2 === 0
// //                                   ? "text-[#CDAE64]"
// //                                   : "text-[#CDAE64]"
// //                               }`}
// //                             >
// //                               {review.relativePublishTimeDescription}
// //                             </p>
// //                           </div>
// //                         </div>
// //                       </CarouselItem>
// //                     );
// //                   })}
// //               </CarouselContent>
// //               <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out">
// //                 <CarouselPrevious className="border-[#CDAE64] text-[#CDAE64] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
// //                 <CarouselNext className="border-[#CDAE64] text-[#CDAE64] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
// //               </div>
// //             </Carousel>
// //           )}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Reviews;

// "use client";
// import { Icons } from "@/components/Icon";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { useRestaurant } from "@/context/RestaurantContext";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useState } from "react";

// const Reviews = () => {
//   const { reviews } = useRestaurant();

//   const [expandedStates, setExpandedStates] = useState<{
//     [key: number]: boolean;
//   }>({});

//   return (
//     <section className="relative flex h-full w-full justify-center bg-[#000] pb-8 md:px-0 lg:pb-0">
//       <div className="flex h-full w-full flex-col items-start justify-center gap-4 py-12 md:gap-8 md:py-44 md:pt-24">
//         <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-4">
//           <div className="flex flex-col items-center justify-center gap-2">
//             <motion.h5
//               className="text-center font-oswald text-4xl font-[400] uppercase md:text-6xl"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: false }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               style={{
//                 background:
//                   "linear-gradient(180deg, #FFCC6B 29.5%, #35322D 100%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               REVIEWS
//             </motion.h5>
//           </div>
//         </div>

//         <div className="relative w-full">
//           {reviews && (
//             <Carousel className="w-full px-4">
//               <CarouselContent>
//                 {reviews
//                   .filter((review) => review.rating >= 4)
//                   .map((review, index) => {
//                     const isExpanded = expandedStates[index] || false;

//                     return (
//                       <CarouselItem
//                         key={index}
//                         className={`ml-4 w-full basis-full gap-6 rounded-none p-4 md:ml-0 md:basis-1/3 md:p-8 ${
//                           index % 2 === 0 ? "bg-[#000]" : "bg-[#000]"
//                         }`}
//                       >
//                         <div
//                           className={`flex h-auto flex-col gap-6 border px-6 py-8 ${
//                             index % 2 === 0
//                               ? "border-[#CDAE64]"
//                               : "border-[#CDAE64]"
//                           }`}
//                         >
//                           <div className="mt-8 flex w-full justify-center">
//                             {Array.from({ length: review.rating }).map(
//                               (_, idx) => (
//                                 <Icons.star
//                                   key={idx}
//                                   className="text-[#CDAE64]"
//                                 />
//                               ),
//                             )}
//                           </div>

//                           <div className="flex flex-col gap-4">
//                             <p
//                               className={`font-cormorant text-center text-sm font-[500] md:px-4 lg:leading-[120%] ${
//                                 index % 2 === 0
//                                   ? "text-[#CDAE64]"
//                                   : "text-[#CDAE64]"
//                               } ${!isExpanded ? "line-clamp-6" : ""}`}
//                             >
//                               {review.text.text}
//                             </p>

//                             {review.text.text.length > 200 && (
//                               <button
//                                 className="text-center text-xs font-semibold text-[#CDAE64] underline hover:text-[#e9c66d]"
//                                 onClick={() =>
//                                   setExpandedStates((prev) => ({
//                                     ...prev,
//                                     [index]: !prev[index],
//                                   }))
//                                 }
//                               >
//                                 {isExpanded ? "Show less" : "Read more"}
//                               </button>
//                             )}

//                             <div className="flex justify-center">
//                               <Image
//                                 src={review.authorAttribution.photoUri}
//                                 alt="profile pic"
//                                 width={50}
//                                 height={50}
//                                 className="flex justify-center rounded-full"
//                               />
//                             </div>

//                             <p
//                               className={`font-cormorant text-center text-sm font-[500] uppercase leading-[120%] md:mt-4 ${
//                                 index % 2 === 0
//                                   ? "text-[#CDAE64]"
//                                   : "text-[#CDAE64]"
//                               }`}
//                             >
//                               {review.authorAttribution.displayName}
//                             </p>
//                             <p
//                               className={`font-cormorant text-center text-xs font-[500] uppercase leading-[120%] ${
//                                 index % 2 === 0
//                                   ? "text-[#CDAE64]"
//                                   : "text-[#CDAE64]"
//                               }`}
//                             >
//                               {review.relativePublishTimeDescription}
//                             </p>
//                           </div>
//                         </div>
//                       </CarouselItem>
//                     );
//                   })}
//               </CarouselContent>

//               <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out">
//                 <CarouselPrevious className="border-[#CDAE64] text-[#CDAE64] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
//                 <CarouselNext className="border-[#CDAE64] text-[#CDAE64] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
//               </div>
//             </Carousel>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reviews;

"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import { motion } from "framer-motion";
import Image from "next/image";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#000] pb-8 md:px-0 lg:pb-0">
      {/* <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src={"/images/home/story/bg2.png"}
          width={281}
          height={74}
          alt="logo"
          className="h-full w-full object-cover"
        />
      </div> */}
      <div className="flex h-full w-full flex-col items-start justify-center gap-4 py-12 md:gap-8 md:py-44 md:pt-24">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-4">
          <div className="flex flex-col items-center justify-center gap-2 md:mr-[23%]">
            <motion.h5
              className="text-start font-oswald text-4xl font-[400] uppercase md:text-6xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{
                background:
                  "linear-gradient(180deg, #FFCC6B 29.5%, #35322D 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              REVIEWS
            </motion.h5>
          </div>
        </div>
        <div className="relative w-full">
          {/* <div className="absolute left-0 top-0 hidden md:block">
            <h1
              className="text-center font-open_sans text-4xl font-[600] uppercase md:text-8xl"
              style={{
                background:
                  "linear-gradient(180deg, #C5C392 -39.86%, #171711 99.71%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SDK{" "}
            </h1>
          </div> */}
          {reviews && (
            <Carousel className="w-full px-4">
              <CarouselContent>
                {reviews
                  .filter((review) => review.rating >= 4)
                  .map((review, index) => (
                    <CarouselItem
                      key={index}
                      className={`ml-4 w-full basis-full gap-6 rounded-none p-4 md:ml-0 md:basis-1/3 md:p-8 ${
                        index % 2 === 0 ? "bg-[#000]" : "bg-[#000]"
                      }`}
                    >
                      <div
                        className={`flex h-[350px] flex-col gap-6 border px-6 py-8 ${
                          index % 2 === 0
                            ? "border-[#CDAE64]"
                            : "border-[#CDAE64]"
                        }`}
                      >
                        <div className="mt-8 flex w-full justify-center">
                          {Array.from({ length: review.rating }).map(
                            (_, index) => (
                              <Icons.star
                                key={index}
                                className="text-[#CDAE64]"
                              />
                            ),
                          )}
                        </div>
                        <div className="flex flex-col gap-4">
                          <p
                            className={`font-cormorant line-clamp-6 text-center text-sm font-[500] uppercase md:px-4 lg:leading-[120%] ${
                              index % 2 === 0
                                ? "text-[#CDAE64]"
                                : "text-[#CDAE64]"
                            } `}
                          >
                            {review.text.text}
                          </p>
                          <p
                            className={`font-cormorant text-center text-sm font-[500] uppercase leading-[120%] md:mt-4 ${
                              index % 2 === 0
                                ? "text-[#CDAE64]"
                                : "text-[#CDAE64]"
                            } `}
                          >
                            {review.authorAttribution.displayName}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="border-[#CDAE64] text-[#CDAE64] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#CDAE64] text-[#CDAE64] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
