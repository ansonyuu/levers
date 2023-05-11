import { ReactNode } from "react";

export default function Filter({ className }: { className?: string }) {
  return (
    <div className="w-1/5 overflow-hidden border-r-[1px] border-black p-8 flex flex-col gap-y-4">
      <div>
        <p className="text-base">Stage</p>
        <label className="sr-only">Underline select</label>
        <select
          id="underline_select"
          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          <option selected>Select</option>
          <option value="Course correction">Course correction</option>
          <option value="Funding">Funding</option>
          <option value="Catalytic">Catalytic</option>
          <option value="Procurement">Procurement</option>
        </select>
      </div>
      <div>
        <p className="text-base">Stage</p>
        <label className="sr-only">Underline select</label>
        <select
          id="underline_select"
          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          <option selected>Select</option>
          <option value="Course correction">Course correction</option>
          <option value="Funding">Funding</option>
          <option value="Catalytic">Catalytic</option>
          <option value="Procurement">Procurement</option>
        </select>
      </div>
    </div>
  );
}
