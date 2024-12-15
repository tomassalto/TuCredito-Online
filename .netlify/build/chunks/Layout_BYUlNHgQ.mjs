import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro, e as renderHead, a as renderComponent, f as renderSlot } from './astro/server_BJtGLcD5.mjs';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const currentPath = Astro2.url.pathname;
  const isBlogActive = currentPath.startsWith("/blog");
  const isHelpActive = currentPath === "/ayuda";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`${currentPath === "/" ? "" : "bg-violet"} py-10 flex items-center justify-center`, "class")}> <div class="w-[288px] xs:w-[358px] sm:w-[577px] lg:w-[824px] xl:w-[980px] mac:w-[1040px] hd:w-[1036px] fullhd:w-[1120px] 2k:w-[1210px] 4k:w-[1675px]"> <div class="flex flex-col sm:flex-row items-center justify-between 2k:justify-between 2k:gap-0 gap-5"> <div class="flex flex-col items-center justify-center font-montserrat font-bold z-20 sm:pb-0"> <a${addAttribute(`${currentPath === "/" ? "#" : "/"}`, "href")}> <p${addAttribute(` ${currentPath === "/" ? "text-violet" : "text-white"} text-2xl w-full`, "class")}>
Tu Crédito - Online
</p> <p class="text-lg text-sky_blue tracking-[8.10px]">ONLINE</p> </a> </div> <div${addAttribute(`flex gap-[40px] mx-auto text-base ${currentPath === "/" ? "text-dark" : "text-white"} font-medium sm:mx-0 sm:gap-[59px]`, "class")}> <a href="/ayuda"${addAttribute(` ${isHelpActive ? "font-bold" : ""} ${currentPath === "/" ? " hover:text-violet" : "hover:text-sky_blue"}`, "class")}>
Ayuda
</a> <a href="/blog"${addAttribute(` ${isBlogActive ? "font-bold" : ""} ${currentPath === "/" ? " hover:text-violet" : "hover:text-sky_blue"}`, "class")}>
Blog
</a> </div> </div> </div> </section>`;
}, "C:/Users/tomis/Desktop/tucredito-online/TuCredito-Online/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-violet py-[60px] flex justify-center items-center"> <div class="flex flex-col px-3 w-[311px] gap-[60px] sm:w-[577px] lg:w-[824px] xl:w-[980px] mac:w-[1040px] hd:w-[1036px] fullhd:w-[1120px] 2k:w-[1210px] 4k:w-[1675px]"> <div class="flex justify-between"> <div class="flex flex-col items-center justify-center font-montserrat font-bold"> <p class="text-white w-full text-2xl sm:text-[41px] text-left sm:w-[211px]">
Tu Crédito
</p> <p class="text-lg text-sky_blue tracking-[8.10px] sm:text-[31px] sm:tracking-[14.09px] sm:leading-[60px]">
ONLINE
</p> </div> <div class="flex flex-col text-base gap-[30px] items-end text-white"> <div class="font-bold"><a href="#">Sobre alCrédito</a></div> <div><a href="/ayuda">Ayuda</a></div> <div><a href="/blog">Blog</a></div> </div> </div> <div class="bg-white h-[2px]"></div> <div class="text-white text-center text-base font-medium sm:w-full">
© Copyright 2024 alCrédito Online | Todos los derechos reservados |
      Argentina
</div> </div> </footer>`;
}, "C:/Users/tomis/Desktop/tucredito-online/TuCredito-Online/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, { "currentPath": Astro2.request.url })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/tomis/Desktop/tucredito-online/TuCredito-Online/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
