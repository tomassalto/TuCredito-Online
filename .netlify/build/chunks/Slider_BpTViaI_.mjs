import { jsx } from 'react/jsx-runtime';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
/* empty css                         */
import { C as CardOurBlog } from './CardOurBlog_D6c9hKmc.mjs';

const featured_card = {
	id: "4",
	image: "/images/blog/featured.jpeg",
	title: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
	date: "Lunes 22 de Julio de 2024",
	description: "This is a description of the featured blog post."
};
const featuredCardData = {
	featured_card: featured_card
};

const Slider = ({ items, cardWidth }) => {
  return /* @__PURE__ */ jsx(
    Swiper,
    {
      spaceBetween: 30,
      loop: true,
      autoplay: { delay: 3e3, disableOnInteraction: false },
      modules: [Autoplay],
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      },
      children: items.map((item, index) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(
        CardOurBlog,
        {
          image: item.image,
          title: item.title,
          description: item.description,
          id: item.id,
          link: false,
          card_width: cardWidth
        }
      ) }, index))
    }
  );
};

export { Slider as S, featuredCardData as f };
