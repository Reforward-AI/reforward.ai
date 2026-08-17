import Image from 'next/image';
import { BriefcaseBusiness, GitBranch, MessageCircle, Search } from 'lucide-react';
import HeroLogos from '../hero-logos';
import { Subheading } from './subheading';

export default function HeroSection() {
  return (
    <section className="pt-16 relative overflow-hidden dark:bg-dark-primary">
      <div className="max-w-[120rem] mx-auto relative">
        <div className="wrapper">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center pb-16">
              <Subheading text="Taking AI back to the Future" />

              <h1 className="text-gray-700 mx-auto font-bold mb-4 text-4xl sm:text-[50px] dark:text-white/90 sm:leading-[64px] max-w-[700px]">
                Building the workforce of the future with conversational AI
              </h1>
              <p className="max-w-[650px] text-center mx-auto dark:text-gray-400 text-gray-500 text-base">
                Go back to understand. Move forward to reinvent. Conversational AI that turns today&apos;s knowledge and experience into tomorrow&apos;s way of working.
              </p>
            </div>
          </div>
          <div className="max-w-[1000px] mx-auto relative">
            <div className="p-3 sm:p-[18px] relative z-30 rounded-[32px] border border-white/30 dark:border-white/10 bg-white/20">
              <Image
                src="/images/hero/hero-img.jpg"
                alt=""
                className="w-full rounded-2xl block dark:hidden"
                width={966}
                height={552}
              />
              <Image
                src="/images/hero/stintagents-websocket-4.png"
                alt=""
                className="w-full rounded-2xl hidden dark:block"
                width={1444}
                height={796}
                unoptimized
              />
            </div>
            <div className="absolute hidden lg:block z-10 -top-20 -translate-y-20 left-1/2 -translate-x-1/2">
              <svg
                width="1300"
                height="1001"
                viewBox="0 0 1300 1001"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.7" filter="url(#filter0_f_9279_7148)">
                  <circle cx="800" cy="500.03" r="300" fill="#012169" />
                </g>
                <g opacity="0.3" filter="url(#filter1_f_9279_7148)">
                  <circle cx="500" cy="500.03" r="300" fill="#C8102E" />
                </g>
                <defs>
                  <filter
                    id="filter0_f_9279_7148"
                    x="300"
                    y="0.029541"
                    width="1000"
                    height="1000"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="100"
                      result="effect1_foregroundBlur_9279_7148"
                    />
                  </filter>
                  <filter
                    id="filter1_f_9279_7148"
                    x="0"
                    y="0.029541"
                    width="1000"
                    height="1000"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="100"
                      result="effect1_foregroundBlur_9279_7148"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className="pointer-events-none hidden min-[1101px]:block">
          <div className="absolute top-14 left-16 z-40 flex items-center gap-2 rounded-full border border-[#C45B6A]/45 bg-[#C45B6A]/15 px-3 py-2 text-xs font-semibold text-[#984553] shadow-[0_8px_18px_rgba(196,91,106,0.1)] backdrop-blur floating-1">
            <span className="flex size-6 items-center justify-center rounded-full bg-[#C45B6A] text-[10px] text-white">
              <BriefcaseBusiness className="size-3.5" aria-hidden="true" />
            </span>
            Work Trials
          </div>
          <div className="absolute left-[145px] top-[298px] z-40 flex items-center gap-2 rounded-full border border-[#29AEFF]/45 bg-[#29AEFF]/15 px-3 py-2 text-xs font-semibold text-[#167EBA] shadow-[0_8px_18px_rgba(41,174,255,0.1)] backdrop-blur floating-2 max-[1240px]:left-[80px]">
            <span className="flex size-6 items-center justify-center rounded-full bg-[#29AEFF] text-[11px] text-white">
              <Search className="size-3.5" aria-hidden="true" />
            </span>
            Understand Context
          </div>
          <div className="absolute right-16 top-[108px] z-40 flex items-center gap-2 rounded-full border border-[#8D79FF]/45 bg-[#8D79FF]/15 px-3 py-2 text-xs font-semibold text-[#6E5AC5] shadow-[0_8px_18px_rgba(141,121,255,0.1)] backdrop-blur floating-3">
            <span className="flex size-6 items-center justify-center rounded-full bg-[#8D79FF] text-xs text-white">
              <MessageCircle className="size-3.5" aria-hidden="true" />
            </span>
            Conversational AI
          </div>
          <div className="absolute top-[316px] right-[200px] z-40 flex items-center gap-2 rounded-full border border-[#FFB128]/45 bg-[#FFB128]/15 px-3 py-2 text-xs font-semibold text-[#9A6100] shadow-[0_8px_18px_rgba(255,177,40,0.1)] backdrop-blur floating-4 max-[1240px]:right-[80px] max-[1350px]:right-[150px] max-[1500px]:right-[200px]">
            <span className="flex size-6 items-center justify-center rounded-full bg-[#FFB128] text-xs text-white">
              <GitBranch className="size-3.5" aria-hidden="true" />
            </span>
            Reinvent Workflows
          </div>
        </div>
      </div>
      <div className="hero-glow-bg pointer-events-none w-full h-167.5 absolute z-10 bottom-0"></div>
      <HeroLogos />
    </section>
  );
}
