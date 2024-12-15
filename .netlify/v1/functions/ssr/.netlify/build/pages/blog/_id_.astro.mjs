/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro } from '../../chunks/astro/server_BJtGLcD5.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BYUlNHgQ.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { o as our_blog_data } from '../../chunks/CardOurBlog_D6c9hKmc.mjs';
import { S as Slider, f as featuredCardData } from '../../chunks/Slider_BpTViaI_.mjs';
export { renderers } from '../../renderers.mjs';

const BlogDetail = ({ id }) => {
  const blogId = parseInt(id, 10);
  let blogPost = our_blog_data.our_blog.find((post) => post.id === blogId);
  if (!blogPost) {
    blogPost = featuredCardData.featured_card;
  }
  const duplicatedItems = [...our_blog_data.our_blog, ...our_blog_data.our_blog];
  return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-center w-[311px] sm:w-[577px] lg:w-[824px] xl:w-[980px] mac:w-[1040px] hd:w-[1036px] fullhd:w-[1120px]", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-[40px] pt-10 pb-[157px]", children: [
    /* @__PURE__ */ jsx("a", { href: "/blog", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-[11px]", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/icons/blog/chevron.svg",
          alt: "chevron",
          className: "size-[18px]"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-[18px] font-semibold leading-6 tracking-[1.15px] text-violet", children: "Volver al blog" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-[15px]", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-[#3A3A3A] text-[36px] font-semibold leading-normal", children: blogPost.title }),
      /* @__PURE__ */ jsx("p", { className: "text-[#3A3A3A] font-light text-[16px] leading-normal", children: blogPost.date })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      "img",
      {
        src: blogPost.image,
        alt: blogPost.title,
        className: "w-[311px] h-[450px] object-cover sm:w-full"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-[15px]", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-[#3A3A3A] text-[24px] font-semibold leading-normal", children: "Sección" }),
      /* @__PURE__ */ jsx("p", { className: "text-[#3A3A3A] text-[16px] leading-[22px]", children: blogPost.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(
      Slider,
      {
        items: duplicatedItems,
        cardWidth: "w-[300px] sm:w-[280px] lg:w-[248px] xl:w-[300px] mac:w-[333px] fullhd:w-[346px]"
      }
    ) })
  ] }) }) });
};

const $$Astro = createAstro();
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tu Cr\xE9dito | Blog" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogDetail", BlogDetail, { "id": id, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/tomis/Desktop/tucredito-online/TuCredito-Online/src/components/BlogDetail.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/tomis/Desktop/tucredito-online/TuCredito-Online/src/pages/blog/[id].astro", void 0);

const $$file = "C:/Users/tomis/Desktop/tucredito-online/TuCredito-Online/src/pages/blog/[id].astro";
const $$url = "/blog/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
