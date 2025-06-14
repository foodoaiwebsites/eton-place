import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const menuItems = [
  {
    title: "A La Carte",
    image: "/images/home/menu/1.jpg",
    menu: "/menu",
  },
  {
    title: "Drinks Menu",
    image: "/images/home/menu/2.jpg",
    menu: "/menu",
  },
  {
    title: "Desserts",
    image: "/images/home/menu/3.jpg",
    menu: "/menu",
  },
  {
    title: "Kid’s",
    image: "/images/home/menu/4.jpg",
    menu: "/menu",
  },
];

const Menu: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black px-0 py-8 md:px-20 md:py-20">
      <div className="lines z-0">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="flex flex-col gap-16 px-4 md:px-0">
        {/* Title */}
        <h1
          className="text-center font-oswald text-4xl font-[400] uppercase tracking-[3px] md:text-5xl"
          style={{
            background: "linear-gradient(180deg, #FFCA4E 29.5%, #191616 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Eton Place MENU
        </h1>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-12">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center gap-4 md:gap-6"
            >
              <Link href={item.menu}>
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="relative z-10 h-[200px] w-full object-cover md:h-[500px]"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </Link>
              {/* <h1
                className="text-center font-oswald text-xl font-bold tracking-[-1px] md:text-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, #FFCC6B 29.5%, #35322D 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.title}
              </h1> */}
            </div>
          ))}
        </div>

        {/* Description & CTA */}
        <motion.div
          className="z-40 flex flex-col items-center justify-center gap-6 text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <p className="z-40 max-w-[600px] text-start font-inter text-sm font-[400] text-[#C1B6A6] md:text-base">
            Eton Place is Liverpool’s longest-established Turkish restaurant,
            proudly serving since 1997. We offer a warm, cosy atmosphere and a
            menu inspired by Mediterranean, European, and Turkish flavours. From
            breakfast to late-night dining, every dish is crafted with care,
            with vegetarian and vegan options available to suit all tastes.
          </p>
          <Link href="/menu">
            <Button className="relative z-40 flex items-center justify-center gap-3 rounded-none bg-[#CDAE64] px-6 py-6 font-manrope text-sm font-[600] uppercase text-black hover:bg-[#c3a96c] md:px-5 md:py-6">
              Order Now
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
