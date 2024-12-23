const CardOurBlog = ({ image, title, description, id, link, card_width }) => {
  const card = (
    <div className={`flex flex-col gap-[15px] ${card_width} h-[443px]`}>
      <img src={image} alt={title} className="sm:h-[240px] object-cover" />
      <h3 className="text-2xl leading-normal text-dark font-semibold lg:text-[20px] xl:text-2xl">
        {title}
      </h3>
      <p className="text-base text-[#202020] font-normal leading-normal font-montserrat lg:text-sm xl:text-base">
        {description}
      </p>
      <a
        href={`/blog/${id}`}
        className={`${link === true ? "flex cursor-pointer" : "hidden"}`}
      >
        <p className="text-base text-violet leading-normal font-semibold">
          {" "}
          Leer más.
        </p>
      </a>
    </div>
  );
  return link ? card : <a href={`${`/blog/${id}`} `}>{card}</a>;
};

export default CardOurBlog;
