export default function Button({ className }: { className?: string }) {
  return (
    <a href="/collection">
      <button
        className={`relative rounded btn4 px-10 pt-3 pb-5 overflow-hidden bg-black ${className}`}
        type="button"
      >
        <div className="flex flex-row gap-x-1 text-white">
          <span className="absolute inset-x-0 h-full bottom-0 bg-[#B8ADCB]"></span>
          <h3 className="z-10">Collection</h3>
          <div className="bottom-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="24"
              height="24"
              className="z-10 bottom-0 right-0"
            >
              <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
            </svg>
          </div>
        </div>
      </button>
    </a>
  );
}
