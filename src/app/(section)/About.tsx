import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="relative h-full w-full overflow-hidden bg-[#000] pb-0 pt-10 md:pb-0 md:pt-20">
      <div className="lines z-0">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src={"/images/home/about/bg1.png"}
          alt="background"
          width={1024}
          height={564}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="z-40 flex flex-col gap-2">
        <div>
          <motion.h5
            className="text-center font-oswald text-4xl font-[400] uppercase md:text-4xl"
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              background:
                "linear-gradient(180deg, #CCAD64 29.5%, #191616 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About us
          </motion.h5>
        </div>
        <motion.div
          className="z-40 mb-60 ml-0 flex flex-row items-center justify-center gap-4 px-4 md:ml-60"
          initial={{ opacity: 0, x: -100, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h6
            className="z-40 mt-40 hidden text-start font-times_new_roman text-[250px] font-[400] uppercase md:mt-0 md:block md:text-[350px]"
            style={{
              background:
                "linear-gradient(180deg, #CCAD64 29.5%, #191616 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            E
          </h6>
          <div className="flex flex-col gap-5">
            <p className="max-w-[400px] text-center font-inter text-sm font-[400] text-[#7E6C53] md:text-start md:text-base">
              More than just a restaurant, Eton Place is a space to connect —
              where conversations flow as easily as the wine, and every meal
              becomes a lasting memory. Whether you&#39;re enjoying a laid-back
              weekday lunch or marking a special occasion, we invite you to
              savour the vibrant flavours of the Mediterranean and Turkey in a
              setting that feels both elegant and familiar, enhanced by warm
              hospitality and a welcoming atmosphere.
            </p>
            <h6
              className="hidden text-start font-oswald text-4xl font-[400] uppercase md:block md:text-4xl"
              style={{
                background:
                  "linear-gradient(180deg, #CCAD64 29.5%, #191616 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              TON PLACE
            </h6>
            <h6
              className="text-center font-oswald text-4xl font-[400] uppercase md:hidden md:text-4xl"
              style={{
                background:
                  "linear-gradient(180deg, #CCAD64 29.5%, #191616 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ETON PLACE
            </h6>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
