import { ExternalLinkIcon } from "lucide-react";
import React from "react";
import { Separator } from "../../../../components/ui/separator";

// Data for the scrolling banner
const bannerItems = [
  { text: "WEBFLOW", hasStarAfter: true, starSrc: "/star.svg" },
  { text: "FIGMA", hasStarAfter: true, starSrc: "/star-1.svg" },
  { text: "DESIGNER", hasStarAfter: true, starSrc: "/star.svg" },
  { text: "DEVELOPER", hasStarAfter: false },
];

// Social media links
const socialLinks = ["Dribbble", "Behance", "Twitter", "Instagram"];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-start bg-dark w-full py-0 px-6 md:px-[100px]">
      <div className="flex flex-col w-full max-w-[1240px] items-center justify-end pt-16 pb-0 mx-auto">
        {/* Scrolling banner */}
        <div className="flex items-center justify-center gap-10 overflow-x-auto w-full">
          {bannerItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className="[-webkit-text-stroke:2px_#cacaca] [font-family:'Syne',Helvetica] font-bold text-transparent text-[56px] tracking-[0] leading-[88px] whitespace-nowrap">
                {item.text}
              </div>

              {item.hasStarAfter && (
                <div className="relative w-16 h-16">
                  <img
                    className="absolute w-[53px] h-14 top-1 left-[5px]"
                    alt="Star"
                    src={item.starSrc}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Contact section */}
        <div className="flex w-full max-w-[1240px] items-end justify-center pt-28 pb-8">
          <div className="flex flex-col items-center justify-center gap-8 w-full">
            <div className="flex flex-col w-full max-w-[656px] items-center gap-8">
              <h2 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-white text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] whitespace-nowrap [font-style:var(--heading-h1-font-style)]">
                LET&apos;S TALK!
              </h2>

              <div className="flex items-center justify-center gap-2">
                <span className="font-body-lead font-[number:var(--body-lead-font-weight)] text-white text-[length:var(--body-lead-font-size)] tracking-[var(--body-lead-letter-spacing)] leading-[var(--body-lead-line-height)] [font-style:var(--body-lead-font-style)]">
                  rehanurraihan@gmail.com
                </span>
                <ExternalLinkIcon className="w-[16.04px] h-[16.04px] text-white" />
              </div>
            </div>

            <Separator className="bg-gray/20 my-4 w-full opacity-20" />

            {/* Footer bottom section */}
            <div className="flex w-full items-end justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="font-body-syne font-[number:var(--body-syne-font-weight)] text-white text-[length:var(--body-syne-font-size)] tracking-[var(--body-syne-letter-spacing)] leading-[var(--body-syne-line-height)] whitespace-nowrap [font-style:var(--body-syne-font-style)]">
                  © Rehan Raihan - 2023
                </span>
              </div>

              <div className="flex items-start gap-8 flex-wrap">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="font-body-syne font-[number:var(--body-syne-font-weight)] text-white text-[length:var(--body-syne-font-size)] tracking-[var(--body-syne-letter-spacing)] leading-[var(--body-syne-line-height)] whitespace-nowrap [font-style:var(--body-syne-font-style)] hover:text-gray transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
