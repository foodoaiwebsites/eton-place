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
              From Passion
              <br />
              to Perfection
            </h1>
            <p className="max-w-[450px] text-center font-poppins font-light leading-[160%] text-[#9C9E9F] md:text-start">
              What began as a vision to bring authentic Mediterranean and
              Turkish flavours to Liverpool has grown into Eton Place — a
              cherished dining destination where tradition meets elegance. Born
              from a deep passion for culinary heritage, Eton Place was created
              to offer more than just meals — to craft experiences that linger
              in memory. <br />
              <br />
              From modest beginnings to becoming a trusted name among food
              lovers, our journey has always been guided by a commitment to
              quality, creativity, and heartfelt hospitality. Each ingredient is
              carefully sourced, every dish is prepared with precision, and
              every bite reflects our dedication to excellence. <br />
              <br />
              At Eton Place, we don’t simply serve food — we create moments. As
              we continue to grow, our mission remains the same: to blend
              authenticity and innovation in a way that leaves a lasting
              impression on every guest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
