/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, b as createAstro } from '../chunks/astro/server_BJtGLcD5.mjs';
import { $ as $$Layout } from '../chunks/Layout_BYUlNHgQ.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_D8iQTfXr.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect, createElement } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
/* empty css                                 */
import { o as our_blog_data, C as CardOurBlog } from '../chunks/CardOurBlog_D6c9hKmc.mjs';
export { renderers } from '../renderers.mjs';

const Button = ({
  text,
  color,
  padding,
  textSize,
  btn_disabled = false,
  btn_type = "button"
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const backgroundStyle = color === "secondary" ? isHovered ? "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), #3F0393" : "#3F0393" : "";
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: btn_type,
      style: { background: backgroundStyle },
      className: `${color === "primary" ? "bg-sky_blue hover:bg-black/50" : color === "secondary" ? "" : color === "secondary-hov-grad" ? "bg-violet transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-sky_blue duration-300" : ""} ${padding === "xl" ? "p-[30px]" : padding === "sm" ? "py-[15px] px-5" : padding === "lg" ? "p-[15px]" : padding === "xl-sm" ? "p-[30px] text-nowrap" : ""} text-center items-center flex justify-center rounded-lg text-white w-full h-full ${textSize} ${btn_disabled ? "!bg-[#E1E5EF] cursor-not-allowed" : ""}`,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      disabled: btn_disabled,
      children: text
    }
  );
};

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative overflow-hidden py-[120px] flex justify-center items-center"> <div class="flex flex-col items-center justify-center xs:w-[311px] sm:w-[577px] lg:px-0 lg:w-[824px] xl:w-[980px] mac:w-[1040px] hd:w-[1036px] fullhd:w-[1120px]"> <div class="text-violet w-[311px] text-[40px] leading-[48px] font-bold font-montserrat px-2 xs:px-0 sm:w-[550px] lg:hidden">
La forma más fácil de conseguir el préstamo que necesitas
</div> <div${addAttribute({ clipPath: "ellipse(62% 40% at 51% 87%);" }, "style")} class="absolute bg-violet -z-10 size-[1000px] top-[-40px] sm:top-[-10px] lg:w-[1500px] lg:top-[-200px] xl:top-[-200px] mac:w-full mac:top-[-185px] fullhd:top-[-185px]"></div> <div class="absolute bg-violet w-full h-full -z-10 top-[485px] items-center justify-center sm:top-[630px] md:top-[640px] lg:top-[670px] xl:top-[820px]"></div> <div class="pb-[9px] lg:hidden"> ${renderComponent($$result, "Image", $$Image, { "src": "/images/hero/hero.png", "alt": "hero", "width": 256, "height": 305, "loading": "eager" })} </div> <div class="flex flex-col text-white text-2xl font-montserrat pb-[50px] w-[311px] px-3 xs:px-0 sm:w-[509px] lg:w-[600px] lg:hidden"> <p class="font-normal">Encontrá la oferta financiera ideal:</p> <p class="font-bold">
conectamos tus necesidades con las mejores opciones del mercado.
</p> </div> <div class="lg:hidden w-[287px] xs:w-[311px] h-[82px] sm:w-[329px] sm:h-[84px]"> <a href="#prestamo"> ${renderComponent($$result, "Button", Button, { "text": "CONSEGU\xCD TU PR\xC9STAMO", "color": "primary", "padding": "xl", "textSize": "text-lg font-bold text-nowrap", "btn_disabled": false, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/tomis/Desktop/tucredito-online/TuCredito-Online/src/components/Button", "client:component-export": "default" })} </a> </div> <div class="hidden lg:flex xl:justify-between xl:gap-10 lg:w-[824px] xl:w-[980px] mac:w-[1040px] mac:gap-x-10 hd:w-[1036px] fullhd:w-[1120px] 2k:w-[1600px] 2k:justify-evenly 4k:w-[3000px]"> <div class="flex flex-col gap-[70px] w-[470px] xl:gap-[80px] xl:w-[577px] mac:gap-[110px] fullhd:gap-[90px]"> <div> <div class="text-violet leading-[48px] text-[36px] font-bold font-montserrat xl:text-[48px]">
La forma más fácil de conseguir el préstamo que necesitas
</div> </div> <div class="flex flex-col text-white text-[18px] xl:text-2xl font-montserrat xl:w-[577px]"> <p class="font-medium">
Encontrá la oferta financiera ideal: <span class="font-bold">
conectamos tus necesidades con las mejores opciones del mercado.
</span> </p> </div> <div class="lg:w-[329px]"> <a href="#prestamo"> ${renderComponent($$result, "Button", Button, { "text": "CONSEGU\xCD TU PR\xC9STAMO", "color": "primary", "padding": "xl", "textSize": "text-xl font-bold", "btn_disabled": false, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/tomis/Desktop/tucredito-online/TuCredito-Online/src/components/Button", "client:component-export": "default" })} </a> </div> </div> <div class="flex"> <div class="h-full w-full"> ${renderComponent($$result, "Image", $$Image, { "src": "/images/hero/hero.png", "alt": "hero", "width": 400, "height": 450, "class": "h-full mac:!w-[500px] fullhd:h-[500px] fullhd:!w-[400px]", "loading": "eager" })} </div> </div> </div> </div> </section>`;
}, "C:/Users/tomis/Desktop/tucredito-online/TuCredito-Online/src/components/Hero.astro", void 0);

const Carousel = () => {
  return /* @__PURE__ */ jsx("section", { className: "text-white w-full hidden lg:flex mt-[60px]", children: /* @__PURE__ */ jsxs("div", { className: "logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]", children: [
    /* @__PURE__ */ jsxs("div", { className: "element group-hover:animation-pause inline-flex w-max text-[40px] items-center font-bold", children: [
      /* @__PURE__ */ jsx("p", { className: "mx-4 flex items-center h-[52px]", children: "GRATIS" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "mx-4 inline-flex items-center h-[52px]",
          src: "/icons/form/elipse.svg",
          alt: "Transistor"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "mx-4 inline-flex items-center h-[52px]", children: "RÁPIDO" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "mx-4 inline-flex items-center h-[52px]",
          src: "/icons/form/elipse.svg",
          alt: "Transistor"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "mx-4 inline-flex items-center h-[52px]", children: "SEGURO" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "mx-4 inline-flex items-center h-[52px]",
          src: "/icons/form/elipse.svg",
          alt: "Transistor"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "mx-4 inline-flex items-center h-[52px]", children: "100% ONLINE" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "mx-4 inline-flex items-center h-[52px]",
          src: "/icons/form/elipse.svg",
          alt: "Transistor"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "mx-4 inline-flex items-center h-[52px]", children: "GRATIS" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "mx-4 inline-flex items-center h-[52px]",
          src: "/icons/form/elipse.svg",
          alt: "Transistor"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "mx-4 inline-flex items-center h-[52px]", children: "RÁPIDO" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "mx-4 inline-flex items-center h-[52px]",
          src: "/icons/form/elipse.svg",
          alt: "Transistor"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "mx-4 inline-flex items-center h-[52px]", children: "SEGURO" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "mx-4 inline-flex items-center h-[52px]",
          src: "/icons/form/elipse.svg",
          alt: "Transistor"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "mx-4 inline-flex items-center h-[52px]", children: "100% ONLINE" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "mx-4 inline-flex items-center h-[52px]",
          src: "/icons/form/elipse.svg",
          alt: "Transistor"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "hidden 4k:inline-flex", children: [
        /* @__PURE__ */ jsx("p", { className: "mx-4 inline-flex items-center h-[52px]", children: "GRATIS" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "mx-4 inline-flex items-center h-[52px]",
            src: "/icons/form/elipse.svg",
            alt: "Transistor"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "mx-4 inline-flex items-center h-[52px]", children: "RÁPIDO" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "mx-4 inline-flex items-center h-[52px]",
            src: "/icons/form/elipse.svg",
            alt: "Transistor"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "mx-4 inline-flex items-center h-[52px]", children: "SEGURO" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "mx-4 inline-flex items-center h-[52px]",
            src: "/icons/form/elipse.svg",
            alt: "Transistor"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "mx-4 inline-flex items-center h-[52px]", children: "100% ONLINE" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "mx-4 inline-flex items-center h-[52px]",
            src: "/icons/form/elipse.svg",
            alt: "Transistor"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "element group-hover:animation-pause inline-flex w-max text-[40px] items-center font-bold", children: [
      /* @__PURE__ */ jsx("p", { className: "mx-4 inline-flex items-center h-[52px]", children: "GRATIS" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "mx-4 inline-flex items-center h-[52px]",
          src: "/icons/form/elipse.svg",
          alt: "Transistor"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "mx-4 inline-flex items-center h-[52px]", children: "RÁPIDO" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "mx-4 inline-flex items-center h-[52px]",
          src: "/icons/form/elipse.svg",
          alt: "Transistor"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "mx-4 inline-flex items-center h-[52px]", children: "SEGURO" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "mx-4 inline-flex items-center h-[52px]",
          src: "/icons/form/elipse.svg",
          alt: "Transistor"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "mx-4 inline-flex items-center h-[52px]", children: "100% ONLINE" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "mx-4 inline-flex items-center h-[52px]",
          src: "/icons/form/elipse.svg",
          alt: "Transistor"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "mx-4 inline-flex items-center h-[52px]", children: "GRATIS" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "mx-4 inline-flex items-center h-[52px]",
          src: "/icons/form/elipse.svg",
          alt: "Transistor"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "mx-4 inline-flex items-center h-[52px]", children: "RÁPIDO" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "mx-4 inline-flex items-center h-[52px]",
          src: "/icons/form/elipse.svg",
          alt: "Transistor"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "mx-4 inline-flex items-center h-[52px]", children: "SEGURO" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "mx-4 inline-flex items-center h-[52px]",
          src: "/icons/form/elipse.svg",
          alt: "Transistor"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "mx-4 inline-flex items-center h-[52px]", children: "100% ONLINE" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "mx-4 inline-flex items-center h-[52px]",
          src: "/icons/form/elipse.svg",
          alt: "Transistor"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "hidden 4k:inline-flex", children: [
        /* @__PURE__ */ jsx("p", { className: "mx-4 inline-flex items-center h-[52px]", children: "GRATIS" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "mx-4 inline-flex items-center h-[52px]",
            src: "/icons/form/elipse.svg",
            alt: "Transistor"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "mx-4 inline-flex items-center h-[52px]", children: "RÁPIDO" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "mx-4 inline-flex items-center h-[52px]",
            src: "/icons/form/elipse.svg",
            alt: "Transistor"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "mx-4 inline-flex items-center h-[52px]", children: "SEGURO" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "mx-4 inline-flex items-center h-[52px]",
            src: "/icons/form/elipse.svg",
            alt: "Transistor"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "mx-4 inline-flex items-center h-[52px]", children: "100% ONLINE" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "mx-4 inline-flex items-center h-[52px]",
            src: "/icons/form/elipse.svg",
            alt: "Transistor"
          }
        )
      ] })
    ] })
  ] }) });
};

const banks = [
	{
		id: "00007",
		name: "BANCO DE GALICIA Y BUENOS AIRES S.A.U."
	},
	{
		id: "00011",
		name: "BANCO DE LA NACION ARGENTINA"
	},
	{
		id: "00014",
		name: "BANCO DE LA PROVINCIA DE BUENOS AIRES"
	},
	{
		id: "00015",
		name: "INDUSTRIAL AND COMMERCIAL BANK OF CHINA"
	},
	{
		id: "00016",
		name: "CITIBANK N.A."
	},
	{
		id: "00017",
		name: "BANCO BBVA ARGENTINA S.A."
	},
	{
		id: "00020",
		name: "BANCO DE LA PROVINCIA DE CORDOBA S.A."
	},
	{
		id: "00027",
		name: "BANCO SUPERVIELLE S.A."
	},
	{
		id: "00029",
		name: "BANCO DE LA CIUDAD DE BUENOS AIRES"
	},
	{
		id: "00034",
		name: "BANCO PATAGONIA S.A."
	},
	{
		id: "00044",
		name: "BANCO HIPOTECARIO S.A."
	},
	{
		id: "00045",
		name: "BANCO DE SAN JUAN S.A."
	},
	{
		id: "00065",
		name: "BANCO MUNICIPAL DE ROSARIO"
	},
	{
		id: "00072",
		name: "BANCO SANTANDER ARGENTINA S.A."
	},
	{
		id: "00083",
		name: "BANCO DEL CHUBUT S.A."
	},
	{
		id: "00086",
		name: "BANCO DE SANTA CRUZ S.A."
	},
	{
		id: "00093",
		name: "BANCO DE LA PAMPA SOCIEDAD DE ECONOMÍA M"
	},
	{
		id: "00094",
		name: "BANCO DE CORRIENTES S.A."
	},
	{
		id: "00097",
		name: "BANCO PROVINCIA DEL NEUQUÉN SOCIEDAD ANÓ"
	},
	{
		id: "00131",
		name: "BANK OF CHINA LIMITED SUCURSAL BUENOS AI"
	},
	{
		id: "00143",
		name: "BRUBANK S.A.U."
	},
	{
		id: "00147",
		name: "BIBANK S.A."
	},
	{
		id: "00150",
		name: "HSBC BANK ARGENTINA S.A."
	},
	{
		id: "00158",
		name: "OPEN BANK ARGENTINA S.A."
	},
	{
		id: "00165",
		name: "JPMORGAN CHASE BANK, NATIONAL ASSOCIATIO"
	},
	{
		id: "00191",
		name: "BANCO CREDICOOP COOPERATIVO LIMITADO"
	},
	{
		id: "00198",
		name: "BANCO DE VALORES S.A."
	},
	{
		id: "00247",
		name: "BANCO ROELA S.A."
	},
	{
		id: "00254",
		name: "BANCO MARIVA S.A."
	},
	{
		id: "00259",
		name: "BANCO BMA S.A.U."
	},
	{
		id: "00266",
		name: "BNP PARIBAS"
	},
	{
		id: "00268",
		name: "BANCO PROVINCIA DE TIERRA DEL FUEGO"
	},
	{
		id: "00269",
		name: "BANCO DE LA REPUBLICA ORIENTAL DEL URUGU"
	},
	{
		id: "00277",
		name: "BANCO SAENZ S.A."
	},
	{
		id: "00281",
		name: "BANCO MERIDIAN S.A."
	},
	{
		id: "00285",
		name: "BANCO MACRO S.A."
	},
	{
		id: "00299",
		name: "BANCO COMAFI SOCIEDAD ANONIMA"
	},
	{
		id: "00300",
		name: "BANCO DE INVERSION Y COMERCIO EXTERIOR S"
	},
	{
		id: "00301",
		name: "BANCO PIANO S.A."
	},
	{
		id: "00305",
		name: "BANCO JULIO SOCIEDAD ANONIMA"
	},
	{
		id: "00309",
		name: "BANCO RIOJA SOCIEDAD ANONIMA UNIPERSONAL"
	},
	{
		id: "00310",
		name: "BANCO DEL SOL S.A."
	},
	{
		id: "00311",
		name: "NUEVO BANCO DEL CHACO S. A."
	},
	{
		id: "00312",
		name: "BANCO VOII S.A."
	},
	{
		id: "00315",
		name: "BANCO DE FORMOSA S.A."
	},
	{
		id: "00319",
		name: "BANCO CMF S.A."
	},
	{
		id: "00321",
		name: "BANCO DE SANTIAGO DEL ESTERO S.A."
	},
	{
		id: "00322",
		name: "BANCO INDUSTRIAL S.A."
	},
	{
		id: "00330",
		name: "NUEVO BANCO DE SANTA FE SOCIEDAD ANONIMA"
	},
	{
		id: "00331",
		name: "BANCO CETELEM ARGENTINA S.A."
	},
	{
		id: "00332",
		name: "BANCO DE SERVICIOS FINANCIEROS S.A."
	},
	{
		id: "00338",
		name: "BANCO DE SERVICIOS Y TRANSACCIONES S.A."
	},
	{
		id: "00339",
		name: "RCI BANQUE S.A."
	},
	{
		id: "00340",
		name: "BACS BANCO DE CREDITO Y SECURITIZACION S"
	},
	{
		id: "00341",
		name: "BANCO MASVENTAS S.A."
	},
	{
		id: "00384",
		name: "WILOBANK S.A.U."
	},
	{
		id: "00386",
		name: "NUEVO BANCO DE ENTRE RÍOS S.A."
	},
	{
		id: "00389",
		name: "BANCO COLUMBIA S.A."
	},
	{
		id: "00426",
		name: "BANCO BICA S.A."
	},
	{
		id: "00431",
		name: "BANCO COINAG S.A."
	},
	{
		id: "00432",
		name: "BANCO DE COMERCIO S.A."
	},
	{
		id: "00435",
		name: "BANCO SUCREDITO REGIONAL S.A.U."
	},
	{
		id: "00448",
		name: "BANCO DINO S.A."
	},
	{
		id: "44077",
		name: "COMPAÑIA FINANCIERA ARGENTINA S.A."
	},
	{
		id: "44088",
		name: "VOLKSWAGEN FINANCIAL SERVICES COMPAÑIA F"
	},
	{
		id: "44090",
		name: "IUDU COMPAÑÍA FINANCIERA S.A."
	},
	{
		id: "44092",
		name: "FCA COMPAÑIA FINANCIERA S.A."
	},
	{
		id: "44093",
		name: "GPAT COMPAÑIA FINANCIERA S.A.U."
	},
	{
		id: "44094",
		name: "MERCEDES-BENZ COMPAÑÍA FINANCIERA ARGENT"
	},
	{
		id: "44095",
		name: "ROMBO COMPAÑÍA FINANCIERA S.A."
	},
	{
		id: "44096",
		name: "JOHN DEERE CREDIT COMPAÑÍA FINANCIERA S."
	},
	{
		id: "44098",
		name: "PSA FINANCE ARGENTINA COMPAÑÍA FINANCIER"
	},
	{
		id: "44099",
		name: "TOYOTA COMPAÑÍA FINANCIERA DE ARGENTINA"
	},
	{
		id: "45030",
		name: "NARANJA DIGITAL COMPAÑÍA FINANCIERA S.A."
	},
	{
		id: "45056",
		name: "MONTEMAR COMPAÑIA FINANCIERA S.A."
	},
	{
		id: "45072",
		name: "REBA COMPAÑIA FINANCIERA S.A."
	},
	{
		id: "65203",
		name: "CRÉDITO REGIONAL COMPAÑÍA FINANCIERA S.A."
	}
];

const Form = () => {
  const formik = useFormik({
    initialValues: {
      dni: "",
      gender: "",
      bank: "",
      email: "",
      phone: "",
      terms: false
    },
    validationSchema: Yup.object({
      dni: Yup.string().matches(/^\d{7,8}$/, "El DNI debe tener 7 u 8 dígitos").required("El DNI es obligatorio"),
      gender: Yup.string().required("El sexo es obligatorio"),
      bank: Yup.string().required("El banco es obligatorio"),
      email: Yup.string().matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Email inválido"
      ).required("El correo electrónico es obligatorio"),
      phone: Yup.string().matches(
        /^(?!15)[0-9]{10}$/,
        "El número de teléfono debe contener exactamente 10 dígitos, no puede empezar con 15 y no puede contener '+'"
      ).required("El teléfono es obligatorio"),
      terms: Yup.boolean().oneOf(
        [true],
        "Debes aceptar los términos y condiciones"
      )
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      const dni = String(values.dni).padStart(8, "0");
      const url = `https://sandbox.p.alprestamo.ar/?afiliados&national_id=${dni}&gender=${values.gender}&bank_code=${values.bank}&email=${values.email}&phone=${values.phone}`;
      window.location.href = url;
      setSubmitting(false);
    }
  });
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "prestamo",
      className: "bg-violet flex flex-col justify-center items-center py-[60px]",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[60px] w-[311px] sm:w-[577px] lg:w-[824px] xl:w-[980px] mac:w-[1040px] hd:w-[1036px] fullhd:w-[1120px] 2k:w-[1600px] 2k:justify-evenly 4k:w-[3000px]", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h3", { className: "text-white text-[32px] font-bold text-center lg:text-[24px] xl:text-[28px] mac:text-[30px] fullhd:text-[32px]", children: "Sin complicaciones: completá los 3 pasos y obtené tu préstamo" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[60px] lg:flex-row lg:justify-between 2k:justify-evenly", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[30px] text-center sm:flex-row lg:flex-col lg:justify-evenly", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[6px] sm:w-[172px] lg:w-[230px] xl:w-[250px]", children: [
                /* @__PURE__ */ jsx("p", { className: "text-white text-[64px] font-bold", children: "1." }),
                /* @__PURE__ */ jsxs("p", { className: "text-white text-lg font-normal leading-normal lg:text-base lg:text-start xl:text-[18px]", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Completá " }),
                  "el formulario con los datos que te solicitamos"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[6px] sm:w-[172px] lg:w-[230px] xl:w-[250px]", children: [
                /* @__PURE__ */ jsx("p", { className: "text-white text-[64px] font-bold", children: "2." }),
                /* @__PURE__ */ jsxs("p", { className: "text-white text-lg font-normal lg:text-base lg:text-start xl:text-[18px]", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Compará " }),
                  " entre las mejores ofertas del mercado"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[6px] sm:w-[172px] lg:w-[230px] xl:w-[250px]", children: [
                /* @__PURE__ */ jsx("p", { className: "text-white text-[64px] font-bold", children: "3." }),
                /* @__PURE__ */ jsxs("p", { className: "text-white text-lg font-normal lg:text-base lg:text-start xl:text-[18px]", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Elegí " }),
                  " el préstamo ideal para financiar tu proyecto"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "bg-white p-[30px] rounded-xl lg:w-[500px] xl:w-[589px]", children: /* @__PURE__ */ jsxs(
              "form",
              {
                onSubmit: formik.handleSubmit,
                className: "flex flex-col items-center justify-center gap-5",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[10px] text-dark w-full justify-center", children: [
                    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold", children: "Completá el formulario:" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs leading-normal tracking-tight", children: "Todos los campos son obligatorios." })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-[25px] w-full", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[25px] sm:flex-row lg:w-full", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[10px] sm:w-[245.5px] lg:w-[200px] xl:w-[252px]", children: [
                        /* @__PURE__ */ jsx(
                          "label",
                          {
                            className: "text-[#9e9e9e] text-base leading-3 tracking-tight",
                            htmlFor: "dni",
                            children: "DNI"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "input",
                          {
                            type: "number",
                            id: "dni",
                            placeholder: "DNI",
                            className: `p-[15px] border-[1px] bg-[#fff] rounded-[4px] h-[54px] outline-none focus:border-violet placeholder:text-base placeholder:leading-[24px] placeholder:text-[#E1E5EF] placeholder:tracking-[0.15px]  ${formik.touched.dni && formik.errors.dni ? "border-red-500" : "border-[#E1E5EF]"}`,
                            ...formik.getFieldProps("dni")
                          }
                        ),
                        formik.touched.dni && formik.errors.dni ? /* @__PURE__ */ jsxs("div", { className: "flex gap-1 items-center text-[#F10] text-[14px] leading-[12px]", children: [
                          /* @__PURE__ */ jsx("img", { src: "/icons/form/error.svg", alt: "" }),
                          formik.errors.dni
                        ] }) : formik.touched.dni && /* @__PURE__ */ jsxs("div", { className: "flex gap-1 items-center text-[#2BAC47] text-[14px] leading-[18px] tracking-[0.2px]", children: [
                          /* @__PURE__ */ jsx("img", { src: "/icons/form/success.svg", alt: "" }),
                          "Completado"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[10px] sm:w-[245.5px] lg:w-[200px] xl:w-[252px]", children: [
                        /* @__PURE__ */ jsx(
                          "label",
                          {
                            className: "text-[#9e9e9e] text-base leading-3 tracking-tight",
                            htmlFor: "sexo",
                            children: "Sexo"
                          }
                        ),
                        /* @__PURE__ */ jsxs(
                          "select",
                          {
                            id: "gender",
                            className: `p-[15px] border-[1px] bg-[#fff] rounded-[4px] h-[54px] outline-none focus:border-violet placeholder:text-base placeholder:leading-[24px] placeholder:text-[#E1E5EF] placeholder:tracking-[0.15px]  ${formik.touched.gender && formik.errors.gender ? "border-red-500" : "border-[#E1E5EF]"}`,
                            ...formik.getFieldProps("gender"),
                            children: [
                              /* @__PURE__ */ jsx("option", { value: "", disabled: true, hidden: true, children: "Seleccioná una opción" }),
                              /* @__PURE__ */ jsx("option", { value: "M", children: "Masculino" }),
                              /* @__PURE__ */ jsx("option", { value: "F", children: "Femenino" })
                            ]
                          }
                        ),
                        formik.touched.gender && formik.errors.gender ? /* @__PURE__ */ jsxs("div", { className: "flex gap-1 items-center text-[#F10] text-[14px] leading-[12px]", children: [
                          /* @__PURE__ */ jsx("img", { src: "/icons/form/error.svg", alt: "" }),
                          formik.errors.gender
                        ] }) : formik.touched.gender && /* @__PURE__ */ jsxs("div", { className: "flex gap-1 items-center text-[#2BAC47] text-[14px] leading-[18px] tracking-[0.2px]", children: [
                          /* @__PURE__ */ jsx("img", { src: "/icons/form/success.svg", alt: "" }),
                          "Completado"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[10px]", children: [
                      /* @__PURE__ */ jsx(
                        "label",
                        {
                          className: "text-[#9e9e9e] text-base leading-3 tracking-tight",
                          htmlFor: "bank",
                          children: "Banco"
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "select",
                        {
                          id: "bank",
                          className: `p-[15px] border-[1px] bg-[#fff] rounded-[4px] h-[54px] outline-none focus:border-violet placeholder:text-base placeholder:leading-[24px] placeholder:text-[#E1E5EF] placeholder:tracking-[0.15px]  ${formik.touched.bank && formik.errors.bank ? "border-red-500" : "border-[#E1E5EF]"}`,
                          ...formik.getFieldProps("bank"),
                          children: [
                            /* @__PURE__ */ jsx("option", { value: "", disabled: true, hidden: true, children: "Seleccioná un banco" }),
                            banks.map((bank) => /* @__PURE__ */ jsx("option", { value: bank.id, children: bank.name }, bank.id))
                          ]
                        }
                      ),
                      formik.touched.bank && formik.errors.bank ? /* @__PURE__ */ jsxs("div", { className: "flex gap-1 items-center text-[#F10] text-[14px] leading-[12px]", children: [
                        /* @__PURE__ */ jsx("img", { src: "/icons/form/error.svg", alt: "" }),
                        formik.errors.bank
                      ] }) : formik.touched.bank && /* @__PURE__ */ jsxs("div", { className: "flex gap-1 items-center text-[#2BAC47] text-[14px] leading-[18px] tracking-[0.2px]", children: [
                        /* @__PURE__ */ jsx("img", { src: "/icons/form/success.svg", alt: "" }),
                        "Completado"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[10px]", children: [
                      /* @__PURE__ */ jsx(
                        "label",
                        {
                          className: "text-[#9e9e9e] text-base leading-3 tracking-tight",
                          htmlFor: "email",
                          children: "Correo electrónico"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "email",
                          id: "email",
                          placeholder: "Correo electrónico",
                          className: `p-[15px] border-[1px] bg-[#fff] rounded-[4px] h-[54px] outline-none focus:border-violet placeholder:text-base placeholder:leading-[24px] placeholder:text-[#E1E5EF] placeholder:tracking-[0.15px]  ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-[#E1E5EF]"}`,
                          ...formik.getFieldProps("email")
                        }
                      ),
                      formik.touched.email && formik.errors.email ? /* @__PURE__ */ jsxs("div", { className: "flex gap-1 items-center text-[#F10] text-[14px] leading-[12px]", children: [
                        /* @__PURE__ */ jsx("img", { src: "/icons/form/error.svg", alt: "" }),
                        formik.errors.email
                      ] }) : formik.touched.email && /* @__PURE__ */ jsxs("div", { className: "flex gap-1 items-center text-[#2BAC47] text-[14px] leading-[18px] tracking-[0.2px]", children: [
                        /* @__PURE__ */ jsx("img", { src: "/icons/form/success.svg", alt: "" }),
                        "Completado"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[10px]", children: [
                      /* @__PURE__ */ jsx(
                        "label",
                        {
                          className: "text-[#9e9e9e] text-base leading-3 tracking-tight",
                          htmlFor: "phone",
                          children: "Teléfono celular"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "text",
                          id: "phone",
                          placeholder: "Teléfono celular",
                          className: `p-[15px] border-[1px] bg-[#fff] rounded-[4px] h-[54px] outline-none focus:border-violet placeholder:text-base placeholder:leading-[24px] placeholder:text-[#E1E5EF] placeholder:tracking-[0.15px]  ${formik.touched.phone && formik.errors.phone ? "border-red-500" : "border-[#E1E5EF]"}`,
                          ...formik.getFieldProps("phone")
                        }
                      ),
                      formik.touched.phone && formik.errors.phone ? /* @__PURE__ */ jsxs("div", { className: "flex gap-1 items-center text-[#F10] text-[14px] leading-[12px]", children: [
                        /* @__PURE__ */ jsx("img", { src: "/icons/form/error.svg", alt: "" }),
                        formik.errors.phone
                      ] }) : formik.touched.phone && !formik.errors.phone ? /* @__PURE__ */ jsxs("div", { className: "flex gap-1 items-center text-[#2BAC47] text-[14px] leading-[18px] tracking-[0.2px]", children: [
                        /* @__PURE__ */ jsx("img", { src: "/icons/form/success.svg", alt: "" }),
                        "Completado"
                      ] }) : /* @__PURE__ */ jsx("div", { className: "text-[#9e9e9e] w-[251px] text-[9.9px] sm:text-[14px] leading-[12px] sm:w-full", children: "Completá tu celular con código de área, sin 0, ni 15" })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-[10px] ", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[60px] items-center w-full", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[10px] items-center w-full", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex gap-[10px] items-center w-full", children: [
                          /* @__PURE__ */ jsx(
                            "input",
                            {
                              type: "checkbox",
                              id: "terms",
                              className: "border-[1px] bg-[#fff] rounded-[4px] border-[#E1E5EF] size-5 accent-violet",
                              ...formik.getFieldProps("terms")
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            "label",
                            {
                              className: "text-[#9e9e9e] text-[12px] leading-3 tracking-tight",
                              htmlFor: "terms",
                              children: "Acepto los Términos y Condiciones y Políticas de Privacidad del servicio"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "flex w-full", children: formik.touched.terms && formik.errors.terms ? /* @__PURE__ */ jsxs("div", { className: "flex gap-1 items-center text-[#F10] text-[14px] leading-[12px]", children: [
                          /* @__PURE__ */ jsx("img", { src: "/icons/form/error.svg", alt: "" }),
                          formik.errors.terms
                        ] }) : formik.touched.terms && /* @__PURE__ */ jsxs("div", { className: "flex gap-1 items-center text-[#2BAC47] text-[14px] leading-[18px] tracking-[0.2px]", children: [
                          /* @__PURE__ */ jsx("img", { src: "/icons/form/success.svg", alt: "" }),
                          "Aceptado"
                        ] }) })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(
                        Button,
                        {
                          text: "Buscar préstamos",
                          color: "secondary",
                          padding: "lg",
                          textSize: "text-base",
                          btn_disabled: formik.isSubmitting || !formik.isValid,
                          btn_type: "submit"
                        }
                      ) })
                    ] }) })
                  ] })
                ]
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Carousel, {})
      ]
    }
  );
};

const why_choose_us = [
	{
		icon: "/icons/why-choose-us/thunder.svg",
		title: "Es Rápido",
		description: "Sin papeles.",
		bold: "Sin vueltas."
	},
	{
		icon: "/icons/why-choose-us/check.svg",
		title: "Es seguro",
		description: "Tus datos son personales y están",
		bold: "100% protegidos."
	},
	{
		icon: "/icons/why-choose-us/online.svg",
		title: "Es 100% Online",
		description: "Pedilo",
		bold: "desde donde quieras."
	},
	{
		icon: "/icons/why-choose-us/money.svg",
		title: "¡Es gratis!",
		description: "Recomendarte las mejores opciones",
		bold: "no tiene costo."
	}
];

const $$Astro = createAstro();
const $$CardWhyChooseUs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardWhyChooseUs;
  const { icon, title, description, bold } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center text-center gap-[10px] w-[270px] sm:w-[290px] lg:w-[220px] xl:w-[250px]"> ${renderComponent($$result, "Image", $$Image, { "src": icon, "alt": title, "width": 70, "height": 70, "class": "size-[70px]", "loading": "lazy" })} <h3 class="text-2xl lg:text-lg xl:text-2xl font-bold text-violet"> ${title} </h3> <p class="text-dark text-lg lg:text-base xl:text-lg"> ${description} <span class="font-bold">${bold}</span> </p> </div>`;
}, "C:/Users/tomis/Desktop/tucredito-online/TuCredito-Online/src/components/CardWhyChooseUs.astro", void 0);

const $$WhyChooseUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <div class="flex flex-col items-center justify-center w-full"> <div class="py-[120px] px-2 xs:px-0 gap-[60px] flex flex-col justify-center items-center xs:w-[311px] sm:w-[577px] lg:px-0 lg:w-[824px] xl:w-[980px] mac:w-[1040px] hd:w-[1036px] fullhd:w-[1120px] 2k:w-[1600px] 4k:w-[3000px]"> <div class="text-violet font-bold font-montserrat text-[32px] text-center">
¿Por qué elegir Tu Crédito?
</div> <div class="flex w-full items-center justify-center 2k:justify-evenly 4k:gap-60"> <div class="hidden lg:flex hd:justify-center"> ${renderComponent($$result, "Image", $$Image, { "src": "/images/why-choose-us/why-choose-us.png", "alt": "why choose us", "width": 350, "height": 400, "class": "h-[400px] xl:w-[320px] xl:h-[450px] mac:h-[500px] fullhd:w-[330px]" })} </div> <div class="grid grid-cols-1 gap-y-[75px] lg:gap-y-[60px] lg:gap-x-[20px] xl:gap-[60px] lg:flex lg:flex-wrap lg:w-[669px] mac:gap-y-[120px] mac:gap-x-[90px] lg:h-full lg:justify-end"> ${why_choose_us.map((item) => renderTemplate`${renderComponent($$result, "CardWhyChooseUs", $$CardWhyChooseUs, { "icon": item.icon, "title": item.title, "description": item.description, "bold": item.bold })}`)} </div> </div> </div> </div> <div class="bg-violet py-[60px] flex justify-center items-center"> <div class="gap-y-[30px] lg:h-[82px] xl:h-[84px] mac:h-[89px] xs:px-0 flex flex-col items-center lg:flex-row w-[311px] sm:w-[577px] lg:w-[824px] xl:w-[980px] mac:w-[1040px] hd:w-[1036px] fullhd:w-[1120px] lg:gap-0 lg:justify-between 2k:w-[1660px] 2k:justify-evenly 4k:w-[3000px]"> <div class="text-white flex w-full h-full text-[32px] font-medium leading-[40px] lg:items-center lg:text-[20px] lg:leading-normal xl:leading-[40px] lg:w-[500px] xl:text-[28px] xl:w-[650px]"> <p>
¿Qué estás esperando?<span class="font-bold w-full">
Sacá tu préstamo en simples pasos y hacé realidad tus proyectos</span> </p> </div> <div class="flex items-center md:justify-center w-full h-[89px] lg:w-[260px] lg:h-[82px] xl:w-[290px] mac:h-[89px] hd:w-[310px]"> <a href="#prestamo" class="w-full h-full"> ${renderComponent($$result, "Button", Button, { "text": "PED\xCD TU PR\xC9STAMO", "color": "primary", "padding": "xl-sm", "textSize": "text-xl lg:text-[18px] xl:text-2xl font-bold", "btn_disabled": false, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/tomis/Desktop/tucredito-online/TuCredito-Online/src/components/Button", "client:component-export": "default" })} </a> </div> </div> </div> </section>`;
}, "C:/Users/tomis/Desktop/tucredito-online/TuCredito-Online/src/components/WhyChooseUs.astro", void 0);

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
  return /* @__PURE__ */ jsx("section", { className: "py-[120px] flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center w-[311px] gap-[60px] sm:w-[577px] lg:w-[824px] xl:w-[980px] mac:w-[1040px] hd:w-[1036px] fullhd:w-[1120px] 2k:w-[1600px] 4k:w-[3000px]", children: [
    /* @__PURE__ */ jsx("div", { className: "text-violet font-bold text-[32px]", children: "Nuestro Blog" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-[30px]", children: our_blog_data.our_blog.map(
      (post, index) => isLargeScreen || index === 0 ? /* @__PURE__ */ createElement(
        CardOurBlog,
        {
          ...post,
          key: index,
          link: true,
          card_width: "fullhd:w-[353px]"
        }
      ) : null
    ) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "/blog", children: /* @__PURE__ */ jsx(
      Button,
      {
        text: "VER MÁS",
        color: "secondary",
        padding: "sm",
        textSize: "text-sm font-bold",
        btn_disabled: false
      }
    ) }) })
  ] }) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tu Cr\xE9dito Online" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Form", Form, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/tomis/Desktop/tucredito-online/TuCredito-Online/src/components/Form.jsx", "client:component-export": "default" })} ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, {})} ${renderComponent($$result2, "OurBlog", OurBlog, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/tomis/Desktop/tucredito-online/TuCredito-Online/src/components/OurBlog.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/tomis/Desktop/tucredito-online/TuCredito-Online/src/pages/index.astro", void 0);

const $$file = "C:/Users/tomis/Desktop/tucredito-online/TuCredito-Online/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
