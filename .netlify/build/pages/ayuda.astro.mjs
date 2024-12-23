/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_BJtGLcD5.mjs';
import { $ as $$Layout } from '../chunks/Layout_BYUlNHgQ.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import React, { useState } from 'react';
export { renderers } from '../renderers.mjs';

const FAQ = ({ faq }) => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);
  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };
  const replaceLineBreaks = (text) => {
    return text.split("/n/").map((part, index) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
      part,
      index < text.split("/n/").length - 1 && /* @__PURE__ */ jsx("br", {})
    ] }, index));
  };
  const renderAnswerWithBold = (text) => {
    const boldParts = text.split(/(\*\*.*?\*\*)/g);
    return boldParts.map(
      (part, index) => part.startsWith("**") && part.endsWith("**") ? /* @__PURE__ */ jsx("strong", { children: replaceLineBreaks(part.slice(2, -2)) }, index) : /* @__PURE__ */ jsx("span", { children: replaceLineBreaks(part) }, index)
    );
  };
  return /* @__PURE__ */ jsxs("div", { className: "overflow-hidden h-auto flex flex-col items-center z-0 relative", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        style: { clipPath: "ellipse(50% 35% at 50% 50%)" },
        className: "w-[925px] h-[556px] bg-violet absolute -top-[320px] xs:w-[997px] sm:w-[1500px] lg:w-[2544px] fullhd:w-[3000px] 2k:w-[4000px]"
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "text-center text-[40px] font-bold font-montserrat pt-[30px] text-white z-20", children: "Ayuda" }),
    /* @__PURE__ */ jsx("div", { className: "pt-[90px] pb-[211px] sm:pb-[293px] lg:pb-[232px]", children: faq.data.map((section, sectionIndex) => /* @__PURE__ */ jsxs("div", { className: "w-[311px] flex flex-col items-start sm:w-[576px] lg:w-[824px] xl:w-[980px] mac:w-[1040px] fullhd:w-[1120px] 2k:w-[1210px] 4k:w-[1675px]", children: [
      /* @__PURE__ */ jsx("p", { className: "text-violet font-bold text-xl lg:text-2xl", children: section.title }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-[15px] pt-[15px] pb-[30px]", children: section.questions.map((data, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex flex-col p-[15px] border-1 border border-light_gray rounded-md cursor-pointer transition hover:bg-[#fcfcfc]",
          onClick: () => toggleQuestion(`${sectionIndex}-${index}`),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("p", { className: "w-[242px] text-lg font-semibold sm:w-[507px] mac:w-full", children: data.question }),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/icons/faq/arrow.svg",
                  alt: "arrow",
                  className: `transition-transform duration-500 ${openQuestionIndex === `${sectionIndex}-${index}` ? "rotate-90" : "rotate-0"}`
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: `overflow-hidden transition-max-height duration-500 ease-in-out text-[#151515] ${openQuestionIndex === `${sectionIndex}-${index}` ? "max-h-[1000px]" : "max-h-0"}`,
                children: [
                  data.text && /* @__PURE__ */ jsx("p", { className: "text-lg pt-[15px]", children: faq.text }),
                  data.subtext && /* @__PURE__ */ jsx("p", { className: "text-lg pt-[15px]", children: faq.subtext }),
                  Array.isArray(data.answer) ? /* @__PURE__ */ jsx("ul", { className: "text-lg list-disc list-inside marker:text-xs", children: data.answer.map((item, i) => /* @__PURE__ */ jsx("li", { children: renderAnswerWithBold(item) }, i)) }) : /* @__PURE__ */ jsx("p", { className: "text-lg pt-[15px]", children: renderAnswerWithBold(data.answer) })
                ]
              }
            )
          ]
        },
        index
      )) })
    ] }, sectionIndex)) })
  ] });
};

const data = [
	{
		id: 1,
		title: "Préstamos",
		questions: [
			{
				question: "¿Cuál es el paso a paso para obtener un préstamo?",
				text: "Para obtener un préstamo debes seguir los siguientes pasos:",
				answer: [
					"Completá el formulario de solicitud de préstamos con tus datos personales.",
					"Mirá las opciones disponibles en la página de ofertas.",
					"Elegí una de las ofertas acordes a tu perfil. Si no tenés ofertas, te invitamos a conocer nuestro blog de educación financiera.",
					"Una vez elegida la oferta, podrás continuar la solicitud con la entidad financiera seleccionada.",
					"¡Listo, el préstamo es tuyo!"
				]
			},
			{
				question: "¿Quienes otorgan los préstamos? (Entidades Financieras)",
				answer: "Los préstamos son otorgados por bancos, empresas o entidades financieras que forman parte de nuestra cartera de clientes."
			},
			{
				question: "¿Cuáles son los requisitos?",
				text: "Requisitos: ",
				answer: [
					"Ser mayor de 18 años",
					"Tener el DNI al día",
					"Ser propietario de una cuenta bancaria ",
					"Tener teléfono y mail de contacto"
				]
			},
			{
				question: "¿Cuáles son los montos mínimos y máximos?",
				answer: "**Para Argentina**, los montos mínimos para solicitar pueden variar entre $1.000 y $300.000 ARS. El monto otorgado final depende de lo aprobado por la entidad financiera."
			},
			{
				question: "¿En cuantas cuotas puedo pagar mi préstamo?",
				answer: "Las cuotas varían de 1 a 36, dependiendo del préstamo que se elija y las normativas dispuestas por la entidad financiera que se seleccione para adquirir el mismo."
			},
			{
				question: "¿Dónde puedo consultar el estado de mi préstamo obtenido?",
				answer: "Al obtener un préstamo solicitado, el seguimiento del mismo se deberá realizar con la entidad financiera elegida en la página de ofertas."
			},
			{
				question: "¿Puedo solicitar un préstamo siendo beneficiario de un plan social?",
				answer: "SI, puedes solicitar un préstamo siendo beneficiario de un plan social. Sin embargo, la aprobación del préstamo está sujeta a las políticas de la entidad seleccionada."
			},
			{
				question: "¿Cuáles son los posibles motivos de rechazo?",
				answer: "Las políticas de aceptación de un préstamo dependen de la entidad financiera que se elija en la página de ofertas."
			},
			{
				question: "¿Qué pasa si no hay oferta para mí?",
				answer: "En el caso de que no tengamos una oferta disponible para vos, te recomendamos entrar a nuestro blog y leer los consejos financieros para mejorar tu perfil e historial crediticio. ¡Volvé a intentar en unas semanas!"
			}
		]
	},
	{
		id: 2,
		title: "Seguridad",
		questions: [
			{
				question: "¿Me solicitarán dinero antes de obtener un préstamo?",
				answer: "Nunca te solicitaremos dinero antes de obtener un préstamo. Tampoco te pediremos los datos de tus cuentas bancarias. **No compartas información sensible**. Tené en cuenta, que la solicitud del préstamo se termina con la entidad financiera, por lo que ellos pueden solicitarte ciertos datos para terminar el proceso."
			},
			{
				question: "¿Es seguro solicitar un producto?",
				answer: "Si, es seguro./n//n/Nunca vamos a pedirte tu CBU o datos de cuentas por mail, mensaje directo, whatsapp, redes sociales o cualquier otro canal de comunicación./n//n/Nunca te solicitaremos el pago de una cuota de un préstamo. Los préstamos te los brindan los bancos y/o entidades financieras./n//n/**Nuestro servicio es GRATIS, jamás te pediremos que nos pagues por él mismo.**"
			},
			{
				question: "¿Cómo protegemos tus datos?",
				answer: "Utilizamos las medidas técnicas y organizativas que resultan necesarias para garantizar la seguridad y confidencialidad de los datos, de modo de evitar su adulteración, pérdida, consulta o tratamiento no autorizado, y que permitan detectar desviaciones, intencionales o no, de información, ya sea que los riesgos provengan de la acción humana o del medio técnico utilizado./n//n/La categoría de personas con acceso al tratamiento de los datos son empleados o terceros contratados con suficiente capacitación e idoneidad en el tratamiento de datos personales, quienes usarán los datos única y exclusivamente a los efectos de dar cumplimiento con el fin autorizado./n//n/De esta manera, **garantizamos tener los medios adecuados para evitar la pérdida, evasión, modificación, robo y acceso no autorizado a los datos de los clientes.**"
			}
		]
	},
	{
		id: 3,
		title: "Glosario",
		questions: [
			{
				question: "¿Qué es la EIF?",
				answer: "Las Entidades de Intermediación Financiera (EIF) son aquellas que sirven como un vínculo o intermediario entre las personas -físicas o jurídicas- que desean ahorrar y aquellas personas que tienen necesidades de recursos, ya sea para consumir o emprender algún proyecto de inversión"
			},
			{
				question: "¿Qué son las Entidades Financieras?",
				text: "Una entidad financiera es cualquier entidad, organización o agrupación que tiene como objetivo ofrecer servicios de carácter financiero. Sus principales funciones son la intermediación y asesoramiento al mercado de los seguros o créditos bancarios.",
				subtext: "Las entidades financieras son aquellas comprendidas dentro de la Ley de Entidades Financieras N° 21526 e incluye:",
				answer: [
					"Intermediación y asesoramiento al mercado de los seguros o créditos bancarios.",
					"Bancos comerciales",
					"Banco de inversión",
					"Bancos hipotecarios",
					"Compañías financieras",
					"Sociedades de ahorro y préstamo para la vivienda u otros inmuebles",
					"Cajas de crédito"
				]
			},
			{
				question: "¿Qué es un Marketplace?",
				answer: "Un marketplace es un sitio web que conecta a compradores con vendedores para realizar una transacción comercial. En este sentido, funciona como intermediario de ambos./n//n/A través del marketplace, diferentes negocios pueden anunciar sus productos, ofreciéndo de esa forma, un abanico de opciones al cliente. Es decir, que los productos o servicios se venden a través de esta web y no directamente a través de ellos. Por lo tanto, es un medio mucho más ágil y efectivo para miles de personas que tengan acceso a internet."
			},
			{
				question: "¿Qué es la Tasa Nominal Actual o TNA?",
				answer: "Es un valor de referencia que se utiliza para las operaciones financieras. Indica el porcentaje de interés que se cobrarán o pagarán por un producto, en un plazo de un año sin períodos de capitalización intermedio."
			},
			{
				question: "¿Qué es el Costo Financiero Total o CFT?",
				answer: "El Costo Financiero Total (CFT) indica el costo real del préstamo personal. Este tiene en cuenta todos los conceptos que se pagan por el mismo: los intereses que surgen de la tasa y el IVA sobre los intereses."
			},
			{
				question: "¿Qué son los seguros?",
				answer: "Un seguro es un contrato (póliza) con una Compañía Aseguradora quien se obliga a indemnizar ante un siniestro. Dicho con otras palabras, es un instrumento que nos brinda estabilidad financiera en caso de que surja un evento imprevisto. Hay diferentes tipos de seguros que cubren por ejemplo a bienes materiales o a las personas, algunos son obligatorios y otros de contratación voluntaria. Si tomamos como ejemplo al seguro de auto, en caso que el auto sea robado la aseguradora indemniza (le paga) al asegurado una suma de dinero determinada por la póliza."
			},
			{
				question: "¿Qué son las Asistencias?",
				answer: "La asistencia es un servicio prestacional, es decir que se brinda en el momento en que la persona necesita ayuda ya sea ante una emergencia o ante otro evento. Hay diferentes tipos de asistencias que pueden estar incluidas en las pólizas de seguro (por ejemplo el servicio de grúa en el seguro de auto), o bien otras se pueden contratar individualmente (por ejemplo una asistencia de mascotas o de salud)./n//n/Las asistencias acompañan a las personas y las ayudan a que resuelvan el imprevisto en el momento. Los seguros en cambio indemnizan por hechos ya sucedidos."
			},
			{
				question: "¿Qué es el clearing?",
				answer: "El Clearing Bancario es un proceso de validación y cobranza de los cheques que se realiza a través de la Cámara Compensadora."
			}
		]
	}
];
const faq = {
	data: data
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ayuda" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Faq", FAQ, { "faq": faq, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/tomis/Desktop/tucredito-online/TuCredito-Online/src/components/Faq/Faq.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/tomis/Desktop/tucredito-online/TuCredito-Online/src/pages/ayuda/index.astro", void 0);

const $$file = "C:/Users/tomis/Desktop/tucredito-online/TuCredito-Online/src/pages/ayuda/index.astro";
const $$url = "/ayuda";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
