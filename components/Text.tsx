import React from "react";

export default function Text({ children }: { children: React.ReactNode }) {
 
    return (
      <div className=' px-5 md:px-10 lg:px-20 w-full md:w-2/3 lg:w-1/2 py-10 flex flex-col gap-4'>
        {children}
      </div>
    );
  }
  
  