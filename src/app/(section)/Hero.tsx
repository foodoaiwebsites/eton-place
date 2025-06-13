"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

const Hero: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".head-container", 1.5, {
      y: 50,
      opacity: 1,
      ease: "power4.out",
    })
      .from(".head-hero", 1, {
        x: 200,
        opacity: 0,
        delay: -1.5,
      })
      .from(".hero-button", 1, {
        y: 100,
        opacity: 0,
        ease: "power4.out",
        delay: -1.5,
      });
  }, []);
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 top-0 h-full w-full object-cover"
        poster="https://d8q1b3smcycac.cloudfront.net/etonpalace-thumbnail.png"
      >
        <source
          src="https://d8q1b3smcycac.cloudfront.net/etonpalace-web.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 z-0 bg-black/60" />
      <div className="z-50 flex h-full w-full items-center justify-center">
        <div className="head-container flex w-fit flex-col items-center justify-center">
          <h1 className="head-hero text-center font-times_new_roman text-7xl font-normal uppercase leading-[80%] text-[#fff] md:text-9xl">
            Eton Place
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
