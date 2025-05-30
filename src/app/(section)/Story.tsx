import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const menuItems = [
  { image: "/images/home/story/1.png" },
  { image: "/images/home/story/2.png" },
  { image: "/images/home/story/3.png" },
  { image: "/images/home/story/4.png" },
];

const Story: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] px-4 pb-0 pt-14 md:px-10 md:pb-0 md:pt-52">
      <div className="absolute left-32 top-20 hidden md:block">
        <h1
          className="text-start font-oswald text-4xl font-[300] uppercase tracking-[5px] md:text-5xl"
          style={{
            background: "linear-gradient(180deg, #FFCA4E 29.5%, #191616 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Eton Place <br /> DELIGHTS
        </h1>
      </div>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <h1
        className="pb-8 text-center font-oswald text-3xl font-[300] uppercase tracking-[5px] md:hidden md:text-5xl"
        style={{
          background: "linear-gradient(180deg, #FFCA4E 29.5%, #191616 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Eton Place <br /> DELIGHTS
      </h1>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-12">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center gap-4 md:gap-6"
          >
            <Link href={"/menu"} target="_blank">
              <motion.img
                src={item.image}
                alt={"image"}
                className="relative z-10 h-full w-full object-cover"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </Link>
          </div>
        ))}
      </div>
      <div className="pt-16 md:pt-40">
        <h1
          className="text-center font-oswald text-5xl font-[400] tracking-[3px] md:text-9xl"
          style={{
            background: "linear-gradient(180deg, #FFCA4E 29.5%, #191616 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          BRADSHAW
        </h1>
      </div>
    </section>
  );
};

export default Story;
