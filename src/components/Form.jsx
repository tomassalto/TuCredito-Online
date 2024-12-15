import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "./Button";
import Carousel from "./Carousel/Carousel";
import { banks } from "../data/bank.json";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      dni: "",
      gender: "",
      bank: "",
      email: "",
      phone: "",
      terms: false,
    },
    validationSchema: Yup.object({
      dni: Yup.string()
        .matches(/^\d{7,8}$/, "El DNI debe tener 7 u 8 dígitos")
        .required("El DNI es obligatorio"),
      gender: Yup.string().required("El sexo es obligatorio"),
      bank: Yup.string().required("El banco es obligatorio"),
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Email inválido"
        )
        .required("El correo electrónico es obligatorio"),
      phone: Yup.string()
        .matches(
          /^(?!15)[0-9]{10}$/,
          "El número de teléfono debe contener exactamente 10 dígitos, no puede empezar con 15 y no puede contener '+'"
        )
        .required("El teléfono es obligatorio"),
      terms: Yup.boolean().oneOf(
        [true],
        "Debes aceptar los términos y condiciones"
      ),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);

      const dni = String(values.dni).padStart(8, "0");

      const url = `https://sandbox.p.alprestamo.ar/?afiliados&national_id=${dni}&gender=${values.gender}&bank_code=${values.bank}&email=${values.email}&phone=${values.phone}`;

      window.location.href = url;

      setSubmitting(false);
    },
  });

  return (
    <section
      id="prestamo"
      className="bg-violet flex flex-col justify-center items-center py-[60px]"
    >
      <div className="flex flex-col gap-[60px] w-[311px] sm:w-[577px] lg:w-[824px] xl:w-[980px] mac:w-[1040px] hd:w-[1036px] fullhd:w-[1120px] 2k:w-[1600px] 2k:justify-evenly 4k:w-[3000px]">
        <div>
          <h3 className="text-white text-[32px] font-bold text-center lg:text-[24px] xl:text-[28px] mac:text-[30px] fullhd:text-[32px]">
            Sin complicaciones: completá los 3 pasos y obtené tu préstamo
          </h3>
        </div>
        <div className="flex flex-col gap-[60px] lg:flex-row lg:justify-between 2k:justify-evenly">
          <div className="flex flex-col gap-[30px] text-center sm:flex-row lg:flex-col lg:justify-evenly">
            <div className="flex flex-col gap-[6px] sm:w-[172px] lg:w-[230px] xl:w-[250px]">
              <p className="text-white text-[64px] font-bold">1.</p>
              <p className="text-white text-lg font-normal leading-normal lg:text-base lg:text-start xl:text-[18px]">
                <span className="font-bold">Completá </span>el formulario con
                los datos que te solicitamos
              </p>
            </div>
            <div className="flex flex-col gap-[6px] sm:w-[172px] lg:w-[230px] xl:w-[250px]">
              <p className="text-white text-[64px] font-bold">2.</p>
              <p className="text-white text-lg font-normal lg:text-base lg:text-start xl:text-[18px]">
                <span className="font-bold">Compará </span> entre las mejores
                ofertas del mercado
              </p>
            </div>
            <div className="flex flex-col gap-[6px] sm:w-[172px] lg:w-[230px] xl:w-[250px]">
              <p className="text-white text-[64px] font-bold">3.</p>
              <p className="text-white text-lg font-normal lg:text-base lg:text-start xl:text-[18px]">
                <span className="font-bold">Elegí </span> el préstamo ideal para
                financiar tu proyecto
              </p>
            </div>
          </div>
          <div className="bg-white p-[30px] rounded-xl lg:w-[500px] xl:w-[589px]">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col items-center justify-center gap-5"
            >
              <div className="flex flex-col gap-[10px] text-dark w-full justify-center">
                <h1 className="text-xl font-semibold">
                  Completá el formulario:
                </h1>
                <p className="text-xs leading-normal tracking-tight">
                  Todos los campos son obligatorios.
                </p>
              </div>
              <div className="flex flex-col gap-y-[25px] w-full">
                <div className="flex flex-col gap-[25px] sm:flex-row lg:w-full">
                  <div className="flex flex-col gap-[10px] sm:w-[245.5px] lg:w-[200px] xl:w-[252px]">
                    <label
                      className="text-[#9e9e9e] text-base leading-3 tracking-tight"
                      htmlFor="dni"
                    >
                      DNI
                    </label>
                    <input
                      type="number"
                      id="dni"
                      placeholder="DNI"
                      className={`p-[15px] border-[1px] bg-[#fff] rounded-[4px] h-[54px] outline-none focus:border-violet placeholder:text-base placeholder:leading-[24px] placeholder:text-[#E1E5EF] placeholder:tracking-[0.15px]  ${
                        formik.touched.dni && formik.errors.dni
                          ? "border-red-500"
                          : "border-[#E1E5EF]"
                      }`}
                      {...formik.getFieldProps("dni")}
                    />
                    {formik.touched.dni && formik.errors.dni ? (
                      <div className="flex gap-1 items-center text-[#F10] text-[14px] leading-[12px]">
                        <img src="/icons/form/error.svg" alt="" />
                        {formik.errors.dni}
                      </div>
                    ) : (
                      formik.touched.dni && (
                        <div className="flex gap-1 items-center text-[#2BAC47] text-[14px] leading-[18px] tracking-[0.2px]">
                          <img src="/icons/form/success.svg" alt="" />
                          Completado
                        </div>
                      )
                    )}
                  </div>

                  <div className="flex flex-col gap-[10px] sm:w-[245.5px] lg:w-[200px] xl:w-[252px]">
                    <label
                      className="text-[#9e9e9e] text-base leading-3 tracking-tight"
                      htmlFor="sexo"
                    >
                      Sexo
                    </label>
                    <select
                      id="gender"
                      className={`p-[15px] border-[1px] bg-[#fff] rounded-[4px] h-[54px] outline-none focus:border-violet placeholder:text-base placeholder:leading-[24px] placeholder:text-[#E1E5EF] placeholder:tracking-[0.15px]  ${
                        formik.touched.gender && formik.errors.gender
                          ? "border-red-500"
                          : "border-[#E1E5EF]"
                      }`}
                      {...formik.getFieldProps("gender")}
                    >
                      <option value="" disabled hidden>
                        Seleccioná una opción
                      </option>
                      <option value="M">Masculino</option>
                      <option value="F">Femenino</option>
                    </select>
                    {formik.touched.gender && formik.errors.gender ? (
                      <div className="flex gap-1 items-center text-[#F10] text-[14px] leading-[12px]">
                        <img src="/icons/form/error.svg" alt="" />
                        {formik.errors.gender}
                      </div>
                    ) : (
                      formik.touched.gender && (
                        <div className="flex gap-1 items-center text-[#2BAC47] text-[14px] leading-[18px] tracking-[0.2px]">
                          <img src="/icons/form/success.svg" alt="" />
                          Completado
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-[10px]">
                  <label
                    className="text-[#9e9e9e] text-base leading-3 tracking-tight"
                    htmlFor="bank"
                  >
                    Banco
                  </label>
                  <select
                    id="bank"
                    className={`p-[15px] border-[1px] bg-[#fff] rounded-[4px] h-[54px] outline-none focus:border-violet placeholder:text-base placeholder:leading-[24px] placeholder:text-[#E1E5EF] placeholder:tracking-[0.15px]  ${
                      formik.touched.bank && formik.errors.bank
                        ? "border-red-500"
                        : "border-[#E1E5EF]"
                    }`}
                    {...formik.getFieldProps("bank")}
                  >
                    <option value="" disabled hidden>
                      Seleccioná un banco
                    </option>
                    {banks.map((bank) => (
                      <option key={bank.id} value={bank.id}>
                        {bank.name}
                      </option>
                    ))}
                  </select>
                  {formik.touched.bank && formik.errors.bank ? (
                    <div className="flex gap-1 items-center text-[#F10] text-[14px] leading-[12px]">
                      <img src="/icons/form/error.svg" alt="" />
                      {formik.errors.bank}
                    </div>
                  ) : (
                    formik.touched.bank && (
                      <div className="flex gap-1 items-center text-[#2BAC47] text-[14px] leading-[18px] tracking-[0.2px]">
                        <img src="/icons/form/success.svg" alt="" />
                        Completado
                      </div>
                    )
                  )}
                </div>

                <div className="flex flex-col gap-[10px]">
                  <label
                    className="text-[#9e9e9e] text-base leading-3 tracking-tight"
                    htmlFor="email"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Correo electrónico"
                    className={`p-[15px] border-[1px] bg-[#fff] rounded-[4px] h-[54px] outline-none focus:border-violet placeholder:text-base placeholder:leading-[24px] placeholder:text-[#E1E5EF] placeholder:tracking-[0.15px]  ${
                      formik.touched.email && formik.errors.email
                        ? "border-red-500"
                        : "border-[#E1E5EF]"
                    }`}
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="flex gap-1 items-center text-[#F10] text-[14px] leading-[12px]">
                      <img src="/icons/form/error.svg" alt="" />
                      {formik.errors.email}
                    </div>
                  ) : (
                    formik.touched.email && (
                      <div className="flex gap-1 items-center text-[#2BAC47] text-[14px] leading-[18px] tracking-[0.2px]">
                        <img src="/icons/form/success.svg" alt="" />
                        Completado
                      </div>
                    )
                  )}
                </div>

                <div className="flex flex-col gap-[10px]">
                  <label
                    className="text-[#9e9e9e] text-base leading-3 tracking-tight"
                    htmlFor="phone"
                  >
                    Teléfono celular
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Teléfono celular"
                    className={`p-[15px] border-[1px] bg-[#fff] rounded-[4px] h-[54px] outline-none focus:border-violet placeholder:text-base placeholder:leading-[24px] placeholder:text-[#E1E5EF] placeholder:tracking-[0.15px]  ${
                      formik.touched.phone && formik.errors.phone
                        ? "border-red-500"
                        : "border-[#E1E5EF]"
                    }`}
                    {...formik.getFieldProps("phone")}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="flex gap-1 items-center text-[#F10] text-[14px] leading-[12px]">
                      <img src="/icons/form/error.svg" alt="" />
                      {formik.errors.phone}
                    </div>
                  ) : formik.touched.phone && !formik.errors.phone ? (
                    <div className="flex gap-1 items-center text-[#2BAC47] text-[14px] leading-[18px] tracking-[0.2px]">
                      <img src="/icons/form/success.svg" alt="" />
                      Completado
                    </div>
                  ) : (
                    <div className="text-[#9e9e9e] w-[251px] text-[9.9px] sm:text-[14px] leading-[12px] sm:w-full">
                      Completá tu celular con código de área, sin 0, ni 15
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-[10px] ">
                  <div className="flex flex-col gap-[60px] items-center w-full">
                    <div className="flex flex-col gap-[10px] items-center w-full">
                      <div className="flex gap-[10px] items-center w-full">
                        <input
                          type="checkbox"
                          id="terms"
                          className="border-[1px] bg-[#fff] rounded-[4px] border-[#E1E5EF] size-5 accent-violet"
                          {...formik.getFieldProps("terms")}
                        />
                        <label
                          className="text-[#9e9e9e] text-[12px] leading-3 tracking-tight"
                          htmlFor="terms"
                        >
                          Acepto los Términos y Condiciones y Políticas de
                          Privacidad del servicio
                        </label>
                      </div>
                      <div className="flex w-full">
                        {formik.touched.terms && formik.errors.terms ? (
                          <div className="flex gap-1 items-center text-[#F10] text-[14px] leading-[12px]">
                            <img src="/icons/form/error.svg" alt="" />
                            {formik.errors.terms}
                          </div>
                        ) : (
                          formik.touched.terms && (
                            <div className="flex gap-1 items-center text-[#2BAC47] text-[14px] leading-[18px] tracking-[0.2px]">
                              <img src="/icons/form/success.svg" alt="" />
                              Aceptado
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div className="w-full">
                      <Button
                        text="Buscar préstamos"
                        color="secondary"
                        padding="lg"
                        textSize="text-base"
                        btn_disabled={formik.isSubmitting || !formik.isValid}
                        btn_type="submit"
                      ></Button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Carousel />
    </section>
  );
};

export default Form;
