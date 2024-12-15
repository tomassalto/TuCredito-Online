import { jsx, jsxs } from 'react/jsx-runtime';

const our_blog = [
	{
		id: 1,
		image: "/images/our-blog/image_1.png",
		title: "Lorem ipsum dolor sit amet consectetur.",
		description: "Lorem ipsum dolor sit amet consectetur. Enim proin duis faucibus vivamus fermentum cum. Aliquam sed malesuada nisi ultrices mus lectus molestie platea.",
		date: "2022-01-01"
	},
	{
		id: 2,
		image: "/images/our-blog/image_2.png",
		title: "Lorem ipsum dolor sit amet consectetur.",
		description: "Lorem ipsum dolor sit amet consectetur. Enim proin duis faucibus vivamus fermentum cum. Aliquam sed malesuada nisi ultrices mus lectus molestie platea.",
		date: "2022-01-01"
	},
	{
		id: 3,
		image: "/images/our-blog/image_3.png",
		title: "Lorem ipsum dolor sit amet consectetur.",
		description: "Lorem ipsum dolor sit amet consectetur. Enim proin duis faucibus vivamus fermentum cum. Aliquam sed malesuada nisi ultrices mus lectus molestie platea.",
		date: "2022-01-01"
	}
];
const our_blog_data = {
	our_blog: our_blog
};

const CardOurBlog = ({ image, title, description, id, link, card_width }) => {
  const card = /* @__PURE__ */ jsxs("div", { className: `flex flex-col gap-[15px] ${card_width} h-[443px]`, children: [
    /* @__PURE__ */ jsx("img", { src: image, alt: title, className: "sm:h-[240px] object-cover" }),
    /* @__PURE__ */ jsx("h3", { className: "text-2xl leading-normal text-dark font-semibold lg:text-[20px] xl:text-2xl", children: title }),
    /* @__PURE__ */ jsx("p", { className: "text-base text-[#202020] font-normal leading-normal font-montserrat lg:text-sm xl:text-base", children: description }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: `/blog/${id}`,
        className: `${link === true ? "flex cursor-pointer" : "hidden"}`,
        children: /* @__PURE__ */ jsxs("p", { className: "text-base text-violet leading-normal font-semibold", children: [
          " ",
          "Leer más."
        ] })
      }
    )
  ] });
  return link ? card : /* @__PURE__ */ jsx("a", { href: `${`/blog/${id}`} `, children: card });
};

export { CardOurBlog as C, our_blog_data as o };
