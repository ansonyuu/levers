import React from "react";

export default function Button({ className }: { className?: string }) {
  return (
    <a href="/collection">
      <div className={`button-container-3 rounded-md flex flex-row gap-x-1 text-white align-baseline items-center justify-center mt-5 ${className}`}>
        <div className="mask3-text">
          <svg width="100" height="20" viewBox="0 0 1228 236" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 115.068H1216M1216 115.068L1086 6M1216 115.068L1086 230" stroke="white" strokeWidth="15"/>
          </svg>
        </div>
        <button type="button" name="Hover"/>
      </div>
    </a>
  );
}