import Image from "next/image";
import React from "react";

export default function HeroLogos() {
  return (
    <div className="bg-dark-primary">
      <div className="wrapper">
        <div className="max-w-[1240px] relative z-30 mx-auto pt-14 pb-16">
          <p className="text-center text-white/50 text-lg font-medium">
            In collaboration with:
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-8 lg:mx-auto lg:w-fit lg:gap-x-10 lg:flex-nowrap">
            <Image
              src="/images/brands/sbbn-logo-transparent.png"
              className="h-[104px] w-auto brightness-0 invert opacity-85 transition hover:opacity-100"
              alt="Staffordshire Black Business Network"
              width={500}
              height={500}
            />
            <Image
              src="/images/brands/felicia.png"
              className="h-14 w-auto brightness-0 invert opacity-80 transition hover:opacity-100"
              alt="Felicia"
              width={200}
              height={82}
            />
            <Image
              src="/images/brands/techfirst-funded-uk-government-white.svg"
              className="h-[104px] w-auto opacity-90 transition hover:opacity-100"
              alt="Funded by the UK Government and TechFirst"
              width={2660}
              height={652}
            />
            <div className="group flex items-center gap-2 transition">
              <Image
                src="/images/brands/stintagents_logo_white_eyes.png"
                className="h-9 w-auto opacity-90"
                alt=""
                width={451}
                height={725}
              />
              <span className="font-[Georgia] text-2xl font-black [-webkit-text-stroke:0.35px_currentColor] text-white/90 transition group-hover:text-white">
                StintAgents
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
