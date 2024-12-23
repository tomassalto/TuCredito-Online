import Slider from "../Slider";
import ourBlogData from "../../data/our_blog.json";
import featuredCardData from "../../data/featured_card.json";
import "./Blog.css";

const Blog = () => {
  const duplicatedItems = [...ourBlogData.our_blog, ...ourBlogData.our_blog];
  const { image, title, date, id } = featuredCardData.featured_card;

  return (
    <section className="bg-gray-100 pt-[40px] pb-[133px] flex flex-col items-center !justify-center">
      <div className="flex flex-col gap-y-[30px] justify-center xs:w-[311px] sm:w-[577px] lg:w-[824px] xl:w-[980px] mac:w-[1040px] hd:w-[1036px] fullhd:w-[1120px]">
        <a href={`/blog/${id}`}>
          <div className="relative">
            <img
              src={image}
              alt={title}
              className="w-[311px] h-[450px] object-cover sm:w-full"
            />
            <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-[15px] bg-violet bg-opacity-75 text-white p-[30px] h-[240px] sm:h-[227px] lg:h-[200px]">
              <h3 className="text-[22px] leading-normal font-semibold sm:text-[30px] lg:text-[36px]">
                {title}
              </h3>
              <p className="text-[#FFF] text-sm xs:text-base font-light">
                {date}
              </p>
            </div>
          </div>
        </a>

        <div>
          <h2 className="text-2xl font-bold text-violet">Sección</h2>
        </div>
        <Slider
          items={duplicatedItems}
          cardWidth="w-[300px] sm:w-[280px] lg:w-[248px] xl:w-[300px] mac:w-[333px] fullhd:w-[346px]"
        />

        <div>
          <h2 className="text-2xl font-bold text-violet">Sección</h2>
        </div>
        <Slider
          items={duplicatedItems}
          cardWidth="w-[300px] sm:w-[280px] lg:w-[248px] xl:w-[300px] mac:w-[333px] fullhd:w-[346px]"
        />
      </div>
    </section>
  );
};

export default Blog;
