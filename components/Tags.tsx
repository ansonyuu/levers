import React, {useEffect, useRef} from "react";

export default function Filter({ lever }) {
  const divRef = useRef(null);


  useEffect(() => {
    const handleMouseEnter = (e) => {
      const tooltip = document.createElement('div');
      tooltip.style.width = '50px'; 
      tooltip.style.height = '50px';
      tooltip.style.backgroundColor = 'red';
      tooltip.style.position = 'absolute'; // Position the tooltip absolutely
      tooltip.style.zIndex = '10'; // Ensure the tooltip overlays other elements

      document.body.appendChild(tooltip);

      const handleMouseLeave = () => {
        if (document.body.contains(tooltip)) {
          document.body.removeChild(tooltip);
        }
      };

      e.target.addEventListener('mouseleave', handleMouseLeave);
    };

    const div = divRef.current;
    div.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      div.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [lever]);


  return (
    <>
      {Array.isArray(lever?.stage) ? lever.stage.map((i) => {
        return (
          <div
            ref={divRef}
            className={`relative text-[11px] p-2 mb-2 inline-block border-[0.5px] border-black rounded-sm ${
              i === "Correction" ? "bg-[#BEB4CD]" : ""
            } 
                            ${i === "Procurement" ? "bg-[#C6988A]" : ""}  
                            ${i === "Catalytic" ? "bg-[#A8A87E]" : ""}
                            ${i === "Funding" ? "bg-[#CACBC7]" : ""}
                             ${
                               i === "Growth" ? "bg-[#EEE9C1]" : ""
                             }               ${
              i === "Resilience" ? "bg-[#E3E3E3]" : ""
            }`}
          >
            {i}
          </div>
        );
      }) : null}
    </>
  );
}
