import Image from "next/image";
import React from "react";

export default function HeroLogos() {
  return (
    <div className="bg-dark-primary">
      <div className="wrapper">
        <div className="max-w-[1016px] relative z-30 mx-auto pt-14 pb-16">
          <p className="text-center text-white/50 text-lg font-medium">
            Our partners include...
          </p>
          <div className="flex flex-wrap justify-center items-center gap-7 md:gap-14 mt-10">
            <Image
              src="/images/brands/sbbn-logo-transparent.png"
              className="h-28 w-auto brightness-0 invert opacity-85 transition hover:opacity-100"
              alt="Staffordshire Black Business Network"
              width={500}
              height={500}
            />
            <Image
              src="/images/brands/felicia-light.svg"
              className="h-14 w-auto brightness-0 invert opacity-80 transition hover:opacity-100"
              alt="Felicia"
              width={180}
              height={64}
            />
            <Image
              src="/images/brands/techlocal-light.svg"
              className="h-9 w-auto brightness-0 invert opacity-80 transition hover:opacity-100"
              alt="Techlocal"
              width={180}
              height={64}
            />
            <Image
              src="/images/brands/techlocal-funded-light.svg"
              className="h-9 w-auto brightness-0 invert opacity-80 transition hover:opacity-100"
              alt="Funded by UK"
              width={1040}
              height={240}
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
