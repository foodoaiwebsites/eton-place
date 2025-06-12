"use client";
import { motion } from "framer-motion";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#000] p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#000]">
        <h2 className="text-center font-oswald text-5xl text-[#fff] md:left-[15%] md:text-8xl">
          The Eton Place
          <br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#000] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <motion.img
              src="/images/about-us/3.jpg"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="max-w-[500px] text-center font-times_new_roman text-5xl text-[#fff] md:text-start md:text-7xl">
              Crafted with Heart
              <br />
              Inspired by Tradition
            </h1>
            <p className="max-w-[450px] text-center font-poppins font-light leading-[160%] text-[#9C9E9F] md:text-start">
              Eton Place was born from a love for Mediterranean and Turkish
              cuisine — a vision to bring the warmth, depth, and authenticity of
              these flavors to the heart of Liverpool. What started as a humble
              dream has flourished into a refined destination where each guest
              is treated to more than just a meal.
              <br />
              <br />
              Our philosophy is simple: food should nourish the soul. From
              hand-picked ingredients to carefully curated recipes, every plate
              tells a story — of culture, of passion, of care. We believe in
              creating not just delicious dishes, but memorable experiences that
              bring people together.
              <br />
              <br />
              As we continue our journey, our promise is to stay true to our
              roots while embracing creativity — delivering moments of joy, one
              dish at a time. At Eton Place, every visit is a celebration of
              flavor, tradition, and the art of genuine hospitality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
