import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 top-0 h-full w-full object-cover"
        poster="https://d8q1b3smcycac.cloudfront.net/bradshaw/bradshaw-thumbnail.png"
      >
        <source src="https://d8q1b3smcycac.cloudfront.net/etonpalace-web.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/60" />
    </section>
  );
};

export default Hero;
