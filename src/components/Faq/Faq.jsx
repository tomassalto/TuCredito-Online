import React, { useState } from 'react';

const FAQ = ({ faq }) => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const replaceLineBreaks = (text) => {
    return text.split('/n/').map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < text.split('/n/').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  const renderAnswerWithBold = (text) => {
    const boldParts = text.split(/(\*\*.*?\*\*)/g);
    return boldParts.map((part, index) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={index}>{replaceLineBreaks(part.slice(2, -2))}</strong>
      ) : (
        <span key={index}>{replaceLineBreaks(part)}</span>
      )
    );
  };

  return (
    <div className="overflow-hidden h-auto flex flex-col items-center z-0 relative">
      <div 
        style={{ clipPath: "ellipse(50% 35% at 50% 50%)" }} 
        className="w-[925px] h-[556px] bg-violet absolute -top-[320px] xs:w-[997px] sm:w-[1500px] lg:w-[2544px] fullhd:w-[3000px] 2k:w-[4000px]" 
      ></div>
      <p className="text-center text-[40px] font-bold font-montserrat pt-[30px] text-white z-20">Ayuda</p>
      <div className='pt-[90px] pb-[211px] sm:pb-[293px] lg:pb-[232px]'>
        {faq.data.map((section, sectionIndex) => (
          <div key={sectionIndex} className="w-[311px] flex flex-col items-start sm:w-[576px] lg:w-[824px] xl:w-[980px] mac:w-[1040px] fullhd:w-[1120px] 2k:w-[1210px] 4k:w-[1675px]">
            <p className="text-violet font-bold text-xl lg:text-2xl">{section.title}</p>
            <div className="flex flex-col gap-[15px] pt-[15px] pb-[30px]">
              {section.questions.map((data, index) => (
                <div 
                  key={index} 
                  className="flex flex-col p-[15px] border-1 border border-light_gray rounded-md cursor-pointer transition hover:bg-[#fcfcfc]"
                  onClick={() => toggleQuestion(`${sectionIndex}-${index}`)}
                >
                  <div className="flex justify-between items-center">
                    <p className="w-[242px] text-lg font-semibold sm:w-[507px] mac:w-full">
                      {data.question}
                    </p>
                    <img 
                      src="/icons/faq/arrow.svg" 
                      alt="arrow" 
                      className={`transition-transform duration-500 ${
                        openQuestionIndex === `${sectionIndex}-${index}` ? 'rotate-90' : 'rotate-0'
                      }`}
                    />
                  </div>
                  <div 
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out text-[#151515] ${
                      openQuestionIndex === `${sectionIndex}-${index}` ? 'max-h-[1000px]' : 'max-h-0'
                    }`}
                  >
                    {data.text && (
                      <p className='text-lg pt-[15px]'>{faq.text}</p>
                    )}
                    {data.subtext && (
                      <p className='text-lg pt-[15px]'>{faq.subtext}</p>
                    )}
                    {Array.isArray(data.answer) ? (
                      <ul className="text-lg list-disc list-inside marker:text-xs">
                        {data.answer.map((item, i) => (
                          <li key={i}>{renderAnswerWithBold(item)}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-lg pt-[15px]">{renderAnswerWithBold(data.answer)}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;