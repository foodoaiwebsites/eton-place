"use client";
import { motion } from "framer-motion";

const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="flex w-full items-center justify-center bg-[#000] py-6 lg:py-12"
    >
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="mt-28 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="font-oswald text-5xl font-semibold text-[#fff] md:leading-[66px] lg:text-6xl">
                Discover Eton Place
                <br /> Where Taste Meets Elegance
              </h1>
              <p className="font-poppins font-normal text-[#9C9E9F]">
                Step into a world where Mediterranean charm meets Turkish
                tradition. At Eton Place, each dish is a masterpiece crafted
                with passion and precision. From fresh, seasonal ingredients to
                artful presentation, we invite you to savor flavors that
                celebrate heritage while embracing innovation. Indulge in a
                dining journey designed to delight your senses and elevate every
                occasion.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:mt-16 lg:w-1/2">
            <motion.img
              src="/images/about-us/2.jpg"
              width={951}
              height={975}
              alt="hero"
              className="h-full max-h-[600px] w-full object-cover"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
