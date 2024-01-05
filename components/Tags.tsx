import React from "react";

export default function Filter({ lever }: { lever?: { stage: string | string[] } }) {
  return (
    <>
      {Array.isArray(lever.stage) ? lever.stage.map((i) => {
        return (
          <p
            className={`text-[11px] p-2 mb-2 inline-block border-[0.5px] border-black rounded-sm ${
              i == "Correction" ? "bg-[#BEB4CD]" : ""
            } 
                            ${i == "Procurement" ? "bg-[#C6988A]" : ""}  
                            ${i == "Catalytic" ? "bg-[#A8A87E]" : ""}
                            ${i == "Funding" ? "bg-[#CACBC7]" : ""}
                             ${
                               i == "Growth" ? "bg-[#EEE9C1]" : ""
                             }               ${
              i == "Resilience" ? "bg-[#E3E3E3]" : ""
            }
                             `}
          >
            {i}
          </p>
        );
      })}
    </>
  );
}
