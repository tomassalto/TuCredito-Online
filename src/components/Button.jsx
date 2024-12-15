import { useState } from "react";

const Button = ({
  text,
  color,
  padding,
  textSize,
  btn_disabled = false,
  btn_type = "button",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const backgroundStyle =
    color === "secondary"
      ? isHovered
        ? "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), #3F0393"
        : "#3F0393"
      : "";

  return (
    <button
      type={btn_type}
      style={{ background: backgroundStyle }}
      className={`${
        color === "primary"
          ? "bg-sky_blue hover:bg-black/50"
          : color === "secondary"
          ? ""
          : color === "secondary-hov-grad"
          ? "bg-violet transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-sky_blue duration-300"
          : ""
      } ${
        padding === "xl"
          ? "p-[30px]"
          : padding === "sm"
          ? "py-[15px] px-5"
          : padding === "lg"
          ? "p-[15px]"
          : padding === "xl-sm"
          ? "p-[30px] text-nowrap"
          : ""
      } text-center items-center flex justify-center rounded-lg text-white w-full h-full ${textSize} ${
        btn_disabled ? "!bg-[#E1E5EF] cursor-not-allowed" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={btn_disabled}
    >
      {text}
    </button>
  );
};

export default Button;
