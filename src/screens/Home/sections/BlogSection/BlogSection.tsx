import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Blog data for mapping
const blogPosts = [
  {
    id: 1,
    date: "Nov 9, 2023",
    title: "How UX works in web",
    image: "/image-21-2.png",
    tags: ["UI", "UX"],
  },
  {
    id: 2,
    date: "Aug 18, 2023",
    title: "Case study - Analysis Application.",
    image: "/image-21-3.png",
    tags: ["DESIGN", "PRINT"],
  },
  {
    id: 3,
    date: "Feb 16, 2023",
    title: "3 ways to develop your skill",
    image: "/image-21-4.png",
    tags: ["FIGMA", "WEB"],
  },
];

export const BlogSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start px-6 py-16 md:px-[100px]">
      <div className="flex-col max-w-[1240px] items-center justify-end gap-8 w-full flex">
        <div className="flex items-center justify-between w-full">
          <div className="inline-flex items-center gap-2">
            <img className="w-[30.43px] h-8" alt="Star" src="/star.svg" />
            <h2 className="font-heading-h3-bold font-[number:var(--heading-h3-bold-font-weight)] text-white text-[length:var(--heading-h3-bold-font-size)] tracking-[var(--heading-h3-bold-letter-spacing)] leading-[var(--heading-h3-bold-line-height)] whitespace-nowrap [font-style:var(--heading-h3-bold-font-style)]">
              Blog
            </h2>
          </div>

          <Button
            variant="link"
            className="font-medium text-white text-lg underline p-0 h-auto"
          >
            view all
          </Button>
        </div>

        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="bg-transparent border-0 items-center gap-8 w-full flex"
          >
            <CardContent className="p-0 flex items-center gap-8 w-full">
              <img
                className="w-[286px] h-[214.5px] object-cover"
                alt={`Blog image for ${post.title}`}
                src={post.image}
              />

              <div className="flex flex-col w-full md:w-[710px] items-start gap-4">
                <p className="self-stretch font-body-lead font-[number:var(--body-lead-font-weight)] text-gray text-[length:var(--body-lead-font-size)] tracking-[var(--body-lead-letter-spacing)] leading-[var(--body-lead-line-height)] [font-style:var(--body-lead-font-style)]">
                  {post.date}
                </p>

                <h3 className="font-heading-h3-semibold font-[number:var(--heading-h3-semibold-font-weight)] text-white text-[length:var(--heading-h3-semibold-font-size)] tracking-[var(--heading-h3-semibold-letter-spacing)] leading-[var(--heading-h3-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-h3-semibold-font-style)]">
                  {post.title}
                </h3>

                <div className="inline-flex items-start gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="px-6 py-2 rounded-[100px] border border-solid border-white bg-transparent"
                    >
                      <span className="font-semibold text-white text-xs leading-normal [font-family:'Syne',Helvetica] tracking-[0] whitespace-nowrap">
                        {tag}
                      </span>
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-end justify-end w-[180px] h-14">
                <Button className="px-8 py-4 bg-white rounded-[100px] border border-solid border-white text-dark">
                  <span className="[font-family:'Syne',Helvetica] font-semibold text-dark text-sm tracking-[0] leading-6 whitespace-nowrap">
                    Read
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
