import { ReactNode } from "react";

export default function Filter({ lever }: { lever?: any }) {
  return (
    <>
      {lever.stage.map((i) => {
        return (
          <p
            className={`text-[11px] p-2 my-2 rounded-sm ${
              i == "Correction" ? "bg-[#BEB4CD]" : ""
            } 
                            ${i == "Procurement" ? "bg-[#C6988A]" : ""}  
                            ${i == "Catalytic" ? "bg-[#A8A87E]" : ""}
                            ${i == "Funding" ? "bg-[#CACBC7]" : ""}`}
          >
            {i}
          </p>
        );
      })}
    </>
  );
}
