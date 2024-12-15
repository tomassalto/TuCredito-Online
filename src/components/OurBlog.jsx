import React, { useState, useEffect } from "react";
import Button from "./Button.jsx";
import CardOurBlog from "./CardOurBlog.jsx";
import our_blog_data from "../data/our_blog.json";

const OurBlog = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="py-[120px] flex justify-center">
      <div className="flex flex-col items-center justify-center w-[311px] gap-[60px] sm:w-[577px] lg:w-[824px] xl:w-[980px] mac:w-[1040px] hd:w-[1036px] fullhd:w-[1120px] 2k:w-[1600px] 4k:w-[3000px]">
        <div className="text-violet font-bold text-[32px]">Nuestro Blog</div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
          {our_blog_data.our_blog.map((post, index) =>
            isLargeScreen || index === 0 ? (
              <CardOurBlog
                {...post}
                key={index}
                link={true}
                card_width="fullhd:w-[353px]"
              />
            ) : null
          )}
        </div>
        <div>
          <a href="/blog">
            <Button
              text="VER MÁS"
              color="secondary"
              padding="sm"
              textSize="text-sm font-bold"
              btn_disabled={false}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurBlog;
