/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_BJtGLcD5.mjs';
import { $ as $$Layout } from '../chunks/Layout_BYUlNHgQ.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { S as Slider, f as featuredCardData } from '../chunks/Slider_BpTViaI_.mjs';
import { o as our_blog_data } from '../chunks/CardOurBlog_D6c9hKmc.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const Blog = () => {
  const duplicatedItems = [...our_blog_data.our_blog, ...our_blog_data.our_blog];
  const { image, title, date, id } = featuredCardData.featured_card;
  return /* @__PURE__ */ jsx("section", { className: "bg-gray-100 pt-[40px] pb-[133px] flex flex-col items-center !justify-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-[30px] justify-center xs:w-[311px] sm:w-[577px] lg:w-[824px] xl:w-[980px] mac:w-[1040px] hd:w-[1036px] fullhd:w-[1120px]", children: [
    /* @__PURE__ */ jsx("a", { href: `/blog/${id}`, children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: image,
          alt: title,
          className: "w-[311px] h-[450px] object-cover sm:w-full"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 flex flex-col gap-[15px] bg-violet bg-opacity-75 text-white p-[30px] h-[240px] sm:h-[227px] lg:h-[200px]", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-[22px] leading-normal font-semibold sm:text-[30px] lg:text-[36px]", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-[#FFF] text-sm xs:text-base font-light", children: date })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-violet", children: "Sección" }) }),
    /* @__PURE__ */ jsx(
      Slider,
      {
        items: duplicatedItems,
        cardWidth: "w-[300px] sm:w-[280px] lg:w-[248px] xl:w-[300px] mac:w-[333px] fullhd:w-[346px]"
      }
    ),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-violet", children: "Sección" }) }),
    /* @__PURE__ */ jsx(
      Slider,
      {
        items: duplicatedItems,
        cardWidth: "w-[300px] sm:w-[280px] lg:w-[248px] xl:w-[300px] mac:w-[333px] fullhd:w-[346px]"
      }
    )
  ] }) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog - Tu Cr\xE9dito Online" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Blog", Blog, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/tomis/Desktop/tucredito-online/TuCredito-Online/src/components/Blog/Blog", "client:component-export": "default" })} ` })}`;
}, "C:/Users/tomis/Desktop/tucredito-online/TuCredito-Online/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/tomis/Desktop/tucredito-online/TuCredito-Online/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
