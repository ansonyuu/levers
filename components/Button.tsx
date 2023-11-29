export default function Button({ className }: { className?: string }) {
  return (
    <a href="/collection">
      <button
        className={`relative rounded btn4 px-16 pt-5 pb-5 overflow-hidden bg-black ${className}`}
        type="button"
      >
        <div className="flex flex-row gap-x-1 text-white align-baseline items-end">
        <svg width="120" height="20" viewBox="0 0 1228 236" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 115.068H1216M1216 115.068L1086 6M1216 115.068L1086 230" stroke="white" stroke-width="15"/>
</svg>



          {/* <div className=" ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="30"
              height="30"
              className=""
            >
              <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
            </svg>
          </div> */}
        </div>
      </button>
    </a>
  );
}
