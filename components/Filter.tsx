import { ReactNode } from "react";
import { useState, useEffect, useRef } from "react";

export default function Filter({
  levers,
  className
}: {
  levers: any;
  className?: string;
}) {
  const [selectedStage, setSelectedStage] = useState(levers[0]);
  const [filteredStage, setFilteredStage] = useState(levers);

  const handleChange = (event) => {
    const option = event.target.value;
    setSelectedStage(option);
    filterResults(option);
  };

  const filterResults = (option) => {
    if (!option) {
      setFilteredStage(levers);
    } else {
      const filteredResults = levers.filter((result) => {
        console.log(result.stage);
        return result.stage && result.stage.includes(option);
      });
      setFilteredStage(filteredResults);
    }
  };
  return (
    <div className="w-1/6 overflow-hidden border-r-[1px] border-black p-8 flex flex-col gap-y-4">
      <div>
        <p className="text-base">Stage</p>
        <label className="sr-only">Underline select</label>
        <select
          value={selectedStage}
          onChange={handleChange}
          id="underline_select"
          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          <option selected>Select</option>
          <option value="Correction">Correction</option>
          <option value="Funding">Funding</option>
          <option value="Catalytic">Catalytic</option>
          <option value="Procurement">Procurement</option>
        </select>
      </div>
    </div>
  );
}
