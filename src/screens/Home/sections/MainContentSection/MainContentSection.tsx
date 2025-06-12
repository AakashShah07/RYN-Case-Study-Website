import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Define experience data for mapping
const experienceData = [
  {
    position: "Lead Product Designer",
    company: "Fortknox",
    period: "Mar 2022 - Oct 2023",
  },
  {
    position: "Intern Designer",
    company: "OmniSafe",
    period: "Mar 2022 - Oct 2023",
  },
  {
    position: "UI Designer",
    company: "Doradesign",
    period: "Mar 2022 - Oct 2023",
  },
  {
    position: "Frontend Developer",
    company: "OpacityAuthor",
    period: "Mar 2022 - Oct 2023",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start px-6 py-16 md:px-[100px]">
      <div className="flex flex-col w-full max-w-[1240px] items-center justify-end gap-8">
        <div className="flex items-center gap-2 w-full">
          <img className="w-[30.43px] h-8" alt="Star" src="/star.svg" />
          <h2 className="font-heading-h3-bold font-[number:var(--heading-h3-bold-font-weight)] text-white text-[length:var(--heading-h3-bold-font-size)] tracking-[var(--heading-h3-bold-letter-spacing)] leading-[var(--heading-h3-bold-line-height)] [font-style:var(--heading-h3-bold-font-style)]">
            Experience
          </h2>
        </div>

        <Card className="w-full bg-transparent border-none">
          <CardContent className="p-0">
            {experienceData.map((item, index) => (
              <div key={index} className="w-full">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-2 border-b-[1.5px] border-[#ffffff80]">
                  <div className="flex items-center gap-4">
                    <h3 className="font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-white text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
                      {item.position}
                    </h3>
                  </div>

                  <div className="flex flex-col items-end justify-center gap-2 mt-1 md:mt-0">
                    <h4 className="font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-white text-[length:var(--heading-h5-font-size)] text-right tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                      {item.company}
                    </h4>
                    <p className="font-body-base-regular font-[number:var(--body-base-regular-font-weight)] text-white text-[length:var(--body-base-regular-font-size)] text-right tracking-[var(--body-base-regular-letter-spacing)] leading-[var(--body-base-regular-line-height)] [font-style:var(--body-base-regular-font-style)]">
                      {item.period}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
